import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const ShopByCategory = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    return (
        <div className='space-y-8'>
            <h1 className="text-7xl text-[#4a2d4c] font-extrabold text-center" data-aos="zoom-in-up">Toys Category</h1>
            <p className="text-3xl text-[#4a2d4c] font-serif font-thin text-center" data-aos="zoom-in-up">- Find Your Ride -</p>
            <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                    <Tabs>
                        <TabList className="flex justify-between font-semibold px-10 lg:px-72 mb-8">
                            <Tab>Sports</Tab>
                            <Tab>Van</Tab>
                            <Tab>Truck</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {allData.filter((item) => item.category === 'sports').map((item) => (
                                    <Card item={item} key={item._id}></Card>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {allData.filter((item) => item.category === 'van').map((item) => (
                                    <Card item={item} key={item._id}></Card>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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