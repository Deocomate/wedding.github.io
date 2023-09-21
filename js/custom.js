let data = [{
        "fileName": "1_optimized.jpg"
    },
    {
        "fileName": "azp00887_optimized.jpg"
    },
    {
        "fileName": "azp00918_optimized (1).jpg"
    },
    {
        "fileName": "azp00984---copy_optimized.jpg"
    },
    {
        "fileName": "azp00981_optimized.jpg"
    },
    {
        "fileName": "azp01122_optimized (1).jpg"
    },
    {
        "fileName": "azp00969_optimized.jpg"
    },
    {
        "fileName": "azp00955_optimized.jpg"
    },
    {
        "fileName": "azp00960_optimized.jpg"
    },
    {
        "fileName": "azp00971_optimized.jpg"
    }
]

console.log(data)
let html = ``
data.forEach(item => {
    console.log(item)
    html += `
    <div class="item">
        <figure>
            <div class="gallery-img">
                <a href="weddingNen/${item.fileName}" data-gall="photos">
                    <img src="weddingNen/${item.fileName}" alt>
                </a>
            </div>
        </figure>
    </div>
    `
})
console.log(html)
document.querySelector("#photos .gallery-grid").innerHTML = html