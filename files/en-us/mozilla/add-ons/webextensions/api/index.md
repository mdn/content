---
title: JavaScript APIs
slug: Mozilla/Add-ons/WebExtensions/API
tags:
  - WebExtensions
---
{{AddonSidebar}}

JavaScript APIs for WebExtensions can be used inside the extension's [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) and in any other documents bundled with the extension, including [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) or [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) popups, [sidebars](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), or [new tab pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). A few of these APIs can also be accessed by an extension's [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts). (See the [list in the content script guide](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

To use the more powerful APIs, you need to [request permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your extension's `manifest.json`.

You can access the APIs using the `browser` namespace:

```js
function logTabs(tabs) {
  console.log(tabs)
}

browser.tabs.query({currentWindow: true}, logTabs)
```

Many of the APIs are asynchronous, returning a {{JSxRef("Promise")}}:

```js
function logCookie(c) {
  console.log(c)
}

function logError(e) {
  console.error(e)
}

let setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError)
```

## Browser API differences

Note that this is different from Google Chrome's extension system, which uses the `chrome` namespace instead of `browser`, and which uses callbacks instead of promises for asynchronous functions. As a porting aid, the Firefox implementation of WebExtensions APIs supports `chrome` and callbacks as well as `browser` and promises. Mozilla has also written a polyfill which enables code that uses `browser` and promises to work unchanged in Chrome: <https://github.com/mozilla/webextension-polyfill>.

Firefox also implements these APIs under the `chrome` namespace using callbacks. This allows code written for Chrome to run largely unchanged in Firefox for the APIs documented here.

Microsoft Edge uses the `browser` namespace, but doesn't yet support promise-based asynchronous APIs. In Edge, for the time being, asynchronous APIs must use callbacks.

Not all browsers support all the APIs: for the details, see [Browser support for JavaScript APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) and [Chrome incompatibilities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Examples 

Throughout the JavaScript API listings, you will find short code examples that illustrate how the API is used. You can experiment using these examples—_without_ needing to create a web extension—using the console in the [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox).

For example, here is the first code example on this page running in the Toolbox console in Firefox Developer Edition:

![Illustration of a snippet of web extension code run from the console in the Toolbox](javascript_exercised_in_console.jpg)

## JavaScript API listing

See below for a complete list of JavaScript APIs:

{{LandingPageListSubpages}}
