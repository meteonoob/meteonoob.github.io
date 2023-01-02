
export async function request(method, url, data) {
    const options = {
        method,
       
        headers: {
          
        }
    };

    if (url.includes('https://wft-geo-db.p.rapidapi.com')) {
        options.headers['X-RapidAPI-Key'] = '1435e7592dmsh7f397acb8e23af0p100709jsn5f395aa08033';
        options.headers['X-RapidAPI-Host'] = 'wft-geo-db.p.rapidapi.com'


    }

    if (data !== undefined) {
        options.headers['Content-type'] = 'application/json';
 

        options.body = JSON.stringify(data);
    }

    try{
        const response = await fetch(url, options);

        if (response.status == 204) {
            return response;
        }

        const result = await response.json();

        if (response.ok == false && response.status != 429) {
            throw new Error(result.message);
        }

        return result;

    }catch(err){
       alert(err.message);
       throw err
    }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");