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

Inserts JavaScript and CSS into websites. This API offers two approaches to inserting content:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}} that provide for one-off injections.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} that registers content scripts dynamically, which can then be retrieved with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} and unregistered with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}).

> **Note:** This API is available in Manifest V3 or higher in Chrome and Firefox 101. In Safari and Firefox 102+, this API is also available in Manifest V2.

This API requires the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the target in the tab into which JavaScript or CSS is injected.

Alternatively, you can get permission temporarily in the active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). However, the `"scripting"` permission is still required.

## Types

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Specifies the IDs of scripts to retrieve with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} or to unregister with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details of an injection target.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details of a content script to be registered or that is registered.

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
  - : Updates one or more content scripts already registered.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Unregisters one or more content scripts.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
