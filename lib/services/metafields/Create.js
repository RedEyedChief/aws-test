import Metafield                from '../../models/Metafield.js';
import runValidation            from '../../LIVRvalidation.js';
import ERROR_CODE               from '../../constants/error_codes.js';
import { dumpMetafield, pick }  from '../utils/dump.js';
import { METAFIELD_CREATE }     from '../utils/validationRules.js';
import { prepareCreateBody }    from '../utils/bodyChanges.js';

const rules = {
    data : [ 'required', { 'nested_object' : {
        ...METAFIELD_CREATE
    } } ]
};

const metafieldCreate = async function metafieldCreate({ body }) {
    const data = runValidation( rules, body );
    const params = pick( data, [ 'namespace', 'owner_resource', 'owner_id' ] );

    const isMetafieldExist = await Metafield.findOne( params );
    if ( isMetafieldExist ) {
        throw {
            type    : ERROR_CODE.alreadyExist,
            message : `The customer's metafield with the current key already exists`
        };
    }

    data.value = prepareCreateBody( data.value );
    const response = await Metafield.create( data );

    data.value = JSON.parse(data.value);

    return { data: dumpMetafield( response ) };
};

export default metafieldCreate;
