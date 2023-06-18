import Layout from "../components/Layout";
import Card from "../components/Card";

const data = [
    {
        title: 'Backlog',
        inputs: [
            {
                title: 'Login page – performance issues'
            },
            {
                title: 'Sprint bugfix'
            }
        ]
    },
    {
        title: 'Ready',
        inputs: [
            {
                title: 'Shop page – performance issues',
            },
            {
                title: 'Checkout bugfix',
            },
            {
                title: 'Shop bug1',
            },
            {
                title: 'Shop bug2',
            },
            {
                title: 'Shop bug3',
            },
            {
                title: 'Shop bug3',
            },
            {
                title: 'Shop bug4',
            },
            {
                title: 'Shop bug5',
            },
            {
                title: 'Shop page – performance issues',
            },
        ]
    },
    {
        title: 'In Progress',
        inputs: [
            {
                title: 'User page – performance issues'
            },
            {
                title: 'Auth bugfix'
            }
        ]
    },
    {
        title: 'Finished',
        inputs: [
            {
                title: 'Main page – performance issues'
            },
            {
                title: 'Main page bugfix'
            }
        ]
    },
]

function App () {
    return (
            <Layout>
                <div id="container" className="container mx-auto">

                    <div id="main" className="md:flex mt-5 mx-4 justify-between text-[18px] bg-[#0079BF]">

                        {data.map((item, i) => {
                            return (
                                <Card data={item}/>
                            );
                        })}

                    </div>
                </div>
            </Layout>
  );
}

export default App;
