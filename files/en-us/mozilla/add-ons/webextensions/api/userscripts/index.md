---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
page-type: webextension-api
browser-compat: webextensions.api.userScripts
---

{{AddonSidebar}}

Use this API to register user scripts, third-party scripts designed to manipulate webpages or provide new features. Registering a user script instructs the browser to attach the script to pages that match the URL patterns specified during registration.

> **Note:** When using Manifest V3 or higher, use {{WebExtAPIRef("scripting.registerContentScripts()")}} to register scripts.

This API offers similar capabilities to {{WebExtAPIRef("contentScripts")}} but with features suited to handling third-party scripts:

- execution is in an isolated sandbox: each user script is run in an isolated sandbox within the web content processes, preventing accidental or deliberate interference among scripts.
- access to the `window` and `document` global values related to the webpage the user script is attached to.
- no access to WebExtension APIs or associated permissions granted to the extension: the API script, which inherits the extension's permissions, can provide packaged WebExtension APIs to registered user scripts. An API script is declared in the extension's manifest file using the "user_scripts" manifest key.

> **Warning:** This API requires the presence of the [`user_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) key in the manifest.json, even if no API script is specified. For example. `user_scripts: {}`.

To use the API, call `{{WebExtAPIRef("userScripts.register","register()")}}` passing in an object defining the scripts to register. The method returns a Promise that is resolved with a `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}` object.

> **Note:** User scripts are unregistered when the related extension page (from which the user scripts were registered) is unloaded, so you should register a user script from an extension page that persists at least as long as you want the user scripts to stay registered.

## Types

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : The `object` returned by the {{WebExtAPIRef("userScripts.register","register()")}} method. It represents the registered user scripts and is used to deregister the user scripts.

## Methods

- {{WebExtAPIRef("userScripts.register()")}}
  - : Registers user scripts.

## Events

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : An event available to the API script, registered in[`"user_scripts"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), that execute before a user script executes. Use it to trigger the export of the additional APIs provided by the API script, so they are available to the user script.

## Browser compatibility

{{Compat}}

## See also

- [Working with `userScripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
