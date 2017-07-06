const autoprefixer = require('autoprefixer');

const browsers = [
    'ie >= 11',
    'Edge >= 1',
    'Chrome >= 50',
    'Safari >= 9',
    'ios_saf >= 8'
];

module.exports = {
    plugins: [
        autoprefixer({
            browsers: browsers
        })
    ]
};
