

var chart = c3.generate({
    bindto: '#thegraph3',
    data: {
        columns: [
            ['Average Interaction', 13.71, 1.12, 0.49, 0.43, 0.17]
        ]
        
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Instagram', 'LinkedIn', 'Pinterest', 'Facebook', 'Twitter']
        }
    },
    size: {
        height: 640,
        width: 1880
    },
    
});