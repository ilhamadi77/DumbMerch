const { Categorie } = require("../../models");

const Joi = require('joi')


exports.getCategories = async (req, res) => {
  try {
    const dataCategory = await Categorie.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      status: "success",
      data: {
        categories: {
          dataCategory
        }
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

exports.getCategory = async (req, res) => {
  try {
    const id = req.params.id
    const dataCategory = await Categorie.findOne({
      where: {
        id
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    //checking data category 
    if (!dataCategory) {
      return res.status(200).send({
        status: "failed",
        message: "Data"
      })
    }

    res.status(200).send({
      status: "success",
      data: {
        category: {
          id: dataCategory.id,
          name: dataCategory.name
        }
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

exports.addCategory = async (req, res) => {
  const data = req.body
  const schema = Joi.object({
    name: Joi.string().min(4).max(15).required().messages({
      'string.empty': 'name cannot be empty'
    })
  });

  const {
    error
  } = schema.validate(data);

  if (error) return res.status(200).send({
    error: {
      message: error.details[0].message
    }
  });

  try {
    const categoryName = await Categorie.findOne({
      where: {
        name: data.name
      }
    });


    if (categoryName) {
      return res.status(200).send({
        status: 'Failed',
        message: 'Category Name is Already yet !'
      });
    }

    const newCategory = await Categorie.create({
      name: req.body.name
    });

    res.send({
      status: "success",
      data: {
        category: {
          id: newCategory.id,
          name: newCategory.name,

        }
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

exports.updateCategory = async (req, res) => {
  const id = req.params.id
  let data = req.body
  try {
    const updateCategory = await Categorie.update(data, {
      where: {
        id
      }
    });

    res.status(201).send({
      status: 'success',
      message: `Update succesfull for Category ${id}`,
      data: {
        category: {
          id: `${id}`,
          name: data.name
        }
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id

    await Categorie.destroy({
      where: {
        id
      }
    });

    res.status(200).send({
      status: 'success',
      message: `Delete from Category id ${id} `,
      data: {
        id: `${id}`
      }
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
}