import { TextFileView } from "obsidian";

export class TextReader extends TextFileView {
	getViewData(): string {
		return this.data;
	}
	setViewData(data: string, clear: boolean): void {
		this.data = data;
	}
	clear(): void {
		this.data = "";
	}

	getViewType() {
		return "textreader";
	}
}
