let test01 = `[{"a":"1", "b":"2", "c":"3", "d":"4", "e":"5"}, {"1":"a1", "2":"b2", "3":"c3", "4":"d4", "5":"e5"}]`;
let test02 = `[{1:"a", 2:"b", 3:"c", 4:"d", 5:"e"}, {a:"1a", b:"2b", c:"3c", d:"4d", e:"5e"}]`;


function newString(string)
{
    let keys = Object.keys(JSON.parse(string)[0]);
    let data_0 = JSON.parse(string)[0];
    let data_1 = JSON.parse(string)[1];
    
    //console.log(keys);
    // keys.map(x => console.log(x, data_1[data_0[x]]));
    keys.map(x => data_0[x] = data_1[data_0[x]]);
    console.log(JSON.stringify(data_0));
}

newString(test01);
