const db = require('../utils/dbUtils');
module.exports = {
    insert: function (customerObject){
        return db('customer')
        .insert(customerObject)
    },
    select: function(){
        return db('customer').select('*');
    },
    selectByID: function(id){
        return db('customer').select('*').where('customer_id', id);
    },
    update:  function(id, customerObject){
        return db('customer').where('customer_id', id).update(customerObject);
    },
    delete:  function(id){
        return  db('customer')
        .where('customer_id', id)
        .del();
    }
}