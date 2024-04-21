

//an environment variable
const api_host="http://localhost:5000";
function apiurl(route){
    return api_host+route;
}
export default apiurl;