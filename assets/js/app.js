

const trendingmovies = `${baseurl}/trending/all/week?api_key=${apikey}`

let trendingmovies2 = document.getElementById('trendingmvies')


const tempaltingtrending = (arr) => {
    let result = '';
    arr.forEach(ele => {
        result += `
        <div class="item">
        <figure class="m-0 moviecard" id="${ele.id}" onclick="loadparams(this)">
            <img src="https://image.tmdb.org/t/p/original/${ele.poster_path}"
                alt="${ele.title}"
                title="${ele.title|| ele.name}">
            <figcaption class="caption  d-flex justify-content-center flex-column pl-4">
                <em>
                    <h3 class="display-3">${ele.title ||ele.name}</h3>
                </em>
                <em class="d-none d-md-block">
                   ${ele.overview}
                </em>
            </figcaption>

        </figure>
        </div>

        `

    });

    trendingmovies2.innerHTML = result;

}

const loadparams = (ele) => {


    let movieId = ele.id;
    // cl(movieid)
    let currenturl = new URL(window.location.href)
    // cl(currenturl)/// cureent page url wit constructer

    let queryparams = new URLSearchParams(currenturl.search)// search params of clicked


    queryparams.set("movieid", movieId)/// inthis setting
    currenturl.search = queryparams.toString();// in string format of getting id

    let movieurl = `${currenturl.origin}/movieinfo.html${currenturl.search}`// concat
    cl(movieurl)
    window.location.href = movieurl;
}

const gettrending = async () => {
    let trendingdata = await makeapicall(trendingmovies, "GET")
    cl(trendingdata)
    tempaltingtrending(trendingdata.results)
    $('#trendingmvies').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    })

}

gettrending()
