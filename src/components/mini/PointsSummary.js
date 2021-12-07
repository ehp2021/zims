import { useMoralis, useMoralisQuery } from "react-moralis";
import Chart from "react-google-charts";
import { useEffect } from 'react';
import moment from 'moment'


const PointsSummary = () => {
        const { user, Moralis, refetchUserData } = useMoralis();
        const PointsSummary = Moralis.Object.extend('PointsSummary');
        const pointsSummary = new PointsSummary();
        const { data, isLoading } = useMoralisQuery("PointsSummary", query =>
            query
            .descending('createdAt')
            .limit(50));



        useEffect(()=>{
            pointsSummary.set('points', user.attributes.points)
                    pointsSummary.set('user', user)
                    pointsSummary.save()
        },[user.attributes.points])

        useEffect(() => {
            refetchUserData();
        }, [isLoading]);

        return ( <div className = "points-summary-container">
            <Chart 

            height = '20rem'
            chartType = "AreaChart"
            loader = { <div> Loading Chart </div>}
                data = {
                    [
                        ['Time', 'Points'],
                        ...data.filter(data => (data.attributes.user.id === user.id))
                        .reverse()
                        .map((data) => [moment(data.attributes.updatedAt).format('MM/DD h a'), data.attributes.points])
                    ]
                }
                options = {
                    {
                        title: '',
                        legend: { position: 'top' },
                        hAxis: { title: 'Timestamp', titleTextStyle: { color: '#4FD1C5' }, slantedText: true, slantedTextAngle: 80 },
                        vAxis: { title: 'Points', titleTextStyle: { color: '#4FD1C5' }, minValue: 100000 },
                        chartArea: { width: '60%', height: '50%' }
                    }
                }
                /> </div >
            )
        }

        export default PointsSummary;