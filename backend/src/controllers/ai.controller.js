
const aiService = require("../services/ai.service");


module.exports.getResponse = async (req, res) => {

    const prompt = req.query.prompt;

   if(!prompt){
    return res.status(400).json({ message: "Please provide a prompt." });

   }

    const response = await aiService(prompt);

    res.send(response);

}