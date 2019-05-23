/*
 * ServerStatus
 */

conn = new Mongo();
d = db.getMongo()


print("********************************************************************************\n")
db.serverStatus({ extra_info:0, ft:0, network:0, opcounters:0, opcountersRepl:0, writeBacksQueued:0, metrics:0})
print("********************************************************************************\n")
    



