import { getVideo } from "./services.js";
import popup from "./popup.js";

const listCard = document.querySelector('.other-films__list');

const renderCards = async (data) => {
    listCard.textContent = '';

    Promise.all(data.map(async (item) => {
        let key;
        if (item.name) {
            key = await getVideo(item.id, 'tv');
        } else {
            key = await getVideo(item.id, 'movie');
        }


        const card = document.createElement('li');
        card.classList.add('other-films__item');

        const link = document.createElement('a');
        link.classList.add('other-films__link');
        if (key.results.length > 0) {
            link.href = `https://youtu.be/${key.results[0].key}`;
        }
        link.dataset.rating = `${item.vote_average.toFixed(1)}`;
        link.target = "_blank";

        const img = document.createElement('img');
        img.classList.add('other-films__img');
        img.alt = `poster ${item.title ?? item.name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;

        link.append(img);
        card.append(link);

        return card;
    })).then(cards => listCard.append(...cards))
    .then(() => {
        popup();
    }); 

    
};

export default renderCards;