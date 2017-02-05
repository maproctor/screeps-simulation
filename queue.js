function queue(errorchecking) {
            var totalCreeps = 0;
            for (var name in Game.creeps) {
            totalCreeps++;}
    if (totalCreeps < 3 && Game.spawns.Spawn1.energy >=250) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE]);
        if (errorchecking) {console.log('WCMM Queued')}
    }
    if (totalCreeps > 2 && totalCreeps < 6 && Game.spawns.Spawn1.energy >=250) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE,MOVE]);
        if (errorchecking) {console.log('WCMM Queued')}
    }
    module.exports = totalCreeps;
}
module.exports = queue;