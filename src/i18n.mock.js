angular.module('i18n', [])
    .factory('i18nLocation', function($location) {return $location;})
    .factory('localeResolver', function() {return function() {return 'en'}});