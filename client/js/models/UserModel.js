const Backbone = require("backbone");

const UserModel = Backbone.Model.extend({
  urlRoot: "/users",
  idAttribute: "_id",

  initialize(options){
    this.on("change", () => {
      this.save();
    });
  }
});

module.exports = UserModel;
