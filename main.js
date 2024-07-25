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

let instrumentNotMandatory = ["Tastiera", "Triangolo"];

function createObjInstruments(array) {
  let objInstrument = {};
  array.forEach((el) => {
    objInstrument[el.instrument] = objInstrument[el.instrument] || [];
    objInstrument[el.instrument].push(el.name);
  });
  return objInstrument;
}

console.table(createObjInstruments(musicisti));

function createGroups(obj, number, notMandatory) {
  let copy = structuredClone(obj);
  let groups = [];
  let nameMemberBands = [];

  for (let instrument in copy) {
    copy[`${instrument}Counter`] = 0;
  }

  for (let i = 0; i < number; i++) {
    let group;
    let isUnique = false;

    do {
      group = { members: [] };
      let removedItems = [];
      for (let instrument in copy) {
        if (copy[instrument].length > 0) {
          let index = Math.floor(Math.random() * copy[instrument].length);
          let item = copy[instrument].splice(index, 1)[0];
          group.members.push(item);
          removedItems.push({ instrument, item });

          if (copy[instrument].length === 0 && copy[`${instrument}Counter`] < 3) {
            copy[instrument] = [...obj[instrument]];
            copy[`${instrument}Counter`]++;
          }
        } else if (
          copy[instrument].length === 0 &&
          !notMandatory.includes(instrument)
        ) {
          console.log("Non si riescono a creare abbastanza gruppi");
          return groups;
        }
      }

      let groupString = group.members.sort().join("");
      isUnique = nameMemberBands.includes(groupString);
      console.log(isUnique);
      console.log(removedItems);
      console.log(nameMemberBands);
      
      if (isUnique) {
        removedItems.forEach(({ instrument, item }) => {
          copy[instrument].push(item);
        });
      } else {
        nameMemberBands.push(groupString);
      }

    } while (isUnique);

    groups.push(group);
  }

  groups.sort(() => Math.random() - 0.5);
  groups.forEach((band, i) => {
    band.name = `gruppo${i + 1}`;
  });

  console.log(nameMemberBands);
  return groups;
}

console.log(
  createGroups(createObjInstruments(musicisti), 7, instrumentNotMandatory)
);
