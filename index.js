let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let sentence = ''

function getAllMixArr(firstPart, secondPart, threePart){
    for(const first of firstPart){
        for(const second of secondPart){
            for(const three of threePart){
                sentence = `${first}${second}${three}.com`
                console.log(sentence)
            }
        }
    }
}

getAllMixArr(pronoun,adj,noun)
