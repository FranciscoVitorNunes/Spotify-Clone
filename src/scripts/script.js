const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById('result-artist');
const resultsPlaylist = document.getElementById('result-playlists');

function requestAPI (searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults (results){
    resultsPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    results.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImage;
    });

    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', ()=> {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultsPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestAPI(searchTerm);
})