const Backbone = require("backbone");
const UserModel = require("./models/UserModel");
const UsersCollection = require("./collections/UsersCollection");
const UserProfileView = require("./views/UserProfileView");
const UsersCollectionView = require("./views/UsersCollectionView");

let currentView;

const Router = Backbone.Router.extend({
  routes: {
    "/": "listUsers",
    "users/:id": "showUser",
    "*path": "listUsers"
  },

  listUsers(){
    const view = new UsersCollectionView({collection: new UsersCollection()});
    setView(view);
  },

  showUser(id){
    const user = new UserModel({_id: id});
    const view = new UserProfileView({model: user});
    setView(view);
  }
});

function setView(view){
  if(currentView){
    currentView.remove();
  }

  currentView = view;

  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(view.render().el);
}

module.exports = Router;
