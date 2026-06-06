 export const sendEmail = async (emailData) => {
    const API_URL = process.env.SERVER_URL
    const response = await fetch(`${SERVER_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    });

    return await response.json();
};