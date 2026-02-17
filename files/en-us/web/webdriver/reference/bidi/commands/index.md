---
title: WebDriver BiDi commands
short-title: Commands
slug: Web/WebDriver/Reference/BiDi/Commands
page-type: landing-page
browser-compat: webdriver.bidi
sidebar: webdriver
---

WebDriver BiDi commands are asynchronous operations sent by the local end to the remote end.
Multiple commands can run at the same time, and because commands can be long-running, they can finish out-of-order.

Commands in WebDriver BiDi are organized into modules.
Each command has a command name in the format `module_name.command_name`.

Commands take parameters and return either a result or an error.
For example, the `session.new` command takes capabilities as parameters and returns the session ID and negotiated capabilities.

A command that can run without an active session is a static command.
Commands are not static commands unless stated in their definition.

## List of commands

The following is a list of the available WebDriver BiDi commands:

{{ListSubPages}}

## Browser compatibility

{{Compat}}
