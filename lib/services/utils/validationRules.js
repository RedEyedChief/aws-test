const measurementsDefault = {
    chest: [ 'required', 'string' ],
    stomach: [ 'required', 'string' ],
    hips: [ 'required', 'string' ],
    sleeve_length: [ 'required', 'string' ],
    back_length: [ 'required', 'string' ],
    front_length: [ 'required', 'string' ],
    accross_shoulders: [ 'required', 'string' ],
    front_shoulder: [ 'required', 'string' ],
    nape_to_waist: [ 'required', 'string' ],
    front_shoulder_to_waist: [ 'required', 'string' ],
    bicep: [ 'required', 'string' ],
    cuff: [ 'required', 'string' ],
    neck: [ 'required', 'string' ],
    waist: [ 'required', 'string' ],
    seat: [ 'required', 'string' ],
    outleg: [ 'required', 'string' ],
    inleg: [ 'required', 'string' ],
    thigh: [ 'required', 'string' ],
    knee: [ 'required', 'string' ],
    front_waist_height: [ 'required', 'string' ],
    back_waist_height: [ 'required', 'string' ],
    front_rise: [ 'required', 'string' ],
    back_rise: [ 'required', 'string' ]
};

export const METAFIELD_CREATE = {
    type: [ 'required', { eq: 'json' } ],
    namespace: [ 'required', 'string' ],
    key: [ 'required', 'string' ],
    value: [ 'required', { 'nested_object' : {
        additional_info : [ 'required', { 'nested_object' : {
            height: [ 'required', 'string' ],
            fit: [ 'required', 'string' ],
            images: [ 'required', { 'nested_object' : {
                fullBodyPhotos: [ 'required', { 'list_of': 'string' } ],
                inspirationImages: [ 'required', { 'list_of_objects': [{
                    url: [ 'string' ],
                    description: [ 'string' ]
                }]}]
            } } ]
        } } ],
        body_measurements : [ 'required', { 'nested_object' : measurementsDefault}],
        final_garment : [ 'required', { 'nested_object' : measurementsDefault}]
    }}],
    owner_resource: [ 'required', 'string' ],
    owner_id: [ 'required', 'string' ]
};

export const METAFIELD_UPDATE = {
    id: [ 'required', 'number' ],
    type: [ 'required', { eq: 'json' } ],
    namespace: [ 'required', 'string' ],
    key: [ 'required', 'string' ],
    value: [ 'required', { 'nested_object' : {
        additional_info : [ 'required', { 'nested_object' : {
            height: [ 'required', 'string' ],
            fit: [ 'required', 'string' ],
            images: [ 'required', { 'nested_object' : {
                fullBodyPhotos: [ 'required', { 'list_of': 'string' } ],
                inspirationImages: [ 'required', { 'list_of_objects': [{
                    url: ['string' ],
                    description: [ 'string' ]
                }]}]
            } } ]
        } } ],
        body_measurements : [ 'required', { 'nested_object' : measurementsDefault}],
        final_garment : [ 'required', { 'nested_object' : measurementsDefault}]
    }}],
    owner_resource: [ 'required', 'string' ],
    owner_id: [ 'required', 'string' ]
};

export const METAFIELD_GET_QUERY = {
    owner_resource : [ 'required', 'string' ], 
    namespace : [ 'required', 'string' ], 
    owner_id : [ 'required', 'string' ]
};                
