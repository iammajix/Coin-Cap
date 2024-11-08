import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';
import { Spin } from 'antd'
import React, { Fragment, PureComponent, useEffect, useState } from 'react';

export const LineChart = ({ chartData }) => {
    
  return (
    <Fragment>
            {/* <Spin spinning={loading} size={"large"} fullscreen/> */}
                <div>
                    <Line data={chartData} />
                    {/* <Line data={renderFarm()} /> */}
                </div>
    </Fragment>


  );
};