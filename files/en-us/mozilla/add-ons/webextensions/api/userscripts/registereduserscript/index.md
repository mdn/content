---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
tags:
  - API
  - Extensions
  - Reference
  - RegisteredUserScript
  - Type
  - userScripts
browser-compat: webextensions.api.userScripts.RegisteredUserScript
---
{{AddonSidebar()}}

A `RegisteredUserScript` object is returned by a call to {{WebExtAPIRef("userScripts.register","userScripts.register()")}} and represents the user scripts registered in that call.

The object defines a single method, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, which is used to unregister the user scripts.

> **Note:** If this object is destroyed (for example because it goes out of scope) then the associated scripts will be unregistered automatically, so you should keep a reference to this object for as long as you want the user scripts to stay registered.

## Methods

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : Unregisters the user scripts represented by this object.

## Browser compatibility

{{Compat}}
