import { userState } from "react";

function Dropdown ({selected, setSelected}){
    const [isActive, setIsActive] = userState(false);
    const options = ['React', 'Vue', 'Angular'];
    return(
        <div className="dropdowb w-[400px] m-0 m-auto">
            <div className="dropdown-btn" onClick = { (e) => setIsActive(!isActive)}>
                Chose One</div>
            {isActive && (
                <div className="dropdowb-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                            }}
                             className="dropdown-item">{option}</div>
                    ))}
                    <div className="dropdown-item">Vue</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown;