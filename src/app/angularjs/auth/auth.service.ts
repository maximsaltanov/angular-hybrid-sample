import * as angular from 'angular';

export class AuthSvc {

    user: string = 'test user';

    static $inject: Array<string> = ["$http"];
    constructor($http: ng.IHttpService) {

    }
}

angular.module("Services", [])
    .factory("AuthSvc",
        [
            "$http",
            ($http: ng.IHttpService) => {
                return new AuthSvc($http);
            }
        ]);