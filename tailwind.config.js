module.exports = {
    mode: 'jit',
    purge: ['_site/**/*.html', '_site/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "martel-sans": "'Martel Sans',sans-serif",
            },
            colors: {
                "site-yellow": "#FEBD2F",
                "site-tan": "#F6EFEA",
            }
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
}
