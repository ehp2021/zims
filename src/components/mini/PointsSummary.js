import { useMoralis, useMoralisQuery } from "react-moralis";
import Chart from "react-google-charts";

const PointsSummary = () => {
  const { user, setUserData, Moralis } = useMoralis();
  const Timestamp = Moralis.Object.extend('Timestamp');
  const timeStamp = new Timestamp();
  const { data, error, isLoading } = useMoralisQuery("Timestamp");

  // https://react-google-charts.com/google-charts-chart-editor

  return (
    <div className="points-summary-container">
      
      <Chart
        width={400}
        height={'250px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={
          [
            ['Timestamp', 'Total Points'],
            [2020, 100],
            [2021, 250]
            // [ (data !==null && data.map((timeStamp) => moment(timeStamp.attributes.createdAt.toString()).format('MM/DD/YYYY, h:mm:ss a')), 
            //   user.map((user) => user.attributes.points)],
          ]}
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