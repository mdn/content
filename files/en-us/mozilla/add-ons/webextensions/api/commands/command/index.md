---
title: Command
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
tags:
  - API
  - Add-ons
  - Command
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - commands
browser-compat: webextensions.api.commands.Command
---
{{AddonSidebar()}}

Information about a command. This contains the information specified for the command in the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

An array of these objects is returned from {{WebExtAPIRef('commands.getAll()')}}.

## Type

Values of this type are objects. They contain the following properties:

- `name` {{optional_inline}}
  - : `string`. Name of this command. This will be passed into the {{WebExtAPIRef('commands.onCommand')}} event listener.
- `description` {{optional_inline}}
  - : `string`. Description of this command. This is primarily used to explain to the user what this command does.
- `shortcut` {{optional_inline}}
  - : `string`. Key(s) used to execute this command, specified as a string like "Ctrl+Shift+Y".

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/commands/) API.
