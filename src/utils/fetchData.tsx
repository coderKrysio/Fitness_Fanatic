export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a3a0f037eemshd7044f96410fa2cp1f9a4ejsnc1c0e5a64261',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};  

export const fetchData = async (url: RequestInfo | URL, options: RequestInit | undefined) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}