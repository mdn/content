---
title: userScripts.RegisteredUserScript (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts_legacy.RegisteredUserScript
---

{{AddonSidebar}}

> [!WARNING]
> This is documentation for the legacy `userScripts` API. It's available in Firefox for Manifest V2. For functionality to work with user scripts in Manifest V3 see the new {{WebExtAPIRef("userScripts")}} API.

A `RegisteredUserScript` object is returned by a call to {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} and represents the user scripts registered in that call.

The object defines a single method, {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}, which is used to unregister the user scripts.

> [!NOTE]
> If this object is destroyed (for example because it goes out of scope) then the associated scripts will be unregistered automatically, so you should keep a reference to this object for as long as you want the user scripts to stay registered.

## Methods

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}
  - : Unregisters the user scripts represented by this object.

## Browser compatibility

{{Compat}}
