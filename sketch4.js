
var chart = c3.generate({
    bindto: '#thegraph4',
    data: {
        columns: [
            ['Survey repondents that cited "consumer needs for trust in product authenticity and creative orginality" in their top 5 trends for 2019', 65]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], 
        threshold: {
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

