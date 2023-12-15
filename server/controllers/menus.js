import Menus from '../models/menus'

exports.createMenu = async (req, res) => {
    const { name, category, description, price, quantity, images } = req.body;
    try {
        await new Menus(
            {
                name, category, description, price, quantity, images, isDeleted: false
            }
        ).save();
        return res.status(201).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.getAllMenus = async (req, res) => {
    const menu = await Menus.find({});
    try {
        return res.status(200).json({ message: "success", data: menu })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

exports.getMenuById = async (req, res) => {
    const menuId = req.params;
    const menu = await Menus.findOne({ _id: menuId });
    try {
        return res.status(200).json({ message: "success", data: menu })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

exports.updateMenu = async (req, res) => {
    try {
        const { menuId, category, description, price, quantity, estimatedTime, images } = req.body;
        const menu = await Menus.findOne({ _id: menuId });
        if (menu) {
            const updateStatus = await Menus.findByIdAndUpdate({ _id: menu._id }, { category, description, price, quantity, estimatedTime, images });
            if (updateStatus) {
                return res.status(200).json({ message: "Success" });
            } else {
                return res.status(400).json({ message: "Something went wrong" });
            }
        }
        return res.status(400).json({ message: "No menu available" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

exports.deleteMenu = async (req, res) => {
    const menuId = req.params;
    try {
        const menu = await Menus.findOne({ _id: menuId });
        if (menu) {
            const deleteStatus = await Menus.findByIdAndUpdate({ _id: menu._id }, { isDeleted: true });
            if (deleteStatus) {
                return res.status(200).json({ message: "Success" });
            } else {
                return res.status(400).json({ message: "Something went wrong" });
            }
        }
        return res.status(400).json({ message: "No menu available" });
    } catch (error) {

    }
}