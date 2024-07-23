let musicisti = [
    {id: 0, name: "Pino", instrument: "Voce", mandatory: true},
    {id: 1, name: "Franco", instrument: "Voce", mandatory: true},
    {id: 2, name: "Arnaldo", instrument: "Voce", mandatory: true},
    {id: 3, name: "Paolo", instrument: "Chitarra", mandatory: true},
    {id: 4, name: "Luca", instrument: "Chitarra", mandatory: true},
    {id: 5, name: "Lorenzo", instrument: "Chitarra", mandatory: true},
    {id: 6, name: "Gioele", instrument: "Chitarra", mandatory: true},
    {id: 7, name: "Marco", instrument: "Tastiera", mandatory: false},
    {id: 8, name: "Roberto", instrument: "Tastiera", mandatory: false},
    {id: 9, name: "Angelo", instrument: "Tastiera", mandatory: false},
    {id: 10, name: "Angela", instrument: "Basso", mandatory: true},
    {id: 11, name: "Paola", instrument: "Basso", mandatory: true},
    {id: 12, name: "Annalisa", instrument: "Basso", mandatory: true},
    {id: 13, name: "Francesco", instrument: "Batteria", mandatory: true},
    {id: 14, name: "Leonardo", instrument: "Batteria", mandatory: true},
    {id: 15, name: "Carlo", instrument: "Batteria", mandatory: true},
    {id: 16, name: "Mattia", instrument: "Batteria", mandatory: true},
];

function createObjInstruments(array){
    let objInstrument = {}
    array.forEach((el)=>{
        // if(el.instrument in objInstrument){
        //     objInstrument[el.instrument].push(el.name)
        // } else {
        //     objInstrument[el.instrument] = [el.name]
        // }
        objInstrument[el.instrument]?.push(el.name) || (objInstrument[el.instrument] = [el.name])
    })
    return objInstrument
}

// console.table(createObjInstruments(musicisti))

function createGroups(obj, number){
    console.log(obj)
    let copy = {...obj}
    let groups = [];

    for (let i = 0; i < number; i++) {
        let group = {name: `gruppo${i+1}`, members:[]}
        for(let instrument in copy ){
            // console.log(copy[instrument].splice(copy[instrument[Math.round(Math.random()*(copy[instrument].length-1))]], 1))
            group.members.push(copy[instrument].splice(copy[instrument[Math.round(Math.random()*copy[instrument].length-1)]], 1)[0])
            if(copy[instrument].length == 0){
                console.log(copy[instrument].length)
                console.log(obj);
                // copy[instrument] = [...test]
            }
        }
        groups.push(group)
    }
    return groups
}

console.log(createGroups(createObjInstruments(musicisti), 10))