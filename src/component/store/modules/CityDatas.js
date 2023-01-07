export const cityDatas = [{name:'강남구',x:37.51742,y:127.047339, apart:[]},{name:'강동구',x:37.53036,y:127.123758, apart:[]},{name:'강북구',x:37.6401,y:127.02620, apart:[]},{name:'강서구',x:37.550807,y:126.84947, apart:[]},
    {name:'관악구',x:37.4782,y:126.9515, apart:[]},{name:'광진구',x:37.5385,y:127.08230, apart:[]},{name:'구로구',x:37.49542,y:126.8874, apart:[]},{name:'금천구',x:37.45679,y:126.8953, apart:[]},
    {name:'노원구',x:37.65438,y:127.056389, apart:[]},{name:'도봉구',x:37.6688,y:127.04701, apart:[]},{name:'동대문구',x:37.57446,y:127.03978, apart:[]},{name:'동작구',x:37.5124444,y:126.93979, apart:[]},
    {name:'마포구',x:37.5662,y:126.901884, apart:[]},{name:'서대문구',x:37.5791707,y:126.93661, apart:[]},{name:'서초구',x:37.48378,y:127.03274, apart:[]},{name:'성동구',x:37.5634,y:127.03797, apart:[]},
    {name:'성북구',x:37.589421,y:127.01696, apart:[]},{name:'송파구',x:37.514644,y:127.10605, apart:[]},{name:'양천구',x:37.51718,y:126.86664, apart:[]},{name:'영등포',x:37.52636,y:126.89622, apart:[]},
    {name:'용산구',x:37.532479,y:126.99052, apart:[]},{name:'은평구',x:37.6027,y:126.929009, apart:[]},{name:'종로구',x:37.57356,y:126.978944, apart:[]},{name:'중구',x:37.56376,y:126.99777},{name:'중랑구',x:37.6066,y:127.093123, apart:[]}];

export const hashCityData = cityDatas.reduce((map, obj) => {
    map.set(obj.name, {name: obj.name, x: obj.x, y: obj.y});
    return map;
}, new Map);
