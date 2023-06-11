const colorSchemes = [

    // Complementary Green
    {"--color-main": "#71c6dd", "--color-main-light": "#F6C0A6", "--color-dark": "#3F3E53", "--color-dark-medium": "#52516D", "--color-dark-light": "#6B6C8C", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#75FF8D", "--color-error": "#FF4B36"},
    
    {"--color-main": "#71c6dd", "--color-main-light": "#a3dcec", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#2d2d39", "--color-success": "#5dd693", "--color-error": "#fc4b0b"},
    // Monochromatic Blue
    {"--color-main": "#71c6dd", "--color-main-light": "#A9DAE9", "--color-dark": "#19384C", "--color-dark-medium": "#325569", "--color-dark-light": "#4C7E86", "--color-light": "#F4F9FB", "--color-gray": "#909AA5", "--color-light-gray": "#C4D1D4", "--color-bg": "#04232C", "--color-success": "#54C3D2", "--color-error": "#FF615D"},
    // Analogous Yellow
    {"--color-main": "#71c6dd", "--color-main-light": "#FAE3C2", "--color-dark": "#3F3F51", "--color-dark-medium": "#525266", "--color-dark-light": "#6B6B7D", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#FFD648", "--color-error": "#FF4B36"},
    // Triadic Purple
    {"--color-main": "#71c6dd", "--color-main-light": "#D2A6ED", "--color-dark": "#413C56", "--color-dark-medium": "#544C6E", "--color-dark-light": "#6D6489", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#BE54FF", "--color-error": "#FF4B36"},
    // Split Complementary Red
    {"--color-main": "#71c6dd", "--color-main-light": "#FFBCA3", "--color-dark": "#3C3F56", "--color-dark-medium": "#4C516D", "--color-dark-light": "#6A6D8C", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#FF615D", "--color-error": "#8E0D0B"},
    // Tetradic Orange
    {"--color-main": "#71c6dd", "--color-main-light": "#FFC69D", "--color-dark": "#3F3A56", "--color-dark-medium": "#52486E", "--color-dark-light": "#6B6086", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#FFAE46", "--color-error": "#FF615D"},
    // Monochromatic Gray
    {"--color-main": "#71c6dd", "--color-main-light": "#C8DDE5", "--color-dark": "#3C3F56", "--color-dark-medium": "#4C516D", "--color-dark-light": "#6A6D8C", "--color-light": "#F2F2F2", "--color-gray": "#B0B0B0", "--color-light-gray": "#D4D4D4", "--color-bg": "#2D2D39", "--color-success": "#84D9E1", "--color-error": "#FF4B36"},
    // Complementary Cyan
    {"--color-main": "#71c6dd", "--color-main-light": "#FFA8B9", "--color-dark": "#3C4154", "--color-dark-medium": "#4C536B", "--color-dark-light": "#6A728A", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#4FC1FF", "--color-error": "#FF615D"},
    // Analogous Pink
    {"--color-main": "#71c6dd", "--color-main-light": "#F2B0B4", "--color-dark": "#3E3C56", "--color-dark-medium": "#514E6D", "--color-dark-light": "#6C6988", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#FF64A6", "--color-error": "#FF615D"},
    // Triadic Teal
    {"--color-main": "#71c6dd", "--color-main-light": "#A3E9D4", "--color-dark": "#3D4154", "--color-dark-medium": "#4E536B", "--color-dark-light": "#6C728A", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#50D6B1", "--color-error": "#FF4B36"},
    // Split Complementary Indigo
    {"--color-main": "#71c6dd", "--color-main-light": "#8A9AEB", "--color-dark": "#3F3B56", "--color-dark-medium": "#52506D", "--color-dark-light": "#6B6887", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#5469FF", "--color-error": "#FF4B36"},
    // Tetradic Lime
    {"--color-main": "#71c6dd", "--color-main-light": "#D4F89E", "--color-dark": "#3F4153", "--color-dark-medium": "#53566C", "--color-dark-light": "#6D7089", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#B6FF54", "--color-error": "#FF4B36"},
    // Monochromatic Red
    {"--color-main": "#71c6dd", "--color-main-light": "#E9A9B3", "--color-dark": "#3E3C56", "--color-dark-medium": "#514E6D", "--color-dark-light": "#6C6988", "--color-light": "#F4F9FB", "--color-gray": "#909AA5", "--color-light-gray": "#C4D1D4", "--color-bg": "#2D2D39", "--color-success": "#FF6475", "--color-error": "#FF4B36"},
    // Complementary Magenta
    {"--color-main": "#71c6dd", "--color-main-light": "#FFA8D7", "--color-dark": "#3C4154", "--color-dark-medium": "#4C536B", "--color-dark-light": "#6A728A", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#D671FF", "--color-error": "#FF615D"},
    // Analogous Orange
    {"--color-main": "#71c6dd", "--color-main-light": "#FFCFA1", "--color-dark": "#3D3C56", "--color-dark-medium": "#4E4D6D", "--color-dark-light": "#6C6B89", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#FFA64B", "--color-error": "#FF615D"},
    // Split Complementary Cyan
    {"--color-main": "#71c6dd", "--color-main-light": "#A8DFFF", "--color-dark": "#3D4154", "--color-dark-medium": "#4E536B", "--color-dark-light": "#6C728A", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#4BFFEA", "--color-error": "#FF615D"},
    // Tetradic Purple-Blue
    {"--color-main": "#71c6dd", "--color-main-light": "#BBA3E9", "--color-dark": "#3F3C56", "--color-dark-medium": "#52506D", "--color-dark-light": "#6B6887", "--color-light": "#E5E5E5", "--color-gray": "#8B8B8B", "--color-light-gray": "#B2BDBD", "--color-bg": "#2D2D39", "--color-success": "#9864FF", "--color-error": "#FF4B36"},
    // Monochromatic Teal
    {"--color-main": "#71c6dd", "--color-main-light": "#A3DBE9", "--color-dark": "#3C3F56", "--color-dark-medium": "#4C516D", "--color-dark-light": "#6A6D8C", "--color-light": "#F4F9FB", "--color-gray": "#909AA5", "--color-light-gray": "#C4D1D4", "--color-bg": "#2D2D39", "--color-success": "#54C6B6", "--color-error": "#FF4B36"},
    
    // Monochromatic Blue
    {"--color-main": "#3f91a7", "--color-main-light": "#7fc8de", "--color-dark": "#223a4d", "--color-dark-medium": "#365b74", "--color-dark-light": "#4c7e9c", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#47bfa2", "--color-error": "#d33e3e"},
    // Complementary Green
    {"--color-main": "#3f91a7", "--color-main-light": "#a8deee", "--color-dark": "#2f4e3a", "--color-dark-medium": "#427350", "--color-dark-light": "#5a865f", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#70d47d", "--color-error": "#dc5042"},
    // Analogous Yellow
    {"--color-main": "#3f91a7", "--color-main-light": "#eedf9e", "--color-dark": "#4e3c2e", "--color-dark-medium": "#755b40", "--color-dark-light": "#9d7f52", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#d4b747", "--color-error": "#de573d"},
    // Triadic Purple
    {"--color-main": "#3f91a7", "--color-main-light": "#dfadee", "--color-dark": "#4a2d51", "--color-dark-medium": "#6d3b75", "--color-dark-light": "#964e9d", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#b747a7", "--color-error": "#c23d6e"},
    // Tetradic Orange
    {"--color-main": "#3f91a7", "--color-main-light": "#eeb7aa", "--color-dark": "#4e2c2c", "--color-dark-medium": "#753d3d", "--color-dark-light": "#9d4e4e", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#a36a47", "--color-error": "#a75a3d"},
    // Monochromatic Gray
    {"--color-main": "#646464", "--color-main-light": "#a6a6a6", "--color-dark": "#404040", "--color-dark-medium": "#555555", "--color-dark-light": "#727272", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#6a6a6a", "--color-error": "#404040"},
    // Complementary Pink
    {"--color-main": "#646464", "--color-main-light": "#eea6a6", "--color-dark": "#402d2d", "--color-dark-medium": "#5f4040", "--color-dark-light": "#8c5454", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#6a476a", "--color-error": "#6a3d3d"},
    // Analogous Brown
    {"--color-main": "#646464", "--color-main-light": "#eedda6", "--color-dark": "#4a3c2d", "--color-dark-medium": "#6e5b40", "--color-dark-light": "#9e7f52", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#9a8974", "--color-error": "#de9a57"},
    // Triadic Green
    {"--color-main": "#646464", "--color-main-light": "#a6eea6", "--color-dark": "#2d4a2d", "--color-dark-medium": "#3d7540", "--color-dark-light": "#4e9d52", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#708952", "--color-error": "#5ade57"},
    // Split Complementary Blue
    {"--color-main": "#646464", "--color-main-light": "#a6eeea", "--color-dark": "#2d3c4a", "--color-dark-medium": "#405e75", "--color-dark-light": "#52899d", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#52749a", "--color-error": "#575ade"},
    // Tetradic Purple
    {"--color-main": "#646464", "--color-main-light": "#eea6ee", "--color-dark": "#3c2d3a", "--color-dark-medium": "#5e4060", "--color-dark-light": "#8a528a", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#8a5275", "--color-error": "#de578b"},
    // Monochromatic Teal
    {"--color-main": "#53a6b4", "--color-main-light": "#98ced4", "--color-dark": "#2d444a", "--color-dark-medium": "#40646d", "--color-dark-light": "#528c97", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#52a69a", "--color-error": "#d55767"},
    // Complementary Red
    {"--color-main": "#53a6b4", "--color-main-light": "#eda69a", "--color-dark": "#4a2d2d", "--color-dark-medium": "#754040", "--color-dark-light": "#9d5454", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#a65252", "--color-error": "#de5757"},
    // Analogous Yellow
    {"--color-main": "#53a6b4", "--color-main-light": "#eedaa6", "--color-dark": "#4a3c2d", "--color-dark-medium": "#755b40", "--color-dark-light": "#9d7f52", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#d4b752", "--color-error": "#de9a57"},
    // Triadic Purple
    {"--color-main": "#53a6b4", "--color-main-light": "#d6a6ed", "--color-dark": "#3a2d4a", "--color-dark-medium": "#5f406e", "--color-dark-light": "#7f5294", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#9360cf", "--color-error": "#de57a3"},
    // Split Complementary Green
    {"--color-main": "#53a6b4", "--color-main-light": "#eda69a", "--color-dark": "#3c4a2d", "--color-dark-medium": "#5e7540", "--color-dark-light": "#8a9d52", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#8fcf60", "--color-error": "#de8957"},
    // Tetradic Orange
    {"--color-main": "#53a6b4", "--color-main-light": "#edcba6", "--color-dark": "#3c2d2d", "--color-dark-medium": "#5e4040", "--color-dark-light": "#8a5252", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#1d313f", "--color-success": "#cf7860", "--color-error": "#de7757"},
    // Dark Mode
    {"--color-main": "#ffffff", "--color-main-light": "#f2f2f2", "--color-dark": "#333333", "--color-dark-medium": "#555555", "--color-dark-light": "#777777", "--color-light": "#eaeef1", "--color-gray": "#929292", "--color-light-gray": "#bcbcbc", "--color-bg": "#000000", "--color-success": "#66cc66", "--color-error": "#ff4444"},
    // Black and White
    {"--color-main": "#ffffff", "--color-main-light": "#ffffff", "--color-dark": "#000000", "--color-dark-medium": "#000000", "--color-dark-light": "#000000", "--color-light": "#ffffff", "--color-gray": "#000000", "--color-light-gray": "#000000", "--color-bg": "#ffffff", "--color-success": "#000000", "--color-error": "#000000"},
    
    // Monochromatic Blue
    {"--color-main": "#006d94", "--color-main-light": "#e4f9fd", "--color-dark": "#1f2030", "--color-dark-medium": "#42445f", "--color-dark-light": "#63678d", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#292930", "--color-success": "#0ca381", "--color-error": "#fd2f05"},
    // Complementary Green
    {"--color-main": "#71c6dd", "--color-main-light": "#ffe1d1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#a03224", "--color-success": "#308b6b", "--color-error": "#d61603"},
    // Analogous Yellow
    {"--color-main": "#71c6dd", "--color-main-light": "#d4d2e1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#ded927", "--color-success": "#7acd0b", "--color-error": "#ba2503"},
    // Triadic Purple
    {"--color-main": "#71c6dd", "--color-main-light": "#d5e1e4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#5a1678", "--color-success": "#6d0ca3", "--color-error": "#1f0246"},
    // Split Complementary Red
    {"--color-main": "#71c6dd", "--color-main-light": "#f8e1d4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#c52112", "--color-success": "#6b308b", "--color-error": "#0310d6"},
    // Tetradic Orange
    {"--color-main": "#71c6dd", "--color-main-light": "#e1f6fb", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#c96c1b", "--color-success": "#8b6b30", "--color-error": "#d6035a"},
    // Monochromatic Gray
    {"--color-main": "#006d94", "--color-main-light": "#e4f9fd", "--color-dark": "#1f2030", "--color-dark-medium": "#42445f", "--color-dark-light": "#63678d", "--color-light": "#e5e5e5", "--color-gray": "#333333", "--color-light-gray": "#888888", "--color-bg": "#292930", "--color-success": "#0ca381", "--color-error": "#fd2f05"},
    // Complementary Cyan
    {"--color-main": "#71c6dd", "--color-main-light": "#ffe1d1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#30a39d", "--color-success": "#6b308b", "--color-error": "#d61603"},
    // Analogous Pink
    {"--color-main": "#71c6dd", "--color-main-light": "#d4d2e1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#dd2771", "--color-success": "#0b7acd", "--color-error": "#d60703"},
    // Triadic Teal
    {"--color-main": "#71c6dd", "--color-main-light": "#d5e1e4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#1a8fdd", "--color-success": "#a30b6b", "--color-error": "#46031f"},
    // Split Complementary Indigo
    {"--color-main": "#71c6dd", "--color-main-light": "#f8e1d4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#125dd6", "--color-success": "#308b6b", "--color-error": "#031f46"},
    // Tetradic Lime
    {"--color-main": "#71c6dd", "--color-main-light": "#e1f6fb", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#6cc91b", "--color-success": "#6b308b", "--color-error": "#5a03d6"},
    // Monochromatic Brown
    {"--color-main": "#006d94", "--color-main-light": "#e4f9fd", "--color-dark": "#1f2030", "--color-dark-medium": "#42445f", "--color-dark-light": "#63678d", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#7e5516", "--color-success": "#0ca381", "--color-error": "#fd2f05"},
    // Complementary Deep Orange
    {"--color-main": "#71c6dd", "--color-main-light": "#ffe1d1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#dd5d1b", "--color-success": "#6b308b", "--color-error": "#d60303"},
    // Analogous Blue-Green
    {"--color-main": "#71c6dd", "--color-main-light": "#d4d2e1", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#1cdd8c", "--color-success": "#acd20b", "--color-error": "#a303d6"},
    // Triadic Deep Purple
    {"--color-main": "#71c6dd", "--color-main-light": "#d5e1e4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#8b308b", "--color-success": "#0ba37a", "--color-error": "#03256d"},
    // Split Complementary Light Blue
    {"--color-main": "#71c6dd", "--color-main-light": "#f8e1d4", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#1288dd", "--color-success": "#6b308b", "--color-error": "#d6024e"},
    // Tetradic Amber
    {"--color-main": "#71c6dd", "--color-main-light": "#e1f6fb", "--color-dark": "#3f4156", "--color-dark-medium": "#51546e", "--color-dark-light": "#696d97", "--color-light": "#e5e5e5", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#dd8d1b", "--color-success": "#6b308b", "--color-error": "#db0324"},
    // Dark Mode
    {"--color-main": "#0d2330", "--color-main-light": "#1f4255", "--color-dark": "#fff", "--color-dark-medium": "#f2f2f2", "--color-dark-light": "#cccccc", "--color-light": "#2d2d2d", "--color-gray": "#8b8b8b", "--color-light-gray": "#b2bdbd", "--color-bg": "#000", "--color-success": "#0ca381", "--color-error": "#fd2f05"},
    // Black and White
    {"--color-main": "#000", "--color-main-light": "#fff", "--color-dark": "#000", "--color-dark-medium": "#000", "--color-dark-light": "#000", "--color-light": "#fff", "--color-gray": "#000", "--color-light-gray": "#000", "--color-bg": "#fff", "--color-success": "#000", "--color-error": "#000"},
];
  
  let currentColorSchemeIndex = parseInt(localStorage.getItem('selectedColorSchemeIndex')) || 0;
  
  function changeColorScheme(direction) {
    let newIndex = currentColorSchemeIndex;
  
    if (direction === 'next') {
      newIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
    } else if (direction === 'previous') {
      newIndex = (currentColorSchemeIndex - 1 + colorSchemes.length) % colorSchemes.length;
    }
  
    if (newIndex !== currentColorSchemeIndex) {
      currentColorSchemeIndex = newIndex;
      const colorScheme = colorSchemes[currentColorSchemeIndex];
  
      for (const [property, value] of Object.entries(colorScheme)) {
        document.documentElement.style.setProperty(property, value);
      }
  
      // Save the selected color scheme index to localStorage
      localStorage.setItem('selectedColorSchemeIndex', currentColorSchemeIndex);
  
      updateColorSchemeIndexDisplay();
    }
  }

// function updateColorSchemeIndexDisplay() {
//     let indexDisplay = document.getElementById("color-scheme-index");

//     if (!indexDisplay) {
//         indexDisplay = document.createElement("div");
//         indexDisplay.id = "color-scheme-index";
//         indexDisplay.style.position = "absolute";
//         indexDisplay.style.bottom = "10px";
//         indexDisplay.style.left = "10px";
//         indexDisplay.style.backgroundColor = "white";
//         indexDisplay.style.color = "black";
//         indexDisplay.style.padding = "5px";
//         indexDisplay.style.fontFamily = "Inter";
//         document.body.appendChild(indexDisplay);
//     }

//     indexDisplay.innerText = `Color Scheme Index: ${currentColorSchemeIndex}`;
// }

function handleKeydown(event) {
  if (event.ctrlKey) {
    if (event.key === 'ArrowRight') {
      changeColorScheme('next');
    } else if (event.key === 'ArrowLeft') {
      changeColorScheme('previous');
    }
  }
}

// If user is using a touch device then
// Add touch event listeners
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > swipeThreshold) {
    changeColorScheme('previous');
  } else if (swipeDistance < -swipeThreshold) {
    changeColorScheme('next');
  }
}
  
  document.addEventListener('keydown', handleKeydown);
  
  // Apply the initial color scheme
  const colorScheme = colorSchemes[currentColorSchemeIndex];
  
  for (const [property, value] of Object.entries(colorScheme)) {
    document.documentElement.style.setProperty(property, value);
  }
  
  updateColorSchemeIndexDisplay();
  
