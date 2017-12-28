var obj = {
    'prop1': [1, 2, 3, 4],
    'prop2': []
}

var test = 'prop1';
var testy =  'prop3';

// obj[test].forEach((e) => console.log(e));

obj[testy] = (obj[testy]) ? obj[testy].push(1) : [1];
obj[testy] = (obj[testy]) ? obj[testy].push(1) : [1];
obj[testy] = (obj[testy]) ? obj[testy].push(1) : [1];

console.log(obj);

