var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        })
        
        .state("PageTab.Page1.Page11", {
			url:'/page1/page11',
			templateUrl:'page1/page11.html'
        })
        .state("PageTab.Page1.Page22", {
			url:'/page1/page22',
			templateUrl:'page1/page22.html'
        });
});