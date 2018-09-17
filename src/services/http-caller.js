export const get = url =>  
        fetch(url.then(resolve => resolve.json()));