


function testMovieDb(){


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2015-08-15&primary_release_date.lte=2016-08-22&api_key=02a6d79992ed3e3da1f638dec4c74770", false);
    xhr.send();

    document.getElementById("movieStatus").innerHTML = xhr.status;
    document.getElementById("movieStatusText").innerHTML = xhr.statusText;

    if(xhr.status == 200 && xhr.statusText == "OK"){

        //process JSON
            var myArr = JSON.parse(xhr.responseText);
            //console.log(myArr);
            //console.log(myArr["results"]);
            var results = myArr["results"];
            var BASE = "http://image.tmdb.org/t/p/w185/";
            var out ="";
            var i;
            //<img src='pathtoposter'>title</img>
            for (i = 0; i <15;i++){
                out += '<img src="';
                out+= BASE+results[i]["backdrop_path"];
                out+= '">';
                out+= results[i]["original_title"];
                out+= '</img><br>';
            }
            document.getElementById("out").innerHTML = out;

    }


}
