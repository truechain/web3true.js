var testMethod = require('./helpers/test.method.js');

var method = 'getHashrate';


var tests = [{
    result: '0x788a8',
    formattedResult: 493736,
    call: 'etrue_hashrate'
}];


testMethod.runTests('eth', method, tests);

