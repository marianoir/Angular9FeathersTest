const { Service } = require('feathers-mongodb');

exports.Tasks = class Tasks extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('tasks');
    });
  }

 

 /* async get(id, params) {   
    let task = await this.Model.findOne({ _id : id });
    console.log(task);
    return task;
  }

  async create(id, params) {   
    let task = await this.Model.findOne({ _id : id });
    console.log(task);
    return task;
  }*/



  

};
