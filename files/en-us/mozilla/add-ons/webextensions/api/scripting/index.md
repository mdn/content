---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
page-type: webextension-api
browser-compat: webextensions.api.scripting
---

{{AddonSidebar}}

Inserts JavaScript and CSS into websites. This API offers two approaches to inserting content:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}} that provide for one-off injections.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} that registers content scripts dynamically, which can then be retrieved with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} and unregistered with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}).

> [!NOTE]
> Chrome restricts this API to Manifest V3. Firefox and Safari support this API in Manifest V2 and V3.

This API requires the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the target in the tab into which JavaScript or CSS is injected.

Alternatively, you can get permission temporarily in the active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). However, the `"scripting"` permission is still required.

## Types

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Specifies the IDs of scripts to retrieve with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} or to unregister with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Specifies the execution environment of a script injected with {{WebExtAPIRef("scripting.executeScript()")}} or registered with {{WebExtAPIRef("scripting.registerContentScripts()")}}.
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

> [!NOTE]
> This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) API.
