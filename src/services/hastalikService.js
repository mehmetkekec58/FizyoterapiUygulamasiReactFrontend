import axios from "axios";

export default class HastalikService{
    getAllHastalik(){
        return axios.get("http://localhost:8080/api/hastalik/getall");
    }
}