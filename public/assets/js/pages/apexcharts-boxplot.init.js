function rgbToHex(t){const e=t.match(/\d+/g);if(3===e.length)var[o,r,a]=e.map(Number);return o=Math.max(0,Math.min(255,o)),r=Math.max(0,Math.min(255,r)),a=Math.max(0,Math.min(255,a)),`#${o.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`.toUpperCase()}function getChartColorsArray(t){const e=document.getElementById(t);if(e){const o=e.dataset.chartColors;if(o)return JSON.parse(o).map((t=>{const e=t.replace(/\s/g,"");if(e.includes("#"))return e;{const t=document.querySelector(e);if(t)return window.getComputedStyle(t).backgroundColor||e;{const t=document.createElement("div");t.className=e,document.body.appendChild(t);const o=window.getComputedStyle(t);return(o.backgroundColor.includes("#")?o.backgroundColor:rgbToHex(o.backgroundColor))||e}}}));console.warn(`chart-colors attribute not found on: ${t}`)}}var chart,options={series:[{type:"boxPlot",data:[{x:"Jan 2015",y:[54,66,69,75,88]},{x:"Jan 2016",y:[43,65,69,76,81]},{x:"Jan 2017",y:[31,39,45,51,59]},{x:"Jan 2018",y:[39,46,55,65,71]},{x:"Jan 2019",y:[29,31,35,39,44]},{x:"Jan 2020",y:[41,49,58,61,67]},{x:"Jan 2021",y:[54,59,66,71,88]}]}],chart:{type:"boxPlot",height:350},plotOptions:{boxPlot:{colors:{upper:getChartColorsArray("basicBoxplot")[0],lower:getChartColorsArray("basicBoxplot")[1]}}}};(chart=new ApexCharts(document.querySelector("#basicBoxplot"),options)).render(),options={series:[{name:"box",type:"boxPlot",data:[{x:new Date("2017-01-01").getTime(),y:[54,66,69,75,88]},{x:new Date("2018-01-01").getTime(),y:[43,65,69,76,81]},{x:new Date("2019-01-01").getTime(),y:[31,39,45,51,59]},{x:new Date("2020-01-01").getTime(),y:[39,46,55,65,71]},{x:new Date("2021-01-01").getTime(),y:[29,31,35,39,44]}]},{name:"outliers",type:"scatter",data:[{x:new Date("2017-01-01").getTime(),y:32},{x:new Date("2018-01-01").getTime(),y:25},{x:new Date("2019-01-01").getTime(),y:64},{x:new Date("2020-01-01").getTime(),y:27},{x:new Date("2020-01-01").getTime(),y:78},{x:new Date("2021-01-01").getTime(),y:15}]}],chart:{type:"boxPlot",height:350},plotOptions:{boxPlot:{colors:{upper:getChartColorsArray("boxplotScatterChart")[0],lower:getChartColorsArray("boxplotScatterChart")[1]}}},xaxis:{type:"datetime",tooltip:{formatter:function(t){return new Date(t).getFullYear()}}},tooltip:{shared:!1,intersect:!0}},(chart=new ApexCharts(document.querySelector("#boxplotScatterChart"),options)).render(),options={series:[{data:[{x:"Category A",y:[54,66,69,75,88]},{x:"Category B",y:[43,65,69,76,81]},{x:"Category C",y:[31,39,45,51,59]},{x:"Category D",y:[39,46,55,65,71]},{x:"Category E",y:[29,31,35,39,44]},{x:"Category F",y:[41,49,58,61,67]},{x:"Category G",y:[54,59,66,71,88]}]}],chart:{type:"boxPlot",height:350},plotOptions:{bar:{horizontal:!0,barHeight:"50%"},boxPlot:{colors:{upper:getChartColorsArray("boxplotHorizontalChart")[0],lower:getChartColorsArray("boxplotHorizontalChart")[1]}}}},(chart=new ApexCharts(document.querySelector("#boxplotHorizontalChart"),options)).render();