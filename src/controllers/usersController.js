const db = require("../database/models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersController = {
  login: (req, res) => {
    res.render("users/login", { title: "kitchennig" });
  },

  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.user) {
      res.clearCookie("user");
      res.clearCookie("remember");
    }
    res.redirect("/");
  },

  processlogin: (req, res) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      console.log("errores:", errores.mapped());
      res.render("./users/login", {
        errores: errores.errors,
        title: "kitchennig",
        usuario: req.session.user,
      });
    } else {
      const { email } = req.body;
      db.User.findOne({
        attributes: { exclude: ["password"] },
        where: {
          email,
        },
      })
        .then((user) => {
          console.log("user info:", user);
          req.session.user = user.dataValues;

          if (req.body.remember == "true") {
            res.cookie("user", user.dataValues, { maxAge: 1000 * 60 * 15 });
            res.cookie("rememberMe", "true", { maxAge: 1000 * 60 * 15 });
          }

          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  register: (req, res) => {
    res.render("./users/register", {
      title: "kitchennig",
      usuario: req.session.user,
    });
  },

  createUser: (req, res) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      res.render("./users/register", {
        errores: errores.mapped(),
        old: req.body,
        title: "registro",
      });
    } else {
      const { name, surname, email, date, password } = req.body;

      const user = {
        name: name.trim(),
        surname: surname.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(password, 10),
        image: req.file ? req.file.filename : "default.jpg",
        gender: "male",
        birthday: date,
        about: `Hola soy ${name} ${surname}`,
        roleId: null,
      };

      db.User.create(user)
        .then((user) => {
          res.redirect("/users/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  profile: (req, res) => {
    console.log("profile");
    const { id } = req.params;
    console.log("session", req.session.user);
    db.User.findByPk(req.session.user.id)
      .then((response) => {
        console.log("response findPk", response);
        //res.send(response.dataValues);
        res.render("./users/updateProfile", {
          title: "kitchennig",
          user: response.dataValues,
          usuario: req.session.user,
        });
      })
      .catch((err) => console.log(err));
  },

  processUpdate: (req, res) => {
    const { id } = req.params;
    const { name, surname, date, imagen } = req.body;
    db.User.update(
      {
        name: name.trim(),
        surname: surname.trim(),
        image: req.file ? req.file.filename : imagen,
        gender: "male",
        birthday: date,
        about: `Hola soy ${name} ${surname}`,
        roleId: null,
      },
      {
        where: {
          id,
        },
      }
    )
      .then((resp) => {
        res.redirect(`/users/profile/${id}`);
      })
      .catch((err) => console.log(err));
  },

  dashboard: (req, res) => {
    db.User.findAll({
      where: {
        id: { [Op.ne]: req.session.user.id },
      }
    })
      .then((users) => {
        console.log("dashboard users", users);
        console.log("dashboard users", users);
        res.render("users/dashboard", {
          title: "Dashboard",
          users: users,
          usuario: req.session.user,
        });
      })
      .catch((err) => console.log(err));
  },

  destroy: (req, res) => {
    const { id } = req.params;
    db.User.destroy({
      where: {
        id,
      },
    })
      .then((resp) => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  },

  list: (req, res) => {
    const { surname } = req.params;
    db.User.findOne({
      where: {
        surname,
      },
    })
      .then((usuarios) => {
        res.send(usuarios);
      })
      .catch((err) => console.log(err));
  },
};

module.exports = usersController;
