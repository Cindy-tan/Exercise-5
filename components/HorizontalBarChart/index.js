import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBar() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label:'Data 1',
                    data: [10, 5, 17, 34, 12, 4, 5],
                    borderColor: 'rgb(53,162, 235)',
                    backgroundColor: 'rgba(53,162, 235, 0.4)',
                },
                {
                    label:'Data 2',
                    data: [2, 5, 15, 20, 12, 9, 14],
                    borderColor: 'rgb(53,162, 235)',
                    backgroundColor: 'rgba(53,162, 25, 0.4)',
                },
                {
                    label:'Data 2',
                    data: [5, 14, 6, 23, 17, 7, 10],
                    borderColor: 'rgb(53,162, 235)',
                    backgroundColor: 'rgba(53,162, 150, 0.4)',
                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: { 
                legend: {
                    position:'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )

}