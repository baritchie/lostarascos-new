module.exports = {
    mode: "jit",
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
                "site-orange": "#E48C70",
                "site-rose": "#F1D4C9"
            },
            borderRadius: {
                "sm": "0.25rem",
            },
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
}
