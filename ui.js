const filmsTable = document.querySelector("#films")

class UI {
    static addFilmToUI(newFilm) {
        filmsTable.innerHTML += `
     <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
    `;
    }

    static clearInputs(title, director, url) {
        title.value = "";
        director.value = "";
        url.value = "";
    }

    static defaultMessages = function (type, message) {
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 1000)
    }

    static loadAllFilms(films) {
        const filmList = document.querySelector("#films");
        films.forEach(function (film) {
            filmList.innerHTML += `
     <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
    `;
        })

    }

    static deleteFilmFromUI(deleteFilm) {
        deleteFilm.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI = function () {
        while (filmsTable.firstElementChild !== null) {  //child olduğu sürece
            filmsTable.firstElementChild.remove();
        }
    };

}



