const Backbone = require("backbone");
const UserModel = require("../models/UserModel");

const UsersCollection = Backbone.Collection.extend({
  url: "/users",
  model: UserModel,

  initialize(options){
    this.fetch();
  }
});

module.exports = UsersCollection;
