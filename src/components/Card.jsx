import React, { useState } from 'react';
import InputComponent from "./InputComponent";

function Card(props) {
    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active);
    }

    return (
        <div id="backlog">
            <div className="m-2 mb-10 md:mb-0 w-[282px] rounded-[10px] bg-[#EBECF0] ">
                <div className="mx-2 flex flex-col justify-around items-center">
                    <h1 className="mr-auto ml-5">
                        {props.data.title}
                    </h1>
                    {props.data.inputs.map((item, i) => {
                        return (
                            <InputComponent item={item}/>
                        );
                    })}
                    <div className={active ? 'flex' : 'hidden'}>
                        <input  type="text"/>
                        <button className="bg-blue-500 p-0.5 rounded">Submit</button>
                    </div>

                    <button className="mr-auto ml-5 flex items-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="#5E6C84" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                        </svg>
                        <div onClick={toggle} className="text-[#5E6C84]">Add card</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;