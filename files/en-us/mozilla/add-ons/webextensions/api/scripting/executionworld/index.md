---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
page-type: webextension-api-type
browser-compat: webextensions.api.scripting.ExecutionWorld
---

{{AddonSidebar}}

Specifies the execution environment of a script injected with {{WebExtAPIRef("scripting.executeScript()")}}
or registered with {{WebExtAPIRef("scripting.registerContentScripts()")}}.

## Type

Values of this type are strings. Possible values are:

- `ISOLATED`

  The default [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) execution environment.
  This environment is isolated from the page's context: while they share the same document, the global scopes and available APIs differ.

- `MAIN`

  The web page execution environment. This environment is shared with the web page without isolation.
  Scripts in this environment do not have any access to APIs that are only available to content scripts.

  > **Warning:** Due to the lack of isolation, the web page can detect and interfere with the executed code.
  > Do not use the `MAIN` world unless it is acceptable for web pages to read, access, or modify the logic or data that flows through the executed code.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#type-ExecutionWorld) API.
