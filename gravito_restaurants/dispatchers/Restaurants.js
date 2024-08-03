const {
    getAllMenus
} = require("./helpers");

exports.getAllMenusHandler = async (req, res, next) => {
    try {
        const menus = await getAllMenus();
        res.status(200).json(menus);
    } catch (err) {
        next(err);
    }
}