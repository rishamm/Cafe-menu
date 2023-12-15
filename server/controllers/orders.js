import Orders from "../models/orders";

exports.placeOrder = async (req, res) => {
    const { name, items, isPaymentCompleted, totalPrice, isActive } = req.body;
    try {
        await new Orders(
            {
                tableNumber,
                name,
                items,
                isPaymentCompleted,
                totalPrice,
                isActive
            }
        ).save();
        return res.status(201).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.completeOrder = async (req, res) => {
    const { orderId } = req.body;
    try {
        const table = await Orders.findByIdAndUpdate(orderId, { isActive: false })
        return res.status(200).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.getTableDataByUserId = async (req, res) => {
    const userId = req.params;
    try {
        const table = await Orders.findOne({ user: userId });
        if (table.isActive) {
            return res.status(200).json({ message: "success", data: table });
        }
        return res.status(200).json({ message: "success", data: null });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}