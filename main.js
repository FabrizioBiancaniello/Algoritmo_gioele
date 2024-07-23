let musicisti = [
  { id: 0, name: "Pino", instrument: "Voce", mandatory: true },
  { id: 1, name: "Franco", instrument: "Voce", mandatory: true },
  { id: 2, name: "Arnaldo", instrument: "Voce", mandatory: true },
  { id: 3, name: "Paolo", instrument: "Chitarra", mandatory: true },
  { id: 4, name: "Luca", instrument: "Chitarra", mandatory: true },
  { id: 5, name: "Lorenzo", instrument: "Chitarra", mandatory: true },
  { id: 6, name: "Gioele", instrument: "Chitarra", mandatory: true },
  { id: 7, name: "Marco", instrument: "Tastiera", mandatory: false },
  { id: 8, name: "Roberto", instrument: "Tastiera", mandatory: false },
  { id: 9, name: "Angelo", instrument: "Tastiera", mandatory: false },
  { id: 10, name: "Angela", instrument: "Basso", mandatory: true },
  { id: 11, name: "Paola", instrument: "Basso", mandatory: true },
  { id: 12, name: "Annalisa", instrument: "Basso", mandatory: true },
  { id: 13, name: "Francesco", instrument: "Batteria", mandatory: true },
  { id: 14, name: "Leonardo", instrument: "Batteria", mandatory: true },
  { id: 15, name: "Carlo", instrument: "Batteria", mandatory: true },
  { id: 16, name: "Mattia", instrument: "Batteria", mandatory: true },
  { id: 17, name: "Lillo", instrument: "Triangolo", mandatory: true },
];

let instrumentNotMandatary = ["Tastiera", "Triangolo"];

function createObjInstruments(array) {
  let objInstrument = {};
  array.forEach((el) => {
    objInstrument[el.instrument]?.push(el.name) ||
      (objInstrument[el.instrument] = [el.name]);
  });
  return objInstrument;
}

console.table(createObjInstruments(musicisti));

function createGroups(obj, number, NotMandatory) {
  let copy = structuredClone(obj);

  console.log("copia");
  console.log(copy);

  for (let instrument in copy) {
    copy[`${instrument}Counter`] = 0;
  }

  let groups = [];

  for (let i = 0; i < number; i++) {
    let group = { name: `gruppo${i + 1}`, members: [] };
    for (let instrument in copy) {
      if (copy[instrument].length > 0) {
        group.members.push(
          copy[instrument].splice(
            Math.round(Math.random() * copy[instrument].length - 1),
            1
          )[0]
        );
        if (copy[instrument].length == 0 && copy[`${instrument}Counter`] < 3) {
          copy[instrument] = [...obj[instrument]];
          copy[`${instrument}Counter`]++;
        }
      } else if (
        copy[instrument].length == 0 &&
        !NotMandatory.includes(instrument)
      ) {
        console.log("Non si riescono a creare abbastanza gruppi");
        return groups;
      }
    }
    groups.push(group);
  }
   groups.sort(() => Math.random() - 0.5);
   groups.forEach((band, i) => {
    band.name = `gruppo${i + 1}`;
  });
    return groups;
}

console.log(
  createGroups(createObjInstruments(musicisti), 7, instrumentNotMandatary)
);
