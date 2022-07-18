---
title: Firefox 102 for developers
slug: Mozilla/Firefox/Releases/102
tags:
  - '102'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 102 that will affect developers. Firefox 102 was released on June 28, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

The [`update`](/en-US/docs/Web/CSS/@media/update-frequency) media feature that can be used to query the ability of the output device to modify the appearance of content after it is rendered is now available by default ({{bug(1422312)}}).

### JavaScript

No notable changes.

### APIs

- The Non-standard interfaces [IDBMutableFile](/en-US/docs/Web/API/IDBMutableFile), [IDBFileHandle](/en-US/docs/Web/API/IDBFileHandle), [IDBFileRequest](/en-US/docs/Web/API/IDBFileRequest), and the method [IDBDatabase.createMutableFile()](/en-US/docs/Web/API/IDBDatabase#idbdatabase.createmutablefile) have been disabled by default in preparation for removal in a future release ({{bug(1764771)}}).

- [Transform streams](/en-US/docs/Web/API/TransformStream) are now supported, allowing you to pipe from {{domxref("ReadableStream")}} to a {{domxref("WritableStream")}}, executing a transformation on the chunks.
  The update includes the new interfaces [`TransformStream`](/en-US/docs/Web/API/TransformStream) and [`TransformStreamDefaultController`](/en-US/docs/Web/API/TransformStreamDefaultController) and the method [`ReadableStream.pipeThrough()`](/en-US/docs/Web/API/ReadableStream/pipeThrough) ({{bug(1767507)}}).

- [Readable byte streams](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams) are now supported, allowing efficient zero-byte transfer of data from an underlying byte source to a consumer (bypassing the stream's internal queues).
  The new interfaces are {{domxref("ReadableStreamBYOBReader")}}, {{domxref("ReadableByteStreamController")}} and {{domxref("ReadableStreamBYOBRequest")}} ({{bug(1767342)}}).

#### DOM

- The Firefox-only property {{domxref("Window.sidebar")}} has been moved behind a preference and is planned for removal ({{bug(1768486)}}).

### WebDriver conformance

#### WebDriver BiDi

- There are some improvements to Webdriver BiDi's `browsingContext.navigate`
  - Fixed edge cases where the navigation could incorrectly timeout ({{bug(1766217)}}).
  - Added support for hash changes ({{bug(1763127)}}).
  - Added support navigation to error pages ({{bug(1763124)}}).

#### Marionette

- Allow marionette to connect to a windowless instance of Firefox  ({{bug(1726465)}}).
- Fixed issue where `WebDriver:Navigate` with a PageLoadStrategy of "none" returns before navigation has started  ({{bug(1754132)}}).
- Fixed a potential race condition in `WebDriver:SwitchToWindow` when switching to a different tab  ({{bug(1749666)}}).

## Changes for add-on developers

- The {{WebExtAPIRef("scripting")}} API, which provides features to execute script, insert and remove CSS, and manage the registration of content scripts is now available to Manifest V2 extensions ({{bug(1766615)}}).
- With the introduction of support for the 'wasm-unsafe-eval' CSP keyword in Firefox ({{bug(1740263)}}), Manifest V3 extensions are now required to specify this keyword in the [content_security_policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest key to use [WebAssembly](/en-US/docs/WebAssembly). For backwards-compatibility, Manifest V2 extensions can still use WebAssembly without the keyword ({{bug(1766027)}}).
- The `nonPersistentCookies` option of the {{WebExtAPIRef("privacy.websites")}} `cookieConfig` property has been deprecated ({{bug(1754924)}}).

## Older versions

{{Firefox_for_developers(101)}}
