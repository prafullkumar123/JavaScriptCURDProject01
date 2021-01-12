//taking an arrays 
let superHeros = [
    {
        name: "Thor",
        age: 150,
        plannet: "Asgard",
        height: 7.3
    },
    {
        name: "SpiderMan",
        age: 67,
        plannet: "Earth",
        height: 5.10
    },
    {
        name: "Iron Man",
        age: 75,
        plannet: "Earth",
        height: 6.3
    },{
        name: "Captan America",
        age: 50,
        plannet: "Asgard",
        height: 7.3
    },
    {
        name: "Transformer",
        age: 671,
        plannet: "Marse",
        height: 15.10
    },
    {
        name: "Iron Man",
        age: 75,
        plannet: "Earth",
        height: 6.3
    },{
        name: "Thor",
        age: 150,
        plannet: "Asgard",
        height: 7.3
    },
    {
        name: "Saktiman",
        age: 77,
        plannet: "Earth",
        height: 5.10
    },
    {
        name: "Krish",
        age: 55,
        plannet: "Earth",
        height: 6.0
    }
];

// Display all the Elements
function display(superArray) {
    let tableData = "";
    let indexNo = 0;
    superArray.forEach(
        (superhero, index) => {
            let currentrow = `<tr>
            <td>${++indexNo}</td>
            <td>${superhero.name}</td>
            <td>${superhero.age}</td>
            <td>${superhero.plannet}</td>
            <td>${superhero.height}</td>
            <td>
            <button onclick="deleteSuperHero(${index});">Delete</button>
            <button onclick="displayModal(event,${index});"> Update </button>
            </td>
            </tr>`;
            tableData += currentrow;
        }
    );
    document.getElementById('tdata').innerHTML = tableData;
}

// First time calling Display function
display(superHeros);
let add = () => {
    let superhero = {};
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let plannet = document.getElementById('plannet').value;
    let height = document.getElementById('height').value;
    if (name == "") {
        alert("Name Required...");
        document.getElementById('name').focus();
        return false;
    } else if (age == 0) {
        alert("Age Required...");
        document.getElementById('age').focus();
        return false;
    } else if (plannet == "") {
        alert("Plannet Required...");
        document.getElementById('plannet').focus();
        return false;
    } else if (height == 0.0) {
        alert("Height Required...");
        document.getElementById('height').focus();
        return false;
    }
    superhero.name = name;
    superhero.age = Number(age);
    superhero.plannet = plannet;
    superhero.height = Number(height);
    superHeros.push(superhero);
    display();
    document.getElementById('name').value = null;
    document.getElementById('age').value = null;
    document.getElementById('plannet').value = null;
    document.getElementById('height').value = null;
    return true;
}

//searching SuperHero
let search = (data) => {
    console.log("Typing...");
    let searchValue = document.getElementById('search').value;
    let newData = superHeros.filter((superhero) => {
        return superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    })
    display(newData);
};


// Deleting superHero 
let deleteSuperHero = (index) => {
    superHeros.splice(index, 1);
    display(superHeros);
}

let updateSuperHeroIndex;

//copy super heroes to update functions
let edit = (index) => {
    updateSuperHeroIndex = index;
    let data = superHeros[index];
    document.getElementById('upname').value = data.name;
    document.getElementById('upage').value = data.age;
    document.getElementById('upplannet').value = data.plannet;
    document.getElementById('upheight').value = data.height;
}

//Update superHeroes
let updateSuperHero = () => {
    let updatesuperhero = superHeros[updateSuperHeroIndex];
    // console.log(updatesuperhero);
    let name = document.getElementById('upname').value;
    let age = document.getElementById('upage').value;
    let plannet = document.getElementById('upplannet').value;
    let height = document.getElementById('upheight').value;
    if (name == "") {
        alert("Name Required...");
        document.getElementById('upname').focus();
        return false;
    } else if (age == 0) {
        alert("Age Required...");
        document.getElementById('upage').focus();
        return false;
    } else if (plannet == "") {
        alert("Plannet Required...");
        document.getElementById('upplannet').focus();
        return false;
    } else if (height == 0.0) {
        alert("Height Required...");
        document.getElementById('upheight').focus();
        return false;
    }
    updatesuperhero.name = name;
    updatesuperhero.age = age;
    updatesuperhero.plannet = plannet;
    updatesuperhero.height = height;
    // console.log(updatesuperhero);
   display(superHeros);
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}



let movies = async () => {
    const response = await fetch('http://localhost:8962/mobile');
    const myJson = await response.json(); //extract JSON from the http response
    myJson.forEach(element => {
        document.getElementById('movies').innerHTML = element.name;
    });
    // do something with myJson
}

//event Modal

//bubbling :- Parent events applying child also

//Event 
function displayModal(event, index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    console.log(modal);
    edit(index);
}

function hideModal(event) {
    if (event.target.className == "modal") {
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
        event.stopPropagation();
    }
}

const dogApi = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const myJson = await response.json(); //extract JSON from the http response
    for (let i = 0; i < 5; i++) {
        const element = myJson[i];
        document.getElementsByClassName('dogs').innerHTML=element;
    }
  }
  



/*
For calling get and post req..

const userAction = async () => {
  const response = await fetch('https://api.thedogapi.com/v1/breeds');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}

const userAction = async () => {
  const response = await fetch('http://example.com/movies.json', {
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}
*/