import swal from "sweetalert2";

export const ColorList = ({ colorsList = [] }) => {

    //const colorsList = ['#0fcc7a', '#c90fcc', '#cc480f']
    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color);
        swal.fire({
            position: "top-end",
            icon: "success",
            title: `Color: ${color} Copied!`,
            showConfirmButton: false,
            timer: 1300,
            timerProgressBar: true,
        });
    }

    return (
        <div className="list-group text-center">
            {colorsList.length > 0 ? colorsList.map((color, index) => (
                <button 
                    onClick={() => handleCopyColor(color)}
                    key={index} 
                    type="button" 
                    className="list-group-item list-group-item-action"
                    aria-current="true"    
                    title="Copiar color"
                    style={{ backgroundColor: `${color} !important`, fontWeight: "bolder" }}
                >{color}</button>
            )) : 
                // <div className="alert alert-danger" role="alert">
                    <h2>No hay colores</h2>
                //</div>
            }
        </div>)
}