//finds out if some things are in range
//returns an array of all the things in range

function sourceInRange(creep,errorchecking) {
    if (errorchecking) {console.log(creep+' Looking for Source')}
        if  (creep.pos.findInRange(FIND_SOURCES, 1).length > 0) {
            if (errorchecking) {console.log(creep+' Found Source');}
            return true }
        else return false;
        }
    

function spawnInRange(creep,errorchecking) {
    if (errorchecking) {console.log(creep+' Looking for Spawn')}
        if  (creep.pos.findInRange(FIND_MY_SPAWNS, 1).length > 0) {
            if (errorchecking) {console.log(creep+' Found Spawn');}
            return true }
        else return false;
    }

function controllerInRange(creep,errorchecking) {
    if (errorchecking) {console.log(creep+' Looking for Controller')}
    var nearbyStructures = creep.pos.findInRange(FIND_STRUCTURES, 3);
        if  (nearbyStructures[0] == creep.room.controller) {
            if (errorchecking) {console.log(creep+' Found Controller');}
            return true }
        else return false;
    }


//
function inRange(creep,errorchecking) {
    var stuffInRange = [];

    if (sourceInRange(creep,errorchecking))
        {stuffInRange.push("source");}
    if (spawnInRange(creep,errorchecking))
        {stuffInRange.push("spawn");}
    if (controllerInRange(creep,errorchecking))
        {stuffInRange.push("controller");}

    if (stuffInRange.length > -1 && errorchecking) {console.log(stuffInRange)}
    if (stuffInRange==[]) {
    return false;}
    else return stuffInRange;
    }

module.exports = inRange;