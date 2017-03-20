module FileLoader {

	export class FileLoaderController {
		public content: any = null;

		constructor() { }

		showContent($fileContent: any) {
			this.content = $fileContent;
		}
	}
}
