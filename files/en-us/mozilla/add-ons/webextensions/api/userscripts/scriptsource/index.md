---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.ExecutionWorld
---

{{AddonSidebar}}

Specifies the execution environment of a script injected with {{WebExtAPIRef("userScripts.register()")}}
or {{WebExtAPIRef("userScripts.update()")}}.

## Type

Values of this type are strings. Possible values are:

- `MAIN`

  The web page execution environment. This environment is shared with the web page without isolation.
  Scripts in this environment do not have any access to APIs that are only available to content scripts.

  > [!WARNING]
  > Due to the lack of isolation, the web page can detect and interfere with the executed code.
  > Do not use the `MAIN` world unless it is acceptable for web pages to read, access, or modify the logic or data that flows through the executed code.

- `USER_SCRIPT`

  Specifies the user scripts execution environment which is exempt from the page's content security policy (CSP).

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ExecutionWorld) API.
