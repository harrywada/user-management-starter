const _ = require("lodash");
const Backbone = require("backbone");

const UsersCollection = require("../collections/UsersCollection");
const UserItemView = require("../views/UserItemView");
const UserModel = require("../models/UserModel");

const UsersCollectionView = Backbone.View.extend({
  el: `
    <div>
      <div class="user-form">
        <form>
          <label for="name">Name: </label><br>
          <input type="text" name="name" /><br>

          <label for="email">Email: </label><br>
          <input type="text" name="email" /><br>

          <label for="bio">Bio: </label><br>
          <input type="text" name="bio" /><br>

          <label for="image">Image URL: </label><br>
          <input type="text" name="imageURL" /><br>

          <input type="submit" name="submit" value="add user" />
        </form>
      </div>
      <ul class="user-list"></ul>
    </div>
  `,

  events: {
    "submit form": "handleFormSubmit"
  },

  handleFormSubmit(e){
    const form = $(e.target);

    const newUser = new UserModel({
      name: form.find("input[name=\"name\"]").val(),
      email: form.find("input[name=\"email\"]").val(),
      bio: form.find("input[name=\"bio\"]").val(),
      imageURL: form.find("input[name=\"imageURL\"]").val()
    });

    console.log(newUser);

    this.collection.add(newUser).save();

    form.find("input[name=\"name\"]").val("");
    form.find("input[name=\"email\"]").val("");
    form.find("input[name=\"bio\"]").val("");
    form.find("input[name=\"imageURL\"]").val("");

    e.preventDefault();
  },

  initialize(){
    this.collection = new UsersCollection();
    this.listenTo(this.collection, "update", this.render);
  },

  render(){
    console.log("render");
    this.$el.find("ul").html("");

    this.collection.each(user => {
      const view = new UserItemView({model: user});
      this.$el.find("ul").append(view.render().el);
    });
    return this;
  }
});

module.exports = UsersCollectionView;
