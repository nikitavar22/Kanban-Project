import './App.css';
import Dropdown from "./Dropdown";
import Layout from "../components/Layout";
import {userState} from "react";

const [selected, setSelected]=userState ("");
function App () {
    return (
            <Layout>
                <div id="container" className="container">

                    <div id="main" className="md:flex mt-5 mx-4 justify-between h-[590px] text-[18px] bg-[#0079BF]">

                        <div id="backlog" className="m-2 mb-10 md:mb-0 w-[282px] h-[197px] rounded-[10px] bg-[#EBECF0] flex flex-col justify-around items-center">

                            <h1 className="mr-auto ml-5">
                                Backlog
                            </h1>

                            <div className="bg-white w-[258px] h-[57px] items-start rounded-[5px]">
                                <h1 className="m-1.5">
                                    Login page – performance issues
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Sprint bugfix
                                </h1>
                            </div>

                            <button className="mr-auto ml-5 flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="#5E6C84" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                                </svg>
                                <div className="text-[#5E6C84]">Add card</div>
                            </button>
                        </div>
                        <Dropdown selected={selected} setSelected={setSelected}></Dropdown>
                        <div id="ready" className="m-2 hidden md:flex w-[282px] h-[538px] rounded-[10px] bg-[#EBECF0] flex-col justify-around items-center">

                            <h1 className="mr-auto ml-5">
                                Ready
                            </h1>

                            <div className="bg-white w-[258px] h-[57px] rounded-[5px] leading-[21px] ">
                                <h1 className="m-1.5">
                                    Shop page – performance issues
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Checkout bugfix
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug1
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug2
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug3
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug3
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug4
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop bug5
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[57px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Shop page – performance issues
                                </h1>
                            </div>
                        </div>

                        <div id="inProgress" className="m-2 mb-20 md:mb-0  w-[282px] h-[197px] rounded-[10px] bg-[#EBECF0] flex flex-col justify-around items-center">

                            <h1 className="mr-auto ml-5">
                                In Progress
                            </h1>

                            <div className="bg-white w-[258px] h-[57px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    User page – performance issues
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Auth bugfix
                                </h1>
                            </div>

                            <div className="mr-auto ml-5 flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="#5E6C84" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                                </svg>
                                <div className="text-[#5E6C84]">Add card</div>
                            </div>
                        </div>

                        <div id="finished" className="m-2 w-[282px] h-[197px] rounded-[10px] bg-[#EBECF0] flex flex-col justify-around items-center">

                            <h1 className="mr-auto ml-5">
                                Finished
                            </h1>

                            <div className="bg-white w-[258px] h-[57px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Main page – performance issues
                                </h1>
                            </div>

                            <div className="bg-white w-[258px] h-[35px] rounded-[5px]">
                                <h1 className="m-1.5">
                                    Main page bugfix
                                </h1>
                            </div>

                            <div className="mr-auto ml-5 flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="#5E6C84" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
                                </svg>
                                <div className="text-[#5E6C84]">Add card</div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
  );
}

export default App;
