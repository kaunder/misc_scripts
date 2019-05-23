/*
* Remove all documents from all collections
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

    var collections = db.getCollectionNames();
    
    for(c in collections){
	//system.indexes is not used in partitioned collections
	if(collections[c] == "system.indexes"){
	    continue;
	}
	current_collection = collections[c];
	print("Cleaning: " + current_collection);
	db[current_collection].remove({});
	print("Count: " + db[current_collection].count());
	print("\n");
    }
    
}

