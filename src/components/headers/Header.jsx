import Profile from "../Profile";

function Header() {
    return (
        <header id="header" className="h-[55px] flex items-center justify-between md:bg-[#0067A3] bg-[#0079BF]">
            <h3 id="logo" className="hidden md:block text-[28px] text-white font-normal ml-5">Awesome Kanban Board</h3>
            <div className="ml-auto">
                <Profile/>
            </div>
        </header>
    );

}

export default Header;

