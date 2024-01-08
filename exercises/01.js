let test01 = '[1,2,3,4,5,6,7,8,9]';
let test02 = `[3,4,5,6,7,8,9,10,11]`;

let idx = 0;
let res = '<div>';
res += JSON.parse(test01)
    .filter(x => x % 2 === 1)
    .map(x => `<li>${x}</li>`)
    .join("");
// Array.from(test02).forEach(chr => {
//     let notIn = '[,]';
//     if (notIn.indexOf(chr) === -1){
//         if (idx % 2 === 0) {
//             res += '<li>'
//             res += chr
//             res += '</li>'
//             //console.log(idx, idx % 2, chr);
//         }
//         idx ++;
//    }
// })

res += '</div>'

let test01_res = JSON.parse(test01);
console.log(res);