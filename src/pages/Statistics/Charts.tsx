import React, {useEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import {EChartsOption} from "echarts";

export const Page: React.FC = () => {

	useEffect(() => {
		console.log(ReactECharts)
	}, [])


	const options: EChartsOption = {
		tooltip: {
			trigger: 'item',
			formatter: `{b}: $\{c} ({d}%)`
		},
		series: [
			{
				type: 'pie',
				radius: ['55%', '95%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '20',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{value: 1048, name: '搜索引擎'},
					{value: 735, name: '直接访问'},
					{value: 580, name: '邮件营销'},
					{value: 484, name: '联盟广告'},
					{value: 300, name: '视频广告'}
				]
			}
		]
	};
	return <ReactECharts option={options}/>;
};