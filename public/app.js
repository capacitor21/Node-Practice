let lat, long;

if ('geolocation' in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition(async function (position) {
        lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        long = position.coords.longitude;
        document.getElementById('longitude').textContent = long;        
    });
} else {
    console.log("geolocation error");
}

document.getElementById("submit").addEventListener("click", async function post () {
    const input = document.getElementById('input').value;
    const data = {lat, long, input};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
});

getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(response);
}

