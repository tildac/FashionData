
//Create a line graph of the Top 20 highest earning profits of fashion brands from 2018 
var chart = c3.generate({
    bindto: '#thegraph',
    data: {
        columns: [
            ['Profit Made in Billion $ by the Top 20 Fashion Brands in 2017', 4.01, 3, 2.33, 1.97, 1.35, 1.28, 1.07, 1.06, 1.06, 0.94, 0.88, 0.87, 0.78, 0.71, 0.65, 0.63, 0.60, 0.54, 0.50,0.45]
        ]
        
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Zara', 'Nike', 'LVMH', 'TJX', 'Hermes', 'H&M', 'Richemont', 'Ross', 'Adidas', 'Kering', 'L Brands', 'Pandora', 'Uniqlo', 'Next', 'VF Corp', 'Luxottica', 'Michael Kors', 'Gap', 'Hanes Brands', 'Burberry']
        }
    },
    size: {
        height: 640,
        width: 1880
    },
    
});

//Transform the line chart information into a bar chart 
setTimeout(function () {
    chart.transform('bar', 'data1');
}, 1000);


//Add labels to particular brands
setTimeout(function () {
    chart.transform('line');
}, 3000);

setTimeout(function () {
    chart.transform('bar');
}, 23000);



setTimeout(function () {
    chart.xgrids([{value: 0, text:'Fast Fashion'}]);
}, 1000);

setTimeout(function () {
    chart.xgrids([{value: 1, text:'Fast Fashion'}]);
}, 2000);

setTimeout(function () {
    chart.xgrids([{value: 2, text:'Luxury-end Fashion'}]);
}, 3000);

setTimeout(function () {
    chart.xgrids([{value: 3, text:'Fast Fashion Fashion'}]);
}, 4000);

setTimeout(function () {
    chart.xgrids([{value: 4, text:'Luxury-end Fashion'}]);
}, 5000);

setTimeout(function () {
    chart.xgrids([{value: 5, text:'Fast Fashion'}]);
}, 6000);

setTimeout(function () {
    chart.xgrids([{value: 6, text:'Luxury-end Fashion'}]);
}, 7000);

setTimeout(function () {
    chart.xgrids([{value: 7, text:'Fast Fashion'}]);
}, 8000);

setTimeout(function () {
    chart.xgrids([{value: 8, text:'Fast Fashion'}]);
}, 9000);

setTimeout(function () {
    chart.xgrids([{value: 9, text:'Luxury-end Fashion'}]);
}, 10000);

setTimeout(function () {
    chart.xgrids([{value: 10, text:'Fast Fashion'}]);
}, 11000);

setTimeout(function () {
    chart.xgrids([{value: 11, text:'Luxury-end'}]);
}, 12000);

setTimeout(function () {
    chart.xgrids([{value: 12, text:'Fast Fashion'}]);
}, 13000);

setTimeout(function () {
    chart.xgrids([{value: 13, text:'Fast Fashion'}]);
}, 14000);

setTimeout(function () {
    chart.xgrids([{value: 14, text:'Fast Fashion'}]);
}, 15000);

setTimeout(function () {
    chart.xgrids([{value: 15, text:'Luxury-end Fashion'}]);
}, 16000);

setTimeout(function () {
    chart.xgrids([{value: 16, text:'Luxury-end Fashion'}]);
}, 17000);

setTimeout(function () {
    chart.xgrids([{value: 17, text:'Fast Fashion'}]);
}, 18000);

setTimeout(function () {
    chart.xgrids([{value: 18, text:'Fast Fashion'}]);
}, 19000);

setTimeout(function () {
    chart.xgrids([{value: 19, text:'Luxury-end Fashion'}]);
}, 20000);
