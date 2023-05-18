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
        <Tabs>
            <TabList>
                <Tab>sports</Tab>
                <Tab>van</Tab>
                <Tab>truck</Tab>
            </TabList>

            <TabPanel>
                {allData.filter((item) => item.category === 'sports').map((item) => (
                    <Card item={item} key={item._id}></Card>
                ))}
            </TabPanel>
            <TabPanel>
                {allData.filter((item) => item.category === 'van').map((item) => (
                    <Card item={item} key={item._id}></Card>
                ))}
            </TabPanel>
            <TabPanel>
                {allData.filter((item) => item.category === 'truck').map((item) => (
                    <Card item={item} key={item._id}></Card>
                ))}
            </TabPanel>
        </Tabs>
    );
};

export default ShopByCategory;