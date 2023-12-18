document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ipForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const ipAddress = form.ipAddress.value;
        resultDiv.innerHTML = "Loading...";

        try {
            const apiKey = "de669f68a3a129"; // Replace with your actual API key

            const response = await fetch(`https://ipinfo.io/${ipAddress}/json`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
            const data = await response.json();

            const city = data.city || "Doesn't exist";
            const country = data.country || "N/A";
            const latitude = data.loc ? data.loc.split(",")[0] : "N/A";
            const longitude = data.loc ? data.loc.split(",")[1] : "N/A";

            const resultHTML = `
                <h2>Location Information:</h2>
                <p>City: ${city}</p>
                <p>Country: ${country}</p>
                <p>Latitude: ${latitude}</p>
                <p>Longitude: ${longitude}</p>
            `;
            resultDiv.innerHTML = resultHTML;
        } catch (error) {
            resultDiv.innerHTML = "Error fetching data.";
        }
    });
});
