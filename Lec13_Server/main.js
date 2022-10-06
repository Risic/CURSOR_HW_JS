baseURL = "https://swapi.dev/api/";

const getInfoBtn = document.getElementById("getInfoBtn");
const chooseBtnFilm = document.getElementById("chooseBtnFilm");
const selectedFilm = document.getElementById("selectFilm");
const filmOutput = document.getElementById("filmOutput");

const wookieeToggle = document.getElementById("wookieeToggle");
wookieeToggle.checked = false;
let wook = "";

const getPlanetBtn = document.getElementById("getPlanet");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const planetList = document.getElementById("planetList");
const currentPages = document.getElementById("currentPage");
const limitPages = document.getElementById("limit");
let currentPage = 1;
const limit = 6;

limitPages.innerHTML += limit

const charPortrait = {
    "IG-88": "https://static.wikia.nocookie.net/rustarwars/images/a/aa/IG-88B-ESB.jpg",
    "C-3PO": "https://static.wikia.nocookie.net/rustarwars/images/6/62/3PONaked-ST.jpg",
    "Darth Vader": "https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg",
    "R2-D2": "https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg",
    "Luke Skywalker": "https://i.insider.com/5682a0d9c08a8081028b56f8?width=1000&format=jpeg&auto=webp",
    "Leia Organa": "https://starwarsblog.starwars.com/wp-content/uploads/2016/12/unnamed-3-960x864.jpg",
    "Han Solo": "https://static.wikia.nocookie.net/rustarwars/images/f/f4/HanSolo.jpg",
    "Obi-Wan Kenobi": "https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg",
    "Chewbacca": "https://static.wikia.nocookie.net/rustarwars/images/7/73/Chewbaccaheadshot.jpg",
    "Yoda": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReP0pdejPZK4fB4dF656WBWfDvo6u-PUTR_A&usqp=CAU",
    "Lobot": "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg",
    "Lando Calrissian": "https://i.pinimg.com/originals/3f/88/78/3f8878c64075270359a78ac5c2397bea.jpg",
    "Palpatine": "https://i.pinimg.com/736x/74/95/25/749525be9b49bba54028328bf9ba2f62.jpg",
    "Wedge Antilles": "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    "Bossk": "https://static.wikia.nocookie.net/rustarwars/images/d/d2/Bossk.jpg",
    "Boba Fett": "https://upload.wikimedia.org/wikipedia/commons/3/37/Boba_Fett_-_A_Fett_to_Remember_%28cropped%29.jpg"
};

const charGenderIcon = (gender) => {
    switch (gender) {
        case "male":
        case "scraanwo":
            return `<i class="fa-solid fa-mars"></i>`;
        case "female":
        case "wwwoscraanwo":
            return `<i class="fa-solid fa-venus"></i>`;
        case "n/a":
        case "wh/ra":
            return `<i class="fa-solid fa-robot"></i>`;
        case "none":
        case "whoowhwo":
            return `<i class="fa-solid fa-genderless"></i>`;
        default:
            return `<i class="fa-solid fa-question"></i>`;
    }
};

const getCharacterInfo = (film) => {
    filmOutput.innerHTML = "Loading...";
    axios
    .get(`${baseURL}films/${film}/`)
    .then((res) => {
        const chars = res.data.characters;
        wookieeToggle.checked ? wook = `?format=wookiee;` : wook = "";
        
        chars.forEach(char => {
            axios
            .get(`${char}${wook}`)
            .then((res) => {
                console.log(res.data)
                const character = {
                    name: !wookieeToggle.checked ? res.data.name : res.data.whrascwo,
                    birth: !wookieeToggle.checked ? res.data.birth_year : res.data.rhahrcaoac_roworarc,
                    gender: !wookieeToggle.checked ? res.data.gender : res.data.rrwowhwaworc
                }

                // character photo
                for (const key in charPortrait) {
                    if (key == character.name) {
                        character.photo = charPortrait[key]
                    }
                }

                if (!character.photo) {
                    character.photo ="./images/Missing_avatar.jpg"
                }

                console.log(character.gender)

                const charItem =
                    `<div class="item">
                        <div><img class="imgChar" src="${character.photo}" alt="Portrait"></div>
                        <div class="charInfo">
                            <div class="charName">${character.name}</div>
                            <div class="charGender">Gender: ${charGenderIcon(character.gender)}</div>
                            <div class="charBirth">Date of birth: ${character.birth} </div>
                        </div>
                    </div>`
                filmOutput.innerHTML += charItem
            })
            .catch((err) => {
                console.log("Err", err)
                filmOutput.innerHTML = "Error ocured :("
            })
        });
        filmOutput.innerHTML = ""
    })
    .catch((err) => {
        console.log("Err", err)
        filmOutput.innerHTML = "Error ocured :("
    })
};

const getFilmsForSelect = () => {
    axios.get(`${baseURL}films/`)
    .then((res) => {
        const films = res.data.results
        films.forEach((film, index) => {
            selectedFilm[index] = new Option(film.title, index+1)
        })
    })
    // .then((res) => {
    //     selectedFilm.options[1].selected = true
    // })
};
getFilmsForSelect()

const getPlanet = () => {
    planetList.innerHTML = "Loading..."
    axios
    .get(`https://swapi.dev/api/planets/?page=${currentPage}`)
    .then((res) => {
        const planets = res.data.results;
        wookieeToggle.checked ? wook = `?format=wookiee;` : wook = "";
        planets.forEach(planet => {
            axios
            .get(`${planet.url}${wook}`)
            .then((res) => {
                const result = res.data;
                const planetI = {
                    name: !wookieeToggle.checked ? result.name : result.whrascwo,
                    climate: !wookieeToggle.checked ? result.climate : result.oaanahscraaowo,
                    terrain: !wookieeToggle.checked ? result.terrain : result.aoworcrcraahwh,
                    gravity: !wookieeToggle.checked ? result.gravity : result.rrrcrahoahaoro,
                    population: !wookieeToggle.checked ? result.population : result.akooakhuanraaoahoowh
                }
    
                const planetItem = 
                `<div class="planetItem">
                    <div class="planetPic">
                        <img src="./images/planet.svg" alt="Planet image">
                    </div>
                    <div class="planetInfo" style="">
                        <div class="planetName">${(planetI.name).toUpperCase()}</div>
                        <div class="planetClimate">CLIMATE: ${planetI.climate}</div>
                        <div class="planetTerrain">TERRAIN: ${planetI.terrain}</div>
                        <div class="planetGravity">GRAVITY: ${planetI.gravity}</div>
                        <div class="planetPopulation">POPULATION: ${planetI.population}</div>
                    </div>
                </div>`
    
                planetList.innerHTML += planetItem
            })
            })
    })
    .catch((err) => {
        console.log("Err", err)
        filmOutput.innerHTML = "Error ocured :("
    });

    planetList.innerHTML = ""
    currentPages.innerHTML = ""
    currentPages.innerHTML += `Current page: ${currentPage}`;
};


chooseBtnFilm.addEventListener("click", () => {
    const filmNum = selectedFilm.value
    getCharacterInfo(filmNum)
});

getInfoBtn.addEventListener("click", () => {
    getCharacterInfo(2)
});

getPlanetBtn.addEventListener("click", () => {
    getPlanet()
});

prevPageBtn.addEventListener("click", () => {
    if (currentPage <= 1) return
    currentPage -=1
    getPlanet()
});

nextPageBtn.addEventListener("click", () => {
    if (currentPage >= limit) return
    currentPage +=1
    getPlanet()
});
