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
            var url = HW_URL + '/rest/authorize'
            return $http({
                method: 'POST',
                url: url,
                headers: {
                    'Username': user.username,
                    'Password': user.password
                }
            }).then(function (response) {
                    if (response.data.Result == "Success") {
                        Lockr.set("Username", response.data.UserName);
                        Lockr.set("AuthToken", response.data.AuthorizationToken);

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