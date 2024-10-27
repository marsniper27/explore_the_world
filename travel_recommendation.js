const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


function searchLocation() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    let options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    resultDiv.innerHTML = '';

    console.log('input', input)

    if (input === '') {
        resultDiv.innerHTML += `<h2>Please Enter a Search value</h2>`;
    }
    else if (input.includes('beach')) {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                const locations = data.beaches;
                console.log('locations', locations)

                if (locations) {
                    for (const location of locations) {
                        switch (location.name) {
                            case "Bora Bora, French Polynesia":
                                options.timeZone = 'Pacific/Tahiti';
                                break;
                            case "Copacabana Beach, Brazil":
                                options.timeZone = 'America/Sao_Paulo';
                                break;

                        }
                        const localTime = new Date().toLocaleTimeString('en-US', options);
                        console.log('location', location)
                        console.log('timeZone', options.timeZone)
                        console.log('localTime', localTime)
                        resultDiv.innerHTML += `<div class="location">
                    <img src="${location.imageUrl}" alt="hjh">
                    <div class="details">
                    <h2>${location.name}</h2>
                    <p>${location.description}</p>
                    <p>Current Time: ${localTime}</p>
                    </div
                    </div">`;
                    }
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
    else if (input.includes("temple")) {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                const locations = data.temples;
                console.log('locations', locations)

                if (locations) {
                    for (const location of locations) {
                        switch (location.name) {
                            case "Angkor Wat, Cambodia":
                                options.timeZone = 'Asia/Phnom_Penh';
                                break;
                            case "Taj Mahal, India":
                                options.timeZone = 'Asia/Kolkata';
                                break;

                        }
                        const localTime = new Date().toLocaleTimeString('en-US', options);
                        console.log('location', location)
                        resultDiv.innerHTML += `<div class="location">
                    <img src="${location.imageUrl}" alt="hjh">
                    <div class="details">
                    <h2>${location.name}</h2>
                    <p>${location.description}</p>
                    <p>Current Time: ${localTime}</p>
                    </div
                    </div">`;
                    }
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });

    }
    else {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const locations = data.countries.find(item => item.name.toLowerCase() === input);

                if (location) {
                    for (const location of locations.cities) {
                        switch (location.name) {
                            case "Sydney, Australia":
                                options.timeZone = 'Australia/Sydney';
                                break;
                            case "Melbourne, Australia":
                                options.timeZone = 'Australia/Melbourne';
                                break;
                            case "Tokyo, Japan":
                                options.timeZone = 'Asia/Tokyo';
                                break;
                            case "Kyoto, Japan":
                                options.timeZone = 'Asia/Tokyo';
                                break;
                            case "São Paulo, Brazil":
                                options.timeZone = 'America/Sao_Paulo';
                                break;
                            case "Rio de Janeiro, Brazil":
                                options.timeZone = 'America/Sao_Paulo';
                                break;

                        }
                        const localTime = new Date().toLocaleTimeString('en-US', options);
                        console.log('location', location)
                        resultDiv.innerHTML += `<div class="location">
                    <img src="${location.imageUrl}" alt="hjh">
                    <div class="details">
                    <h2>${location.name}</h2>
                    <p>${location.description}</p>
                    <p>Current Time: ${localTime}</p>
                    </div
                    </div">`;
                    }
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
}

function clearSearch() {
    console.log('clearing search')
    document.getElementById('search').value = '';
}

btnSearch.addEventListener('click', searchLocation);

btnClear.addEventListener('click', clearSearch); 
