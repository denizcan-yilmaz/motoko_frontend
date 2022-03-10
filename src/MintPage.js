import { useState } from "react";
import OnBoarding1 from "./mintFormPages/page1";
import OnBoarding2 from "./mintFormPages/page2";
import OnBoarding3 from "./mintFormPages/page3";
import OnBoarding4 from "./mintFormPages/page4";
import OnBoarding5 from "./mintFormPages/page5";
import OnBoarding6 from "./mintFormPages/page6";
import OnBoarding7 from "./mintFormPages/page7";


const MintPage = () => {
    const [page, setPage] = useState(1);

    function goNextPage(){
        if(page === 7) return;
        setPage((page)=>page+1);
    }

    return (
        <div className="mintPage">
            <div>Token Bar</div>

            <div>
            {page === 1 && <OnBoarding1></OnBoarding1>}
            {page === 2 && <OnBoarding2></OnBoarding2>}
            {page === 3 && <OnBoarding3></OnBoarding3>}
            {page === 4 && <OnBoarding4></OnBoarding4>}
            {page === 5 && <OnBoarding5></OnBoarding5>}
            {page === 6 && <OnBoarding6></OnBoarding6>}
            {page === 7 && <OnBoarding7></OnBoarding7>}

            </div>

            {page !== 7 && <button onClick={goNextPage}>Go Next Page</button>}
            {page === 7 && <button>Submit</button>}

        </div>
    );
}

export default MintPage;