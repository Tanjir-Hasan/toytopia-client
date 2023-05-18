import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const ShopByCategory = () => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
                <Tabs>
                    <TabList className="flex justify-between px-10 lg:px-72">
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
    );
};

export default ShopByCategory;