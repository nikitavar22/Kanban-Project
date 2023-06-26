import Profile from '../Profile'

function Header () {
    return (
        <header id="header" className="h-[55px]  bg-[#0067A3] text-white">
            <div className="mx-5 h-[55px] items-center md:flex flex justify-between text-white">
                <a href="../Layout.jsx" className="text-[28px] text-white">Awesome Kankan Board</a>
                <Profile/>
            </div>
        </header>
    );
}


export default Header;