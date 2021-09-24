import React, {useContext} from "react";
import ReactECharts from 'echarts-for-react';
import {EChartsOption} from "echarts";
import _ from 'lodash';
import {CollectedDataContext} from "../../Provider/CollectedDataProvider";

export const Charts: React.FC = () => {

	const {collectedData} = useContext(CollectedDataContext) as ContextType

	// collectedData.map(r=>({date:r.date, amount:r.amount}))
	// below is the simplified way to get the value we want
	console.log(collectedData.map(c => _.pick(c, ['amount', 'date', 'tagsId', 'category'])))
	console.log(`I'm rendered !`)
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
}