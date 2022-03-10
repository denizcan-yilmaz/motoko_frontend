import { useState } from "react";

const MintPage = () => {

    const dnaGenerator = () => {
        return( bg + hand + head + accessory + onTable + onWall + tableChair + torsoDress );
    }

    const handleSubmit = () => {
        console.log('Just clicked the submit button!')
    }

    const [bg, setBg] = useState("0");
    const [hand, setHand] = useState("0");
    const [head, setHead] = useState("0");
    const [accessory, setAccessory] = useState("0");
    const [onTable, setOnTable] = useState("0");
    const [onWall, setOnWall] = useState("0");
    const [tableChair, setTableChair] = useState("0");
    const [torsoDress, setTorsoDress] = useState("0");

    return (
        <div className="mintPage">
            <h2>Create an NFT!</h2>
            <form onSubmit={handleSubmit}>
                <label>Choose a Back-Ground</label>
                <select name="backGround" id="backGround" required value={bg} onChange={(e)=>setBg(e.target.value)}>
                    <option value="0">BlueBG</option>
                    <option value="1">BrikWall</option>
                    <option value="2">GreenYellow</option>
                    <option value="3">RedBG</option>
                    <option value="4">RedYellow</option>
                </select>

                <label>Choose a Hand</label>
                <select name="hand" id="hand" required value={hand} onChange={(e)=>setHand(e.target.value)}>
                    <option value="0">Hand90Deg</option>
                    <option value="1">HandStraight</option>
                </select>

                <label>Choose a Head</label>
                <select name="head" id="head" required value={head} onChange={(e)=>setHead(e.target.value)}>
                    <option value="0">AngryMouth</option>
                    <option value="1">BigMustash</option>
                    <option value="2">ButterflyMustash</option>
                    <option value="3">ChillMouth</option>
                    <option value="4">EyeClose</option>
                    <option value="5">EyeNormal</option>
                    <option value="6">FullBeard</option>
                    <option value="7">HairNormal</option>
                    <option value="8">HairPink</option>
                    <option value="9">HeadBase</option>
                </select>

                <label>Choose a Head Accessory</label>
                <select name="headAccessory" id="headAccessory" required value={accessory} onChange={(e)=>setAccessory(e.target.value)}>
                    <option value="0">Cigarette</option>
                    <option value="1">CoronaMask</option>
                    <option value="2">EyeGlassBlue</option>
                    <option value="3">EyeGlassRed</option>
                    <option value="4">HeadPhone</option>
                    <option value="5">RedHat</option>
                </select>

                <label>Choose an On-Table Item</label>
                <select name="onTable" id="onTable" required value={onTable} onChange={(e)=>setOnTable(e.target.value)}>
                    <option value="0">CoffeeCup</option>
                    <option value="1">Laptop</option>
                </select>

                <label>Choose an On-Wall Item</label>
                <select name="onWall" id="onWall" required value={onWall} onChange={(e)=>setOnWall(e.target.value)}>
                    <option value="0">Calendar</option>
                    <option value="1">Clock</option>
                    <option value="2">Moon</option>
                </select>

                <label>Choose a Table Chair</label>
                <select name="Table_Char" id="Table_Chair"required value={tableChair} onChange={(e)=>setTableChair(e.target.value)}>
                    <option value="0">Table_Chair</option>
                </select>

                <label>Choose a Torso Dress</label>
                <select name="TorsoDress" id="TorsoDress"required value={torsoDress} onChange={(e)=>setTorsoDress(e.target.value)}>
                    <option value="0">Torso1</option>
                    <option value="1">Torso2</option>
                    <option value="2">Torso3</option>
                </select>

                <button>Submit</button>
                <p>The unique DNA of the NFT is: {dnaGenerator()}</p>
            </form>

        </div>
    );
}

export default MintPage;