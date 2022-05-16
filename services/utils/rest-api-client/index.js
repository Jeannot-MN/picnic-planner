import fetch from 'node-fetch';

export async function get(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (response.ok) return await response.json();

    throw Error("Something went wrong while calling the API.");
}