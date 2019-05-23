/*
* Get original document count for all collections
* (for verification purposes)
*/

conn = new Mongo();
dbs = db.getMongo().getDBNames();

var document_counts = {};

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
	print("Gathering statistics for: " + current_collection);

	//Gather required stats
	print("Inspecting collection...this may take a few moments");
	var count = db[current_collection].count();
	document_counts[current_collection.toString()] = count;
	print("Found " + count + " documents in collection");
    }

}

print(JSON.stringify(document_counts));
