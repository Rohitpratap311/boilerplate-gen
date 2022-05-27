import React, { useEffect, useRef } from "react";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */

const PieChart = () => {
	const pieChart = useRef();

	useEffect(() => {
		// Themes begin
		am4core.useTheme(am4themes_dark);
		am4core.useTheme(am4themes_animated);
		// Themes end

		let chart = am4core.create(pieChart.current, am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		chart.data = [
			{
				feature: "Web Development",
				detected: 201,
			},
			{
				feature: "Mobile Development",
				detected: 161,
			},
			{
				feature: "AR/VR Reality Platform",
				detected: 69,
			},
			{
				feature: "Big Data using AI bots",
				detected: 80,
			},
		];

		chart.innerRadius = am4core.percent(40);
		chart.depth = 120;

		chart.legend = new am4charts.Legend();

		let series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "detected";
		series.dataFields.depthValue = "detected";
		series.dataFields.category = "feature";
		series.slices.template.cornerRadius = 5;
		series.colors.step = 3;

		pieChart.current = chart;

		return () => {
			pieChart.current.dispose();
		};
	}, []);

	return (
		<div style={{ maxWidth: "90vw", overflowX: "auto" }}>
			<div style={{ width: "500px", height: "350px" }} ref={pieChart} />
		</div>
	);
};

const WordChart = () => {
	const wordChart = useRef();

	useEffect(() => {
		// Themes begin
		am4core.useTheme(am4themes_dark);
		am4core.useTheme(am4themes_animated);
		// Themes end

		let chart = am4core.create(
			wordChart.current,
			am4plugins_wordCloud.WordCloud
		);
		var series = chart.series.push(
			new am4plugins_wordCloud.WordCloudSeries()
		);

		series.accuracy = 4;
		series.step = 15;
		series.rotationThreshold = 0.7;
		series.maxCount = 200;
		series.minWordLength = 2;
		series.labels.template.margin(4, 4, 4, 4);
		series.maxFontSize = am4core.percent(30);

		series.text = "web application build native apps cross platform UI toolkit that targets the mobile, web and desktop form factors on Android, iOS, macOS, Windows. Build a web application strong cross-platform framework with modern architecture. A developer platform for building all kinds of web, mobile and desktop applications across different frameworks based on the requirement which will also showcase the basic integration between frontend and backend of the application. You must build an application that is innovative using a layered approach with Multi-Tenancy, Modular Design, and well-documented with Solid Principles to support web applications. Implement best practices and principles Participants have the leniency to develop some of these new features and technologies for the brownie points GO Language for the IT infrastructure Implementing multilingual feature";

		series.colors = new am4core.ColorSet();
		series.colors.passOptions = {}; // makes it loop

		//series.labelsContainer.rotation = 45;
		series.angles = [0, -90];
		series.fontWeight = "700";

		setInterval(function () {
			series.dataItems
				.getIndex(
					Math.round(Math.random() * (series.dataItems.length - 1))
				)
				.setValue("value", Math.round(Math.random() * 10));
		}, 10000);

		wordChart.current = chart;

		return () => {
			wordChart.current.dispose();
		};
	}, []);

	return (
		<div style={{ maxWidth: "90vw", overflowX: "auto" }}>
			<div style={{ width: "1125px", height: "400px" }} ref={wordChart} />
		</div>
	);
};

export { PieChart, WordChart };
