const { User } = require('./../../models')

const Joi = require('joi')

const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken')

// ! -------------------- REGISTER --------------------

exports.register = async (req, res) => {

   // ! Validation Joi with var schema
   const schema = Joi.object({
      name: Joi.string().min(5).max(15).required().messages({
         'string.empty': 'name cannot be empty'
      }),
      email: Joi.string().
         email({
            minDomainSegments: 2,
            tlds: {
               allow: ['com', 'net']
            }
         })
         .min(6).required(),
      password: Joi.string().min(3).required().messages({
         'string.empty': "password cannot be empty"
      })
   });

   const {
      error
   } = schema.validate(req.body);

   if (error) return res.status(200).send({
      error: {
         messagesss: error.details[0].message
      }
   });

   try {
      const data = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      const emailExist = await User.findOne({
         where: {
            email: data.email
         }
      })


      if (emailExist) {
         return res.status(200).send({
            status: 'Failed',
            message: 'Email already registered !'
         })
      }

      const newUser = await User.create({
         name: data.name,
         email: data.email,
         password: hashedPassword,
         role: data.role,
      });

      //generate Token

      const token = jwt.sign({
         id: newUser.id,
         role: newUser.role
      }, process.env.TOKEN_KEY);

      res.status(200).send({
         status: "success",
         data: {
            user: {
               name: newUser.name,
               email: newUser.email,
               role: newUser.role,
               token
            }
         }
      });

   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: "failed",
         message: "Server Error",
      });
   };
}
//! -------------------END REGISTER Clear

//! -------------------LOGIN
exports.login = async (req, res) => {
   //validate with JOI
   const schema = Joi.object({
      email: Joi.string().
         email({
            minDomainSegments: 2,
            tlds: {
               allow: ['com', 'net']
            }
         })
         .min(6).required(),
      password: Joi.string().min(3).required()
   });
   //
   const { error } = schema.validate(req.body);
   //
   if (error) return res.status(200).send({
      error: {
         message: error.details[0].message
      }
   });

   try {
      const data = req.body

      const userExist = await User.findOne({
         where: {
            email: data.email
         },
         attributes: {
            exclude: ["createdAt", "updatedAt"]
         }
      });

      //compare password entered client and database
      const isValid = await bcrypt.compare(data.password, userExist.password)

      // check if not valid then return response with status 400 (bad request)
      if (!isValid) {
         return res.status(400).send({
            status: "failed",
            message: "crendential is invalid"
         });
      }

      // generate token
      const token = jwt.sign({
         id: userExist.id,
         role: userExist.role,
      }, process.env.TOKEN_KEY);

      res.status(200).send({
         status: "success",
         data: {
            user: {
               id: userExist.id,
               name: userExist.name,
               email: userExist.email,
               status: userExist.status,
               token
            }
         }
      })

   } catch (error) {
      console.error(error);
      console.log(error);
      res.status(500).send({
         status: 'failed',
         message: 'Server Error'
      });
   }
}
//! -------------------END LOGIN

exports.checkAuth = async (req, res) => {
   try {
      const id = req.user.id;
      console.log(req.user.id);
      const dataUser = await User.findOne({
         where: {
            id,
         },
         attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
         },
      });

      if (!dataUser) {
         return res.status(404).send({
            status: "failed",
         });
      }

      res.send({
         status: "success...",
         data: {
            user: {
               id: dataUser.id,
               name: dataUser.name,
               email: dataUser.email,
               status: dataUser.status,
            },
         },
      });

   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: 'failed',
         message: 'Server Error'
      });
   }
}

