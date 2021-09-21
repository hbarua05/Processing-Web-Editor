module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx,css}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        stroke: (theme) => ({
            "gray-100": theme("colors.gray.100"),
            "gray-200": theme("colors.gray.200"),
            "gray-800": theme("colors.gray.800"),
        }),
        fill: (theme) => ({
            "gray-100": theme("colors.gray.100"),
            "gray-200": theme("colors.gray.200"),
            "gray-800": theme("colors.gray.800"),
        }),
    },
    variants: {
        extend: {
            fill: ["hover", "focus", "group-hover"],
            stroke: ["hover", "focus", "group-hover"],
        },
    },
    plugins: [],
};
