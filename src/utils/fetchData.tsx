import axios from 'axios';

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3a0f037eemshd7044f96410fa2cp1f9a4ejsnc1c0e5a64261',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};  

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3a0f037eemshd7044f96410fa2cp1f9a4ejsnc1c0e5a64261',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url: any, options: any) => {
    const { data } = await axios.get(url, options);

    return data;
}