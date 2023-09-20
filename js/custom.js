let data = [
    {
        "fileName": "02 - Copy.jpg"
    },
    {
        "fileName": "02.jpg"
    },
    {
        "fileName": "1.jpg"
    },
    {
        "fileName": "3.jpg"
    },
    {
        "fileName": "4.jpg"
    },
    {
        "fileName": "AP1.jpg"
    },
    {
        "fileName": "AP2.jpg"
    },
    {
        "fileName": "AP3.jpg"
    },
    {
        "fileName": "AP4.jpg"
    },
    {
        "fileName": "AZP00887.jpg"
    },
    {
        "fileName": "AZP00895.jpg"
    },
    {
        "fileName": "AZP00900.jpg"
    },
    {
        "fileName": "AZP00903.jpg"
    },
    {
        "fileName": "AZP00915.jpg"
    },
    {
        "fileName": "AZP00918.jpg"
    },
    {
        "fileName": "AZP00924.jpg"
    },
    {
        "fileName": "AZP00942.jpg"
    },
    {
        "fileName": "AZP00948.jpg"
    },
    {
        "fileName": "AZP00955.jpg"
    },
    {
        "fileName": "AZP00960.jpg"
    },
    {
        "fileName": "AZP00963.jpg"
    },
    {
        "fileName": "AZP00966.jpg"
    },
    {
        "fileName": "AZP00969.jpg"
    },
    {
        "fileName": "AZP00971.jpg"
    },
    {
        "fileName": "AZP00976.jpg"
    },
    {
        "fileName": "AZP00981.jpg"
    },
    {
        "fileName": "AZP00984 - Copy.jpg"
    },
    {
        "fileName": "AZP00984.jpg"
    },
    {
        "fileName": "AZP01007.jpg"
    },
    {
        "fileName": "AZP01012.jpg"
    },
    {
        "fileName": "AZP01026.jpg"
    },
    {
        "fileName": "AZP01027.jpg"
    },
    {
        "fileName": "AZP01028.jpg"
    },
    {
        "fileName": "AZP01033.jpg"
    },
    {
        "fileName": "AZP01039.jpg"
    },
    {
        "fileName": "AZP01044.jpg"
    },
    {
        "fileName": "AZP01053.jpg"
    },
    {
        "fileName": "AZP01057.jpg"
    },
    {
        "fileName": "AZP01058.jpg"
    },
    {
        "fileName": "AZP01063.jpg"
    },
    {
        "fileName": "AZP01072.jpg"
    },
    {
        "fileName": "AZP01085.jpg"
    },
    {
        "fileName": "AZP01096.jpg"
    },
    {
        "fileName": "AZP01104.jpg"
    },
    {
        "fileName": "AZP01105.jpg"
    },
    {
        "fileName": "AZP01113.jpg"
    },
    {
        "fileName": "AZP01120.jpg"
    },
    {
        "fileName": "AZP01122.jpg"
    },
    {
        "fileName": "AZP01130.jpg"
    },
    {
        "fileName": "AZP01141.jpg"
    },
    {
        "fileName": "THAH0042.jpg"
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
                <a href="wedding/${item.fileName}" data-gall="photos">
                    <img src="wedding/${item.fileName}" alt>
                </a>
            </div>
        </figure>
    </div>
    `
})
console.log(html)
document.querySelector("#photos .gallery-grid").innerHTML = html
