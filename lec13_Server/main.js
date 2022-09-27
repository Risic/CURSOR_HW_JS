baseURL = "https://swapi.dev/api/";

const getInfoBtn = document.getElementById("getInfoBtn");
const chooseBtnFilm = document.getElementById("chooseBtnFilm");
const selectedFilm = document.getElementById("selectFilm");
const filmOutput = document.getElementById("filmOutput");

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
}

// chooseBtnFilm.addEventListener("click", () => {
//     console.log(selectedFilm.value)
// })

const getCharacterInfo = (film) => {
    filmOutput.innerHTML = "Loading...";
    axios.get(`${baseURL}films/${film}/`)
    .then((res) => {
        const chars = res.data.characters
        chars.forEach(char => {
            axios.get(`${char}`)
            .then((res) => {

                const character = {
                    name: res.data.name,
                    birth: res.data.birth_year,
                    gender: res.data.gender,
                }

                for (let i = 0; i < Object.keys(charPortrait).length; i++) {
                    if (Object.keys(charPortrait)[i] == character.name) {
                        character.photo = Object.values(charPortrait)[i]
                    }
                }

                if (character.photo == undefined) {
                    character.photo ="./images/Missing_avatar.jpg"
                }

                const charItem =
                    `<div class="item">
                        <div><img class="imgChar" src="${character.photo}" alt="Portrait"></div>
                        <div class="charInfo">
                            <div class="charName">${character.name}</div>
                            <div class="charBirth">Gender: ${character.gender}</div>
                            <div class="charGender">Date of birth: ${character.birth}</div>
                        </div>
                    </div>`
                filmOutput.innerHTML += charItem
                console.log(character.name, character.photo)
            })
        });
        filmOutput.innerHTML = ""
    })
    .catch((err) => {
        console.log("Err", err)
        filmOutput.innerHTML = "Error ocured :(" + err
    })
};

getInfoBtn.addEventListener("click", () => {
    getCharacterInfo(2)
})


