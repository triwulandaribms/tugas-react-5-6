import {GiGalaxy} from "react-icons/gi";
// import {faRightToBracket} from "react-icons/gi";

export default function Header(){
    return (
        <header>
            <div className="logo">
                <GiGalaxy size={24} />
                <div>Galaxies</div>
            </div>
            <div>
                {/* <faRightToBracket size={24}/> */}
                <button>Login</button>
            </div>
        </header>
    )
}

