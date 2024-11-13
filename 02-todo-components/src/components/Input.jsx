export const Input = (props) => {
    
    const { value, onChange, onSubmit } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form
            onSubmit={handleSubmit}    
        >
            <div className="flex-row">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}