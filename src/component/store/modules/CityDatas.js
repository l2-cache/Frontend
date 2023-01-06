export const cityDatas = [{name:'강남구',x:37.51742,y:127.047339},{name:'강동구',x:37.53036,y:127.123758},{name:'강북구',x:37.6401,y:127.02620},{name:'강서구',x:37.550807,y:126.84947},
    {name:'관악구',x:37.4782,y:126.9515},{name:'광진구',x:37.5385,y:127.08230},{name:'구로구',x:37.49542,y:126.8874},{name:'금천구',x:37.45679,y:126.8953},
    {name:'노원구',x:37.65438,y:127.056389},{name:'도봉구',x:37.6688,y:127.04701},{name:'동대문구',x:37.57446,y:127.03978},{name:'동작구',x:37.5124444,y:126.93979},
    {name:'마포구',x:37.5662,y:126.901884},{name:'서대문구',x:37.5791707,y:126.93661},{name:'서초구',x:37.48378,y:127.03274},{name:'성동구',x:37.5634,y:127.03797},
    {name:'성북구',x:37.589421,y:127.01696},{name:'송파구',x:37.514644,y:127.10605},{name:'양천구',x:37.51718,y:126.86664},{name:'영등포',x:37.52636,y:126.89622},
    {name:'용산구',x:37.532479,y:126.99052},{name:'은평구',x:37.6027,y:126.929009},{name:'종로구',x:37.57356,y:126.978944},{name:'중구',x:37.56376,y:126.99777},{name:'중랑구',x:37.6066,y:127.093123}];

export const hashCityData = cityDatas.reduce((map, obj) => {
    map.set(obj.name, {name: obj.name, x: obj.x, y: obj.y});
    return map;
}, new Map);