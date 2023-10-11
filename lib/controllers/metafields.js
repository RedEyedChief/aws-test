import serviceRunner    from '../serviceRunner.js';
import metafieldCreate  from '../services/metafields/Create.js';
import metafieldGet     from '../services/metafields/Get.js';
import metafieldUpdate  from '../services/metafields/Update.js';

export default {
    get: serviceRunner( metafieldGet ),
    create: serviceRunner( metafieldCreate ),
    update: serviceRunner( metafieldUpdate ),
};

