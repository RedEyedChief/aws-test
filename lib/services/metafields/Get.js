import Metafield                from '../../models/Metafield.js';
import runValidation            from '../../LIVRvalidation.js';
import { dumpMetafield }        from '../utils/dump.js';
import { METAFIELD_GET_QUERY } from '../utils/validationRules.js';

const rules = {
    data : [ 'required', { 'nested_object' : {
        ...METAFIELD_GET_QUERY
    } } ]
};

const metafieldGet = async function metafieldGet({ query }) {
    const data = runValidation( rules, { data: query } );
    const params = { ...data };

    const response = await Metafield.findOne( params );
    const responseData = response ? dumpMetafield( response ) : {};
    
    responseData.value = JSON.parse(responseData.value || '{}');

    return { data: responseData };
};

export default metafieldGet;
