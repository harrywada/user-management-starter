const _ = require("lodash");
const Backbone = require("backbone");

const UserItemView = Backbone.View.extend({
  el: '<li class="user"></li>',
  template: _.template(`
    <img src="<%= user.get('imageURL') %>" alt="Profile Image" />
    <a class="name" href="#users/<%= user.get('_id') %>">
      <span><%= user.get('name') %></span>
    </a>
    <span class="email"><%= user.get('email') %></span>
    <input type="checkbox" <% if(user.get('activated')){ %> checked <% } %>/>
  `),

  initialize(){
    this.listenTo(this.model, "sync", this.render);
  },

  render(){
    this.$el.html(this.template({user: this.model}));
    return this;
  }
});

module.exports = UserItemView;
