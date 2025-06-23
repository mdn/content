---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.ScriptSource
---

{{AddonSidebar}}

The code or source file for a user script. This describes the object values of the "js" property in {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}.

## Type

Values of this type are an object containing these properties:

- `file` {{optional_inline}}
  - : `string`. The path of the file containing the user script code. The path is relative to the extension's root directory.
- `allFrames` {{optional_inline}}
  - : `code`. JavaScript code for the user script.

`file` or `code` must be specified, not both.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
