module.exports = {
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // hoặc false / 'media'
    theme: {
        extend: {
            color: {
                primary: '#fe2c55',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
