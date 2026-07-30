export interface LastSong {
    nowPlaying: boolean | null;
    date: string | null;
    album: string;
    artist: string;
    image: string;
    name: string;
    url: string;
}

export function lastSongService() {
    const url = 'https://lastfm-last-played.biancarosa.com.br/abbokado/latest-song';

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        
        const lastSong: LastSong = {
            nowPlaying: data.track["@attr"]?.nowplaying === "true" ? true : false,
            date: data.track?.date?.["#text"]?.toString() || null,
            album: data.track.album["#text"],
            artist: data.track.artist["#text"],
            image: data.track.image[2]["#text"],
            name: data.track.name,
            url: data.track.url
        };
        return lastSong;
    };

    return {
        fetchData
    }
}