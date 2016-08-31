  var map;
  var geoJSON;
  var request;
  var gettingData = false;
  var openWeatherMapKey = "cd053ed32f8216bfdfa1574f5d9785cf";
  //var googleMapApi = "AIzaSyAkhaHJGKBZbWrfJmCv0BQTkmR7IArC7Ko"

  // Make the weather request
  var getWeather = function() {
    gettingData = true;
    var requestString = "api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7"
                        + "&APPID=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
    document.getElementById("demo").innerHTML = request.status;

  };

function testFunction(){


    //create array
    var cars = ["Saab", "Volvo", "BMW"];
    var carReviews = ["Shit", "Cool", "Whatevs"];
    //loop thru array


    var firstIndex, secondIndex;
    var text = "";
    var textP ="";

    text += "<tr style=\"border: 1px solid black\">"
    text += "<td>"+cars[0]+"</td>";
    text += "<td>"+cars[1]+"</td>";
    text += "<td>"+cars[2]+"</td>";
    text += "</tr>"

    for(var x = 0; x < 10; x++){
        var ranNum = Math.floor(Math.random() * 3);
        var ranNum2 = Math.floor(Math.random() * 3);
        var ranNum3 = Math.floor(Math.random() * 3);
        text += "<tr>";
            text += "<td>"+carReviews[ranNum]+"</td>";
            text += "<td>"+carReviews[ranNum2]+"</td>";
            text += "<td>"+carReviews[ranNum3]+"</td>";
        text += "</tr>";
    }

//        for(firstIndex = 0; firstIndex < 10; firstIndex++){
//            for(secondIndex = 0; secondIndex < firstIndex ; secondIndex++){
//                text += "*";
//            }
//            text += "</br>";
//        }
  document.getElementById("tableDemo").innerHTML = text;
  document.getElementById("demo").innerHTML = textP;
}
