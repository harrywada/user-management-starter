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
    <input class="activated" type="checkbox" <% if(user.get('activated')){ %> checked <% } %>/>
  `),

  events: {
    "click input[type='checkbox']": "toggleActivated"
  },

  initialize(){
    this.listenTo(this.model, "sync", this.render);
  },

  toggleActivated(e){
    e.preventDefault();
    if(this.model.get("activated")){
      this.model.set("activated", "false");
    } else{
      this.model.set("activated", "true");
    }
  },

  render(){
    this.$el.html(this.template({user: this.model}));

    if(this.model.get("activated")){
      this.$el.addClass("activated");
    } else{
      this.$el.removeClass("activated");
    }

    return this;
  }
});

module.exports = UserItemView;
