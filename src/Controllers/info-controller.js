const { StatusCodes } = require('http-status-codes');

const info = (req,res) => {
    return res.status(StatusCodes.BAD_REQUEST).json({
        success : true,
        message : "API is live",
        error : {},
        data : {}
    });
};

module.exports = {
    info
}