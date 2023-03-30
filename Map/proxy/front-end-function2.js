async function checkAvailability() {
    try {
        // URL of the proxy server, with the availability endpoint
        const apiUrl = 'http://localhost:3000/api/availability';

        // Fetch the data from the proxy server
        const response = await fetch(apiUrl);
        
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

       
        if(available == true){
            document.querySelector("#demo").innerHTML  = 
        ` 
        <table class="greenTable">
          <thead>
            <tr>
              <th>SMB number should go here</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SMB is Avalible</td>
            </tr>
            <tr>
              <td>Agent 1 is working</td>
            </tr>
          </tbody>
        </table>                         
        `;
        }

    } catch (error) {
        // Log any errors to the console
        document.querySelector("#demo").innerHTML  = 
        ` 
        <table class="redTable">
          <thead>
            <tr>
              <th>SMB number should go here</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SMB is Unavalible</td>
            </tr>
            <tr>
              <td>Agent 1 is not working</td>
            </tr>
            <tr>
              <td>Error Message: ${error}</td>
            </tr>
          </tbody>
        </table>                         
        `;
        console.log(error);
    }
}

// Function call
checkAvailability();