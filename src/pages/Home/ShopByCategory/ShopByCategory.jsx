import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const ShopByCategory = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://toytopia-server-nine.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    return (
        <div className='space-y-8'>
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center">Toys Category</h1>
            <p className="text-xl lg:text-3xl text-[#4a2d4c] font-serif font-thin text-center">- Find Your Ride -</p>
            <div className="flex justify-center">
                <div className="w-10/12 lg:w-11/12"> 
                    <Tabs>
                        <TabList className="flex lg:flex-row justify-between font-semibold px-4 lg:px-10 mb-4 lg:mb-8 lg:w-1/3 mx-auto">
                            <Tab>Sports</Tab>
                            <Tab>Van</Tab>
                            <Tab>Truck</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                {allData.filter((item) => item.category === 'sports').map((item) => (
                                    <Card item={item} key={item._id}></Card>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
                                {allData.filter((item) => item.category === 'van').map((item) => (
                                    <Card item={item} key={item._id}></Card>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
                                {allData.filter((item) => item.category === 'truck').map((item) => (
                                    <Card item={item} key={item._id}></Card>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>

    );
};

export default ShopByCategory;