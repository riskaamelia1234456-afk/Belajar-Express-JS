var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_view", {
        nama: "riska",
        kelas: "mi.03",
        alamat: "padang tiji"
    });
});

module.exports = router;  