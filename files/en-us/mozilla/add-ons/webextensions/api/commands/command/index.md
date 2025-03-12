---
title: Command
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
page-type: webextension-api-type
browser-compat: webextensions.api.commands.Command
---

{{AddonSidebar}}

Information about the settings for the commands specified in the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

An array of these objects is returned from {{WebExtAPIRef('commands.getAll()')}}.

## Type

A value of this type is an object containing these properties for the commands:

- `name`
  - : `string`. Name of the command. This is passed into the {{WebExtAPIRef('commands.onCommand')}} event listener.
- `description` {{optional_inline}}
  - : `string`. Description of the command. This is used to explain to the user what this command does.
- `shortcut` {{optional_inline}}
  - : `string`. Keys used to execute the command, specified as a string. See the [shortcut values](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values) section of the `commands` manifest key documentation for more details.

`description` and `shortcut` reflect the values given in the `commands` manifest.json key unless they have been updated with {{WebExtAPIRef('commands.update()')}} or, in the case of the shortcut, customized by the user.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
