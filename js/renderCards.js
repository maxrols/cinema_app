import { getVideo } from "./services.js";

const listCard = document.querySelector('.other-films__list');

const renderCards = async (data) => {
    listCard.textContent = '';

    Promise.all(data.map(async (item) => {
<<<<<<< HEAD
        let key;
        if (item.name) {
            key = await getVideo(item.id, 'tv');
        } else {
            key = await getVideo(item.id, 'movie');
        }
=======
        const video = await getVideo(item.id, item.media_type);
        const key = video.results[0]?.key;
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5


        const card = document.createElement('li');
        card.classList.add('other-films__item');

        const link = document.createElement('a');
        link.classList.add('other-films__link');
<<<<<<< HEAD
        if (key.results.length > 0) {
            link.href = `https://youtu.be/${key.results[0].key}`;
        }
=======
        if (key) link.href = `https://youtu.be/${key}`;
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5
        link.dataset.rating = `${item.vote_average}`;

        const img = document.createElement('img');
        img.classList.add('other-films__img');
        img.alt = `постер ${item.title ?? item.name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;

        link.append(img);
        card.append(link);

        return card;
<<<<<<< HEAD
    })).then(cards => listCard.append(...cards)); 
=======
    })).then(cards => listCard.append(...cards));


>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5

    
};

export default renderCards;