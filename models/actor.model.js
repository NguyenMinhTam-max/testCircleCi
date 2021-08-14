const db = require('../utils/dbUtils');
module.exports = {
    insert:  function (actor){
        return  db('actor')
        .insert(actor)
    },
    select:  function(){
        return  db('actor').select('*');
    },
    selectByID: function(id){
        return  db('actor').select('*').where('actor_id', id);
    },
    update:  function(id, actorObject){
        return db('actor').where('actor_id', id).update(actorObject);
    },
    delete:  function(id){
        return  db('actor')
        .where('actor_id', id)
        .del();
    }
}