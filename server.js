const express = require('express');
const path = require('path')
const app = express();


app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs')

const AppRoutes = require('./app/routes/App.routes');

app.use('/', AppRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
