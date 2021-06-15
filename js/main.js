$(window).on('load', function() {

    // new WOW().init();

    //-------------------------------------------------------
    //data representation functions
    //-------------------------------------------------------

    //collection trends
    var diff = $('.trend h4').text();
    //		diff=diff.replace(',', '');
    var count = (diff.match(/,/g) || []).length;

    var i;
    count = count + 1;
    for (i = 0; i < count; i++) {
        diff = diff.replace(',', '')
    }

    diff = parseInt(diff);

    if (diff > 0) {
        $('.trend h4').addClass('text-success');
        $('.trend i').addClass(' zmdi-trending-up');
    }

    if (diff < 0) {
        $('.trend h4').addClass('text-danger');
        $('.trend i').addClass('zmdi-trending-down');
    }

    if (diff == 0) {
        $('.trend h4').addClass('text-info');
        $('.trend i').addClass('zmdi-dot-circle');
    }


    //	for the months

    var mon_diff = $('.month-trend h4').text();
    //		diff=diff.replace(',', '');
    var count = (mon_diff.match(/,/g) || []).length;

    var i;
    count = count + 1;
    for (i = 0; i < count; i++) {
        mon_diff = mon_diff.replace(',', '')
    }

    mon_diff = parseInt(mon_diff);

    if (mon_diff > 0) {
        $('.month-trend h4').addClass('text-success');
        $('.month-trend i').addClass(' zmdi-trending-up');
    }

    if (mon_diff < 0) {
        $('.month-trend h4').addClass('text-danger');
        $('.month-trend i').addClass('zmdi-trending-down');
    }

    if (mon_diff == 0) {
        $('.month-trend h4').addClass('text-info');
        $('.month-trend i').addClass('zmdi-dot-circle');
    }

    //changing graph
    $('#select-graph').on('change', function() {
        var selected = $(this).val();
        //		alert(selected);
        if (selected == "Detailed") {
            $('#revenuestream-annual').removeClass('d-none');
            $('#substreams').addClass('d-none');
        } else {
            $('#revenuestream-annual').addClass('d-none');
            $('#substreams').removeClass('d-none');

        }

    });



    //	for the months


    //collection trends

    //-------------------------------------------------------
    //data representation functions
    //-------------------------------------------------------


    //=======================================================
    /*the streams progress bars*/
    //=======================================================
    stream_calc();

    function stream_calc() {
        var stream_total;

        var today_stream_total = $(".today-collections h4").text();
        var count = (today_stream_total.match(/,/g) || []).length;

        var i;
        count = count + 1;
        for (i = 0; i < count; i++) {
            today_stream_total = today_stream_total.replace(',', '')
        }

        $('.the-streams .form-group').each(function(index) {
            var stream_collection = $(this).children("label").children("span").eq(1).text();
            var stream_name = $(this).children("label").children("span").eq(0).text();
            //			alert(stream_name);
            var count = (stream_collection.match(/,/g) || []).length;
            //			alert(count);
            var i;
            count = count;
            for (i = 0; i < count; i++) {
                stream_collection = stream_collection.replace(',', '');
            }
            stream_collection = parseInt(stream_collection);

            stream_total = stream_total + stream_collection;

            var percentage = parseInt((stream_collection * 100) / today_stream_total);
            //			alert(percentage);
            var progress_value = percentage + "%";
            $(this).attr('data-original-title', progress_value + " (Click to view " + stream_name + " Collection summary)");

            var the_bar = $(this).children(".progress").children(".progress-bar");
            the_bar.addClass("added");

            the_bar.css("width", progress_value);

            //			progress color controller


            if (percentage > 0) {


                if (percentage < 15) {
                    the_bar.addClass('progress-bar-dangger');
                }
            }


            if (percentage > 14) {

                if (percentage < 40) {
                    the_bar.addClass('progress-bar-warning');
                }
            }

            if (percentage > 39) {

                if (percentage < 75) {
                    the_bar.addClass('progress-bar-info');
                }
            }

            if (percentage > 74) {

                if (percentage < 101) {
                    the_bar.addClass('progress-bar-success');
                }
            }

            //			progress color controller




        });
        //		alert(today_stream_total);
    }


    //=======================================================
    /*the streams progress bars*/
    //=======================================================

    // var to_day=moment().format('ddd, MMMM Do YYYY');
    // $('.date-range-text').text(to_day);
    // $('.today').text(moment().format('LL')); 

    // $('.year-abr').text(moment().format('YY'));
    // $('.this-year').text(moment().format('YYYY'));
    // $('.this-month').text(moment().format('MMMM'));
    // $('.month-abr').text(moment().format('MMM'));


    // the date thing
    // write your date codes here

    var start = moment();
    var end = moment();

    // today and back

    $(function() {

        function cb(start, end) {
            // $('#today').html(start.format('MMMM D, YYYY'));

            if (end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
                $('#reportrange span').html(start.format('MMMM D, YYYY'));
                $('#today').html(start.format('MMMM D, YYYY'));

                if (moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
                    // if todays date is today
                    $('#date-reset').addClass('d-none');
                } else {
                    $('#date-reset').removeClass('d-none');
                }



            } else {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                $('#today').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                $('#date-reset').removeClass('d-none');
            }

        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb, );

        cb(start, end);

    });

    // today and forward

    $(function() {

        function cb(start, end) {
            // $('#today').html(start.format('MMMM D, YYYY'));

            if (end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
                $('#reportrange span').html(start.format('MMMM D, YYYY'));
                $('#today').html(start.format('MMMM D, YYYY'));

                if (moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
                    // if todays date is today
                    $('#date-reset').addClass('d-none');
                } else {
                    $('#date-reset').removeClass('d-none');
                }



            } else {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                $('#today').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                $('#date-reset').removeClass('d-none');
            }

        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb, );

        cb(start, end);

    });

    //today and forward
    $(function() {

        var start = moment();
        var end = moment().add(1, 'days');
        var today = moment();

        function cb(start, end) {
            $('#todayForward span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
        }

        $('#todayForward').daterangepicker({
            startDate: start,
            endDate: end,
            minDate: today,
            ranges: {
                'Today': [moment(), moment()],
                //    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Next 7 Days': [moment(), moment().add(6, 'days')],
                'Next 30 Days': [moment(), moment().add(29, 'days')],
                'This Month': [moment(), moment().endOf('month')],
                'Next Month': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);

    });
    //today and forward

    // today back
    //today and forward
    $(function() {

        var start = moment().startOf('month');
        var end = moment().endOf('month');
        var today = moment();

        function cb(start, end) {
            $('#todayBack span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
        }

        $('#todayBack').daterangepicker({
            startDate: start,
            endDate: end,
            maxDate: today,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);

    });
    //today and forward

    // todayback


    //a select that you can add items with

    function addNewClone() {

        //the button for adding a button for adding a new item
        var theAddButton = '<a href="#"  class="btn btn-info btn--icon-text btn-add-new btn-sm ml-3" data-toggle="modal" data-target="#addNewItem"><i class="zmdi zmdi-plus" ></i>Add customer</a>'
            // var btnToclone=$('.btn-add-new');
            // btnToclone.clone().appendTo(".no-results");

        $(".no-results").append(theAddButton);
        // theAddButton.appendTo(".no-results");
        $('.no-results').addClass('theNewOneIsHere');

    }



    $('body').on('keyup', '.searchPicker .bs-searchbox input', function() {
        var theParent = $(this).parent().siblings().children().children();
        if (theParent.hasClass('theNewOneIsHere')) {
            // 
        } else {
            addNewClone();

        }
    });
    //a select that you can add items with




    //	alert(moment().format('YY'));


    //	custom day time picker
    $('#daily_date').on('change', function() {
        var dated = $(this).val();
        var dated = (moment(dated).format('LL'));
        $('.the_day').text(dated);
        //		alert(moment(dated).format('LL'));
    });
    $('.table-ranger').on('change', function() {

    });
    //	increase wigdth when value changes
    function Expand(obj) {
        if (!obj.savesize) obj.savesize = obj.size;
        obj.size = Math.max(obj.savesize, obj.value.length);
    }



    //	date ranger functions

    $(".date-range")[0] && $(".date-range").flatpickr({
        enableTime: !1,
        altInput: true,
        mode: "range",
        altFormat: "j-F, Y",
        dateFormat: "Y-m-d",
        //   maxDate: moment().subtract(1, 'months').format('MMM YYYY'),
        minDate: moment().subtract(1, 'months').format('MMM YYYY'),


        nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
        prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',

        //		write a function here when making changes in regards to date ranger

        onClose: function(selectedDates, dateStr, instance) {
            var therange = $('#date_ranger').val();

            //selected date range
            var dates = therange.split(' to ');

            //date in the format 2020-mm-dd
            var date1 = dates[0];
            var date2 = dates[1];

            // date in the format March 19, 2020
            var date1read = moment(date1).format('ddd, MMMM Do YYYY');
            var date2read = moment(date2).format('ddd, MMMM Do YYYY');

            //======= write custom functions bellow once a change has been made to the date range=======

            //function to update text output with new date range
            if (date1read == date2read) {
                $('.date-range-text').text(date1read);
            } else {
                $('.date-range-text').text(date1read + ' To ' + date2read);
            }



        }
    });
    //	full screen table


    $("body").on("click", "[data-table-action]", function(a) {
        a.preventDefault();
        var b = $(this).data("table-action");
        if ("print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"), "fullscreen" === b) {
            var c = $(this).parent().parent().parent().parent().parent().parent().parent()
            c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"), $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"), $("body").addClass("data-table-toggled"))
        }
    });
    //full screen controller


    //	datatable navigation styling
    $('.nav-link').on('click', function() {
        event.preventDefault();
        $(this).addClass('active').parent().siblings().children('.nav-link').removeClass('active');
    });

    // $('td').eq(0).on('click', function(){
    // 	$('.modal-body-header').children('span').html("nothing");

    // 	var html_data=$('this').siblings().index(6).text();
    // 	alert(html_data);
    // });



    $('.show-all').on('click', function() {
        $('.table-all').removeClass('d-none').siblings().addClass('d-none');
    });

    $('.show-compliant').on('click', function() {
        $('.table-compliant').removeClass('d-none').siblings().addClass('d-none');
    });

    $('.show-uncompliant').on('click', function() {
        $('.table-uncompliant').removeClass('d-none').siblings().addClass('d-none');
    });

    $('.show-penalty').on('click', function() {
        $('.table-penalty').removeClass('d-none').siblings().addClass('d-none');
    });



});

checkForImage();

function checkForImage() {
    $('.modal-car img').each(function() {

        var the_img = $(this).attr('src');
        //    alert(the_img);
        if (the_img !== "#") {
            $(this).parent().addClass('no-img');

        }
        if (the_img === "#") {
            $(this).parent().removeClass('no-img');
        }

    });
}

$('.modal-car span').on('click', function() {
    $(this).addClass('selected');
    $(this).parent().siblings().children('span').removeClass('selected');
    var newUrl = $(this).children('img').attr('src');
    if (newUrl !== "#") {
        $('.modal-car-img img').attr('src', newUrl);
        $('.modal-car-img').addClass('no-img');

    } else {
        $('.modal-car-img img').attr('src', '#');
        $('.modal-car-img').removeClass('no-img');

    }

});

//File Picker JS
$(".form-attach input").on('change', function() {

    var file = $(this).val();
    var fullPath = $(this).val();

    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }

    if (file == "") {
        alert("No files selected");
        $(this).parent().removeClass("activated");
        $(this).parent().children("small").text("No file selected");
        $(this).parent().children("small").addClass("text-danger").removeClass("text-success");


    } else {
        $(this).parent().addClass("activated");
        $(this).parent().children("small").text("File (" + filename + ") Selected");
        $(this).parent().children("small").addClass("text-success").removeClass("text-danger");
    }
    //id-container
});
//File Picker JS

//owl initializer
$(document).ready(function() {

    var owl = $('.owl-carousel');
    owl.owlCarousel({

        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1440: {
                items: 4
            }
        }
    });

});

$(function() {
    var yestedays_revenue = document.getElementById("yestedays_revenue").textContent;
    var todays_revenue = document.getElementById("todays_revenue").textContent;

    var rev_difference = todays_revenue.localeCompare(yestedays_revenue);

    if (rev_difference == 1) {
        document.getElementById("rev_diff_img").className = "ml-2 text-danger zmdi zmdi-caret-down font-22rem";
    } else if (rev_difference == -1) {
        document.getElementById("rev_diff_img").className = "ml-2 text-success zmdi zmdi-caret-up font-22rem";
    } else if (rev_difference == 0) {
        document.getElementById("rev_diff_img").className = "ml-2 text-warning zmdi zmdi-stop font-12";

    }

});

window.onload = function() {
    $('.todays-entries').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        centerMode: true,
        slidesToShow: 7,
        speed: 7000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToScroll: 1,
        pauseOnFocus: true,
        variableWidth: true
    });
};

$(function() {
    var agent_percentage = document.getElementById("agent_percentage").textContent;

    if (agent_percentage < 30) {
        document.getElementById("agent_percentage").className = "text-danger-2";
        document.getElementById("agent_percentage_sign").className = "text-danger-2";
    } else if (agent_percentage > 30 && agent_percentage < 50) {
        document.getElementById("agent_percentage").className = "text-warning-2";
        document.getElementById("agent_percentage_sign").className = "text-warning-2";
    } else if (agent_percentage > 50 && agent_percentage < 75) {
        document.getElementById("agent_percentage").className = "text-info-2";
        document.getElementById("agent_percentage_sign").className = "text-info-2";
    } else if (agent_percentage > 75) {
        document.getElementById("agent_percentage").className = "text-info-2";
        document.getElementById("agent_percentage_sign").className = "text-info-2";
    }

});

function reset_date() {
    $('#reportrange span').html(moment().format('MMMM D, YYYY'));
    $('#today').html(moment().format('MMMM D, YYYY'));
    $('#date-reset').addClass('d-none');

}

// ModalDateRange


function modal_reset_date() {
    $('#modalreportrange span').html(moment().format('MMMM D, YYYY'));
    $('#modal-date-reset').addClass('d-none');

}
$(document).on('click', '.show-ranges', function() {

    var newDate = $('#attendant_date_range').text();
    $('#modal_date_span').text(newDate);

});


$(function() {
    var report_date = document.getElementById("attendant_date_range").textContent;
    var start = moment();
    var end = moment();

    $('#modalreportrange span').html(report_date);

    function cb(start, end) {
        // $('#today').html(start.format('MMMM D, YYYY'));

        if (end.format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
            $('#modalreportrange span').html(start.format('MMMM D, YYYY'));

            if (moment().format('MMMM D, YYYY') === start.format('MMMM D, YYYY')) {
                // if todays date is today
                $('#modal-date-reset').addClass('d-none');
            } else {
                $('#modal-date-reset').removeClass('d-none');
            }



        } else {
            $('#modalreportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            $('#modal-date-reset').removeClass('d-none');
        }

    }

    $('#modalreportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb, );

    cb(start, end);

});

// Modal Report Range

$(function() {
    $('.statistics').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        prevArrow: $('.card-prev'),
        nextArrow: $('.card-next '),
        centerMode: false,
        pauseOnFocus: true,
    });
});

//================================================
//map scripts
//================================================
$('.map-key-card').on('click', function() {
    $('.map-card').removeClass('d-none');
});

$('.close-map-key').on('click', function() {
    $('.map-card').addClass('d-none');
});



// Change timeline card heading
function timeline_heading_change(s) {
    var options = s.options;
    var id = options[options.selectedIndex].id;

    document.getElementById('timeline_card_title').innerHTML = id + " timeline based parking status";

}

function detailed() {
    document.getElementById('hourly_chart_type').innerHTML = 'Detailed';

    Highcharts.chart('spline_chart_container', {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
            events: {
                load: function() {
                    makeSumSeries(this);
                }
            }

        },
        title: {
            text: null
        },
        lang: {
            thousandsSep: ','
        },
        xAxis: {

            categories: [
                '12 AM - 1 AM ',
                '1 AM - 2 AM',
                '2 AM - 3 AM',
                '3 AM - 4 AM',
                '4 AM - 5 AM',
                '5 AM - 6 AM',
                '6 AM - 7 AM',
                '7 AM - 8 AM',
                '8 AM - 9 AM',
                '9 AM - 10 AM',
                '10 AM - 11 AM',
                '11 AM - 12 PM',
                '12 PM - 1 PM',
                '1 PM - 2 PM',
                '2 PM - 3 PM',
                '3 PM - 4 PM',
                '4 PM - 5 PM',
                '5 PM - 6 PM',
                '6 PM - 7 PM',
                '7 PM - 8 PM',
                '8 PM - 9 PM',
                '9 PM - 10 PM',
                '10 PM - 11 PM',
                '11 PM - 12 AM'

            ]
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            title: {
                color: '#FFC200 ',
                text: 'Total Revenue Collected in Ksh'
            },
            lang: {
                numericSymbols: ['k', 'm']
            },
            events: {
                hide: function() {
                    makeSumSeries(this.chart);
                },
                show: function() {
                    makeSumSeries(this.chart);
                }
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,
            backgroundColor: 'transparent',
            borderColor: '#CCC',
            borderWidth: 1,
            itemStyle: {
                color: '#696969',
                font: '600 10px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#000000',
                font: '600 10px "Muli", sans-serif'
            },
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#999',
            shadow: false,
            shared: true,
            useHTML: true,
            yDecimals: 0,
            valueDecimals: 0,
            formatter: function() {
                var points = '<table class="tip"><caption style="color: #66ff00">Deration ' + this.x + '</caption>' +
                    '<tbody>';
                sum = 0;
                $.each(this.points, function(i, point) {
                    points += '<tr><th style="color: ' + point.series.color + '">' + point.series.name + ': </th>' +
                        '<td style="text-align: right">' + point.y + '</td></tr>'
                    sum += point.y;
                });
                points += '<tr><th>Total: </th>' +
                    '<td style="text-align:right"><b>' + sum + '</b></td></tr>' +
                    '</tbody></table>';
                return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        plotOptions: {

            series: {
                animation: {
                    duration: 2000
                },
                dataLabels: {
                    enabled: false
                }
            },
            spline: {
                marker: {
                    radius: 0.2,
                    lineColor: '#666666',
                    lineWidth: 0.5
                }
            }
        },
        series: [{
            dataLabels: {
                enabled: false
            },
            name: 'Daily Parking',
            color: '#009600',
            marker: {
                symbol: ''
            },
            data: [1415461, 2024151, 8011699, 3381876, 8891892, 4139096, 9100727, 8120147, 6141997, 1548612,
                1705956, 2436481, 2674835, 2781751, 957829, 1799122, 1193017, 1248491, 1764687, 685737,
                445742, 1995726, 307046, 866452
            ]

        }, {
            name: 'Enclosed',
            color: '#1666c0',
            marker: {
                symbol: null
            },
            data: [170956, 43481, 64835, 2171751, 2195829, 2179122, 119017, 128491, 176487, 168537,
                266478, 153703, 218518, 927169, 172542, 167552, 1319059, 1149129, 237067, 137077,
                173923, 129891, 176945, 524498
            ]

        }, {
            name: 'Seasonal Parking',
            color: '#FFC400',
            marker: {
                symbol: ''
            },
            data: [45742, 99726, 30046, 86642, 561519, 1943851, 2947959, 358273, 5920433, 1513,
                123603, 505, 874, 884, 291, 122, 944, 423046, 850, 63868,
                72715, 4533, 1691, 631
            ]

        }, {
            name: 'Clamping',
            color: '#d70000',
            marker: {
                symbol: ''
            },
            data: [3887, 8536, 1028899, 1094, 7737, 8632, 8867, 4914, 3952, 2377,
                1113, 3185, 1178, 3355, 5269844, 2343974, 4565590, 7424, 451266, 8758,
                1323490, 184618, 1012699, 18104
            ]

        }, {
            name: 'Others',
            color: '#e09326 ',
            marker: {
                symbol: ''
            },
            data: [3145, 1842, 5542, 5932, 1413, 7301, 6560, 732503, 710783, 889124,
                407930, 3646, 33578, 4502, 2069, 9037, 16500, 1057205, 3500, 6700,
                2552, 4953, 6291, 1960
            ]

        }]
    });
}

function summarized() {
    document.getElementById('hourly_chart_type').innerHTML = 'Summarized';

    Highcharts.chart('spline_chart_container', {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
        },
        title: {
            text: null
        },
        lang: {
            thousandsSep: ','
        },

        xAxis: {

            categories: [
                '12 AM - 1 AM ',
                '1 AM - 2 AM',
                '2 AM - 3 AM',
                '3 AM - 4 AM',
                '4 AM - 5 AM',
                '5 AM - 6 AM',
                '6 AM - 7 AM',
                '7 AM - 8 AM',
                '8 AM - 9 AM',
                '9 AM - 10 AM',
                '10 AM - 11 AM',
                '11 AM - 12 PM',
                '12 PM - 1 PM',
                '1 PM - 2 PM',
                '2 PM - 3 PM',
                '3 PM - 4 PM',
                '4 PM - 5 PM',
                '5 PM - 6 PM',
                '6 PM - 7 PM',
                '7 PM - 8 PM',
                '8 PM - 9 PM',
                '9 PM - 10 PM',
                '10 PM - 11 PM',
                '11 PM - 12 AM'

            ]
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            title: {
                color: '#FFC200 ',
                text: 'Total Revenue Collected in Ksh'
            },
            lang: {
                numericSymbols: ['k', 'm']
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,
            backgroundColor: 'transparent',
            borderColor: '#CCC',
            borderWidth: 1,
            itemStyle: {
                color: '#696969',
                font: '600 10px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#000000',
                font: '600 10px "Muli", sans-serif'
            },
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            pointFormat: '{point.y:,.0f}',

        },
        plotOptions: {

            series: {
                animation: {
                    duration: 2000
                },
                dataLabels: {
                    enabled: false
                }
            },
            spline: {
                marker: {
                    radius: 0.2,
                    lineColor: '#666666',
                    lineWidth: 0.5
                }
            }
        },
        series: [{
            dataLabels: {
                enabled: false
            },
            name: 'Total',
            color: '#009600',
            marker: {
                symbol: ''
            },
            data: [1415461, 2024151, 8011699, 3381876, 8891892, 4139096, 9100727, 8120147, 6141997, 1548612,
                1705956, 2436481, 2674835, 2781751, 957829, 1799122, 1193017, 1248491, 1764687, 685737,
                445742, 1995726, 307046, 866452
            ]

        }]
    });

}

//Sunken navigations
function showCheckedIn() {
    $('.checked_in').removeClass('d-none');
    $('.checked_out').addClass('d-none');
};

function showCheckedOut() {
    $('.checked_out').removeClass('d-none');
    $('.checked_in').addClass('d-none');
};

//Sunken navigations

//Seasonal navigations
function showmonth() {
    $('.month_table').removeClass('d-none');
    $('.three_months_table').addClass('d-none');
    $('.six_months_table').addClass('d-none');

};

function showthreemonths() {
    $('.three_months_table').removeClass('d-none');
    $('.month_table').addClass('d-none');
    $('.six_months_table').addClass('d-none');

};

function showsixmonths() {
    $('.six_months_table').removeClass('d-none');
    $('.three_months_table').addClass('d-none');
    $('.month_table').addClass('d-none');

};

//seasonal navigations

//Collection navigations
function zonalmonth() {
    $('.zonal_table').removeClass('d-none');
    $('.street_table').addClass('d-none');

};

function streetmonths() {
    $('.street_table').removeClass('d-none');
    $('.zonal_table').addClass('d-none');

};


//Collection navigations


$(document).ready(function() {
    $('#data-table-2').DataTable();
    $('#data-table-1').DataTable();

});

//Attendant info hover function
$('.form-btns .btn-next').on('click', function() {
    // alert(selectedCandidate);
    var ModalParent = $('.active-slider');
    ModalParent.next().addClass("active-slider");
    ModalParent.addClass("d-none");
    ModalParent.removeClass("active-slider");
    ModalParent.next().removeClass("d-none");

    var ActiveLink = $('.active');
    ActiveLink.parent().next().children().addClass('active');
    ActiveLink.removeClass('active');

});


//Attendant info hover function
$('.form-btns .btn-prev').on('click', function() {
    // alert(selectedCandidate);
    var ModalParent = $('.active-slider');
    ModalParent.prev().addClass("active-slider");
    ModalParent.addClass("d-none");
    ModalParent.removeClass("active-slider");
    ModalParent.prev().removeClass("d-none");

    var ActiveLink = $('.active');
    ActiveLink.parent().prev().children().addClass('active');
    ActiveLink.removeClass('active');

});

$('.vehicle_details').on('click', function() {
    $('.vehicle_details').addClass('active');
    $('.driver_details').removeClass('active');
    $('.owner_details').removeClass('active');

    $('.slider-container1').removeClass('d-none').addClass('.active-slider');
    $('.slider-container2').removeClass('active-slider').addClass('d-none');
    $('.slider-container3').removeClass('active-slider').addClass('d-none');
});

$('.owner_details').on('click', function() {
    $('.vehicle_details').removeClass('active');
    $('.driver_details').removeClass('active');
    $('.owner_details').addClass('active');

    $('.slider-container2').removeClass('d-none').addClass('.active-slider');
    $('.slider-container1').removeClass('active-slider').addClass('d-none');
    $('.slider-container3').removeClass('active-slider').addClass('d-none');
});

$('.driver_details').on('click', function() {
    $('.vehicle_details').removeClass('active');
    $('.driver_details').addClass('active');
    $('.owner_details').removeClass('active');

    $('.slider-container3').removeClass('d-none').addClass('.active-slider');
    $('.slider-container1').removeClass('active-slider').addClass('d-none');
    $('.slider-container2').removeClass('active-slider').addClass('d-none');
});


function add_make() {
    alert('Gina')
    $('#add_make').modal('show');
}

//Add Billable Script
function costing() {
    var customCheck3 = document.getElementById("pricing_check");
    if (!customCheck3.checked == true) {
        document.getElementById('flexible-cost-radio').classList.remove('d-none');

    } else {
        document.getElementById('flexible-cost-radio').classList.add('d-none');
    }
}

function fixed_cost() {
    document.getElementById("fixed-cost").classList.remove('d-none');
    document.getElementById("flexible-cost").classList.add('d-none');
}

function flexible_cost() {
    var customCheck3 = document.getElementById("pricing_check");
    if (!customCheck3.checked == true) {
        document.getElementById("flexible-cost").classList.remove('d-none');


    } else {
        document.getElementById('flexible-cost').classList.add('d-none');

    }

}

function owner_exists() {
    var customCheck3 = document.getElementById("owner_exists");
    if (!customCheck3.checked == true) {
        document.getElementById("add-owner").classList.remove('d-none');
        document.getElementById("owner_id").classList.add('d-none');

    } else {
        document.getElementById('add-owner').classList.add('d-none');
        document.getElementById("owner_id").classList.remove('d-none');
    }

}

// $('#make_select .bs-searchbox').on('change',function(e){
// 	alert('Gina!')
// });

$(document).on('keyup', '.make-component .bs-searchbox input', function(e) {
    var searchdata = e.target.value;
    console.log(searchdata);

    if ($('#bs-select-2 li').hasClass('no-results')) {
        $('#add_make').modal('show');
        $('#make-input').val(searchdata);
        $('#make-input').focus();
    }

});


$(document).on('keyup', '.model-component .bs-searchbox input', function(e) {
    var searchdata = e.target.value;
    console.log(searchdata);

    if ($('#bs-select-3 li').hasClass('no-results')) {
        $('#add_model').modal('show');
        $('#model-input').val(searchdata);
        $('#model-input').focus();
    }

});

$('.nav-item').on('click', function() {
    if ($(this).hasClass('individual')) {
        $('.individual-owner').removeClass('d-none');
        $('.company-owner').addClass('d-none');
        $($(this).siblings().removeClass('active'))
    } else {
        $('.individual-owner').addClass('d-none');
        $('.company-owner').removeClass('d-none');
        $($(this).siblings().removeClass('active'));
        $($(this).addClass('active'));
    }

});

$('#fixed_price').click(function() {
    var fixed_price = document.getElementById("fixed_price");
    if (fixed_price.checked == true) {
        $('.fixed_price').removeClass('d-none');

    } else {
        $('.fixed_price').addClass('d-none');
    }
});

$('#specific_packages').click(function() {
    var specific_packages = document.getElementById("specific_packages");
    if (specific_packages.checked == true) {
        $('.specific_packages').removeClass('d-none');

    } else {
        $('.specific_packages').addClass('d-none');
    }
});

$('#airport_trip').click(function() {
    var airport_trip = document.getElementById("airport_trip");
    if (airport_trip.checked == true) {
        $('.airport_trip').removeClass('d-none');

    } else {
        $('.airport_trip').addClass('d-none');
    }
});

// cloaning assignment table
$('body').on('click', '.add-table-item', function() {
    var lastIndex = $(".input-table tbody tr").last().index();
    $(".input-table tbody tr").eq(0).children('th').children('div').children('selectpicker').removeClass();

    //this area clones the new input fields
    $(".cloneMe-items").eq(0).clone().appendTo(".input-table tbody");
    // $(".input-table tbody tr").eq(0).clone().appendTo(".input-table tbody");

    //this method helps us with numbering the raws
    $(".input-table tbody tr").eq(lastIndex + 1).children('th').text(lastIndex + 1 + ".");

    //this function ensures that the cloned table raw is displayed
    $(".input-table tbody tr").eq(lastIndex + 1).removeClass('d-none');

    //this section helps with nabling select to be select-bootstrap enabled
    $(".input-table tbody tr").eq(lastIndex + 1).children(".clone-select-outer").children('select').addClass("selectpicker");
    $('.selectpicker').selectpicker('render');
    $('.bs-searchbox input').attr("placeholder", "Search");

    // search with capability of adding items cloaning

    $(".input-table tbody tr").eq(lastIndex + 1).find(".canAddItem").find('select').addClass("selectpicker").addClass("searchPicker");
    $('.selectpicker').selectpicker('render');
    $('.bs-searchbox input').attr("placeholder", "Search");
});

$('.selectpicker').selectpicker({
    liveSearchPlaceholder: "Search",

});

$('body').on('click', '.btn-info', function() {
        var theParent = $(this).parent().parent();
        var theParentIndex = $(this).parent().parent().index();
        var theRideNum = theParentIndex + 1;
        $('#requisitionAside .item-num').text("Ride " + theRideNum);
        var phone = theParent.children('td').find('.clientPhone').text();
        var clientName = theParent.children('td').find('.customerName').text();
        var dateTime = theParent.find('.rideTimeDate').text();
        var tripTime = dateTime;
        var time;
        var timeSpan;
        var timeFromBase = theParent.find('.baseTime').text();
        var tripNarration = theParent.children('td').find('.tripNarration').text();
        var flightNumber = theParent.children('td').find('.flightNumber').text();
        var terminalNumber = theParent.children('td').find('.terminalNumber').text();
        var babySeat = theParent.children('td').find('.babySeat').text();
        var tripPassengers = theParent.children('td').find('.tripPassengers').text();
        var packageName = theParent.children('td').find('.packageName').text();
        var companyName = theParent.children('td').find('.companyName').text();
        var tripDepartment = theParent.children('td').find('.tripDepartment').text();
        var tripDistance = theParent.children('td').find('.tripDistance').text();


        tripTime = tripTime.substring(tripTime.lastIndexOf("-") + 1);



        dateTime = dateTime.substring(0, dateTime.indexOf('-'));

        $('#requisitionAside .clientName').text(clientName);
        $('#requisitionAside .clientPhone').text(phone);
        $('#requisitionAside .clientDate').text(dateTime);
        $('#requisitionAside .baseTime').text(timeFromBase);
        $('#requisitionAside .tripTime').text(tripTime);

        $('#requisitionAside .babySeat').text(clientName);
        $('#requisitionAside .tripPassengers').text(tripPassengers);
        $('#requisitionAside .tripNarration').text(tripNarration);
        $('#requisitionAside .flightNumber').text(flightNumber);

        $('#requisitionAside .terminalNumber').text(terminalNumber);
        $('#requisitionAside .tripPassengers').text(tripPassengers);
        $('#requisitionAside .packageName').text(packageName);
        $('#requisitionAside .flightNumber').text(flightNumber);

        $('#requisitionAside .tripDepartment').text(tripDepartment);
        $('#requisitionAside .companyName').text(companyName);
        $('#requisitionAside .tripDistance').text(tripDistance);



        if (flightNumber == "") {
            $('#requisitionAside .flightRide').addClass("d-none");
        }
        if (flightNumber !== "") {
            $('#requisitionAside .flightRide').removeClass("d-none");
        }

        if (babySeat == "") {
            $('#requisitionAside .babySit').parent().parent().addClass("d-none");
        }

        if (babySeat !== "") {
            $('#requisitionAside .babySit').parent().parent().removeClass("d-none");
        }
        if (babySeat == "false") {
            $('#requisitionAside .babySit').parent().parent().addClass("d-none");
        }

        if (babySeat == "true") {
            $('#requisitionAside .babySit').text("Yes");
        }

        if (tripDepartment == "") {
            $('#requisitionAside .tripDepartment').parent().parent().addClass("d-none");
        }

        if (tripDepartment !== "") {
            $('#requisitionAside .tripDepartment').parent().parent().removeClass("d-none");
        }



    })
    // $('#make_select .form-control').addEventListener("change",function () {
    // 	alert("Input Changed");
    //   })

$('.add-contact').on('click', function(e) {
    e.preventDefault();

    // alert('Here');

    $('.clone-contacts').clone().removeClass('d-none').appendTo('.append-contacts');
});


$('.specific_packages').on('click', function(e) {
    e.preventDefault();

    // alert('Here');

    $('.clone-contacts').clone().removeClass('d-none').appendTo('.append-contacts');
});




//trip scheduling
$('body').on('change', '.repeatedTrip', function() {
    // alert("changed");
    var checkChecked = $('#repeatedTrip').prop('checked');
    if (checkChecked == true) {
        $('.prepareSchedule').removeClass('d-none');
    } else {
        $('.prepareSchedule').addClass('d-none');
    }
});


//Assign trip now
$('body').on('change', '.assignTripNow', function() {
    // alert("changed");
    var checkChecked = $('#assignTripNow').prop('checked');
    if (checkChecked == true) {
        $('.assignRideNow').removeClass('d-none');
    } else {
        $('.assignRideNow').addClass('d-none');
    }
});

//adding owner
var ownerSelector = $('.select-owner-option');
var driverSelector = $('.select-driver-option');
$('body').on('click', '.add-owner', function() {
    // alert("clicked");
    $('.owner-section').removeClass('d-none');
});

$('body').on('change', ownerSelector, function() {
    if (ownerSelector.val() !== "Add new owner") {
        // alert(ownerSelector);
        $('.owner-section').addClass('d-none');
    }
});

$('body').on('click', '.add-driver', function() {
    $('.driver-section').removeClass('d-none');
});

$('body').on('change', driverSelector, function() {
    if (driverSelector.val() !== "Add new driver") {
        // alert(ownerSelector);
        $('.driver-section').addClass('d-none');
    }
});






$(document).ready(function() {

    // time picker
    //time picker
    $('.timePickerInclude').mdtimepicker({
        hourPadding: true,
        clearBtn: true,
        // determines if input is readonly
        readOnly: true,
        // format of the input value
        format: 'hh:mm',

    });

    //calendar functions
    $('.calendarNav .nav-link').on('click', function() {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
    });





});