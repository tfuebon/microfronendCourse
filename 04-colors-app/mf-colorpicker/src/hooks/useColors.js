import { useEffect, useState } from "react";
import { getColors, getLastColor } from "../helpers/getColors";

export const useColors = () => {

    const [color, setColor] = useState(getLastColor());
    const [colorList, setColorList] = useState(getColors());

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setColorList([color, ...colorList]);
        //console.log(color)
    }

    const handleClickClearColors = () => {
        setColor("#f2f2f2");
        setColorList([]);
        localStorage.removeItem("colors");
    }

    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colorList));
    }, [colorList]);

    return {
        color,
        colorList,
        handleChangeColor,
        onSubmit,
        handleClickClearColors
    }
    
}