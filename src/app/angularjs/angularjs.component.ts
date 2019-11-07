import { AuthSvc } from './auth/auth.service';

export class MainController {

    name: string = 'test angularJS app';

    static $inject = ["$scope", "AuthSvc"];
    constructor($scope: ng.IScope, authSvc: AuthSvc) {
        this.name += ('-' + authSvc.user);
    }
}