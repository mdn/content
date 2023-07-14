---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
page-type: webextension-api-function
browser-compat: webextensions.api.contentScripts.register
---

{{AddonSidebar()}}

Use this function to register one or more content scripts.

It accepts one parameter, which is an object with similar properties to the objects given in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest key (but note that `content_scripts` is an array of objects, while the argument to `register()` is a single object).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Parameters

- `contentScriptOptions`

  - : `object`. A `RegisteredContentScriptOptions` object representing the content scripts to register. It has similar syntax to the objects in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest key array. The differences are:

    - property names use camelCase, rather than underscores (for example, `excludeMatches`, not `exclude_matches`
    - the `js` and `css` properties allow you to register strings as well as URLs, so their syntax has to distinguish these types.

    The `RegisteredContentScriptOptions` object has the following properties:

    - `allFrames` {{optional_inline}}
      - : Same as `all_frames` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `cookieStoreId` {{optional_inline}}
      - : A string or array of strings. Registers the content script in the tabs that belong to one or more cookie store IDs. This enables scripts to be registered for all default or non-contextual identity tabs, private browsing tabs (if the [extension is enabled in private browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), the tabs of a [contextual identity](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), or a combination of these.
    - `css` {{optional_inline}}
      - : An array of objects. Each object has either a property named `file`, which is a URL starting at the extension's manifest.json and pointing to a CSS file to register, or a property named `code`, which is some CSS code to register.
    - `excludeGlobs` {{optional_inline}}
      - : Same as `exclude_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `excludeMatches` {{optional_inline}}
      - : Same as `exclude_matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `includeGlobs` {{optional_inline}}
      - : Same as `include_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `js` {{optional_inline}}
      - : An array of objects. Each object has either a property named `file`, which is a URL starting at the extension's manifest.json and pointing to a JavaScript file to register, or a property named `code`, which is some JavaScript code to register.
    - `matchAboutBlank` {{optional_inline}}
      - : Same as `match_about_blank` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `matches`
      - : Same as `matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
    - `runAt` {{optional_inline}}
      - : Same as `run_at` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} object that you can use to unregister the content scripts.

Currently, content scripts are unregistered when the related extension page (from which the content scripts were registered) is unloaded, so you should register a content script from an extension page that persists at least as long as you want the content scripts to stay registered.

## Browser compatibility

{{Compat}}

## Examples

This example registers the `defaultCode` content script for all `.org` URLs:

```js
const defaultHosts = "*://*.org/*";
const defaultCode =
  "document.body.innerHTML = '<h1>This page has been eaten<h1>'";

async function register(hosts, code) {
  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{ code }],
    runAt: "document_idle",
  });
}

let registered = register(defaultHosts, defaultCode);
```

This code registers the JS file at content_scripts/example.js:

```js
const scriptObj = await browser.contentScripts.register({
  js: [{ file: "/content_scripts/example.js" }],
  matches: ["<all_urls>"],
  allFrames: true,
  runAt: "document_start",
});
```

{{WebExtExamples}}
