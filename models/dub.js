const mongoos = require('mongoose');
const schema = mongoos.Schema;

let dubSchema = new Sechema({
  name:{
    type:String
  },
  email:{
    type:String
  }
});

module.exports =mongoos.model('teacher',dubSchema);