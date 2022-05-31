const express = require('express');

const router = express.Router();

// ! Controller
//?-------Auth
const {
    register,
    login,
    checkAuth } = require('./../controllers/auth');

//?--------Profile
const {
    addUsers,
    getUser,
    getUsers,
    updateUser,
    deleteUser } = require('./../controllers/profile');

//?-------Product
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct } = require('../controllers/product');

//?-------Transaction
const {
    getTransactions,
    addTransaction,
} = require('../controllers/transaction');

//?-------Categories
const {
    getCategories,
    addCategory,
    updateCategory,
    getCategory,
    deleteCategory,
} = require('../controllers/categorie');

//?-------Product Category
const { getProductCategories, getProductCategory } = require("../controllers/productCategory")

//! Middleware
const { auth } = require('../middlewares/auth');
const { uploadFile } = require('./../middlewares/uploadFile');


//! ROUTE
//?-----Auth
router.post('/register', register);
router.post('/login', login);
router.get('/check-auth', auth, checkAuth);

//?-----Product

router.get('/products', getProducts);
router.get('/product/:id', auth, getProduct);
router.post('/product', auth, uploadFile('image'), addProduct);
router.patch('/product/:id', auth, uploadFile('image'), updateProduct);
router.delete('/product/:id', auth, deleteProduct);

//?-------Profile
router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

//?--------transactions
router.get('/transactions', auth, getTransactions);
router.post('/transaction', auth, addTransaction);

// //?--------Categories
router.get('/categories', getCategories);
router.get('/category/:id', auth, getCategory);
router.post('/category', auth, addCategory);
router.patch('/category/:id', auth, updateCategory);
router.delete('/category/:id', auth, deleteCategory);

//?-------ProductCateogry
router.get('/allProducts', getProductCategories)



module.exports = router