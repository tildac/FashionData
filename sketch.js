
//Create a line graph of the Top 20 highest earning profits of fashion brands from 2018 
var chart = c3.generate({
    bindto: '#thegraph',
    data: {
        columns: [
            ['Profit Made in Billion $ by the Top Fast Fashion Brands in 2017', 4.01, 3, 1.97, 1.28, 1.06, 1.06, 0.88, 0.78, 0.71, 0.54, 0.50]
        ]
        
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Zara', 'Nike', 'TJX', 'H&M', 'Ross', 'Adidas', 'L Brands', 'Uniqlo', 'Next', 'Gap', 'Hanes Brands']
        }
    },
    size: {
        height: 640,
        width: 1880
    },
    
});