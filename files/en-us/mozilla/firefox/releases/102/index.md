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

This article provides information about the changes in Firefox 102 that will affect developers. Firefox 102 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [June 28, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

The [`update`](/en-US/docs/Web/CSS/@media/update-frequency) media feature that can be used to query the ability of the output device to modify the appearance of content after it is rendered is now available by default ({{bug(1422312)}}).

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The Non-standard interfaces [IDBMutableFile](/en-US/docs/Web/API/IDBMutableFile), [IDBFileHandle](/en-US/docs/Web/API/IDBFileHandle), [IDBFileRequest](/en-US/docs/Web/API/IDBFileRequest), and the method [IDBDatabase.createMutableFile()](/en-US/docs/Web/API/IDBDatabase#idbdatabase.createmutablefile), have been disabled by default, in preparation for removal in a future release ({{bug(1764771)}}).

- [Transform streams](/en-US/docs/Web/API/TransformStream) are now supported, allowing you to pipe from a {{domxref("ReadableStream")}} to a {{domxref("WritableStream")}}, executing a transformation on the chunks.
  The update includes the new interfaces [`TransformStream`](/en-US/docs/Web/API/TransformStream) and [`TransformStreamDefaultController`](/en-US/docs/Web/API/TransformStreamDefaultController), and the method [`ReadableStream.pipeThrough()`](/en-US/docs/Web/API/ReadableStream/pipeThrough) ({{bug(1767507)}}).

- [Readable byte streams](/en-US/docs/Web/API/Streams_API#bytestream-related_interfaces) are now supported, allowing efficient zero-byte transfer of data from an underlying byte source to a consumer (bypassing the stream's internal queues).
  The new interfaces are {{domxref("ReadableStreamBYOBReader")}}, {{domxref("ReadableByteStreamController")}}, and {{domxref("ReadableStreamBYOBRequest")}}.
  ({{bug(1767342)}}).

#### DOM

- The Firefox-only property {{domxref("Window.sidebar")}} has been moved behind a preference, and is planned for removal ({{bug(1768486)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

- The {{WebExtAPIRef("scripting")}} API, which provides features to execute script, insert and remove CSS, and manage the registration of content scripts is now available to Manifest V2 extensions ({{bug(1766615)}}).
- With the introduction of support for the 'wasm-unsafe-eval' CSP keyword in Firefox ({{bug(1740263)}}), Manifest V3 extensions are now required to specify this keyword in the [content_security_policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest key to use [WebAssembly](/en-US/docs/WebAssembly). For backwards-compatibility, Manifest V2 extensions can still use WebAssembly without the keyword ({{bug(1766027)}}).
- The `nonPersistentCookies` option of the {{WebExtAPIRef("privacy.websites")}} `cookieConfig` property has been deprecated ({{bug(1754924)}}).

#### Removals

### Other

## Older versions

{{Firefox_for_developers(101)}}
