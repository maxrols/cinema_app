import { getVideo } from "./services.js";

const listCard = document.querySelector('.other-films__list');

const renderCards = async (data) => {
    listCard.textContent = '';

    Promise.all(data.map(async (item) => {
        const video = await getVideo(item.id, item.media_type);
        const key = video.results[0]?.key;


        const card = document.createElement('li');
        card.classList.add('other-films__item');

        const link = document.createElement('a');
        link.classList.add('other-films__link');
        if (key) link.href = `https://youtu.be/${key}`;
        link.dataset.rating = `${item.vote_average}`;

        const img = document.createElement('img');
        img.classList.add('other-films__img');
        img.alt = `постер ${item.title ?? item.name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;

        link.append(img);
        card.append(link);

        return card;
    })).then(cards => listCard.append(...cards));



    
};

export default renderCards;