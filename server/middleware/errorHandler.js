module.exports = (err, req, res, next) => {
    const message = err.message || "Internal server error";
    const status = err.status || 500;
    console.log(message);
    res.status(status).json({
        status,
        message
    });
}