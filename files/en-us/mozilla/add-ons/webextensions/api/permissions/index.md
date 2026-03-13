---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
page-type: webextension-api
browser-compat: webextensions.api.permissions
sidebar: addonsidebar
---

Enables extensions to request extra permissions at runtime, after they have been installed.

Extensions need permissions to access more powerful WebExtension APIs. They can request permissions at install time by including them in the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json key. The main advantages of asking for permissions at install time are:

- The extension asks the user only once, so it's less disruptive for them, and a simpler decision.
- The extension can rely on the access to the APIs it needs, as it knows the permissions are granted.

In most major browsers, users can see if installed extensions request advanced permissions through the browser's extensions manager.

Using the permissions API, an extension can request additional permissions at runtime. The extension must list these permissions in

- [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) key of its manifest.json file for origins and API permissions.
- [`gecko.data_collection_permissions.optional`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) property of the `browser_specific_settings` key of its manifest.json file for data collection permissions.

The main advantages of requesting permissions at runtime are:

- The extension can run with a smaller set of permissions, except when it needs them.
- The extension can gracefully handle permission denial, instead of presenting the user with a global "all or nothing" choice at install time. For example, a user can get a lot out of that map extension without giving it access to their location.
- The extension may need [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), but not know at install time which host permissions it needs. For example, the list of hosts may be a user setting. In this scenario, requesting a more specific range of hosts at runtime can be an alternative to asking for "\<all_urls>" at install time.

Note that some permissions are not allowed in `optional_permissions`.

To use the permissions API, decide which permissions your extension can request at runtime, and list them in [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) and [`browser_specific_settings.gecko.data_collection_permissions.optional`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional). After this, you can request any permissions included in `optional_permissions` or `browser_specific_settings.gecko.data_collection_permissions.optional`. The extension can only make these requests in the handler for a user action (for example, a click handler).

Starting with Firefox 84, users can manage optional permissions of installed extensions from the Add-ons Manager. Extensions that use optional permissions should listen for [browser.permissions.onAdded](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) and [browser.permissions.onRemoved](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API events to know when a user grants or revokes these permissions.

For advice on designing your request for runtime permissions, to maximize the likelihood that users grant them, see [Request permissions at runtime](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

## Types

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Represents a set of permissions.

## Methods

- {{WebExtAPIRef("permissions.contains()")}}
  - : Checks whether the extension has specific permissions.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Retrieves all the permissions currently granted to the extension.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Gives up a set of permissions.
- {{WebExtAPIRef("permissions.request()")}}
  - : Asks for a set of permissions.

## Event handlers

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Fires when a user grants new permissions.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Fires when a user revokes a permission.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

## See also

- `manifest.json` [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) property
- `manifest.json` [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) property

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
