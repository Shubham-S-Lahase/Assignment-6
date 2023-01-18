const app = require('./app');
const mongoose = require('mongoose');

//connect to DB
mongoose.connect("mongodb://localhost/blogs",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));