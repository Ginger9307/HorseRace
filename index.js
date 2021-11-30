function nameGenerator() {
    let Moniker = require('moniker');
    // console.log(Moniker.choose());
    // let generateName = require('sillyname');
    // let sillyName = generateName();
    alert(Moniker.choose());
    // return sillyName;
  }

  function newRace() {
      horses= [];
      // horses = ["one", "two", "three", "four"];
      nameGenerator();
      for (i=0; i<3; i++) {
        horses.push(nameGenerator());
        alert(horses[i]);
      }

      horses.forEach(element => {
        alert(`horse${horses.indexOf(element)}`)
        document.getElementById(`horse${horses.indexOf(element)+1}`).innerHTML = element;
       });
  }    


  document.getElementById("button1").onclick = newRace;
  