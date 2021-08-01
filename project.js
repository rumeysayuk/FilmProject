const filmForm = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

eventListeners();

function eventListeners() {
    filmForm.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsToLocalStorage();
        UI.loadAllFilms(films)
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        UI.defaultMessages("danger", "Lütfen Tüm alanları doldurun...")
    } else {
        const newFilm = new Film(title, director, url);
        UI.defaultMessages("success", "Film başarıyla eklendi...");
        UI.addFilmToUI(newFilm);
        Storage.addFilmToLocalStorage(newFilm);
    }
    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    // console.log(e.target);
    if (e.target.id === "delete-film") {
        const filmTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromLocalStorage(filmTitle);
        UI.defaultMessages("succces", "Film başarıyla silindi ...")
    }

}

function clearAllFilms() {
    if (confirm("Tüm filmleri silmek istediğinizden emin misiniz..?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromLocalStorage();
    }
}
