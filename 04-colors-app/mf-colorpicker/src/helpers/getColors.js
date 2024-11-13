export const getColors = () => {
    return (
        JSON.parse(localStorage.getItem("colors")) || []
    )
}

export const getLastColor = () => {
    const listColor = getColors();
    return listColor[0] || "#732812";
}