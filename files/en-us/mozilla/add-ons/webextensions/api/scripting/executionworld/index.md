---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
page-type: webextension-api-type
browser-compat: webextensions.api.scripting.ExecutionWorld
---

{{AddonSidebar()}}

Specifies the execution environment of a script injected with {{WebExtAPIRef("scripting.executeScript()")}}
or registered with {{WebExtAPIRef("scripting.registerContentScripts()")}}.

## Type

Values of this type are strings. Possible values are:

- `ISOLATED`

  The default execution environment of [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).
  This environment is isolated from the page's context: while they share the same document, the global scopes and available APIs differ.

- `MAIN`

  The execution environment of the web page. This environment is shared with the web page, without isolation.
  Scripts in this environment do not have any access to APIs that are only available to content scripts.

  > **Warning:** Due to the lack of isolation, the web page can detect the executed code and interfere with it.
  > Do not use the `MAIN` world unless it is acceptable for web pages to read, access, or modify the logic or data that flows through the executed code.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#type-ExecutionWorld) API.
