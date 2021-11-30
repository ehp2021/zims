import { useMoralis, useMoralisQuery } from "react-moralis";
import Chart from "react-google-charts";
import { useState, useEffect } from 'react';
import { SettingsOutlined } from "@material-ui/icons";


const PointsSummary = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const PointsSummary = Moralis.Object.extend('PointsSummary');
  const pointsSummary = new PointsSummary();
  const { data, error, isLoading } = useMoralisQuery("PointsSummary");
  const [reload,setReload] = useState(true);
  const [chartData,setChartData] = useState(data)
  // https://react-google-charts.com/google-charts-chart-editor


  useEffect(()=>{
    let interval = setInterval(()=>{
      setReload(state=>!state)
      // console.log(user.attributes.points, "line 19")
      pointsSummary.set('points',user.attributes.points)
      pointsSummary.set('user',user)
      pointsSummary.save()
      setChartData(data
        .filter(data => (data.attributes.user.id === user.id))
        // .map(data=>[data.attributes.createdAt,data.attributes.points])
        // .map(data => data.attributes.points)
        )
      console.log(chartData, "line 29 chart data array")
      //console.log()
      // setTimePoint(data.attributes.createdAt)
    }, (120000))
    return()=> clearInterval(interval)
  },[])

  // const xaxis1 = chartData ? chartData[chartData.length-1].attributes.createdAt : Date.now()
  // const yaxis1 = chartData ? chartData[chartData.length-1].attributes.points : 0
  // const xaxis2 = chartData ? chartData[chartData.length-10].attributes.createdAt : Date.now()
  // const yaxis2 = chartData ? chartData[chartData.length-10].attributes.points : 0

  return (
    <div className="points-summary-container">
      
      <Chart
        width={400}
        height={'250px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={
          [
            ['Time', 'Points'],
            [2020, 201],
            [2021, 2200]
            // [xaxis2, yaxis2],
            // [xaxis1, yaxis1]

          ]
          //  chartData.map((data)=>[data.attributes.createdAt, data.attributes.points])
          }
        options={{
          title: 'Points Summary',
          hAxis: { title: 'Timestamp', titleTextStyle: { color: '#4FD1C5' } },
          vAxis: { minValue: 0 },
          chartArea: { width: '60%', height: '70%' }
        }}
      />
    </div>
  )
}

export default PointsSummary;

{/* {data !==null && 
										<div>{data
											// .slice(0, 10)
											.map((timeStamp) => {
											return (
													<h3 key={timeStamp.attributes.id}>{moment(timeStamp.attributes.createdAt.toString()).format('MM/DD/YYYY, h:mm:ss a')}</h3>
												)}
										)}
										</div>
									} */}