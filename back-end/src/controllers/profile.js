const { User, Profile } = require("../../models");

exports.addUsers = async (req, res) => {
    try {
        await User.create(req.body);

        res.send({
            status: "success",
            message: "Add user finished",
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: {
                model: Profile,
                as: "profile",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "idUser"],
                },
            },
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
            },
        });

        res.send({
            status: "success",
            data: {
                users,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await User.findOne({
            where: {
                id,
            },
            include: {
                model: Profile,
                as: "profile",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "idUser"],
                },
            },
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
            },
        });

        res.send({
            status: "success",
            data: {
                user: data,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.update(req.body, {
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            message: `Update user id: ${id} finished`,
            data: req.body,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.destroy({
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            message: `Delete user id: ${id} finished`,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};