'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "timenotes" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        vscode.window.showInformationMessage('李鹏程 测试!');
    });
    context.subscriptions.push(disposable);
    let disposable1 = vscode.commands.registerCommand('extension.sayHello1', () => {
        vscode.window.showInformationMessage('李鹏程 测试1!');
    });
    context.subscriptions.push(disposable1);
}

// 扩展被禁用的时候调用的方法
export function deactivate() {
}