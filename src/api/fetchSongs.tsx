import axios from "axios";
import { Track } from "./TrackDataType";

export async function fetchSongs(year: number) {
    const { data } = await axios.get<Track[]>(`http://localhost:8080/search/${year}`);
    return data;
}
