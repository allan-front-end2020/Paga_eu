import ApexChart from "react-apexcharts";

function Chart() {
  const options = {
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: [{
        
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
          },
          {
      }],
    },
  ];

  return (
    <>
      <ApexChart options={options}
       series={series}
       type="candlestick"
       width={640}
       height={480}
       />
    </>
  );
}

export default Chart;
