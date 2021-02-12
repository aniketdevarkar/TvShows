async function getdata(text) {

    try {
        let url = "https://api.tvmaze.com/singlesearch/shows?q=" + text + "&embed=episodes";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:"+error);
    }
}


document.querySelector('#getshow').addEventListener('click', function () {
    let searchText = document.getElementById('textInput').value;
    getdata(searchText).then((data)=>{
        let imgUrl = data.image.medium;
        document.getElementById('image').setAttribute('src',imgUrl);
        console.log(data._embedded.episodes.length);
        let noOfEpisodes = data._embedded.episodes.length;
        document.getElementById('other').innerText = "No of episodes = "+noOfEpisodes;
    })
});

