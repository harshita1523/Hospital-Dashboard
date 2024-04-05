import React from 'react';
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement, ArcElement, Tooltip, Legend, LineElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';


ChartJS.register(LineElement, CategoryScale, LinearScale,PointElement,ArcElement);

const Graph = () => {
  // Define categorical labels for the x-axis
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Generate random numerical data for the y-axis
  const data = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 100)); // Random data points between 0 and 100
  }

  // Define the chart data object
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Data Set',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    
  };
  const piechartData = {
    labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)', // Light red
        'rgba(54, 162, 235, 0.6)', // Light blue
        'rgba(255, 206, 86, 0.6)', // Light yellow
      ],
      hoverOffset: 4,
    },
  ],
};
  
  const piechartOptions = {
    // Set custom aspect ratio (optional)
    aspectRatio: 1,
    // Set legend configuration (optional)
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          // Configure legend labels (optional)
          color: 'black',
          boxWidth: 20,
          boxHeight: 10,
        },
      },
    },
  };
  
  return (
    <>
    <div style={{display:"flex",width:"65vw",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{height:"300px", width:"500px"}}>
        <Line data={chartData} options={chartOptions} />

        </div>
        <div style={{height:"300px", width:"300px",marginRight:"20px"} }>
        <Pie data={piechartData} />

        </div>

    </div>
        
    </>
    
  );
};

export default Graph;
