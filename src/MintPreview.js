const MintPreview = (props) => {
    return (
        <div className="image-overlay">
            <img src={require(`./images/BackGround/${props.bg}.png`)} className="bg"/>
            <img src={require(`./images/Hand/${props.hand}.png`)} className="hand"/>
            <img src={require(`./images/HeadAccessory/${props.accessory}.png`)} className="hand"/>
            <img src={require(`./images/OnTable/${props.onTable}.png`)} className="ontable"/>
            <img src={require(`./images/OnWall/${props.onWall}.png`)} className="onwall"/>
            <img src={require(`./images/Table_Chair/${props.tableChair}.png`)} className="tableChair"/>
            <img src={require(`./images/TorsoDress/${props.torsoDress}.png`)} className="torsoDress"/>
            <img src={require(`./images/Head/9.png`)} className="headBase"/>
            <img src={require(`./images/Head/${props.head}.png`)} className="head"/>


        </div>
    );
}
 
export default MintPreview;