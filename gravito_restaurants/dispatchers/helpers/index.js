const Restaurants = require('../definitions/Restaurants');
const Menus = require('../definitions/Menus');
const { errorResponse, successResponseWithoutData, successResponseWithData } = require('../responsers');

exports.getAllMenus = async () => {
    try {
        const menus = await Menus.find();
        return successResponseWithData(menus, 'All Menus retrieved successfully', 200);
    } catch (err) {
        return errorResponse(err.message, 500);
    }
}