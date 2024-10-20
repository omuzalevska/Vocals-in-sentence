function getSentence(sentence) {
    return sentence;
}

function searchVocals(sentence) {
     const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   
    return sentence.split('').filter(char => vocals.includes(char));
}

function deleteDuplicity(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    return [...new Set(sentence.split('').filter(char => vocals.includes(char)))];
    
}



function getVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const uniqueVocals = new Set();

    for (const char of sentence) {
        if (vocals.includes(char)) {
            uniqueVocals.add(char);
        }
    }

    return Array.from(uniqueVocals);
}


function processVocals() {
    const sentence = document.getElementById("sentence").value;
    const option = document.getElementById("option").value;
    let result;

    if (option === "getSentence") {
        result = getSentence(sentence);
    } else if (option === "searchVocals") {
        result = searchVocals(sentence);
    } else if (option === "deleteDuplicity") {
        result = deleteDuplicity(sentence);
    } else if (option === "getVocals") {
        result = getVocals(sentence);
    }

    document.getElementById("result").textContent = "vocales: " + result;
}