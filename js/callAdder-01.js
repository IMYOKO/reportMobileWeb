
var callAdder01 = echarts.init(document.getElementById('callAdder-01'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'省',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'广东省', selected:true},
                {value:679, name:'江西省'},
                {value:1548, name:'江苏省'}
            ]
        },
        {
            name:'市',
            type:'pie',
            radius: ['50%', '60%'],
            data:[
                {value:335, name:'深圳市'},
                {value:310, name:'吉安市'},
                {value:234, name:'南昌市'},
                {value:135, name:'赣州市'},
                {value:1048, name:'南京市'},
                {value:251, name:'无锡市'},
                {value:147, name:'苏州市'},
                {value:102, name:'扬州市'}
            ]
        }
    ]
};

callAdder01.setOption(option);