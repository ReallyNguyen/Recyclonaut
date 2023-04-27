import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './PieChart.module.css'
import Image from 'next/image';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export function PieChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Textiles", "Plastics", "Metals", "Glass", "Food", "Paper", "Wood", "Other"],
            datasets: [
                {
                    data: [9, 12.8, 9.1, 4.5, 14.6, 27, 6.2, 16.8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(81, 182, 101, 0.2)',
                        'rgba(200, 76, 9, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 179, 189, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(81, 182, 101, 1)',
                        'rgba(200, 76, 9, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(201, 179, 189, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: "Global Waste Generation (%)",
                    color: 'white'
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

  return(
        <div className={styles.container}>
            <Image className={styles.earth} src={'/story/earth.png'} width={250} height={250} />
            <div className={styles.chartContainer}>
                <Pie data={chartData} options={chartOptions}/>
            </div>
        </div>
  )
}
