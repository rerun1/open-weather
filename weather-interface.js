

$(document).ready(function(){
  $('#weatherLocation').click(function(){

    const response = "";

    const city = $('#city').val();
    const state = $('#state').val();

    $('#city').val("");
    $('#state').val("");

    let request = new XMLHttpRequest();

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},usa&APPID=`;

    request.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          getElements(response);
      }
      return response;
    }
    request.open("GET", url, true);
    request.send();

    const getElements = function(response){
      $(".showHumidity").text(`The humidity in ${city} is ${response.main.humidity}%`);
      $(".showTemp").text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
