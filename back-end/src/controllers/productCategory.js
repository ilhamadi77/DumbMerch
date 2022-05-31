const {
   Product,
   User,
   Categorie,
   ProductCategory
} = require("../../models");

exports.getProductCategories = async (req, res) => {
   try {
      const dataProductCategory = await Categorie.findAll({
         include: [
            // {
            //    model: User,
            //    as: "user",
            //    attributes: {
            //       exclude: ["createdAt", "updatedAt", "password"],
            //    },
            // },
            {
               model: Product,
               as: "products",
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
      })

      res.status(200).send({
         status: "success",
         data: {
            dataProductCategory
         }
      })

   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   }
};

