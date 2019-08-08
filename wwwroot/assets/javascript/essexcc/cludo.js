define(["jquery", "cludo"], function ($, cludo) {

    var init = function () {
        var cludoSettings = {
            customerId: 2222,
            engineId: 10581,
            searchUrl: '/search',
            language: 'en',
            //type: 'inline',
            disableAutocomplete: true,
            hideSearchFilters: false,
            initSearchBoxText: 'Search',
            searchInputs: ["cludo-search-form", "cludo-search-mobile-form", "cludo-search-hero-form"]
            //theme: { themeColor: '#055c58', themeBannerColor: { textColor: '#ffffff', backgroundColor: '#055c58' }, borderRadius: 10 }
        };

        CludoSearch = new Cludo(cludoSettings);
        CludoSearch.init();
    };

    return {
        Init: init
    };
});

