const _ = require("lodash");
const Backbone = require("backbone");

const UserProfileView = Backbone.View.extend({
  el: '<div class="profile"></div>',
  template: _.template(`
    <img class="profile-img" src="<%= user.get('imageURL') %>" alt="Profile Image" />
    <div class="info">
      <label class="name">Name: <%= user.get('name') %></label>
      <label class="email">Email: <%= user.get('email') %></label>
      <label class="bio">Bio: <%= user.get('bio') %></label>
    </div>
  `),

  initialize(){
    this.model.fetch();
    this.listenTo(this.model, "sync", this.render);
  },

  render(){
    this.$el.html(this.template({user: this.model}));
    return this;
  }
});

module.exports = UserProfileView;
