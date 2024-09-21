
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();


    const searchTerm = form.elements.search.value;

    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    makeImages(res.data);

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image.medium) {
            
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}