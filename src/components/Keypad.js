// Code Keypad Component Here
function Keypad() {
    return (
        <form>
            <input onChange={event => console.log('Entering password...')} type="password" />
        </form>
    )
};

export default Keypad;