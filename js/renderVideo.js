import { getTrends, getVideo } from "./services.js";
import renderCards from "./renderCards.js";

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, { key }) => {
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
    console.log(firstCard);
    console.log(video);

    firstRender(firstCard, video.results[0]);
    renderCards(otherCards);
};

export default renderVideo;