---
title: userScripts.UserScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptFilter
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.UserScriptFilter
---

{{AddonSidebar}}

A list of user scripts to be processed by {{WebExtAPIRef("userScripts.getScripts()")}} or {{WebExtAPIRef("userScripts.unregister()")}}.

## Type

Values of this type are an object containing these properties:

- `ids` {{optional_inline}}
  - : `array` of `string`. IDs of user scripts to be processed by {{WebExtAPIRef("userScripts.getScripts()")}} and {{WebExtAPIRef("userScripts.unregister()")}}.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
