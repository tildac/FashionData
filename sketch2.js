//Create a line graph of the Top 20 highest earning profits of fashion brands from 2018 
var chart = c3.generate({
    bindto: '#thegraph2',
    data: {
        columns: [
            ['Billions of USD Worldwide', 481, 545, 606, 662, 713]
        ]
        
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2018', '2019', '2020', '2021', '2022']
        }
    },
    size: {
        height: 640,
        width: 1880
    },
    
});
