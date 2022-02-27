import axios from "axios";

export default class IcerikService{
getAll(id){
return axios.get(`http://localhost:8080/api/icerik/getbyhastalikid?id=${id}`)
}
}