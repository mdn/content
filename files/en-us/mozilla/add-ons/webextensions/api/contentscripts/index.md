---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - WebExtensions
  - contentScripts
browser-compat: webextensions.api.contentScripts
---
{{AddonSidebar}}

Use this API to register content scripts. Registering a content script instructs the browser to insert the given content scripts into pages that match the given URL patterns.

> **Note:** When using Manifest V3 or higher, use {{WebExtAPIRef("scripting.registerContentScripts()")}} to register scripts.

This API is very similar to the [`"content_scripts"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) key, except that with  `"content_scripts"` , the set of content scripts and associated patterns is fixed at install time. With the `contentScripts` API, an extension can register and unregister scripts at runtime.

To use the API, call {{WebExtAPIRef("contentScripts.register()")}} passing in an object defining the scripts to register, the URL patterns, and other options. This returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with a {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} object.

The `RegisteredContentScript` object represents the scripts that were registered in the `register()` call. It defines an `unregister()` method that you can use to unregister the content scripts. Content scripts are also unregistered automatically when the page that created them is destroyed. For example, if they are registered from the background page they will be unregistered automatically when the background page is destroyed, and if they are registered from a sidebar or a popup, they will be unregistered automatically when the sidebar or popup is closed.

There is no `contentScripts` API permission, but an extension must have the appropriate [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for any patterns it passes to `register()`.

## Types

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : An object of this type is returned by the {{WebExtAPIRef("contentScripts.register()")}} function. It represents the content scripts that were registered by that call, and can be used to unregister the content script.

## Functions

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registers the given content scripts.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}
