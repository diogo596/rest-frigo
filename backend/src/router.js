const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads" });
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userController");
const recetteControllers = require("./controllers/recettesController");
const ingredientControllers = require("./controllers/ingredientsController");
const compositionControllers = require("./controllers/compositionController");
const hashPasswords = require("./services/auth");
const verifyPasswords = require("./services/auth");

/** AUTH */
const authController = require("./controllers/authController");

router.post("/login", verifyPasswords.verifyPwd, authController.login);
router.post("/logout", authController.logout);

// Route to get a list of items
router.get("/users", userControllers.browse);
router.get(
  "/recettes/ingredients",
  recetteControllers.readAllRecettesWithIngredients
);
router.get("/recettes", recetteControllers.browse);
router.get(
  "/ingredients/recettes",
  ingredientControllers.readAllIngredientsWithRecettes
);
router.get("/ingredients", ingredientControllers.browse);
router.get("/compositions", compositionControllers.browse);

// Route to get a specific item by ID
router.get("/user/:id", userControllers.read);
router.get("/recette/:id", recetteControllers.read);
router.get("/ingredient/:id", ingredientControllers.read);
router.get("/composition/:id", compositionControllers.read);

// Route to add a new item
router.post(
  "/user",
  upload.single("avatar"),
  hashPasswords.hashPassword,
  userControllers.add
);
router.post("/recette", upload.single("avatar"), recetteControllers.add);
router.post("/ingredient", ingredientControllers.add);
router.post("/composition", compositionControllers.add);

// Route to delete a new item
router.delete("/user/:id", userControllers.deleteUser);

/* ************************************************************************* */

module.exports = router;
