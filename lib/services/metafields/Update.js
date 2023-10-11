import Metafield                from '../../models/Metafield.js';
import { dumpMetafield,pick }   from '../utils/dump.js';
import { METAFIELD_UPDATE }     from '../utils/validationRules.js';
import runValidation            from '../../LIVRvalidation.js';
import { prepareUpdateBody }    from '../utils/bodyChanges.js';


const rules = {
    data : [ 'required', { 'nested_object' : {
        ...METAFIELD_UPDATE
    } } ]
};

const metafieldUpdate = async function metafieldUpdate({ body }) {
    const data = runValidation( rules, body );
    const params = pick( data, [ 'namespace', 'owner_resource', 'owner_id' ] );

    const existedMetafield = await Metafield.findOne( params );
    if ( !existedMetafield ) {
        throw {
            type: 'NOT_FOUND',
            message: 'metafield absent'
        }; 
    }

    existedMetafield.value = prepareUpdateBody( data.value, existedMetafield.value );
    const response = await Metafield.update( existedMetafield.id, existedMetafield );

    return { data: dumpMetafield( response ) };
};

export default metafieldUpdate;
