const map_init = L.map('world-map', {
  center: [41.738182, 24.406375],
  zoom: 2
});

const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map_init);

var Basemaps = {
  "OSM": osm
}

L.control.layers(Basemaps).addTo(map_init);
let marker;
map_init.on('click', async ({ latlng }) => {

  GetCountryByLocation(latlng).then(res => {
    marker && map_init.removeLayer(marker)
    marker = L.marker([latlng.lat, latlng.lng]).addTo(map_init);
    marker.bindPopup(`<h3>${res.countryName}</h3>`).openPopup();

    document.querySelector('#CountrySearch').value = res.countryName;

  })
})

function GetCountryByLocation({ lat, lng }) {
  return fetch(`//api.geonames.org/countryCodeJSON?lat=${lat}&lng=${lng}&username=justdiscus`, { mode: 'cors' }).then(res => res.json())
}

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
document.querySelector('#countries').innerHTML = countries.map(el => `<option value="${el}"></option>`).join('')

document.querySelectorAll('.dropdown').forEach(el => el.addEventListener('click', () => el.classList.toggle('open')))

console.log(document.querySelectorAll('input[type=number]'));
document.querySelectorAll('input[type=number]').forEach(el => el.addEventListener('input', e => {

  el.value = [...el.value.toString()].filter(l => !isNaN(l)).join('')
}))

fetch(GetUrlRoot() + 'user/').then(res => res.json()).then(res => {
  console.log(res);
 document.getElementById('results-grid').innerHTML= res.users.map(user => {
    return ` <div class="user-card">
    <div class="avatar-wrapper">
        <svg viewBox="0 0 140 140">
            <circle id="border-track" cx="70" cy="70" r="65"></circle>
            <circle id="track" cx="70" cy="70" r="65"></circle>
            <circle style="--level:${Math.random() * 440}" id="progress" cx="70" cy="70" r="66"></circle>
            <circle style="--level:${Math.random() * 440}" id="progress-border" cx="70" cy="70" r="66"></circle>
        </svg>
        <img
            src="images/Cartoon tiny people.png">
    </div>
    <h3 class="username">${user.username}</h3>
    <span class="lvl-wrapper">Lvl: <span>0</span></span>
    <div class="main-info">
        <span>${user.name || 'No name'}</span>
        <span>${user.age || 'No info'} y.o</span>
        <span>Time</span>
        <span>${user.time || ''}</span>
    </div>
    <div class="hobbies-wrapper">
        <span>Hobbies</span>
        <div class="hobbies-box"></div>
    </div>
    <div class="country">${user.country || 'Bulgaria'}
    </div>
    <a href="./cst-prof.html?id=${user.id}" class="visit-button"></a>
</div>`
  }).join('')
})