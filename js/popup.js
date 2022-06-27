const popup = () => {

    const links = document.querySelectorAll('.other-films__link');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup__content');
    const closeBtn = document.querySelector('.popup__close');
    const linkFilmWeek = document.querySelector('.film-week__watch-trailer');

    function initPopup(e) {
        e.preventDefault();
        console.log(popupContent);
        popupContent.innerHTML = "";
        popup.classList.add('popup_active');
        document.body.style.overflow = 'hidden';
        let videoLink = e.target.closest('a').href.slice(16);
        const video = document.createElement('iframe');
        video.frameBorder = 0;
        video.src = `https://www.youtube.com/embed${videoLink}?autoplay=1&mute=1`;
        video.allowFullscreen = "allowfullscreen";
        popupContent.append(video);
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            initPopup(e);
        })
    })

    linkFilmWeek.addEventListener('click', e => {
        initPopup(e);
    });

    

    closeBtn.addEventListener('click', () => {
        popupContent.innerHTML = "";
        popup.classList.remove('popup_active');
        document.body.style.overflow = "";
    })

    popup.addEventListener('click', (e) => {
        if (!e.target.classList.contains('popup__video')) {
            popupContent.innerHTML = "";
            popup.classList.remove('popup_active');
            document.body.style.overflow = "";
        }
    })



}

export default popup;