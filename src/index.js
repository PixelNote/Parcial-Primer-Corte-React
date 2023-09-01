import RickAndMortyService from './service.js';

const service = new RickAndMortyService();


async function createCharacterList() {
    const content = await service.getAllCharacters();
    const list = document.querySelector(".character-list");
    let inner = "";
        for (let i = 0; i < 20; i++) {
            inner += createCharacterCard(content[i]);
        }
    list.innerHTML = inner;

  const characterCards = document.querySelectorAll(".character");
  await characterCards.forEach(element => {
     addCharacterListeners(element, element.querySelector('span:first-child').textContent);   
  });
}


function createCharacterCard(character) {
    let status = "alive";
    if(character.status=='Dead'){
        status = "dead";
    }else if(character.status=="unknown"){
        status = "unknown";
    }

    const card = `
        <div class="character">
                <img src= ${character.image}>
            <div class="character-content">
                <div class="content">
                    <span class="content-name">${character.name}</span>
                    <div class="content-info">
                    <div class="circle ${status}"></div>
                    <span class = "content-status">${character.status} - ${character.species}</span>
                    </div>
                    
                </div>

                <div class="content">
                    <span class="content-title"> Last known location: </span>
                    <span class="content-data">${character.firstSeen}</span>
                </div>

                <div class="content">
                    <span class="content-title">First seen in:</span>
                    <span class="content-data">${character.location}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

function addCharacterListeners(card,name) {
    card.addEventListener("click", () =>{
        alert(`Hola, soy ${name}`);
    });
}

createCharacterList();
