export const songsService = {

    requestGetSongs: (baseURL, token, endpoint) => {
        return fetch(baseURL + endpoint + "?limit=50", {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            method: "GET",
        })
            .then(response => response.json())
            .then(response => response.items)
    },

    requestAddSongs: (id, baseURL, token, endpoint) => {
        fetch(baseURL + endpoint + 'ids=' + id, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            method: "PUT"
        })
            .then(response => response.json())
            .then(response => response.items)
    },

    requestDeleteSongs: (id, baseURL, token, endpoint) => {
        fetch(baseURL + endpoint + 'ids=' + id, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
            .then(response => response.json())
            .then(response => response.items)
    }
}




