---
title: Firefox 124 for developers
slug: Mozilla/Firefox/Releases/124
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 124 that affect developers. Firefox 124 was released on [March 19, 2024](https://whattrainisitnow.com/release/?version=124).

## Changes for web developers

### HTML

No notable changes.

### CSS

- The {{cssxref("text-wrap")}} property has now been converted to a shorthand property and covers the constituent properties {{cssxref("text-wrap-mode")}} and {{cssxref("text-wrap-style")}}. ([Firefox bug 1758391](https://bugzil.la/1758391)).

### JavaScript

No notable changes.

### SVG

- The {{cssxref("::first-letter")}} and {{cssxref("::first-line")}} CSS pseudo-elements can now be applied to the {{SVGElement("text")}} SVG element. This allows you to change the fill, stroke or font of the first letter/line of a `<text>` element using CSS, for example. ([Firefox bug 1302722](https://bugzil.la/1302722)).

### APIs

- [`AbortSignal.any()`](/en-US/docs/Web/API/AbortSignal/any_static) is now supported, allowing a composite signal to be created that can be used to abort an operation from multiple signal sources. ([Firefox bug 1830781](https://bugzil.la/1830781)).
- The [`WebSocket()` constructor](/en-US/docs/Web/API/WebSocket/WebSocket#url) now allows HTTPS, HTTP, and relative URLs. They are often more ergonomic than using WS and WSS URLs ([Firefox bug 1797449](https://bugzil.la/1797449)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implemented the [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) command, which allows users to retrieve cookies. This command accepts two optional arguments. Clients can provide the `filter` argument to only return cookies matching specific criteria. And the `partition` argument can be used to build the partition key and retrieve cookies [owned by the corresponding partition](/en-US/docs/Web/Privacy/State_Partitioning). ([Firefox bug 1854580](https://bugzil.la/1854580))
- Implemented the [storage.setCookie](https://w3c.github.io/webdriver-bidi/#command-storage-setCookie) command, which creates a new cookie. Users can provide information about the cookie in the `cookie` parameter, and optionally a `partition` parameter to build the partition key of the partition which should own the cookie. ([Firefox bug 1854582](https://bugzil.la/1854582))
- Implemented various commands to intercept requests:
  - [network.addIntercept](https://w3c.github.io/webdriver-bidi/#command-network-addIntercept) which allows users to define URL patterns which will be used to intercept network requests during various phases of a network event lifecycle. This command returns the unique id generated for the created network intercept. ([Firefox bug 1826192](https://bugzil.la/1826192))
  - [network.removeIntercept](https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept) allows to remove intercepts based on their unique id. ([Firefox bug 1826193](https://bugzil.la/1826193))
  - [network.continueWithAuth](https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth) allows to resume requests intercepted in the `AuthRequired` phase. Using the "action" argument, clients can either "cancel", "provideCredentials" with username and password, or fallback to "default" to let the browser display the authentication prompt.([Firefox bug 1826196](https://bugzil.la/1826196))
  - [network.failRequest](https://w3c.github.io/webdriver-bidi/#command-network-failRequest) allows to cancel requests intercepted in the `BeforeRequestSent` or the `ResponseStarted` phases.([Firefox bug 1853883](https://bugzil.la/1853883))
  - [network.continueRequest](https://w3c.github.io/webdriver-bidi/#command-network-continueRequest), [network.continueResponse](https://w3c.github.io/webdriver-bidi/#command-network-continueResponse) and [network.provideResponse](https://w3c.github.io/webdriver-bidi/#command-network-provideResponse) are also available, but at the moment they only support the "request" argument and will only allow to resume a blocked request. In future releases, additional arguments will allow to modify the request and response. ([Firefox bug 1874206](https://bugzil.la/1874206) and [Firefox bug 1853882](https://bugzil.la/1853882))
- Implemented several commands around "user contexts", implemented as [containers](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) in Firefox:
  - [browser.createUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-createUserContext) creates a new user context and returns the unique id of the new user context. ([Firefox bug 1870848](https://bugzil.la/1870848))
  - [browser.removeUserContext](https://w3c.github.io/webdriver-bidi/#command-browser-removeUserContext) can be used to remove any non-default user context, by specifying its unique id. ([Firefox bug 1870849](https://bugzil.la/1870849))
  - [browser.getUserContexts](https://w3c.github.io/webdriver-bidi/#command-browser-getUserContexts) allows clients to retrieve the list of all available user contexts, including the default user context. ([Firefox bug 1870847](https://bugzil.la/1870847))
- Added support for the "userContext" argument to the [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) command, which allows to assign a new browsing context (tab or window) to a specific user context (Firefox container). ([Firefox bug 1874918](https://bugzil.la/1874918))
- Updated the [browsingContext.Info](https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info) type to include the "userContext" field, which is the unique id of the user context owning the tab for this browsing context. ([Firefox bug 1874920](https://bugzil.la/1874920))
- Added support for the "contexts" argument to the [script.addPreloadScript](https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript) command, this allows clients to add preload scripts only to specific browsing context trees (tabs) by specifying their top-level browsing context. ([Firefox bug 1858458](https://bugzil.la/1858458))
- Fixed a bug where [browsingContext.close](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close) would not be able to close the last tab of a window. ([Firefox bug 1873948](https://bugzil.la/1873948))

#### Marionette

- Fixed an issue with [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text), which ignored the slot value of a web component when no custom text is specified. ([Firefox bug 1865381](https://bugzil.la/1865381))

## Changes for add-on developers

- Adds the {{WebExtAPIRef("runtime.onPerformanceWarning")}} event that enables extensions to obtain information when the browser detects that the extension has a runtime performance issue such as a slow-running content script ([Firefox bug 1861445](https://bugzil.la/1861445)).

## Experimental web features

These features are newly shipped in Firefox 124 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Growable `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  The {{jsxref("SharedArrayBuffer")}} is now growable using the {{jsxref("SharedArrayBuffer.prototype.grow()")}} method.
  The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`SharedArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength).
  The {{jsxref("SharedArrayBuffer.prototype.growable")}} and {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can be grow, and its maximum allowed size, respectively.
  ([Firefox bug 1842773](https://bugzil.la/1842773).)

- **Resizable `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  The {{jsxref("ArrayBuffer")}} can now be resized using the {{jsxref("ArrayBuffer.prototype.resize()")}} method.
  The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`ArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength).
  The {{jsxref("ArrayBuffer.prototype.resizable")}} and {{jsxref("ArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can be resized, and its maximum allowed size, respectively.
  ([Firefox bug 1842773](https://bugzil.la/1842773).)

## Older versions

{{Firefox_for_developers}}
