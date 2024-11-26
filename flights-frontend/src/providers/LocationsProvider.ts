import axios from "axios";
import { Location } from "../models/Location";
import { apiUrl, locations } from "./ApiConsts";

export async function getLocations(keyWord: string) {
    let uri = `${apiUrl}${locations}/${keyWord}`;

    try{
        if (keyWord == null || keyWord == undefined || keyWord == " ") return;

        const response = await axios.get(uri);

        const locations: Location[] = response.data;

        return locations;
    } catch(e){
        console.error();
    }

}