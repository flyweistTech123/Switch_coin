import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';



function Chartsbit() {

    const [series, setSeries] = useState([
        { x: 1327359600000, y: 30.95 },
        { x: 1327446000000, y: 31.34 },
        { x: 1327532400000, y: 31.18 },
    ]);
    const [options, setOptions] = useState({
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '',
                label: {
                    show: true,
                    text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }],
            xaxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
    });



    const [selection, setSelection] = useState('one_year');

    const updateData = (timeline) => {
        setSelection(timeline);

        switch (timeline) {
            case 'one_month':
                zoomChart(new Date('28 Jan 2013').getTime(), new Date('27 Feb 2013').getTime());
                break;
            case 'six_months':
                zoomChart(new Date('27 Sep 2012').getTime(), new Date('27 Feb 2013').getTime());
                break;
            case 'one_year':
                zoomChart(new Date('27 Feb 2012').getTime(), new Date('27 Feb 2013').getTime());
                break;
            case 'ytd':
                zoomChart(new Date('01 Jan 2013').getTime(), new Date('27 Feb 2013').getTime());
                break;
            case 'all':
                zoomChart(new Date('23 Jan 2012').getTime(), new Date('27 Feb 2013').getTime());
                break;
            default:
        }
    };

    const zoomChart = (start, end) => {
        ApexCharts.exec(
            'area-datetime',
            'zoomX',
            start,
            end
        );
    };



    return (
        <div>
            <div id="chart">
                <div className="toolbar">
                    <button
                        id="one_month"
                        onClick={() => updateData('one_month')}
                        className={selection === 'one_month' ? 'active' : ''}
                    >
                        1M
                    </button>
                    <button
                        id="six_months"
                        onClick={() => updateData('six_months')}
                        className={selection === 'six_months' ? 'active' : ''}
                    >
                        6M
                    </button>
                    <button
                        id="one_year"
                        onClick={() => updateData('one_year')}
                        className={selection === 'one_year' ? 'active' : ''}
                    >
                        1Y
                    </button>
                    <button
                        id="ytd"
                        onClick={() => updateData('ytd')}
                        className={selection === 'ytd' ? 'active' : ''}
                    >
                        YTD
                    </button>
                    <button
                        id="all"
                        onClick={() => updateData('all')}
                        className={selection === 'all' ? 'active' : ''}
                    >
                        ALL
                    </button>
                </div>

                <div id="chart-timeline">
                    <ReactApexChart options={options} series={series} type="area" height={350} />
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};




export default Chartsbit