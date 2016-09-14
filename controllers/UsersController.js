const UserModel = require("../models/UserModel");

module.exports = {
  list(req, res, next){
    UserModel.find().exec()
      .then(users => {
        res.json(users);
        return res.end();
      })
      .catch(err => {
        return next(err);
      });
  },

  show(req, res, next){
    UserModel.findOne({_id: req.params.id}).exec()
      .then(user => {
        res.json(user);
        return res.end();
      })
      .catch(err => {
        return next(err);
      });
  },

  create(req, res, next){
    var name      = req.body.name;
    var email     = req.body.email;
    var bio       = req.body.bio;
    var imageURL  = req.body.imageURL;
    var activated = true;

    var user = new UserModel({name, email, bio, imageURL, activated}).save()
      .then(user => {
        res.json(user);
        return res.end();
      })
      .catch(err => {
        return next(err);
      });
  },

  update(req, res, next){
    UserModel.findOne({_id: req.params.id}).exec()
      .then(user => {
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email ? req.body.email : user.email;
        user.bio = req.body.bio ? req.body.bio : user.bio;
        user.imageURL = req.body.imageURL ? req.body.imageURL : user.imageURL;
        user.activated = req.body.activated ? req.body.activated : user.activated;

        user.save()
          .then(user => {
            res.json(user);
            return res.end();
          })
          .catch(err => {
            return next(err);
          });
    });
  },

  remove(req, res, next){
    UserModel.findByIdAndRemove(req.params.id).exec()
      .then(user => {
        res.json(user);
        return res.end();
      })
      .catch(err => {
        return next(err);
      });
  }
}
