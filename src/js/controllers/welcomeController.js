app.controller("WelcomeController", [
    "$scope",
    function ($scope) {
        $scope.posts = [
            {
                title: "Almonds are good for Health",
                content: "Almonds contain high amounts of HDL which helps reduce cholestrol."
            },
            {
                title: "Sugar is bad for health",
                content: "Sugar besides being bad for diabetes, it alse causes overweight and obesity problems."
            },
            {
                title: "Cut down your carbs!",
                content: "Carbs is good for eating while bad for cooking."
            }
        ];
    }
]);