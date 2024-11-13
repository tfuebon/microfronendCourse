import { useState } from "react"
//import { useColors } from "../hooks/useColors";

export const ColorPicker = ({ color, colorList, handleChangeColor, onSubmit }) => {

    //const [ color, colorList, handleChangeColor, onSubmit ] = useColors();

    return (
        <form onSubmit={onSubmit}>
            {/*<pre>{JSON.stringify(colorList, null, 2)}</pre>*/}
            <input 
                type="color" 
                className="form-control" 
                name="" 
                id=""
                style={{
                    width: "100%",
                    height: "300px"
                }} 
                title="Seleccione un color..."
                value={color}
                onChange={handleChangeColor}
            />
            <div className="text-center">
                <h2 className="mt-3 fw-bolder">
                    <div 
                        style={{ 
                            width: "20px", 
                            height: "20px", 
                            background: color, 
                            display: "inline-block", 
                            margin: "0 1rem", 
                            borderRadius: "100%" 
                        }}>
                        {color}
                    </div>
                </h2>
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        </form>
    )
}