import Mint from "../Mint"
const Collected = (props) => {
    const wallet = props.wallet;
    return (
        <div>
            {wallet === 1 &&
            <div className="collected">
                <h2>List of all collected items</h2>    
                <Mint/>
            </div>}
            {wallet === 0 && <a href = "/connect">Please connect your wallet first!</a>}
        </div>
    );
}
 
export default Collected;