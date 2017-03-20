module FileLoader {

    interface FileLoaderAttributes extends ng.IAttributes {
        onReadFile: string;
        type: string;
    }

    interface FileReaderElement extends Element {
        files: Array<Blob>;
    }

    interface FileReaderLoadEvent extends Event {
        target: any;
    }

    export class FileLoaderDirective implements ng.IDirective {
        public restrict: string = 'A';
        public scope: any = false;

        constructor(
            private $parse: ng.IParseService
        ) { }

        public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: FileLoaderAttributes, ngModel: ng.INgModelController) => {

            let fn = this.$parse(attributes.onReadFile);

            element.on('change', function (onChangeEvent: JQueryEventObject) {
                let reader = new FileReader();

                reader.onload = function (onLoadEvent: FileReaderLoadEvent) {
                    scope.$apply(function () {
                        fn(scope, { $fileContent: onLoadEvent.target.result });
                    });
                };

                let readerElement = (onChangeEvent.srcElement || onChangeEvent.target) as FileReaderElement;

                reader.readAsText(readerElement.files[0]);
            });
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($parse: ng.IParseService) => new FileLoaderDirective($parse);
            directive.$inject = ['$parse'];
            return directive;
        }
    }
}
