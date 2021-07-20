import {SPOTIFY_URL, token} from "./config";

function fetchSongs() {
    fetch(SPOTIFY_URL + '/me/tracks?limit=50', {
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(
            (result) => {
                console.dir(result);
                // dispatch(loadDataAction(result));
                // dispatch(loadAction(false));
            },
            (error) => {
                // dispatch(loadAction(true));
                // console.log(error);
            }
        )
}


export const Api = {
    fetchSongs: fetchSongs
}

