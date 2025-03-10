---
title: Firefox 102 for developers
slug: Mozilla/Firefox/Releases/102
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 102 that will affect developers. Firefox 102 was released on June 28, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

The [`update`](/en-US/docs/Web/CSS/@media/update) media feature that can be used to query the ability of the output device to modify the appearance of content after it is rendered is now available by default ([Firefox bug 1422312](https://bugzil.la/1422312)).

### JavaScript

No notable changes.

### APIs

- The non-standard interfaces `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest`, and the method `IDBDatabase.createMutableFile()` have been disabled by default in preparation for removal in a future release ([Firefox bug 1764771](https://bugzil.la/1764771)).

- [Transform streams](/en-US/docs/Web/API/TransformStream) are now supported, allowing you to pipe from {{domxref("ReadableStream")}} to a {{domxref("WritableStream")}}, executing a transformation on the chunks.
  The update includes the new interfaces [`TransformStream`](/en-US/docs/Web/API/TransformStream) and [`TransformStreamDefaultController`](/en-US/docs/Web/API/TransformStreamDefaultController) and the method [`ReadableStream.pipeThrough()`](/en-US/docs/Web/API/ReadableStream/pipeThrough) ([Firefox bug 1767507](https://bugzil.la/1767507)).

- [Readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) are now supported, allowing efficient zero-byte transfer of data from an underlying byte source to a consumer (bypassing the stream's internal queues).
  The new interfaces are {{domxref("ReadableStreamBYOBReader")}}, {{domxref("ReadableByteStreamController")}} and {{domxref("ReadableStreamBYOBRequest")}} ([Firefox bug 1767342](https://bugzil.la/1767342)).

### Security

- Support of the [`wasm-unsafe-eval`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP policy directive has been implemented.
  A document with a CSP that restricts scripts will no longer load and execute WebAssembly unless the CSP uses `'wasm-unsafe-eval'` or the existing `'unsafe-eval'` keyword ([Firefox bug 1740263](https://bugzil.la/1740263)).

#### DOM

- The Firefox-only property {{domxref("Window.external", "Window.sidebar")}} has been moved behind a preference (and permanently removed in version 119) ([Firefox bug 1768486](https://bugzil.la/1768486)).

### WebDriver conformance

#### WebDriver BiDi

- There are some improvements to Webdriver BiDi's `browsingContext.navigate`
  - Fixed edge cases where the navigation could incorrectly timeout ([Firefox bug 1766217](https://bugzil.la/1766217)).
  - Added support for hash changes ([Firefox bug 1763127](https://bugzil.la/1763127)).
  - Added support navigation to error pages ([Firefox bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Allow marionette to connect to a windowless instance of Firefox ([Firefox bug 1726465](https://bugzil.la/1726465)).
- Fixed issue where `WebDriver:Navigate` with a PageLoadStrategy of "none" returns before navigation has started ([Firefox bug 1754132](https://bugzil.la/1754132)).
- Fixed a potential race condition in `WebDriver:SwitchToWindow` when switching to a different tab ([Firefox bug 1749666](https://bugzil.la/1749666)).

## Changes for add-on developers

- The {{WebExtAPIRef("scripting")}} API, which provides features to execute script, insert and remove CSS, and manage the registration of content scripts is available to Manifest V2 extensions ([Firefox bug 1766615](https://bugzil.la/1766615)).
- The `nonPersistentCookies` option of the {{WebExtAPIRef("privacy.websites")}} `cookieConfig` property has been deprecated ([Firefox bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [preview](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) features:
  - With the introduction of support for the 'wasm-unsafe-eval' CSP keyword in Firefox ([Firefox bug 1740263](https://bugzil.la/1740263)), Manifest V3 extensions are now required to specify this keyword in the [content_security_policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest key to use [WebAssembly](/en-US/docs/WebAssembly). For backwards-compatibility, Manifest V2 extensions can still use WebAssembly without the keyword ([Firefox bug 1766027](https://bugzil.la/1766027)).

## Older versions

{{Firefox_for_developers}}
