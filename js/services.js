const API_KEY = '4cb0ec7f52deb5305839ba5908b1306a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=en-EN';



const getData = async url => {

    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw `Something went wrong, ${response.status}`;
    })
    .catch(err => console.error(err));

};

export const getTrends = async (type = 'all', period = 'day', page = 2) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getTop = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getPopular = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};

export const getVideo = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
    return await getData(url);
};

export const search = async(query, page = 1) => {
    const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&page=${page}&include_adult=false&query=${query}`;
    return await getData(url);
};