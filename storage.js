class Storage {
    static addFilmToLocalStorage(newFilm) {
        let films = this.getFilmsToLocalStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFilmsToLocalStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteFilmFromLocalStorage(filmTitle) {
        let films = this.getFilmsToLocalStorage();
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromLocalStorage() {
        localStorage.removeItem("films");
    }
}




