import { search as searchGet } from "./services.js";
import renderCards from "./renderCards.js";

const title = document.querySelector('.other-films__title');
const searchInput = document.querySelector('.header__search-input');
const searchForm = document.querySelector('.header__search-form');
const filmWeek = document.querySelector('.film-week');
const filmList = document.querySelector('.other-films__list');

const search = () => {

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

<<<<<<< HEAD
=======
        filmList.textContent = '';
        filmWeek.remove();
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5


        if (!searchInput.value) return;

        searchGet(searchInput.value)
        .then(data => {
            if (data.results.length) {
                renderCards(data.results);
            } else {
                throw 'По вашему запросу ничего не найдено';
            }
        })
        .then(() => {
<<<<<<< HEAD
            filmWeek.style.display = 'none';
=======
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5
            title.textContent = "Результаты поиска";
        })
        .catch(err => {
            title.textContent = err;

        });
    });

};

export default search;