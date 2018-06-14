'use strict'

var AVATARS = ['img/avatars/user01.png',
	'img/avatars/user02.png',
	'img/avatars/user03.png',
	'img/avatars/user04.png',
	'img/avatars/user05.png',
	'img/avatars/user06.png',
	'img/avatars/user07.png',
	'img/avatars/user08.png'
];

var TITLES = ['Большая уютная квартира',
	'Маленькая неуютная квартира',
	'Огромный прекрасный дворец',
	'Маленький ужасный дворец',
	'Красивый гостевой домик',
	'Некрасивый негостеприимный домик',
	'Уютное бунгало далеко от моря',
	'Неуютное бунгало по колено в воде'
];
var TYPES = [palace, flat, house, bungalo];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var ROOMS = [1, 5];
var GUESTS = [50];

var getRandomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRandomElement = function(array) {
	var element = array[Math.floor(Math.random() * array.length)];
	return element;
}

var getRandomTitle = function() {
	var randonIndex = Math.floor(Math.random() * TITLES.length);
	var selectTitle = TITLES[randomIndex];
	TITLES.splice(randomIndex, 1);
	return selectTitle;
}


var ADVERTISMENT_COUNT = 8;
var createAdvertisments = function() {
	var advertismentsArr = [];
	for (var i = 0; i < ADVERTISMENT_COUNT; i++) {
		var randomAdvertisment = {
			autor: getRandomElement(avatar),
			offer: {
				title: getRandomTitle(),
				location: {
					locationX: getRandomNumber(300, 900),
					locationY: getRandomNumber(130, 630)
				},
				adress: locationX + ',' +
					locationY,
				price: getRandomNumber(1000, 1000000),
				type: getRandomElement(types),
				rooms: getRandomNumber(1, 5),
				guests: getRandomNumber(1, 50),
				checkin: getRandomElement(checkin),
				checkout: getRandomElement(checkout),
				features: getRandomElement(features),
				description: '',
				photos: getRandomElement(photos),

			}
		}
		advertismentsArr.push(randomAdvertisment);
	}
	console.log(advertismentsArr);
	return advertismentsArr;
}

createAdvertisments();

/* Получаем шаблон разметки метки */
var template = document.querySelector('template').contant.querySelector('.map__card');
var mapPins = document.querySelector('.map__pins');

/* Вставляем метки в разметку */

for (var i = 0; i < ADVERTISMENT_COUNT; i++) {
	var newElement = template.cloneNode(true)
	newElement.children[0].textContent = i;
	mapPins[0].appendChild(newElement);
}
