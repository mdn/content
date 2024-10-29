---
title: Firefox 111 for developers
slug: Mozilla/Firefox/Releases/111
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 111 that affect developers. Firefox 111 was released on March 14, 2023.

## Changes for web developers

### HTML

- The [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) global attribute is now supported by default. The default value for the attribute is `none`, so no capitalization occurs ([Firefox bug 1692007](https://bugzil.la/1692007)).
- The [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate) global attribute is now supported ([Firefox bug 1418449](https://bugzil.la/1418449)).

### CSS

- CSS color functions `color()`, `lab()`, `lch()`, `oklab()`, and `oklch()` are now supported.
  These features are disabled by default and can be enabled by setting the preference `layout.css.more_color_4.enabled` to true.
  For more information, see the [CSS color value](/en-US/docs/Web/CSS/color_value) documentation ([Firefox bug 1352757](https://bugzil.la/1352757) and [Firefox bug 1128204](https://bugzil.la/1128204)).

### JavaScript

No notable changes.

### SVG

- The `context-stroke` and `context-fill` values are now supported inside `<marker>` elements.
  For more information on using these values with `fill` and `stroke` properties, see the [`<marker>`](/en-US/docs/Web/SVG/Element/marker) documentation ([Firefox bug 752638](https://bugzil.la/752638)).

### HTTP

- The HTTP [`Authorization`](/en-US/docs/Web/HTTP/Headers/Authorization) header is removed from cross origin redirects.
  See [Firefox bug 1802086](https://bugzil.la/1802086) for more details.

### APIs

- [Origin private file system (OPFS)](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) is now supported when using the [File System API](/en-US/docs/Web/API/File_System_API).
  The data in this file system is origin-specific: permission prompts are not required to access files, and clearing data for the site/origin deletes the storage.
  The OPFS is accessed with the {{domxref("StorageManager.getDirectory()")}} method, by calling `navigator.storage.getDirectory()` in a worker or the main thread.
  See [Firefox bug 1785123](https://bugzil.la/1785123) for more details.
- The HTTP [`Authorization`](/en-US/docs/Web/HTTP/Headers/Authorization) header is removed from [`fetch()`](/en-US/docs/Web/API/Window/fetch) and [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) requests that are redirected cross-origin (`fetch()` headers may be added by developers using the [`option.headers`](/en-US/docs/Web/API/Window/fetch#headers) argument).
  See [Firefox bug 1802086](https://bugzil.la/1802086) for more details.
- The `none` value of the `options.imageOrientation` parameter passed to {{domxref("Window.createImageBitmap()")}} and {{domxref("WorkerGlobalScope.createImageBitmap()")}} has been renamed to `from-image`.
  This is to better match the meaning of the equivalent CSS [`image-orientation`](/en-US/docs/Web/CSS/image-orientation) property. ([Firefox bug 1809740](https://bugzil.la/1809740)).

#### DOM

- The {{domxref("FormData")}} constructor now accepts a second optional `submitter` parameter to specify a submit button. If the button has a name or is an image button, it will contribute to the form data set. This makes it possible to create a {{domxref("FormData")}} object with the same data set as a vanilla form submission triggered by the button. See [Firefox bug 1812696](https://bugzil.la/1812696) for more details.

#### Media, WebRTC, and Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/en-US/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) is now supported.
  This allows developers to associate `inbound-rtp` statistics with a particular track when using {{domxref("RTCPeerConnection.getStats()")}}.
  (For more information see [Firefox bug 1804676](https://bugzil.la/1804676).)

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Changed the behaviors for handling stale elements checks based on recently updated WebDriver classic specification. See [Firefox bug 1808894](https://bugzil.la/1808894) for more details.

#### Marionette

- Fixed an issue where returning a ShadowRoot from `WebDriver:ExecuteScript` causes a `cyclic object value` error. See [Firefox bug 1764594](https://bugzil.la/1764594) for more details.

## Changes for add-on developers

- `matchDiacritics` has been added to the {{WebExtAPIRef("Find.find")}} API. This option enables searches to distinguish between accented letters and their base letters. For example, when set to `true`, searching for "résumé" does not find a match for "resume" [Firefox bug 1680606](https://bugzil.la/1680606).
- {{WebExtAPIRef("search.query")}} has been added, providing search API compatibility with Chromium-based browsers [Firefox bug 1804357](https://bugzil.la/1804357).
- The `disposition` property has been added to {{WebExtAPIRef("search.search")}}, enabling results to be displayed in a new tab or window [Firefox bug 1811274](https://bugzil.la/1811274).

## Older versions

{{Firefox_for_developers}}
