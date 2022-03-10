import { useState } from "react";
import MintPreview from "./MintPreview";

const MintPage = () => {

    const dnaGenerator = () => {
        return( bg + hand + eye + moustache + hair + accessory + onTable + onWall  + torsoDress );
    }

    const handleSubmit = () => {
        console.log('Just clicked the submit button!')
    }

    const [bg, setBg] = useState("0");
    const [hand, setHand] = useState("0");
    const [eye, setEye] = useState("0");
    const [moustache, setMoustache] = useState("0");
    const [hair, setHair] = useState("0");
    const [accessory, setAccessory] = useState("0");
    const [onTable, setOnTable] = useState("0");
    const [onWall, setOnWall] = useState("0");
    const [torsoDress, setTorsoDress] = useState("0");

    return (
        <div className="mintPage">

            <div className="mintForm">
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


                    <label>Choose a Mouth Type</label>
                    <select name="moustache" id="moustache" required value={moustache} onChange={(e)=>setMoustache(e.target.value)}>
                        <option value="0">Angry</option>
                        <option value="1">BigMoustache</option>
                        <option value="2">ButterflyMoustache</option>
                        <option value="3">ChillMouth</option>
                        <option value="4">FullBeard</option>
                        <option value="5">SadMouth</option>
                        <option value="6">Smile</option>

                    </select>

                    <label>Choose an Eye Type</label>
                    <select name="eye" id="eye" required value={eye} onChange={(e)=>setEye(e.target.value)}>
                        <option value="0">EyeClosed</option>
                        <option value="1">EyeNormal</option>
                        <option value="2">RedEye</option>
                    </select>


                    <label>Choose a Hair Style</label>
                    <select name="hair" id="hair" required value={hair} onChange={(e)=>setHair(e.target.value)}>
                        <option value="0">Normal</option>
                        <option value="1">Pink</option>
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

                    <label>Choose a Torso Dress</label>
                    <select name="TorsoDress" id="TorsoDress"required value={torsoDress} onChange={(e)=>setTorsoDress(e.target.value)}>
                        <option value="0">Torso1</option>
                        <option value="1">Torso2</option>
                        <option value="2">Torso3</option>
                    </select>


                    <p>The unique DNA of the NFT is: {dnaGenerator()}</p>
                    <br />
                    <button>Submit</button>

                </form>
            </div>

            <div className="mint-preview">
                <MintPreview  {...{bg, hand, eye,hair, moustache, accessory, onTable, onWall, torsoDress}}/>
            </div>

        </div>
    );
}

export default MintPage;