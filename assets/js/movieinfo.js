

document.addEventListener('DOMContentLoaded', async function () {
    let currenturl = new URL(window.location.href)
    let queryparams = new URLSearchParams(currenturl.search);
    let moviid2 = queryparams.get("movieid");

    try {
        let movieurl = `${baseurl}/movie/${moviid2}?api_key=${apikey}`;
        let movievideourl = `${baseurl}/movie/${moviid2}/videos?api_key=${apikey}`;
        let creditsurl = `${baseurl}/movie/${moviid2}/credits?api_key=${apikey}`;

        let movieobj = await makeapicall(movieurl, "GET");
        let MOVIEVIDEOS = await makeapicall(movievideourl, "GET");
        let credits = await makeapicall(creditsurl, "GET");
        cl(movieobj);
        cl(MOVIEVIDEOS)


        const heroimgshow = document.getElementById('heroimg2');

        heroimgshow.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieobj.backdrop_path})`
    } catch (err) {
        cl(err)
    }


})