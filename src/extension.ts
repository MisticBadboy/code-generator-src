import * as fs from 'fs';
import path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	/*
		Creates a workspace listener on launch of vscode.
		file : File that was created,
		extData : ext.json file data in the folder ./src/ext/,
		ext : returns the extension of file.
	*/
	vscode.workspace.onDidCreateFiles((event) => {
		let file = event.files[0].path.substring(1);
		let extData = require('./ext/ext.json');
		let ext = path.extname(file);
		fs.writeFile(file, extData[ext.substring(1)], function (err) {
				if (err) {
					return console.error(err);
				}
				console.log("File was created");
		});
	});
}

export function deactivate() {}
