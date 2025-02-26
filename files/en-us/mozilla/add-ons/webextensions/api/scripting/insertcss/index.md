---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
page-type: webextension-api-function
browser-compat: webextensions.api.scripting.insertCSS
---

{{AddonSidebar}}

Injects CSS into a page.

> [!NOTE]
> This method is available in Manifest V3 or higher in Chrome and Firefox 101. In Safari and Firefox 102+, this method is also available in Manifest V2.

To use this API, you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the target's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

You can only inject CSS into pages whose URL can be expressed using a [match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns): meaning its scheme must be one of "http", "https", or "file". This means you can't inject CSS into any of the browser's built-in pages, such as about:debugging, about:addons, or the page that opens when you open a new empty tab.

> [!NOTE]
> Firefox resolves URLs in injected CSS files relative to the CSS file rather than the page it's injected into.

The inserted CSS can be removed by calling {{WebExtAPIRef("scripting.removeCSS()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameters

- `details`

  - : An object describing the CSS to insert and where to insert it. It contains the following properties:

    - `css` {{optional_inline}}
      - : `string`. A string containing the CSS to inject. Either `css` or `files` must be specified.
    - `files` {{optional_inline}}
      - : `array` of `string`. The path of CSS files to inject relative to the extension's root directory. Either `files` or `css` must be specified.
    - `origin` {{optional_inline}}

      - : `string`. The style origin for the injection, either `USER`, to add the CSS as a user stylesheet, or `AUTHOR`, to add it as an author stylesheet. Defaults to `AUTHOR`.

        - `USER` enables you to prevent websites from overriding the CSS you insert: see [Cascading order](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - `AUTHOR` stylesheets behave as if they appear after all author rules specified by the web page. This behavior includes any author stylesheets added dynamically by the page's scripts, even if that addition happens after the `insertCSS` call completes.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details specifying the target to inject the CSS into.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with no arguments when all the CSS is inserted. If any error occurs, the promise is rejected.

## Examples

This example inserts CSS taken from a string into the active tab.

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      css: `body { border: 20px dotted pink; }`,
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

This example inserts CSS loaded from a file (packaged with the extension) called `"content-style.css"`:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ["content-style.css"],
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS) API.
