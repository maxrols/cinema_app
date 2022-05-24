import { getPopular, getTop, getTrends } from "./services.js";
import renderCards from "./renderCards.js";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', e => {
            
            const target = e.target.closest('.get-nav__link');
            if (target) {
                e.preventDefault();

                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie')
                    .then(data => renderCards(data.results));
                } else if (target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv')
                    .then(data => renderCards(data.results));
                } else if (target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie')
                    .then(data => renderCards(data.results));
                } else if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv')
                    .then(data => renderCards(data.results));
                } else if (target.classList.contains('get-nav__link_triends')) {
                    getTrends()
                    .then(data => renderCards(data.results));
                }
            }
        });
    });
};

export default menuLink;