app.config(["$routeProvider", "$locationProvider", function ($routes, $location) {
    $location.hashPrefix("!").html5Mode({
        enabled: true,
        requireBase: false
    });

    $routes
    .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
    }).when("/login", {
        templateUrl: "/views/login.html",
        controller: "LoginController"
    }).when("/register", {
        templateUrl: "/views/register.html",
        controller: "RegisterController"
    }).when("/welcome", {
        templateUrl: "/views/welcome.html",
        controller: "WelcomeController"
    });
}]).run();