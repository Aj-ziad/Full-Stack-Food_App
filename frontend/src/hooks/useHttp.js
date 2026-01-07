
const API_BASE_URL = 'http://localhost:3000/'

export const sendCheckoutData = async (customerData, cartData)=>{
    try {
        const response = await fetch(API_BASE_URL + 'orders', {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:  JSON.stringify({order: {
                customer: customerData,
                items: cartData
            }})
        });
        return response;
        
    } catch (error) {
        //console.error(error);
        return error;
    }
}