import axios from "axios";

export interface ExternalUrls {
        spotify: string;
      }
      
export interface Artist {
        externalUrls: ExternalUrls;
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }
      
export interface Image {
        height: number;
        url: string;
        width: number;
      }
      
export interface Album {
        albumGroup: string | null;
        albumType: string;
        artists: Artist[];
        availableMarkets: string[] | null;
        externalUrls: ExternalUrls;
        href: string;
        id: string;
        images: Image[];
        name: string;
        releaseDate: string;
        releaseDatePrecision: string;
        restrictions: string | null;
        type: string;
        uri: string;
      }


export async function fetchSongs(year: number) {
    const { data } = await axios.get<Album>(`http://localhost:8080/search/${year}`);
    return data;
}
