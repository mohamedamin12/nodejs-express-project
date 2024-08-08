const express = require("express");
const router = express.Router();
const customerController = require('../controllers/customer.controller'); 

router.get("/", customerController.user_index_get);

router.get("/user/add.html", customerController.user_add_get);

router.get("/edit/:id", customerController.user_edit_get);


router.get("/user/:id", customerController.user_view_get);

router.post("/", customerController.user_post);

router.post("/search", customerController.user_search_post);

router.put("/edit/:id", customerController.user_put);

router.delete("/delete/:id", customerController.user_delete);



module.exports = router;