'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('debug-current is active');

    let disposable = vscode.commands.registerCommand('extension.debug-current', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No test file open");
            return;
        }

        vscode.workspace.getConfiguration('debug-current').update('file', path.parse(editor.document.fileName).name, true)
            .then(() => {
                vscode.commands.executeCommand("workbench.action.debug.start");
            });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
