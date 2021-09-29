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
	const options: EChartsOption = {
		title: {
			text: 'Referer of a Website',
			left: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: `{b}: $\{c} ({d}%)`
		},
		series: [
			{
				type: 'pie',
				radius: ['30%', '55%'],
				avoidLabelOverlap: true,
				itemStyle: {
					borderRadius: 4
				},
				data: [
					{value: 1048, name: 'Search Engine'},
					{value: 735, name: 'Direct'},
					{value: 580, name: 'Email'},
					{value: 484, name: 'Union Ads'},
					{value: 300, name: 'Video Ads'}
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 20,
						shadowOffsetX: 10,
						shadowColor: 'rgba(0, 0, 0, 0.8)'
					}
				},
				labelLine: {
					show: false
				}
			}
		]
	};

	return <ReactECharts option={options}/>;
}

// reading article, last 5 days of work, has been resigned on 2021/09/23
//reading 学习脑科学 finished
// reading <医学通识>