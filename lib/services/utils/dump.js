const pick = function pick( obj, arr ) {
    return  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
};

const dumpMetafield = function dumpMetafield ( metafield ) {
    const dump = [
        'id',
        'type',
        'namespace',
        'key',
        'value',
        'owner_id',
        'owner_resource'
    ];

    return pick( metafield, dump );
};

const dumpJWT = function dumpJWT ( user ) {
    const dump = [
        'name',
        'storeName'
    ];

    return pick( user, dump );
};

export {
    pick,
    dumpMetafield,
    dumpJWT
};