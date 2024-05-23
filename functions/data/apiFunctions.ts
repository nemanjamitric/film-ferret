import { IMDbIdSearchResult } from "../../interfaces/responseInterfaces";

const generateTtId = () : string => {
    const number = Math.floor(Math.random() * 32431420) + 1; // Current highest id was 32431420
    
    let numberStr = number.toString();
    
    while (numberStr.length < 8) {
        numberStr = '0' + numberStr;
    }
    
    return numberStr;
}

export const getRandomMovies = async (): Promise<IMDbIdSearchResult[]> => {
    const result = await Promise.all(
        Array.from(['tt0111161', 'tt0075314', 'tt0043278', 'tt0107048', 'tt0075148', 'tt0110912', 'tt0118799', 'tt0095250', 'tt0102926', 'tt0112461', ], (x) => getRandomMovie(x)),
    )

    return result
}

export const searchMovie = async (searchString: string) => {
    const response = await fetch(
        `https://search.imdbot.workers.dev/?q=${searchString}`
    );
    const data = await response.json();
    return data;
}


// const getRandomMovie = async () => {
//     const movieID = generateTtId();

//     console.log(`https://search.imdbot.workers.dev/?tt=tt${movieID}`);
    

//     const response = await fetch(
//         `https://search.imdbot.workers.dev/?tt=tt${movieID}`
//     );
//     const data = await response.json();

//     console.log(Object.keys(data));

//     if (data.error_code === 103 || data?.short?.['@type'] !== 'Movie' || data?.short?.name === undefined) {
//         console.log('getting again', data.error_code, data?.short?.['@type'], data?.short?.name);
        
//         return getRandomMovie();
//     }
    

//     return data;
// }

const getRandomMovie = async (movieID: string) => {
    // const movieID = generateTtId();
    

    const response = await fetch(
        `https://search.imdbot.workers.dev/?tt=${movieID}`
    );
    const data = await response.json();

    return data;
}