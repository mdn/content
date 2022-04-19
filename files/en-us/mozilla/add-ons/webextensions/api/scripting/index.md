---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Reference
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting
---
{{AddonSidebar}}

Inserts JavaScript and CSS into tabs.

> **Note:** This API is available in Manifest V3 or higher.

This API requires the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) permission and [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab into which JavaScript or CSS is injected.

Alternatively, you can get these permissions temporarily, only for the active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

## Types

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Specifies the IDs of scripts to retrieve with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} or to unregister with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}.
- {{WebExtAPIRef("scripting.InjectionResult")}}
  - : Details of the result of CSS or script injection.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details of an injection target for CSS.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details of a script to be registered or that is registered.
    
## Functions

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Injects JavaScript code into a page.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Gets a list of registered content scripts.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Injects CSS into a page.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registers a content script for future page loads.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Removes CSS which was previously injected into a page by a {{WebExtAPIRef("scripting.insertCSS()")}} call.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Updates a content script registration.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Removes the registration of a content script.
  
## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.