export const get = url =>  
                fetch(url)
                .then(response => {
                        return response.json();
                });   