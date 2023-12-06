---
title: Firefox 100 for developers
slug: Mozilla/Firefox/Releases/100
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 100 that will affect developers. Firefox 100 was released on May 3, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

- CSS media features for [`dynamic-range`](/en-US/docs/Web/CSS/@media/dynamic-range) and [`video-dynamic-range`](/en-US/docs/Web/CSS/@media/video-dynamic-range) are now supported. You can now test whether a user agent or an output device supports the combination of brightness, contrast ratio, and color depth by using `dynamic-range` and in the video plane by using `video-dynamic-range` ([Firefox bug 1751217](https://bugzil.la/1751217)).

### JavaScript

No notable changes.

### HTTP

#### Removals

- The non-standard {{httpheader("Large-Allocation")}} HTTP header has been removed ([Firefox bug 1598759](https://bugzil.la/1598759)).

### APIs

- [`WritableStream`](/en-US/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/en-US/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/en-US/docs/Web/API/WritableStreamDefaultController), and [`ReadableStream.pipeTo()`](/en-US/docs/Web/API/ReadableStream/pipeTo) are now supported ([Firefox bug 1759597](https://bugzil.la/1759597)).

#### DOM

- Code can now use the static method [`AbortSignal.timeout()`](/en-US/docs/Web/API/AbortSignal/timeout_static).
  This returns an {{domxref("AbortSignal")}} that can be used to automatically abort an operation with `TimeoutError` after a specified time ([Firefox bug 1753309](https://bugzil.la/1753309)).

### WebAssembly

- WebAssembly now supports exceptions that can be thrown and caught in either WebAssembly or JavaScript (or some other runtime), crossing between the environment boundaries if not handled.
  The JavaScript representations of WebAssembly exceptions are [WebAssembly.Exception](/en-US/docs/WebAssembly/JavaScript_interface/Exception) and [WebAssembly.Tag](/en-US/docs/WebAssembly/JavaScript_interface/Tag) ([Firefox bug 1759217](https://bugzil.la/1759217)).

### WebDriver conformance (Marionette)

- Added support for user prompts (e.g. `alert`) on Android ([Firefox bug 1708105](https://bugzil.la/1708105)).

## Changes for add-on developers

- The `color_scheme` and `content_color_scheme` properties are added to [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key and available in the {{WebExtAPIRef("theme")}} API. These properties enable a theme to override whether a light or dark color scheme is automatically applied to the chrome or content ([Firefox bug 1708105](https://bugzil.la/1708105)).
- You can now create a muted tab using {{WebExtAPIRef("tabs.create()")}} with the new `muted` property in the `createProperties` object ([Firefox bug 1372100](https://bugzil.la/1372100)).
- Support added for {{WebExtAPIRef("runtime.onSuspend")}} and {{WebExtAPIRef("runtime.onSuspendCanceled")}} improving support for event page features ([Firefox bug 1753850](https://bugzil.la/1753850)).

## Older versions

{{Firefox_for_developers(99)}}
