import { useState } from 'react';
import InputComponent from "./InputComponent";
import MainPage from "./MainPage";
import {Route, Routes, Link} from "react-router-dom";

function Card(props) {
    const { type, tasks, task, setTasks } = props

    const [active, setActive] = useState(false);
    const [newValue, setNewValue] = useState('');

    const back =	tasks.filter(obj => obj.type === "Backlog");
    const ready = tasks.filter(obj => obj.type === "Ready");
    const progress = tasks.filter(obj => obj.type === "In Progress");

    const toggle = () => {
        setActive(!active);
    }

    const add = () => {
        if (newValue !== '') {
            const obj = {
                id: Math.max(...tasks.map(obj => obj.id)) + 1,
                title: newValue,
                type: type
            }

            setTasks([...tasks, obj])
            setNewValue('')
            setActive(false)
        }
    }

    const onClick = (e) => {
        const obj = {
            id: Math.max(...tasks.map(obj => obj.id)) + 1,
            title: e.target.value,
            type: type
        };
        let currentId = e.target.options[e.target.selectedIndex].id
        setTasks([...tasks.filter((task) => task.id !== Number(currentId)), obj])
    };

    return (
        <div id="backlog">
            <div className="m-2 mb-10 md:mb-0 w-[282px] max-h-[538px] rounded-[10px] bg-[#EBECF0] ">
                <div className="mx-2 flex flex-col justify-around items-center">
                    <h1 className="mr-auto ml-5">
                        {type}
                    </h1>
                    <div className="overflow-y-auto max-h-[500px]">
                        {task.map((item, i) => {
                            return (
                                <InputComponent key={i} item={item}/>
                            );
                        })}

                        {type === 'Backlog' && <div className={active ? 'flex' : 'hidden'}>
                            <input onChange={e => setNewValue(e.target.value)} value={newValue} type="text"/>
                            <button onClick={add} className="bg-blue-500 p-0.5 rounded">Submit</button>
                        </div>}

                        {type === 'Ready' &&
                            <div className={active ? 'flex' : 'hidden'}>
                                <select onChange={onClick}>
                                    {
                                        back.map((obj, i) => {
                                            return (
                                                <option key={i} id={obj.id} value={obj.title}>{obj.title}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        }

                        {type === 'In Progress' &&
                            <select onChange={onClick}>
                                {
                                    ready.map((obj, i) => {
                                        return (
                                            <option key={i} id={obj.id} value={obj.title}>{obj.title}</option>
                                        );
                                    })
                                }
                            </select>
                        }
                        {type === 'Finished' &&
                            <div className={active ? 'flex' : 'hidden'}>
                                <select onChange={onClick}>
                                    {
                                        progress.map((obj, i) => {
                                            return (
                                                <option key={i} id={obj.id} value={obj.title}>{obj.title}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        }

                        <button className="mr-auto ml-5 flex items-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="#5E6C84" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                            </svg>
                            <div onClick={toggle} className="text-[#5E6C84]">Add card</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;