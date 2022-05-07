---
title: Firefox 100 for developers
slug: Mozilla/Firefox/Releases/100
tags:
  - '100'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 100 that will affect developers. Firefox 100 was released on May 3, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

- CSS media features for [`dynamic-range`](/en-US/docs/Web/CSS/@media/dynamic-range) and [`video-dynamic-range`](/en-US/docs/Web/CSS/@media/video-dynamic-range) are now supported. You can now test whether a user agent or an output device supports the combination of brightness, contrast ratio, and color depth by using `dynamic-range` and in the video plane by using `video-dynamic-range` ({{bug(1751217)}}).

### JavaScript

No notable changes.

### HTTP

#### Removals

- The non-standard {{httpheader("Large-Allocation")}} HTTP header has been removed ({{bug(1598759)}}).

### APIs

- [`WritableStream`](/en-US/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/en-US/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/en-US/docs/Web/API/WritableStreamDefaultController), and [`ReadableStream.pipeTo()`](/en-US/docs/Web/API/ReadableStream/pipeTo) are now supported ({{bug(1759597)}}).

#### DOM

- Code can now use the static method [`AbortSignal.timeout()`](/en-US/docs/Web/API/AbortSignal/timeout).
  This returns an {{domxref("AbortSignal")}} that can be used to automatically abort an operation with `TimeoutError` after a specified time ({{bug(1753309)}}).

### WebAssembly

- WebAssembly now supports exceptions that can be thrown and caught in either WebAssembly or Javascript (or some other runtime), crossing between the environment boundaries if not handled.
  The JavaScript representations of WebAssembly exceptions are [WebAssembly.Exception](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) and [WebAssembly.Tag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) ({{bug(1759217)}}).

### WebDriver conformance (Marionette)

- Added support for user prompts (e.g. `alert`) on Android ({{bug(1708105)}}).

## Older versions

{{Firefox_for_developers(99)}}
