describe('i18n.mock', function() {
    beforeEach(module('i18n'));
    beforeEach(inject(function() {}));

    it('i18nLocation is alias for $location', inject(function(i18nLocation, $location) {
        expect(i18nLocation).toEqual($location);
    }));
});