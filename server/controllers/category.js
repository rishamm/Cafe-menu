import Category from '../models/category';

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await new Category(
            {
                name, isDeleted: false
            }
        ).save();
        return res.status(201).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.getAllCategory = async (req, res) => {
    const menu = await Category.find({});
    try {
        return res.status(200).json({ message: "success", data: menu })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

exports.getCategoryById = async (req, res) => {
    const menuId = req.params;
    const menu = await Category.findOne({ _id: menuId });
    try {
        return res.status(200).json({ message: "success", data: menu })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { menuId, category, description, price, quantity, estimatedTime, images } = req.body;
        const menu = await Category.findOne({ _id: menuId });
        if (menu) {
            const updateStatus = await Category.findByIdAndUpdate({ _id: menu._id }, { category, description, price, quantity, estimatedTime, images });
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

exports.deleteCategory = async (req, res) => {
    const menuId = req.params;
    try {
        const menu = await Category.findOne({ _id: menuId });
        if (menu) {
            const deleteStatus = await Category.findByIdAndUpdate({ _id: menu._id }, { isDeleted: true });
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