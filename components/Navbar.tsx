import LoginBtn from "./LoginBtn";

interface Navbar {
    uid: string;
}

const Navbar = ({ uid }:Navbar) => {

    return (
        <div className="flex justify-around items-center w-full h-12 bg-emerald-300 mb-12">
            {uid &&<div className="text-center">{uid}</div>}
            <LoginBtn />
        </div>
    )
}

export default Navbar;