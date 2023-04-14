const indexer = require("./indexer.js");

const config = require("config");

const indexname = config.elasticsearch.elasticsearchIndices.STUDENTS.index;
const indextype = config.elasticsearch.elasticsearchIndices.STUDENTS.type;
const tableName = config.elasticsearch.elasticsearchIndices.STUDENTS.collectionName;

indexer.IndexMongodbData(indexname, indextype, tableName); 
// indexer.DeleteMappings(indexname);