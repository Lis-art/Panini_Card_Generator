/* In dieser Übung wirst du anhand von Eingaben Sammlerkarten so wie von Panini erstellen.

Erstelle eine Klasse zu einem Thema mit verschiedenen Merkmalen/Eigenschaften (z.B. Rapper: Künstlername, Alter, verkaufte Singles/Alben etc.
Erstelle eine Inputform und ein Button im HTML für die Herstellung einer Paninikarte.
Erstelle eine Methode, um die Karte in HTML anzuzeigen.
Style die Paninikarte mithilfe des Gridsystems.

Bonus:
Erstelle eine Methode, die alle Karten als JSON speichert (Mithilfe von JSON stringyfy).
Erstelle unter Nutzung von createElement und appendChild ein HTML-Dokument.
 */


//Objekt Template für Traits erstellen
// alle werte zusammen speichern, von Object und von Input Traits
// Funktion für Template Daten mit Grid innerHTML abbilden (APPENDChild bla bla) + über output Gallery anzeigen
//über Funktionauf BTN  die Input Daten an ObjectTemplate über funktion übergeben
// + (in Form von weiterer Karte) mit NEW (Template) übergeben




function createAnime(e) {
    e.preventDefault(); 
  
    let titleI = document.querySelector(".animeTitle").value;
    let characterI = document.querySelector("#bestCharacter").value;
    let genreI = document.querySelector("#genre").value;
    let seasonsI = document.querySelector("#seasons").value;
    let quoteI = document.querySelector("#quote").value;
    let imgURLI = document.querySelector("#imgURL").value;
  
    const newAnime = new Anime(titleI, characterI, genreI, seasonsI, quoteI, imgURLI);
  
    newAnime.toHTML();
  
    e.target.reset();
};


class Anime {
    constructor(title, character, genre, seasons, quote, imgURL) {
      this.title = title;
      this.character = character;
      this.genre = genre;
      this.seasons = seasons;
      this.quote = quote;
      this.imgURL = imgURL;
    }
  

    toHTML() {
        const divCard = document.querySelector(".cardOverview");

        let createTitleEl = document.createElement("p");
        createTitleEl.textContent = "Title: " + this.title;
        divCard.appendChild(createTitleEl);

        let createCharacterEl = document.createElement("p");
        createCharacterEl.textContent = "Character: " + this.character;
        divCard.appendChild(createCharacterEl);

        let createGenreEl = document.createElement("p");
        createGenreEl.textContent = "Genre: " + this.genre;
        divCard.appendChild(createGenreEl);

        let createSeasonsEl = document.createElement("p");
        createSeasonsEl.textContent = "Seasons: " + this.seasons;
        divCard.appendChild(createSeasonsEl);

        let createQuoteEl = document.createElement("p");
        createQuoteEl.textContent = "Quote: " + this.quote;
        divCard.appendChild(createQuoteEl);

        let createImgEl = document.createElement("img");
        createImgEl.src = this.imgURL;
        divCard.appendChild(createImgEl);
    }
};

const form = document.querySelector("#form");
form.addEventListener("submit", createAnime);