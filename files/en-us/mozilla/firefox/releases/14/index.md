---
title: Firefox 14 for developers
slug: Mozilla/Firefox/Releases/14
tags:
  - Firefox
  - Firefox 14
  - Gecko
  - Gecko 14
---
{{FirefoxSidebar}}

Firefox 14 shipped on July 17, 2012. This article lists key changes that are useful for not only Web developers to know about, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The {{HTMLElement("progress")}} element is no longer incorrectly classified as a form element, and therefore no longer has a `form` attribute.
- The default modifier keys for the [`accesskey`](/en-US/docs/Web/HTML/Global_attributes) of HTML contents on Mac are changed to Control+Option. This is the same as WebKit-based browsers on Mac.

### DOM

- [input](/en-US/docs/Web/API/HTMLElement/input_event) events are fired also on editing host element of [contenteditable](/en-US/docs/Web/API/HTMLElement/contentEditable) editor and root element of [designMode](/en-US/docs/Web/API/Document/designMode) editor.
- {{domxref("DOMException", "DOMException.code")}} is now deprecated per latest DOM Level 4 specification.
- The {{domxref("Range.insertNode()")}} method now works correctly when used on collapsed ranges.
- The {{domxref("BlobBuilder", "MozBlobBuilder")}} interface has been deprecated in favor of the constructor on {{domxref("Blob")}}. If you use `MozBlobBuilder` you'll see a warning message in the Web Console.
- The {{domxref("Blob.Blob", "Blob()")}} constructor is now available to workers ({{bug(736686)}}).
- Support for the [Mutation Observers](/en-US/docs/Web/API/MutationObserver) has been landed. It is designed as a replacement for the Mutation Events in DOM3, which has a number of issues regarding performance.
- The {{domxref("HTMLImageElement")}} interface's `x` and `y` properties were removed in Firefox 7.0 but restored in this release for compatibility reasons.
- The {{domxref("Document")}} methods `execCommandShowHelp()` and `queryCommandText()`, which never did anything, have been removed.
- The `GeoPositionAddress` interface, an obsolete part of the [Geolocation](/en-US/docs/Web/API/Geolocation_API) API, has been removed.
- {{domxref("Storage", "localStorage/sessionStorage")}} now correctly return `undefined` instead of `null` for undeclared keys through property access.ff
- The {{domxref("ImageData")}} object has been implemented ({{bug(550309)}}).
- Attributes and methods related to child nodes on {{domxref("Attr")}} interface were obsoleted ({{bug(737122)}}).

### CSS

- The {{cssxref("text-transform")}} and {{cssxref("font-variant")}} CSS properties have been fixed to correctly handle the `i` → `İ` and `ı` → `I` [Turkic](https://en.wikipedia.org/wiki/Turkic_languages)-specific case pairs.
- The Dutch IJ digraph is now correctly handled by `text-transform: capitalization`. Similarly the Greek letter `Σ`, which has two lowercase forms, `σ` and `ς`, is now correctly handled by `text-transform: lowercase`.
- Support for the `skew()` function has been removed from {{cssxref("transform")}} property, as it has been removed from the draft standard.
- The syntax for {{cssxref("border-image")}} has been updated to match the latest revision of the specification; it no longer accepts a trailing slash ("/").

### JavaScript

_No change._

### MathML

- The syntax of the `statusline` action type on {{MathMLElement("maction")}} elements has been adjusted to follow the MathML specification.

### HTTP

- Gecko now supports the new [HTTP](/en-US/docs/Web/HTTP) [`308 Permanent Redirect`](/en-US/docs/Web/HTTP/Status#308) status code. As Gecko doesn't make a distinction between permanent and temporary redirects, it behaves like the [`307 Temporary Redirect`](/en-US/docs/Web/HTTP/Status#307) status code, as it forbids the user agent from changing the HTTP method used between the two requests (`POST` will stay `POST`, `GET` will stay `GET`).

## Changes for Mozilla and add-on developers

### JavaScript code modules

#### source-editor.jsm

- Added a keyboard shortcut to toggle commenting for the current selection (Ctrl-/ or Cmd-/ on Mac OS X).
- Added the Ctrl-\[ and Ctrl-] keyboard shortcuts for moving the text input position to the beginning and end of the current block.
- Added the new [`getLineStart()`](/en-US/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) and [`getLineEnd()`](/en-US/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) methods.

### XUL

- Added the new `fullscreenbutton` attribute to the `<window>` element; setting this to `true` adds a button to the window's chrome to enable full screen mode.

### Interfaces

- The `nsILocalFile` interface has been merged into `nsIFile` ([bug 682360](https://bugzilla.mozilla.org/show_bug.cgi?id=682360)).
- The methods in `nsIPlacesImportExportService` for importing bookmarks have all been removed in favor of the [`BookmarkHTMLUtils.jsm`](/en-US/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) JavaScript code module.
- The `nsIDOMGeoPositionAddress` interface has been removed.
- The `getItemGUID`, `setItemGUID` and `getItemIdForGUID` methods have been removed from `nsINavBookmarksService` ({{bug("715355")}}).

### Spellchecking

- Dictionary names are now parsed as full [BCP 47](https://www.rfc-editor.org/info/bcp47) language tags ([bug 730209](https://bugzilla.mozilla.org/show_bug.cgi?id=730209), [bug 741842](https://bugzilla.mozilla.org/show_bug.cgi?id=741842)). Developers are encouraged to not hard-code the name of their language in their dictionary names.

## See also

{{Firefox_for_developers('13')}}
