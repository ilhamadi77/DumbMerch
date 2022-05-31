const { Product, User, Categorie, ProductCategory } = require("../../models");

const Joi = require('joi')

exports.addProduct = async (req, res) => {

   try {
      const { ...data } = req.body;

      // code here
      let newProduct = await Product.create({
         ...data,
         image: req.file.filename, // dari gambar yang dikirimkan dari upload middleware
         idUser: req.user.id, // dari auth middleware
      });

      let productData = await Product.findOne({
         where: {
            id: newProduct.id,
         },
         include: [
            {
               model: User,
               as: "user",
               attributes: {
                  exclude: ["createdAt", "updatedAt", "password"],
               },
            },
            {
               model: Categorie,
               as: "categories",
               through: {
                  model: ProductCategory,
                  as: "bridge",
                  attributes: [],
               },
               attributes: {
                  exclude: ["createdAt", "updatedAt"],
               },
            },
         ],
         attributes: {
            exclude: ["createdAt", "updatedAt", "idUser"],
         },
      });

      // productData = JSON.parse(JSON.stringify(productData));

      res.status(201).send({
         status: "success",
         data: {
            productData
         },
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};

exports.getProducts = async (req, res) => {
   try {
      //!get product with table User
      // const data = await Product.findAll({
      //    include: [
      //       {
      //          model: User,
      //          as: "user",
      //          attributes: {
      //             exclude: ["createdAt", "updatedAt", "password"],
      //          },
      //       },
      //       {
      //          model: Categorie,
      //          as: "categories",
      //          through: {
      //             model: ProductCategory,
      //             as: "bridge",
      //             attributes: [],
      //          },
      //          attributes: {
      //             exclude: ["createdAt", "updatedAt"],
      //          },
      //       },
      //    ],
      //    attributes: {
      //       exclude: ["createdAt", "updatedAt", "idUser"],
      //    },
      // });

      const data = await Product.findAll({
         attributes: {
            exclude: ["createdAt", "updatedAt", "idUser"]
         }
      })
      res.status(200).send({
         status: "success",
         data: {
            products: data
         },
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};

exports.getProduct = async (req, res) => {
   try {
      const { id } = req.params;
      //! get product with bridge productCategory
      let data = await Product.findOne({
         where: {
            id,
         },
         include: [
            {
               model: User,
               as: 'user',
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'password'],
               },
            },
            {
               model: Categorie,
               as: 'categories',
               through: {
                  model: ProductCategory,
                  as: 'bridge',
                  attributes: [],
               },
               attributes: {
                  exclude: ['createdAt', 'updatedAt'],
               },
            },
         ],
         attributes: {
            exclude: ['createdAt', 'updatedAt', 'idUser'],
         },
      });


      //! get Product with id
      // let data = await Product.findOne({
      //    where: {
      //       id
      //    },
      //    attributes: {
      //       exclude: ["createdAt", "updatedAt", "idUser"]
      //    }
      // })
      data = JSON.parse(JSON.stringify(data));

      data = {
         ...data,
         image: process.env.PATH_FILE + data.image,
      };

      res.status(200).send({
         status: 'success',
         data: {
            product: data
         }
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};


exports.updateProduct = async (req, res) => {
   try {
      const { id } = req.params;
      let { categoryId } = req.body;
      categoryId = await categoryId.split(',');

      const data = {
         name: req?.body?.name,
         desc: req?.body.desc,
         price: req?.body?.price,
         image: req?.file?.filename,
         qty: req?.body?.qty,
         idUser: req?.user?.id,
      };

      await ProductCategory.destroy({
         where: {
            idProduct: id,
         },
      });

      let productCategoryData = [];
      if (categoryId != 0 && categoryId[0] != '') {
         productCategoryData = categoryId.map((item) => {
            return { idProduct: parseInt(id), idCategory: parseInt(item) };
         });
      }

      if (productCategoryData.length != 0) {
         await ProductCategory.bulkCreate(productCategoryData);
      }

      await Product.update(data, {
         where: {
            id,
         },
      });

      res.status(201).send({
         status: 'success',
         data: {
            id,
            data,
            productCategoryData,
            image: req?.file?.filename,
         },
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};

exports.deleteProduct = async (req, res) => {
   try {
      const { id } = req.params;

      await Product.destroy({
         where: {
            id,
         },
      });

      // await ProductCategory.destroy({
      //    where: {
      //       idProduct: id,
      //    },
      // });

      res.status(200).send({
         status: 'success',
         message: `Delete product id: ${id} finished`,
         data: {
            id: `${id}`
         }
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};




//! data belum difgunakan

// const data = req.body;
// let { categoryId } = data;
// categoryId = categoryId.split(",");

// const {
//    name,
//    desc,
//    price,
//    qty,
// } = data;

// let newProduct = await Product.create({
//    name,
//    desc,
//    price,
//    qty,
//    image: req.file.filename,
//    idUser: req.user.id
// });

// const productCategoryData = categoryId.map((item) => {
//    return { idProduct: newProduct.id, idCategory: parseInt(item) };
// });


// await ProductCategory.create(productCategoryData);

