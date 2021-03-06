const axios = require("axios");

exports.initialRoute = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome to Source Bin Api 😊",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Opps!! Server Error 😔",
    });
  }
};

exports.createPostBin = async (req, res) => {
  try {
    const content = req.body.content;
    const title = req.body.title;
    const description = req.body.description;

    if (!content) {
      res.status(400).json({
        success: false,
        message: "Please add source code",
      });
    } else {
      axios({
        url: "https://sourceb.in/api/bins",
        method: "POST",
        data: {
          title,
          description,
          files: [{ content }],
        },
      }).then((result) => {
        res.status(200).json({
          success: 200,
          url: `https://sourceb.in/${result.data.key}`,
        });
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
