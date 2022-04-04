import React from 'react';
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useChartData from '../Hooks/UseChartData';
import './Chart.css'

const Chart = () => {
    const [data] = useChartData()
    return (
        <div className='chart-contaainer'>
            <div className='charts'>
                <h1 className='chart-title'>Monthly Sell</h1>
                <LineChart className='chart-data'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="sell" stroke="teal" />

                </LineChart>
            </div>


            <div className='charts'>
                <h1 className='chart-title'>Investment vs Revenue</h1>
                <AreaChart className='chart-data'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>

            <div className='charts'>
                <h1 className='chart-title'>Investment vs Revenue</h1>
                <BarChart className='chart-data'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;