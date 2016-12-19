function removeVowels(s) {
    const vowels = "aeiouAEIOU";
    let sWithoutVowels = "";
    for (let eachChar of s) {
        if (vowels.indexOf(eachChar) === -1) {
            sWithoutVowels = sWithoutVowels + eachChar
        }
    }
    return sWithoutVowels
}

console.log(removeVowels("compsci"));

function removeVowelsRegex(s) {
    let reg = /[aeiouAEIOU]/g;
    let sWithoutVowels = s.replace(reg,'');
    return sWithoutVowels;
}

console.log(removeVowels("sooper dooper lots of vowels"));
