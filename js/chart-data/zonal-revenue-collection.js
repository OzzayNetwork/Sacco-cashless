//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function () {

    // Create the chart
    $('#ZonalRevenueCollection').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: 'transparent'
        },

        lang: {
            numericSymbols: ['k', 'm']
        },

        title: {
            text: null,
            style: {
                color: '#a5a8ad'
            }
        },

        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Revenue'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#a5a8ad'
                }
            }
        },

        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: true,
            layout: 'horizontal',
            verticalAlign: 'bottom',
            borderWidth: 0,
            backgroundColor: 'transparent',
            itemStyle: {
                color: '#696969',
                font: '600 10px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#000000',
                font: '600 10px "Muli", sans-serif'
            },
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'white',
                marker: {
                    enabled: false,
                }


            },
        },

        tooltip: {
               formatter: function () {

                var point = this.point,
                    s = '<span>KES'+Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + ' </span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            //Private collections
            name: 'Day',
            data: [
                {
                name: 'Mon',
                y: 5000,
                //color: '#e7c500' //yellow
            }, {
                //Pickup collections
                name: 'Tue',
                y: 11000
            }, {
                //Pickup collections
                name: 'Wed',
                y: 15000
            }, {
                //Pickup collections
                name: 'Thur',
                y: 12000
            }, {
                //Pickup collections
                name: 'Fri',
                y: 7000
            }, {
                //Pickup collections
                name: 'Sat',
                y: 4000
            }, {
                //Pickup collections
                name: 'Sun',
                y: 7000
            }]
        }]
    });
});
//========================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================