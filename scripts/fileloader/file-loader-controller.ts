module FileLoader {

	class FileLoaderController {
		public content: any = null;

		constructor() { }

		showContent($fileContent: any) {
			this.content = $fileContent;
		}
	}

	angular
		.module('app.fileLoader')
		.controller('FileLoaderController', FileLoaderController);
}
