import { useState } from 'react';
import Layout from "./components/Layout";
import Card from "./components/Card";

let initialData  = [
    {
        id: 1,
        title: 'Login page – performance issues',
        type: 'Backlog'
    },
    {
        id: 2,
        title: 'Sprint bugfix',
        type: 'Backlog'
    },
    {
        id: 3,
        title: 'Shop bug5',
        type: 'Ready'
    },
    {
        id: 4,
        title: 'Shop page – performance issues',
        type: 'Ready'
    },
    {
        id: 5,
        title: 'User page – performance issues',
        type: 'In Progress'
    },
    {
        id: 6,
        title: 'Auth bugfix',
        type: 'In Progress'
    },
    {
        id: 7,
        title: 'Main page – performance issues',
        type: 'Finished'
    },
    {
        id: 8,
        title: 'Main page bugfix',
        type: 'Finished'
    }
]

function App () {
    const [data, setData] = useState(initialData);

    const Backlog = 'Backlog'
    const Ready = 'Ready'
    const Progress = 'In Progress'
    const Finished = 'Finished'

    const listType = [
        Backlog,
        Ready,
        Progress,
        Finished
    ]

    let active = data.filter((item) => item.type !== 'Finished').length
    let finished = data.filter((item) => item.type === 'Finished').length

    return (
            <Layout finished={finished} active={active}>
                <div id="container" className="container mx-auto">

                    <div id="main" className="md:flex mt-5 mx-4 justify-between text-[18px] bg-[#0079BF]">

                        {listType.map((type, i) => {
                            const task = data.filter((item) => item.type === type)
                            return (
                                <Card
                                    type={type}
                                    tasks={data}
                                    task={task}
                                    setTasks={setData}
                                    key={i}
                                />
                            );
                        })}

                    </div>
                </div>
            </Layout>
    );
}

export default App;
