var app = angular.module('App', []);
app.controller('AppController', ['$scope', '$http', function($scope, $http) {
	
	var weatherkey = "03f41800b52de91a6ab2477f834ba8a9";
	var portageid = 5267785;
	
	// Bindable functions
	$scope.toFahrenheit = function(kalvin) {
		return (kalvin * 9/5 - 459.67).toFixed(1);
	};
	$scope.getDayOfWeek = function(datetime) {
		var d = new Date(datetime);
		var weekday = [];
		weekday.push("Sunday");
		weekday.push("Monday");
		weekday.push("Tuesday");
		weekday.push("Wednesday");
		weekday.push("Thursday");
		weekday.push("Friday");
		weekday.push("Saturday");
		return weekday[d.getDay()];
	};
	$scope.getMonthOfYear = function(datetime) {
		var d = new Date(datetime);
		var months = [];
		months.push("January");
		months.push("February");
		months.push("March");
		months.push("April");
		months.push("May");
		months.push("June");
		months.push("July");
		months.push("August");
		months.push("September");
		months.push("October");
		months.push("November");
		months.push("December");
		return months[d.getMonth()];
	};
	$scope.getYear = function(datetime) {
		return new Date(datetime).getFullYear();
	};
	$scope.getDayOfMonth = function(datetime) {
		return new Date(datetime).getDate();
	};
	$scope.dateIndexes = function(array) {
		// Function to determine the next day index in the array of weather data.
		if (!array)
			return;
			
		var indexes = [];
		var prevday = '';
		for (var i = 0; i < array.length; i++) {
			var day = $scope.getDayOfWeek(array[i].dt_txt);
			if (indexes.length == 0 || prevday != day){
				prevday = day;
				indexes.push(i);
			}
		}
		
		return indexes;
	};
	// This is a helper function for 'for' loops in html angular code.
	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			input.push(i);
		}
		return input;
	};
	$scope.getWeatherBackground = function(id) {
		// See http://openweathermap.org/weather-conditions
		if (!id)
			return;
			
		var data = [
			{ id: 200, url: "https://makingroomforgod.files.wordpress.com/2013/01/storm.jpg" },
			{ id: 201, url: "https://makingroomforgod.files.wordpress.com/2013/01/storm.jpg" },
			{ id: 202, url: "https://makingroomforgod.files.wordpress.com/2013/01/storm.jpg" },
			{ id: 210, url: "http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg" },
			{ id: 211, url: "http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg" },
			{ id: 212, url: "http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg" },
			{ id: 221, url: "http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg" },
			{ id: 230, url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg" },
			{ id: 231, url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg" },
			{ id: 232, url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg" },
			
			{ id: 300, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 301, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 302, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 310, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 311, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 312, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 313, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 314, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			{ id: 321, url: "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg" },
			
			{ id: 500, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 501, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 502, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 503, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 504, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 511, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 521, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 522, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			{ id: 531, url: "http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg" },
			
			{ id: 600, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 601, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 602, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 611, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 612, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 615, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 616, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 621, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			{ id: 622, url: "http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg" },
			
			{ id: 701, url: "http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040" },
			{ id: 711, url: "http://bgfons.com/upload/smoke_texture2714.jpg" },
			{ id: 721, url: "https://a2ua.com/haze/haze-010.jpg" },
			{ id: 731, url: "https://entertainingmadesimple.files.wordpress.com/2011/04/old-house-11.gif" },
			{ id: 741, url: "http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040" },
			{ id: 751, url: "https://static.pexels.com/photos/32298/pexels-photo.jpg" },
			{ id: 761, url: "http://www.reddirtreport.com/sites/default/files/articles/2016/03/images/dustindicator.jpg" },
			{ id: 762, url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/MtCleveland_ISS013-E-24184.jpg" },
			{ id: 771, url: "http://images.fineartamerica.com/images-medium-large-5/summer-rain-squalls-pamela-weston.jpg" },
			{ id: 781, url: "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Science/Q-Z/tornado.jpg" },
			
			{ id: 800, url: "http://i.imgur.com/5TRRasr.jpg" },
			
			{ id: 801, url: "http://img15.deviantart.net/c199/i/2011/304/e/4/scattered_clouds___stock_by_thy_darkest_hour-d4em598.jpg" },
			{ id: 802, url: "http://img15.deviantart.net/c199/i/2011/304/e/4/scattered_clouds___stock_by_thy_darkest_hour-d4em598.jpg" },
			{ id: 803, url: "http://img15.deviantart.net/c199/i/2011/304/e/4/scattered_clouds___stock_by_thy_darkest_hour-d4em598.jpg" },
			{ id: 804, url: "http://img15.deviantart.net/c199/i/2011/304/e/4/scattered_clouds___stock_by_thy_darkest_hour-d4em598.jpg" },
			
			{ id: 900, url: "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Science/Q-Z/tornado.jpg" },
			{ id: 901, url: "http://media.clickorlando.com/photo/2015/11/02/Hurricane--Tropical-Storm--GENERIC-Graphic--HD--4-8-09---19129234_196308_ver1.0_1280_720.jpg" },
			{ id: 902, url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Hurricane_Isabel_from_ISS.jpg" },
			{ id: 903, url: "http://398nju1tclun3esk1k46ht4v.wpengine.netdna-cdn.com/wp-content/uploads/2016/01/cold-weather-ahead_road-sign_1024x1024.jpg" },
			{ id: 904, url: "https://i.ytimg.com/vi/pTnNqYtbVFs/maxresdefault.jpg" },
			{ id: 905, url: "http://media.mnn.com/assets/images/2016/05/01-windydog-carloscherer.jpg.838x0_q80.jpg" },
			{ id: 906, url: "http://brentincahoots.com/wp-content/uploads/2016/05/hail.jpg" },
			
			{ id: 951, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 952, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 953, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 954, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 955, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 956, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 957, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 958, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 959, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 960, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 961, url: "http://i.imgur.com/5TRRasr.jpg" },
			{ id: 962, url: "http://i.imgur.com/5TRRasr.jpg" }
		];
		return $.grep(data, function(e) { return e.id == id} )[0].url;
	};
	
	// Private functions
	var refresh = function() {
		
		// Get the weather data.
		var currentweatherurl = "http://api.openweathermap.org/data/2.5/forecast?id=" + portageid
			+ "&appid=" + weatherkey;
		$http({
			method: 'GET',
			url: currentweatherurl
		}).then(function successCallback(response) {
			$scope.weather = response.data;
		}, function errorCallback(response) {
			console.error('Fail: Could not get weather data.');
		});
	
		// Get the news from reddit.
		var redditurl = "http://reddit.com/r/all/hot.json?jsonp=?";
		$.getJSON(
			"http://www.reddit.com/r/pics.json?jsonp=?&limit=5",
			function(result)
			{
				$scope.redditData = result.data.children;
				console.dir($scope.redditData);
			}
		).error(function() { console.error('Fail: Could not get reddit data.'); });
      
		// Get the current date data.
		var d = new Date();
		$scope.dateString = $scope.getDayOfWeek(d) + ", " 
			+ $scope.getMonthOfYear(d) + " "
			+ $scope.getDayOfMonth(d) + ", "
			+ $scope.getYear(d);
		$scope.welcomeString = "Hello there!";
	};
	
	
	
	refresh();
	
	// Apply a timer to refresh every 5 minutes.
	var timer = window.setInterval(refresh, 1 * 1000 * 60);
	
}]);