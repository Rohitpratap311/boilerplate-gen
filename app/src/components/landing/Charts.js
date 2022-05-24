import React, { useEffect, useRef } from 'react';

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Images
import sherwin from "./images/sherwin.jpg"
import carol from "./images/carol.jpeg"
import princy from "./images/princy.jpeg"
import maam from "./images/maam.jpg"

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
        feature: 'Closed Domain Question Answering',
        detected: 201
      },
      {
        feature: 'Closed Domain Question Generation',
        detected: 161
      },
      {
        feature: 'Document Summarization',
        detected: 121
      },
      {
        feature: 'Question Bank Generation',
        detected: 101
      },
      {
        feature: 'Open Domain Question Answering',
        detected: 138
      },
      {
        feature: 'Question Paper Generation',
        detected: 98
      }
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
    }
  }, [])

  return (
    <div style={{ maxWidth: '90vw', overflowX: 'auto' }}>
      <div style={{ width: '500px', height: '350px' }} ref={pieChart} />
    </div>
  );
}



const WordChart = () => {
  const wordChart = useRef();

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(wordChart.current, am4plugins_wordCloud.WordCloud);
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.accuracy = 4;
    series.step = 15;
    series.rotationThreshold = 0.7;
    series.maxCount = 200;
    series.minWordLength = 2;
    series.labels.template.margin(4,4,4,4);
    series.maxFontSize = am4core.percent(30);

    series.text = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son.";

    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {}; // makes it loop

    //series.labelsContainer.rotation = 45;
    series.angles = [0,-90];
    series.fontWeight = "700"

    setInterval(function () {
      series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
    }, 10000)

    wordChart.current = chart;

    return () => {
      wordChart.current.dispose();
    }
  }, [])

  return (
    <div style={{ maxWidth: '90vw', overflowX: 'auto' }}>
      <div style={{ width: '1125px', height: '400px' }} ref={wordChart} />
    </div>
  );
}



const TeamChart = () => {
  const teamChart = useRef();

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes 
    
    var insterfaceColors = new am4core.InterfaceColorSet();
    var lineColor = insterfaceColors.getFor("background");



    let chart = am4core.create(teamChart.current, am4plugins_timeline.CurveChart);
    chart.curveContainer.padding(20,20,20,20);

    chart.data = [{ name: "CAROL SEBASTIAN", file: carol, track: 1, value: 680 }, { name: "PRINCETON BARETTO", file: princy, track: 2, value: 672 }, { name: "SHERWIN PILLAI", file: sherwin, track: 3, value: 685 }, { name: "SUPRIYA  KAMOJI", file: maam, track: 4, value: 693 }];

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = 5;
    categoryAxis.renderer.radius = 145;
    categoryAxis.renderer.line.stroke = lineColor;
    categoryAxis.renderer.line.strokeWidth = 5;
    categoryAxis.renderer.line.strokeOpacity = 1;

    var labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.fill = lineColor;
    labelTemplate.fontWeight = 600;
    labelTemplate.fontSize = 11;

    var gridTemplate = categoryAxis.renderer.grid.template;
    gridTemplate.strokeWidth = 1;
    gridTemplate.strokeOpacity = 1;
    gridTemplate.stroke = lineColor;
    gridTemplate.location = 0;
    gridTemplate.above = true;

    var fillTemplate = categoryAxis.renderer.axisFills.template;
    fillTemplate.disabled = false;
    fillTemplate.fill = am4core.color("#b84f49");
    fillTemplate.fillOpacity = 1;

    categoryAxis.fillRule = function(dataItem) {
        dataItem.axisFill.__disabled = false;
        dataItem.axisFill.opacity = 1;
    }

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 1000;
    valueAxis.renderer.points = [{ x: 0, y: -100 }, { x: 200, y: -100 }, { x: 200, y: 100 }, { x: 0, y: 100 }, { x: -200, y: 100 }, { x: -200, y: -100 }, { x: 0, y: -100 }];
    valueAxis.renderer.polyspline.tensionX = 0.4;
    valueAxis.renderer.line.strokeOpacity = 0.1;
    valueAxis.renderer.line.strokeWidth = 10;
    valueAxis.renderer.maxLabelPosition = 0.98;
    valueAxis.renderer.minLabelPosition = 0.02;

    // Flag bullet
    var flagRange = valueAxis.axisRanges.create();
    flagRange.value = 0;
    var flagBullet = new am4plugins_bullets.FlagBullet();
    flagBullet.label.text = "TEAM LASAGNE";
    flagRange.bullet = flagBullet;
    //flagBullet.dy = -145;
    flagBullet.adapter.add("dy", function (dy, target) {
        return -categoryAxis.renderer.radius;
    })

    var valueLabelTemplate = valueAxis.renderer.labels.template;
    valueLabelTemplate.fill = lineColor;
    valueLabelTemplate.fontSize = 8;
    valueLabelTemplate.fontWeight = 600;
    valueLabelTemplate.fillOpacity = 1;
    valueLabelTemplate.horizontalCenter = "right";
    valueLabelTemplate.verticalCenter = "bottom";
    valueLabelTemplate.padding(0, 10, 0, 0);
    valueLabelTemplate.adapter.add("rotation", function (rotation, target) {
        var value = target.dataItem.value;
        var position = valueAxis.valueToPosition(value);

        var angle = valueAxis.renderer.positionToAngle(position);
        return angle;
    })

    var valueGridTemplate = valueAxis.renderer.grid.template;
    valueGridTemplate.strokeOpacity = 0.3;
    valueGridTemplate.stroke = lineColor;


    // SERIES
    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.dataFields.categoryY = "name";
    series.stroke = lineColor;
    series.fill = lineColor;
    series.dataFields.valueX = "value";
    series.defaultState.transitionDuration = 4000;

    var columnTemplate = series.columns.template;
    columnTemplate.fill = lineColor;
    columnTemplate.strokeOpacity = 0;
    columnTemplate.fillOpacity = 0.3;
    columnTemplate.height = am4core.percent(100);

    var hoverState = columnTemplate.states.create("hover");
    hoverState.properties.fillOpacity = 0.9;

    var bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = lineColor;

    // LEGEND
    chart.legend = new am4charts.Legend();
    chart.legend.data = chart.data;
    chart.legend.parent = chart.curveContainer;
    chart.legend.width = 360;
    chart.legend.horizontalCenter = "middle";
    chart.legend.verticalCenter = "middle";

    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 30;
    markerTemplate.height = 30;

    chart.legend.itemContainers.template.events.on("over", function (event) {
        series.dataItems.each(function (dataItem) {
            if (dataItem.dataContext === event.target.dataItem.dataContext) {
                dataItem.column.isHover = true;
            }
            else {
                dataItem.column.isHover = false;
            }
        })
    })

    chart.legend.itemContainers.template.events.on("hit", function (event) {
        series.dataItems.each(function (dataItem) {
            if (dataItem.dataContext === event.target.dataItem.dataContext) {
                if (dataItem.visible) {
                    dataItem.hide(1000, 0, 0, ["valueX"]);
                }
                else {
                    dataItem.show(1000, 0, ["valueX"]);
                }
            }
        })
    })

    var rect = markerTemplate.children.getIndex(0);
    rect.cornerRadius(20, 20, 20, 20);

    var as = markerTemplate.states.create("active");
    as.properties.opacity = 0.5;

    var image = markerTemplate.createChild(am4core.Image)
    image.propertyFields.href = "file";
    image.width = 30;
    image.height = 30;
    image.filters.push(new am4core.DesaturateFilter());

    image.events.on("inited", function (event) {
        var image = event.target;
        var parent = image.parent;
        image.mask = parent.children.getIndex(0);
    })

    teamChart.current = chart;

    return () => {
      teamChart.current.dispose();
    }
  }, [])

  return (
    <div style={{ maxWidth: '90vw', overflowX: 'auto' }}>
      <div style={{ width: '1050px', height: '600px' }} ref={teamChart} />
    </div>
  );
}




export {
  PieChart,
  WordChart,
  TeamChart
};