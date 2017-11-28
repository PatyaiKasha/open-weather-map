// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/weather?id=2172797

$(document).ready(function() {
    $.get(
        "http://api.openweathermap.org/data/2.5/weather",

        {
            "id": 703448,
            "appid": "15a98b1cd17f727a8c50793f56d97a02"
        },

        function(data) {
            console.log(data);
            console.log(data.id);
            console.log(data.name);
            console.log(data.sys.country);
            console.log(data.main.temp - 273 + 'C');
            console.log(data.main.humidity + '%');
            console.log(data.main.pressure / 1.333224 + ' мм.рт.ст.');
            console.log(data.visibility + ' м.');
            console.log(data.wind.speed + ' м*с');
            console.log(data.weather[0].description);
            var out = '';
            out += 'id города: ' + data.id + '<br>';
            out += 'Имя города: ' + data.name + '<br>';
            out += 'Страна: ' + data.sys.country + '<br>';
            out += 'Температура: ' + Math.floor(data.main.temp - 273) + ' &#176;C <br>';
            out += 'Влажность: ' + data.main.humidity + ' % <br>';
            out += 'Давление: ' + Math.floor(data.main.pressure / 1.333224) + ' мм.рт.ст.<br>';
            out += 'Видимость: ' + data.visibility + ' м.<br>';
            out += 'Скорость ветра: ' + data.wind.speed + ' м*с<br>';
            out += 'Погода: ' + data.weather[0].description;
            $('#outWeather').html(out);
        }
    );
});

$('#takeId').on('click', function(event) {
    event.preventDefault();
    var cityId = $('#cityId').val();
    $.get(
        "http://api.openweathermap.org/data/2.5/weather",

        {
            "id": cityId,
            "appid": "15a98b1cd17f727a8c50793f56d97a02"
        },

        function(data) {
            var out2 = '';
            out2 += 'id города: ' + data.id + '<br>';
            out2 += 'Имя города: ' + data.name + '<br>';
            out2 += 'Страна: ' + data.sys.country + '<br>';
            out2 += 'Температура: ' + Math.floor(data.main.temp - 273) + ' &#176;C <br>';
            out2 += 'Влажность: ' + data.main.humidity + ' % <br>';
            out2 += 'Давление: ' + Math.floor(data.main.pressure / 1.333224) + ' мм.рт.ст.<br>';
            out2 += 'Видимость: ' + data.visibility + ' м.<br>';
            out2 += 'Скорость ветра: ' + data.wind.speed + ' м*с<br>';
            out2 += 'Погода: ' + data.weather[0].description + '<br>';
            out2 += `Иконка: <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"><br>`;
            $('#outCity').html(out2);
        }
    );
});

$('#cityList').change(function(event) {
    $('#cityList option:selected').each(function(index, el) {
        var citySelectName = el.value;
        console.log(el);

        $.get(
            "http://api.openweathermap.org/data/2.5/weather",

            {
                "id": citySelectName,
                "appid": "15a98b1cd17f727a8c50793f56d97a02"
            },

            function(data) {

                var selectCityName = el.innerHTML;
                $('.selectCityName').html(selectCityName);

                var selectCityCountry = data.sys.country;
                $('.selectCityCountry').html(selectCityCountry);

                var selectCityTemp = Math.floor(data.main.temp - 273) + ' &#176;C';
                $('.selectCityTemp').html(selectCityTemp);

                var selectCityHumidity = data.main.humidity + ' %';
                $('.selectCityHumidity').html(selectCityHumidity);

                var selectCityPressure = Math.floor(data.main.pressure / 1.333224) + ' mm Hg';
                $('.selectCityPressure').html(selectCityPressure);

                var selectCityVisibility = data.visibility + ' m.';
                $('.selectCityVisibility').html(selectCityVisibility);

                var selectCityWindSpeed = data.wind.speed + ' m*s';
                $('.selectCityWindSpeed').html(selectCityWindSpeed);

                var weatherDesc = data.weather[0].description;
                $('.weatherDesc').html(weatherDesc);

                var imgSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                $('.imgSrc').attr('src', imgSrc);
            }
        );
    });
});



// Сделать выпадающий список из городов Украины(взять из файла JSON) и по выбору города выводить информацию на экран