// Creates a proxy server that will forward requests to the target URL and return the raw XML response

const express = require('express');
const request = require('request');
const xml2js = require('xml2js');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// TODO: make this line be able to change the website on click of whatever smartbox
const target_url = 'http://mtconnect.mazakcorp.com:5611/current';

app.get('/api', (req, res) => {
    request(target_url, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error.message });
        }
        
        // Send raw XML response
        res.setHeader('Content-Type', 'application/xml');
        res.send(body);
    });
});

app.get('/api/json', (req, res) => { // This is the same as the proxy-json.js file
    request(target_url, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error.message });
        }

        // Convert XML to JSON
        xml2js.parseString(body, { explicitArray: false }, (err, result) => {
            if (err) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(JSON.stringify(result, null, 2)));
        });
    });
});

app.get('/api/availability', (req, res) => {
    request(target_url, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error.message });
        }
        
        xml2js.parseString(body, { explicitArray: false }, (err, result) => {
            if (err) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            // Find the device component stream
            const componentStreams = result.MTConnectStreams.Streams.DeviceStream.ComponentStream;
            
            // Iterate through the component streams until the device stream is found
            let targetStream = null;
            for (const stream of componentStreams) {
                if (stream.$.component === 'Device') {
                    targetStream = stream;
                    break;
                }
            }
            
            // If the device stream (containing the availability data Item) is not found, return an error
            if (!targetStream) {
                return res.status(404).json({ type: 'error', message: 'Device stream not found' });
            }
            
            // Find the availability data Item
            const dataItems = targetStream.Events.Availability;
            
            let availability = null;
            
            availability = dataItems._; // The _ property contains the value of the data Item
            
            // If the availability data Item is found, return it in JSON. If not, return an error
            if (availability) {
                res.json({availability: availability});
            } else {
                res.status(404).json({ type: 'error', message: 'Availability not found' });
            }
        });
    });
});

// TODO: May need to add routes to get "ControllerMode" and "Execution" data Items

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});