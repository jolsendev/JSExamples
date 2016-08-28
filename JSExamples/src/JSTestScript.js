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

  };

function testFunction(){
    var firstIndex, secondIndex, mainIndex;
    var text = "";
    text += "<table>";
    for(mainIndex = 0; mainIndex <10;mainIndex++){
    text += "<tr>"
        for(firstIndex = 0; firstIndex < 10; firstIndex++){
            for(secondIndex = 0; secondIndex < firstIndex ; secondIndex++){
                text += "*";
            }
            text += "</br>";
        }
    text += "</tr>";
    }
    text += "</table>";

  document.getElementById("demo").innerHTML = text;
}
