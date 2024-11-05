---
title: Firefox 123 for developers
slug: Mozilla/Firefox/Releases/123
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 123 that affect developers. Firefox 123 was released on [February 20, 2024](https://whattrainisitnow.com/release/?version=123).

## Changes for web developers

### Developer Tools

### HTML

- The {{htmlelement("template")}} element now supports a `shadowrootmode` attribute that allows declarative creation of a shadow DOM subtree. The attribute can be set to either `open` or `closed`, which expose or hide JavaScript in the shadow DOM from external code, respectively. These are the same values as the `mode` option of the {{domxref("Element.attachShadow()", "attachShadow()")}} method. ([Firefox bug 1870052](https://bugzil.la/1870052))

### CSS

No notable changes.

### JavaScript

- The {{jsxref("Date.parse()")}} global object has had a number of bug fixes to bring it into line with how other browsers parse the values being passed.
  - Incorrect day of month (e.g. "31 April") now skips over to the following month (e.g. "1 May"). ([Firefox bug 1872333](https://bugzil.la/1872333)).
  - Incomplete time zone (e.g. "1/1/70 gm") or AM/PM (e.g. "1/1/70 10:00 a") are no longer accepted. ([Firefox bug 1870570](https://bugzil.la/1870570)).
  - Single number dates are now accepted (e.g. `Date.parse("0")` now returns `946684800000` - Sat Jan 01 2000 00:00:00). ([Firefox bug 1870434](https://bugzil.la/1870434)).

### SVG

- The {{SVGElement("linearGradient")}} and {{SVGElement("radialGradient")}} SVG elements now support changing the color space to be `linearRGB` or `sRGB` via the {{SVGAttr("color-interpolation")}} attribute. This can also be applied to the SVG elements via the {{CSSXref("color-interpolation")}} CSS property.

### HTTP

- The [`103 Early Hints`](/en-US/docs/Web/HTTP/Status/103) HTTP [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) status code is now enabled for [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources that the page is likely to need while the server is still preparing the full response.
  This can significantly reduce page load time.
  Note that support for using the `103 Early Hints` header for [preconnecting](/en-US/docs/Web/HTML/Attributes/rel/preconnect) was added in [Firefox 120](/en-US/docs/Mozilla/Firefox/Releases/120#http).
  For more details see [Firefox bug 1874445](https://bugzil.la/1874445).

### APIs

- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) now supports cross-origin credential creation.
  Specifically [`navigator.credentials.create({publicKey})`](/en-US/docs/Web/API/CredentialsContainer/create) can now be called in nested browsing contexts loaded from a different origin to the top-most document, if allowed by a [`Feature-Policy: publickey-credentials-create`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) on the top level nesting [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe#allow).
  ([Firefox bug 1870863](https://bugzil.la/1870863)).

#### DOM

- Custom locale support for the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) has been deprecated, including the [`options.locale`](/en-US/docs/Web/API/IDBObjectStore/createIndex#locale) parameter to `IDBObjectStore.createIndex()`, and the `IDBIndex` properties [`isAutoLocale`](/en-US/docs/Web/API/IDBIndex/isAutoLocale) and [`locale`](/en-US/docs/Web/API/IDBIndex/locale).
  ([Firefox bug 1872675](https://bugzil.la/1872675) and [Firefox bug 1730706](https://bugzil.la/1730706)).

#### Media, WebRTC, and Web Audio

#### Removals

The `IDBLocaleAwareKeyRange` interface has been removed ([Firefox bug 1730706](https://bugzil.la/1730706)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added the [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError) event that is emitted when a network request ends in an error ([Firefox bug 1790375](https://bugzil.la/1790375)).
- Support for the [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes) command has been introduced to find elements on the given page. Supported locators for now are `CssLocator` ([Firefox bug 1855023](https://bugzil.la/1855023)) and `XPathLocator` ([Firefox bug 1869536](https://bugzil.la/1869536)).
- Improved the [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) command on Android to seamlessly switch to opening a new tab if the `type` argument is specified as `window` ([Firefox bug 1875086](https://bugzil.la/1875086)).
- Fixed an issue with the deserialization process of a `DateRemoteValue`, where the presence of a non-standard (ISO 8601) date string such as `200009` did not trigger an error ([Firefox bug 1872116](https://bugzil.la/1872116)).
- Fixed an issue with the [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate), [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction), and [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) commands where specifying both the `context` and `realm` arguments would result in an `invalid argument` error, rather than simply ignoring the `realm` argument as intended ([Firefox bug 1873688](https://bugzil.la/1873688)).

#### Marionette

- Fixed a bug with [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) where sending text containing surrogate pairs would fail ([Firefox bug 1866431](https://bugzil.la/1866431)).

## Changes for add-on developers

- Addition of the {{WebExtAPIRef("contextualIdentities.move")}} function enables items to be moved in the list of contextual identities. This function enables extensions to customize the order in which contextual identities display in the UI ([Firefox bug 1333395](https://bugzil.la/1333395)).

## Experimental web features

These features are newly shipped in Firefox 123 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  The video interfaces of the [Web Codecs API](/en-US/docs/Web/API/WebCodecs_API) are supported on Linux desktop on Nightly.
  These include: [`VideoEncoder`](/en-US/docs/Web/API/VideoEncoder), [`VideoDecoder`](/en-US/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/en-US/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/en-US/docs/Web/API/VideoFrame), [`VideoColorSpace`](/en-US/docs/Web/API/VideoColorSpace).
  ([Firefox bug 1874445](https://bugzil.la/1874445)).

## Older versions

{{Firefox_for_developers}}
