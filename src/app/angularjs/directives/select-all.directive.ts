import * as angular from 'angular';

export class SelectAll {
    constructor() {
        var directive: ng.IDirective =
        {
            restrict: "A",
            priority: 99,
            link: (scope, element, attrs) => {
                
                function onFocus(evt) {

                    window.setTimeout(function () {
                        (angular.element(element)[0] as HTMLInputElement).select();
                    }, 100);
                }

                scope.$on("$destroy", () => element.off("focus", onFocus));
                element.on("focus", onFocus);
            }
        }
        return directive;
    }
}
