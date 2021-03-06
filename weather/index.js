
function getCity() {

      var cityName = document.getElementById("city-name").value;
const API_KEY = 'd32517f75b0a4d57952170918221706'
let api = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
Handle(api, cityName);
}

// NEW


function Handle(api, cityName) {
    fetch(api).then(function (response) {return response.json();}).then(function (data) {
        document.getElementById('error').innerHTML = '';
        let temp = document.getElementById('temp-c')
        temp.innerHTML = `${data.current.temp_c}C°`;
        let con = document.getElementById('condition')
        con.innerHTML = `${data.current.condition.text}`;
        let element1 = document.getElementById('location')
        element1.innerHTML = `${data.location.name}`;
        let icons = document.getElementById('icon');
        icons.src = `https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/sun-dynamic-premium.png`;
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
        let errorElement = document.getElementById('error')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Can't find ${cityName}`,
          })
    });
}



