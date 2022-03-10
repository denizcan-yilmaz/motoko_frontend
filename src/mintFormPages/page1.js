const OnBoarding1 = () => {
 
    return (
        <div className="formPage1">
            <h1>Page 1/7</h1>
            <h2>Choose a Background</h2>
            <select name="formPage1" id="formPage1" required>
                <option value="1" style={{backgroundImage:"frontend/src/images/BackGround/BlueBG.png"}}></option>
                <option value="2">BrikWall</option>
                <option value="3">GreenYellow</option>
                <option value="4">RedBG</option>
                <option value="5">RedYellow</option>
            </select>
        </div>

    );
}
 
export default OnBoarding1;