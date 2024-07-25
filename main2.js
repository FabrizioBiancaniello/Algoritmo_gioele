let musicisti = [
    {id: 0, name: "Pino", instrument: "Voce", counter: 0},
    {id: 1, name: "Franco", instrument: "Voce", counter: 0},
    {id: 2, name: "Arnaldo", instrument: "Voce", counter: 0},
    {id: 3, name: "Paolo", instrument: "Chitarra", counter: 0},
    {id: 4, name: "Luca", instrument: "Chitarra", counter: 0},
    {id: 5, name: "Lorenzo", instrument: "Chitarra", counter: 0},
    {id: 6, name: "Gioele", instrument: "Chitarra", counter: 0},
    {id: 7, name: "Marco", instrument: "Tastiera", counter: 0},
    // {id: 8, name: "Roberto", instrument: "Tastiera", counter: 0},
    // {id: 9, name: "Angelo", instrument: "Tastiera", counter: 0},
    // {id: 10, name: "Angela", instrument: "Basso", counter: 0},
    // {id: 11, name: "Paola", instrument: "Basso", counter: 0},
    // {id: 12, name: "Annalisa", instrument: "Basso", counter: 0},
    // {id: 13, name: "Francesco", instrument: "Batteria", counter: 0},
    // {id: 14, name: "Leonardo", instrument: "Batteria", counter: 0},
    // {id: 15, name: "Carlo", instrument: "Batteria", counter: 0},
    // {id: 16, name: "Mattia", instrument: "Batteria", counter: 0},
    // {id: 17, name: "Lillo", instrument: "Triangolo", counter: 0},
];

let instrumentMandatary = ["Voce", "Chitarra", "Basso", "Batteria"]

function createObjInstruments(array){
    let objInstrument = {}
    array.forEach((el)=>{
        objInstrument[el.instrument]?.push(el) || (objInstrument[el.instrument] = [el])
    })
    return objInstrument
}

// console.table(createObjInstruments(musicisti))


function createGroups(obj, number, mandatory){
    let copy = structuredClone(obj)

    let maxGroups = 9999;
    for(let instrument in copy ){
        if(copy[instrument].length < maxGroups && mandatory.includes(instrument)){
            maxGroups = copy[instrument].length
        }
    }
    if( number > maxGroups*4 ) return "Non è possibile creare così tanti gruppi"


    let groups = [];
    let groupsString = []

    for (let i = 0; i < number; i++) {

        let group;
        do{
            group = {name: `gruppo${i+1}`, members:[], groupString: "" }
            for(let instrument in copy ){

                let player;
                do {
                    player = copy[instrument][Math.floor(Math.random()*copy[instrument].length)];
                    counter++
                    // console.log(copy)
                    // console.log(player)
                } while (player == undefined);
                group.members.push(player);
                group.groupString += player.name

            }
            
            if(groupsString.includes(group.groupString)){
                console.log("Gruppo già presente")
            }
        } while (groupsString.includes(group.groupString))
            
        groups.push(group)
        groupsString.push(group.groupString)

        group.members = group.members.map((el)=>{
            copy[el.instrument] = copy[el.instrument].map((player)=>{
                if(player.id == el.id){
                    player.counter += 1 
                }
                return player
            }).filter(player => player.counter < 4)

            if(copy[el.instrument].length == 0){
                delete copy[el.instrument]
            }
            return el.name
        })

    }
    return groups
}

console.log(createGroups(createObjInstruments(musicisti), 12, instrumentMandatary))
