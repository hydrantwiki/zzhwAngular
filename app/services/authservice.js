/**
 * Created by briannelson on 9/28/15.
 */

hydrantWikiApp.factory('authService', function($http) {
    var service = {
        isLoggedIn: false,
        Username: "",
        AuthToken: "",
        session: function () {
            service.Username = Lockr.get("Username", null);
            service.AuthToken = Lockr.get("AuthToken", null);

            if (service.AuthToken != null
                && service.Username != null) {
                service.isLoggedIn = true;
            } else {
                service.isLoggedIn = false;
            }
        },
        login: function (user) {
            return $http.post('/rest/login', user)
                .then(function (response) {
                    if (response.data.Result == "Success") {
                        Lockr.set("Username", response.data.Username);
                        Lockr.set("AuthToken", response.data.AuthToken);

                        service.isLoggedIn = true;
                    } else {
                        //TODO - Add Bootstrap Dialog
                        window.alert("Username or password not correct.");
                    }
                    return null;
                });
        },
        logout: function () {
            service.isLoggedIn = false;
            Lockr.flush();

            $http.defaults.headers.common['Username'] = null;
            $http.defaults.headers.common['AuthToken'] = null;

        }
    };

    service.session();

    return service;
});