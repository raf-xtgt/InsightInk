export const createSentiment = async (url, payload) => {
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if(!response.ok){
            throw new Error("Error sending network request");
        }
        const responseData = await response.json();
        return responseData;
    }
    catch(error){
        console.error('Error', error)
    }
}