import ShopifyClient        from '../ShopifyClient.js';
import ERROR_CODE           from '../constants/error_codes.js';

const findOne = async function findOne( params ) {
    try {
        const metafields = await ShopifyClient.metafield.list({ metafield: params });
        if ( metafields.length > 1 ) {
            throw {
                type: ERROR_CODE.badRequest,
                message: 'wrong parameters'
            }; 
        }

        return metafields[0];
    } catch( error ) {
        console.error('ERROR', error.response?.body?.errors || error);

        throw error;
    }

};

const create = async function create( data ) {
    try {
        const metafield = await ShopifyClient.metafield.create( data );

        return metafield;
    } catch( error ) {
        console.error('ERROR', error.response?.body?.errors || error);

        throw error;
    }

};

const update = async function update( id, data ) {
    try {
        const metafield = await ShopifyClient.metafield.update( id, data );

        return metafield;
    } catch( error ) {
        console.error('ERROR', error.response?.body?.errors || error);

        throw error;
    }
};

export default {
    findOne,
    create,
    update
};
