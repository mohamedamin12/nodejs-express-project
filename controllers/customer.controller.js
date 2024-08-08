const moment = require("moment");
const Customer = require("../models/customers.model");

const user_index_get = (req, res) => {
  Customer.find()
    .then((data) => {
      res.render("index", { data: data, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_edit_get = (req, res) => {
  Customer.findById(req.params.id)
    .then((data) => {
      res.render("user/edit", { data: data, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_view_get = (req, res) => {
  Customer.findById(req.params.id)
    .then((data) => {
      res.render("user/view", { data: data, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_search_post = (req, res) => {
  Customer.find({firstName:req.body.searchText.trim()}).then((data)=>{
    res.render('./user/search.ejs' , {data : data})
  }).catch((error)=>{
    console.log({"message" : error})
  })
};

const user_delete = (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_put = (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_add_get = (req, res) => {
  res.render("user/add");
};

const user_post = (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  user_index_get,
  user_edit_get,
  user_view_get,
  user_search_post,
  user_delete,
  user_put,
  user_add_get,
  user_post,
};