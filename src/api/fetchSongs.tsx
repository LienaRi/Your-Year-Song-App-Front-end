import axios from "axios";
import { TrackData } from "./TrackDataType";

export async function fetchSongs(year: number) {
    const { data } = await axios.get<TrackData>(`http://localhost:8080/search/${year}`);
    return data.tracks;
}
