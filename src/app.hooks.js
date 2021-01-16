// Application hooks that run for every service

const setTimestamp = name => {
  return async context => {
    context.data[name] = new Date();

    return context;
  }
} 


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ setTimestamp('createdAt') ],
    update: [ setTimestamp('updatedAt') ],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
