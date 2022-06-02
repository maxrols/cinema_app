import { getTrends, getVideo } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');

<<<<<<< HEAD
const firstRender = (data, video) => {
    const key = video.results[0]?.key;
=======
const firstRender = (data, { key }) => {
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5
    const {
        vote_average,
        backdrop_path,
        name,
        original_name,
        title,
        original_title
    } = data;
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${vote_average}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="постер ${data.title || data.name}">
            <p class="film-week__title_origin">${original_title || original_name}</p>
        </div>
        <h2 class="film-week__title">${title || name}</h2>
        ${key ? 
            `<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>` :
            ''    
        }
        
    </div>
    `;
};

const renderVideo = async () => {

    const data = await getTrends();

    const [firstCard, ...otherCards] = data.results;
    otherCards.length = 16;

    const video = await getVideo(firstCard.id, firstCard.media_type);
<<<<<<< HEAD

    firstRender(firstCard, video);
=======
    console.log(firstCard);
    console.log(video);

    firstRender(firstCard, video.results[0]);
>>>>>>> 2955fab3c45c9906ecbb672a11cf6a3bbeb3e1b5
    renderCards(otherCards);
};

export default renderVideo;