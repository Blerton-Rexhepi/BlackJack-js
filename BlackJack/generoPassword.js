    const generateSimplePassword = (str1, str2) => {
    // ketu shkruhet kodi vazhdo --->
    if (str1.length > str2.length) {
        return d(str1, str2);
    } else {
        return d(str2, str1);
    }

//     let rezultatiFinal =" "
// for (let i=0;i <str1.length || i<str2.length ;i++){
//     if(i<str1.length){
//      rezultatiFinal  +=str1[i];
//     }
//     if (i<str2.length){
//         rezultatiFinal +=str2[i]
//     }

// } 
// return rezultatiFinal;
}

const d = (bString, sString) => {
    let res = ''
    for (let i=0;i <bString.length ;i++) {
        res+=bString[i];

        if (sString[i]) {
            res+=sString[i]
        }
    }

    console.log("QEtu po ekzekutohet " + res);
    return res;


}
console.log( )

// Sh1
// let param1 = '1234';
// let param2 = 'abcde';
 
// console.log(rezultatiFinal)
// it should log Sh1 '1a2b3c4de'
console.log(`Sh1 ${generateSimplePassword('1234', 'abcde')}`);

// param1 = 'qwertyuiop';
// param2 = 'blerton';

// it should log Sh2 'qbwleerrttyouniop'
console.log(`Sh2 ${generateSimplePassword('qwertyuiop', 'blerton')}`);


