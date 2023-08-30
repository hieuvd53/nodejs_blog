const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_nodejs_dev');
        console.log('success');
    } catch (e) {
        console.log('fail');
    }
}

module.exports = { connect };
