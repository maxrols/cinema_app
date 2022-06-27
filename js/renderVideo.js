import { getTrends, getVideo } from "./services.js";
import renderCards from "./renderCards.js";
import popup from "./popup.js";

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, video) => {
    const key = video.results[0]?.key;
    const {
        vote_average,
        backdrop_path,
        name,
        original_name,
        title,
        original_title
    } = data;
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${vote_average.toFixed(1)}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="постер ${data.title || data.name}">
            <p class="film-week__title_origin">${original_title || original_name}</p>
        </div>
        <h2 class="film-week__title">${title || name}</h2>
        ${key ? 
            `<a class="film-week__watch-trailer" href="https://youtu.be/${key}" aria-label="смотреть трейлер" target="_blank"></a>` :
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

    firstRender(firstCard, video);
    popup();
    renderCards(otherCards);
};

export default renderVideo;