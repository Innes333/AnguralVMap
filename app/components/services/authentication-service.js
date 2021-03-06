(function(){
	angular
		.module('vMapsApp')
			.factory('AuthenticationService', ['$rootScope', '$http', 'apiUrl',
				function($rootScope, $http, apiUrl) {

				this.Login = function(user, callback) {
					var roles = {
						togo: [{
							name: 'NETIS Ghana',
							password: 'Helios',
							role: 'admin',
						}],
						drone: [{
							name: 'drone_by_netis',
							password: 'Ulysco',
							role: 'admin',
						}]							
					};
					for(role in roles) {
						var item = roles[role];
						for(var i=0; i< item.length; i++) {
							if (user.username === item[i].name && user.password === item[i].password) {
								callback(true);
								return;
							} else {
								callback(false);
							}
						}
					}
				};
				this.Logout = function(){					
					$rootScope.appConfig.user = false;
				};
				var service = {
					Login: this.Login,
					Logout: this.Logout
				};
				return service;
		}])
}());