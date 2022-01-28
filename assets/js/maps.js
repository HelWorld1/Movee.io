function initMap() {
	const location = {lat: 55.7150407, lng: 37.705881};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: location,
		mapId: 'MAP_ID',
		disableDefaultUI: true,
		zoomControl: false,
		scaleControl: true,
	});
	const contentString =
		'<div class="map__content">' +
		'<h1 class="map__title title">Movee</h1>'+
		'<div class="map__info">'+
		'<p class="map__item basic__18px">Москва, Волгоградский пр-т, 38</p>' +
		'<p class="map__item basic__18px">8 (800)-080-12-13</p>' +
		'<p class="map__item mail basic__18px">' +
		'<ins>' +
		'hello@movee.ru' +
		'</ins>' +
		'</p>' +
		'</div>' +
		'<div class="map__social-network">' +
		'<a href="" class="map__social social" aria-label="youtube"></a>' +
		'<a href="" class="map__social social" aria-label="vkontakte"></a>' +
		'<a href="" class="map__social social" aria-label="facebook"></a>' +
		'<a href="" class="map__social social" aria-label="instagram"></a>' +
		'</div>' +
		'</div>';
	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	const marker = new google.maps.Marker({
		position: location,
		map,
		title: "test",
	});

	marker.addListener("click", () => {
		if(document.documentElement.clientWidth > 500){
			infowindow.open({
				anchor: marker,
				map,
				shouldFocus: false,
			});
		}
	});
};