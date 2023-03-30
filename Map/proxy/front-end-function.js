async function checkAvailability(targetUrl) {
    try {
        // URL of the proxy server, with the availability endpoint
        const apiUrl = 'http://localhost:3000/api/availability';

        // Fetch the data from the proxy server
        //* Updated to use the POST method to send the target URL
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ targetUrl })
        });
        
        if (!response.ok) {
            // If the response does not have the "OK" status, throw an error
            throw new Error('Error fetching availability');
        }

        // Parse the JSON response into a JavaScript object
        const data = await response.json();
        const available = data.availability === 'AVAILABLE'; // Evaluates to true if the availability is "AVAILABLE"

        // Log the result to the console
        // TODO: Remove this line when the testing is complete
        console.log('Availability:', available);
        return available;

    } catch (error) {
        // Log any errors to the console
        console.log(error);
        return false
    }
}

 { checkAvailability };

// To import into front-end:
// import { checkAvailability } from ./path/to/file

// Sample function call with URL
// checkAvailability('http://mtconnect.mazakcorp.com:5611/current');