---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
tags:
  - Add-ons
  - Extensions
  - Method
  - User Scripts API
  - WebExtensions
  - register
  - userScripts
browser-compat: webextensions.api.userScripts.register
---
{{AddonSidebar}}

This method enables user scripts to be registered from an extension's pages (such as the background page).

This method is very similar to the {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API method (for example, they both return a promise that resolves to an API object with an {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}} method for unregistering the script). There are, however, differences in the options supported.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
// …
await registeredUserScript.unregister();
```

### Parameters

- `userScriptOptions`

  - : `object`. Represents the user scripts to register. It has similar syntax to {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    The `UserScriptOptions` object has the following properties:

    - `scriptMetadata` {{Optional_Inline}}
      - : A `JSON` object containing arbitrary metadata properties associated with the registered user scripts. However, while arbitrary, the object must be serializable, so it is compatible with [the structured clone algorithm.](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) This metadata is used to pass details from the script to the [`API script`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)[](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts). For example, providing details of a subset of the APIs that need to be injected by the [`API script`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts). The API does not use this metadata,
    - `allFrames` {{Optional_Inline}}
      - : Same as `all_frames` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `cookieStoreId` {{optional_inline}}
      - : An array of cookie store ID strings or a string containing a cookie store ID. Registers the user script in the tabs that belong to the cookie store IDs. This enables scripts to be registered for all default or non-contextual identity tabs, private browsing tabs (if extensions are enabled in private browsing), the tabs of a [contextual identity](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), or a combination of these.
    - `excludeGlobs` {{Optional_Inline}}
      - : Same as `exclude_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `excludeMatches` {{Optional_Inline}}
      - : Same as `exclude_matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `includeGlobs` {{Optional_Inline}}
      - : Same as `include_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `js`
      - : An array of objects. Each object has either a property named `file`, which is a URL starting at the extension's manifest.json and pointing to a JavaScript file to register, or a property named `code`, which contains JavaScript code to register.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Same as `match_about_blank` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `matches`
      - : Same as `matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
        The URL patterns provided in `matches` must be enabled by the host permissions defined in the manifest [`permission`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) property or enabled by the user from the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) list. For example, if matches includes `https://mozilla.org/a` a script is only registered if host permissions include, for example, `https://mozilla.org/*`. If the URL pattern isn't enabled, the call to register fails with the error "Permission denied to register a user script for ORIGIN".
    - `runAt` {{Optional_Inline}}
      - : Same as `run_at` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.

Unlike content script options, the userScriptOptions object does not have a CSS property. Use {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} to dynamically register and unregister stylesheets.

### Return value

A {{JSxRef("Promise")}} that is fulfilled with a {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} object that is use to unregister the user scripts.

> **Note:** User scripts are unregistered when the related extension page (from which the user scripts were registered) is unloaded, so you should register user scripts from an extension page that persists at least as long as you want the user scripts to stay registered.

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
