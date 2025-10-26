const path = require('path');

module.exports = {
  home: (req, res) => {
    res.render('index', { title: 'Welcome', user: req.user || "Blank" });
  },
}
