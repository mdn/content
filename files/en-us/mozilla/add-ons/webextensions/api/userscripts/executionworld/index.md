---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.ExecutionWorld
---

{{AddonSidebar}}

The execution environment for a script injected with {{WebExtAPIRef("userScripts.register()")}}
or {{WebExtAPIRef("userScripts.update()")}}.

## Type

Values of this type are a string. Possible values are:

- `MAIN`

  The web page execution environment. This environment is shared with the web page without isolation. Scripts in this environment don't have access to the APIs that are only available to content scripts.

  > [!WARNING]
  > Web pages can detect and interfere with the executed code due to the lack of isolation. Therefore, don't use the `MAIN` world unless it's acceptable for web pages to read, access, or modify the logic or data that flows through the executed code.

- `USER_SCRIPT`

  Specifies the user scripts execution environment, which is exempt from the page's content security policy (CSP).

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
