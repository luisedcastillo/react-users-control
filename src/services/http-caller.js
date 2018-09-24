export const get = url =>  
                fetch(url)
                .then(response => {
                        return response.json();
                });   

export const put = (url, id, obj) => 
                fetch(`${url}${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(obj),
                        headers: new Headers({
                                "Content-type" : "application/json"
                        })
                })
                .then(response => response.json());