const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../login/restricted-middleware.js");


router.use(restricted);

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch(err => res.send(err));
});




module.exports = router;
