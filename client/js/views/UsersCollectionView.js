const _ = require("lodash");
const Backbone = require("backbone");

const UsersCollection = require("../collections/UsersCollection");
const UserItemView = require("../views/UserItemView");

const UsersCollectionView = Backbone.View.extend({
  el: '<ul class="user-list"></ul>',

  initialize(){
    this.collection = new UsersCollection();
    this.listenTo(this.collection, "update", this.render);
  },

  render(){
    this.$el.html("");

    this.collection.each(user => {
      const view = new UserItemView({model: user});
      this.$el.append(view.render().el);
    });
    return this;
  }
});

module.exports = UsersCollectionView;
