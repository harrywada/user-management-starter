const Backbone = require("backbone");

const UserModel = Backbone.Model.extend({
  urlRoot: "/users",
  idAttribute: "_id",

  initialize(){
    this.on("change", function(item){
      this.save();
    });
  }
});

module.exports = UserModel;
