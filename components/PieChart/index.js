import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label:'# of Votes',
                    data: [10, 6, 15, 20, 12, 4],
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(23, 162, 75)',
                        'rgb(53, 32, 235)',
                        'rgb(53, 162, 5)',
                        'rgb(123, 2, 25)',
                        'rgb(32, 32, 24)'
                    ],
                    backgroundColor: [
                        'rgba(53,162, 235, 0.4)',
                        'rgba(23, 162, 75 0.4)',
                        'rgba(53, 32, 235, 0.4)',
                        'rgba(53, 162, 5, 0.4)',
                        'rgba((123, 2, 25, 0.4)',
                        'rgba(32, 32, 24, 0.4)'
                    ],
                }
            ]
        })
        setChartOptions({
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
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )

}