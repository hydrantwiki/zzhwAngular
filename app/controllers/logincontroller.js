/**
 * Created by briannelson on 9/28/15.
 */

hydrantWikiApp.controller('LoginController', ['authService', '$location',
    function (authService, $location) {
        var self = this;
        self.user = { username: '', password: '' };

        self.login = function () {
            authService.login(self.user).then(function (success) {
                $location.path('/home');
            }, function (error) {
                if (error != null
                    && error.data != null)
                {
                    self.errorMessage = error.data.msg;
                }
                else
                {
                    self.errorMessage = "Connection Issue";
                }

            });
        };

        self.errorMessage = null;
    }
]);
