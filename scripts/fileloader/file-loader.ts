module FileLoader {
    let module: ng.IModule = angular.module('app.fileLoader', []);

    module.controller('FileLoaderController', FileLoaderController);
    
    module.directive('onReadFile', FileLoaderDirective.factory());
}
