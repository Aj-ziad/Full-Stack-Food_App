
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'

export const sendCheckoutData = async (customerData, cartData)=>{
    try {
        // Ensure URL has proper slash
        const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
        const response = await fetch(`${baseUrl}/orders`, {
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
        
        const data = await response.json();
        return {
            status: response.status,
            message: data.message || 'Unknown error',
            ok: response.ok
        };
        
    } catch (error) {
        return {
            status: 500,
            message: error.message || 'Network error',
            ok: false
        };
    }
}