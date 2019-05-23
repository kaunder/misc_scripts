/*
* Get Indexes on all collections
*/

conn = new Mongo();
dbs = db.getMongo().getDBNames();

for (d in dbs){

    //use <db>
    db = db.getSiblingDB(dbs[d]);

    //we do not care about the local, admin or test dbs
    if(db == "local" || db == "admin" || db == "test"){
	continue;
    }
    print("\nConnected to database: " + db);

    db.getCollectionNames().forEach(function (collection) {
	//partitioned collections do not use the system.indexes collection
	if(collection != "system.indexes"){
	    indexes = db[collection].getIndexes();
	    print("Indexes for " + collection + " collection:");
	    printjson(indexes);
	    print("--------------------------------------------------------------------------------\n");
	}
    });
}

