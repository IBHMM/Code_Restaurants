const {ResModel}=require("../model/res")
const ResController = {
  getAll: async (req, res) => {
    try {
      const target = await ResModel.find({});
      res.send(target);
    } catch (error) {
      res.send("item is not found");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const flower = await ResModel.findById(id);
      res.send(flower);
    } catch (error) {
      res.send("item is not found");
    }
  },
  Post: async (req, res) => {
    const { name, description, price, discount, image} = req.body;
    const NewProduct = new ResModel( { name, description, price, discount, image});
    await NewProduct.save()
    res.send(NewProduct);
    try {
    } catch (error) {
      res.send("item is not found");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await ResModel.findByIdAndDelete(id);
      res.send("deleted");
    } catch (error) {
      res.send("item is not found");
    }
  },
};
module.exports={ResController}
