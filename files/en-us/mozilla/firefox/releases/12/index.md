---
title: Firefox 12 for developers
slug: Mozilla/Firefox/Releases/12
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 12 was shipped on April 24, 2012. This page summarizes the changes in Firefox 12 that affect developers. This article provides information about the new features and key bugs fixed in this release, as well as links to more detailed documentation for both web developers and add-on developers.

## Changes for Web developers

### HTML

- The `title` attribute now supports newline characters to allow multi-line tooltips.
- If JavaScript is disabled, the {{HTMLElement("canvas")}} element was being rendered instead of showing the fallback content as per the [specification](https://html.spec.whatwg.org/multipage/canvas.html). Now the fallback content is rendered instead.
- The `crossorigin` attribute is now supported on {{HTMLElement("video")}}.

### CSS

- Support for the {{cssxref("text-align-last")}} property has been added (prefixed).

### JavaScript

- Support for [sharp variables](/en-US/docs/JavaScript/Sharp_variables_in_JavaScript) (a Netscape non-standard extension) has been dropped.
- {{jsxref("ArrayBuffer.prototype.slice()")}} has been implemented.

### DOM

- {{domxref("DOMParser")}} now supports parsing of HTML document fragments.
- {{domxref("XMLHttpRequest")}} now supports timeouts using the `timeout` property and "timeout" event, as well as the `ontimeout` event handler on the {{domxref("XMLHttpRequestEventTarget")}} interface.
- {{domxref("XMLHttpRequest")}} can now load from [`data:` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).
- When downloading large amounts of data, {{domxref("XMLHttpRequest")}} progress event handlers are now called periodically with the `responseType` set to "moz-blob" and the response being a {{domxref("Blob")}} containing all of the data received so far. This lets progress handlers begin processing data without having to wait for it all to arrive.
- Gecko now supports [multi-touch](/en-US/docs/Web/API/Touch_events) (instead of just single touches at a time) on Android.
- While editing text using an IME, the `input` event is now sent whenever the contents of the element being edited have been changed; this happens after the `compositionupdate` event has been sent to indicate that the IME's text has been changed. You can use the `input` event handler, therefore, to monitor changes to the actual content of the element.
- {{domxref("DOMError")}} as defined in the DOM 4 specification has been implemented.
- The {{domxref("Document.createNodeIterator()")}} method has been updated to match the DOM4 specification. This makes the `whatToShow` and `filter` parameters optional and removes the non-standard fourth parameter, `entityReferenceExpansion`.
- The {{domxref("Blob")}} interface's `slice()` method was affected by a bug that prevented it from properly accepting `start` and `end` values outside the range of a signed 64-bit integer; this has been fixed.
- The {{domxref("element.getBoundingClientRect()")}} method now considers effect of [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) when computing the element's bounding rectangle.
- The `crossOrigin` property is now supported by {{domxref("HTMLMediaElement")}}.

#### New WebAPIs

- Network Information API: Experimental support for {{domxref("window.navigator.connection")}} has been added (prefixed).
- WebTelephony API: {{domxref("window.navigator.mozTelephony")}} has been implemented and provides support for dialing, answering, and managing phone calls on a device.
- WebSMS API: {{domxref("window.navigator.mozSms")}} is now available for mobile devices to send SMS text messages.
- Screen brightness API: {{domxref("window.screen.mozEnabled")}} and {{domxref("window.screen.mozBrightness")}} have been added to control the device's screen.

### SVG

- Firefox now implements the `SVGTests` DOM API, see [Firefox bug 607854](https://bugzil.la/607854)
- The {{domxref("SVGStringList")}} DOM interface support the non-standard `length` property see [Firefox bug 711958](https://bugzil.la/711958)

### MathML

- To control the directionality of MathML formulas, the `dir` attribute is now supported on the {{MathMLElement("math")}}, {{MathMLElement("mrow")}}, and {{MathMLElement("mstyle")}} elements as well as on [MathML Token Elements](/en-US/docs/Web/MathML/Element#token_elements). This is particularly important for some [Arabic mathematical notations](https://www.w3.org/TR/arabic-math/).
- The alignment attribute `align` defined in MathML3 has been implemented for {{MathMLElement("munder")}}, {{MathMLElement("mover")}}, and {{MathMLElement("munderover")}}.

### Networking

- Previously, Gecko reported the close code `CLOSE_NORMAL` when a WebSocket channel was closed due to an unexpected error, or if it was closed due to an error condition that the specification doesn't cover. Now `CLOSE_GOING_AWAY` is reported instead.

### Developer tools

- The [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) now caches error messages and log entries added using {{domxref("console.log()")}} if the console isn't currently open, and displays them when the console is opened.
- You can now reset the zoom level, panning, and rotation in the [3D view](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) by pressing the "r" key.
- You can now hide nodes in the [3D view](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) by pressing the "x" key after selecting them.
- The [source editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) has a several new editing features and keyboard shortcuts; see [Using the Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) for details

Mozilla has been working on integrating its own Web developer tools that complement the popular [Firebug](https://getfirebug.com/) add-on. You can get more information about these tools as well as see a list of resources external to Firefox that will help you with your Web development. The entire list is located at [Web developer tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Miscellaneous changes

- The GEOSTD8 character set, which was never fully supported, is no longer supported at all.

## Changes for Mozilla and add-on developers

### JavaScript code modules

#### source-editor.jsm

- The [`resetUndo()`](/en-US/docs/JavaScript_code_modules/source-editor.jsm#resetUndo%28%29) method was added; this lets you clear the undo stack.
- The source editor now offers methods for providing search capability: `find()`, `findNext()`, and `findPrevious()`.

### XUL

- The definition of the values for the `chromemargin` attribute has changed slightly, to make it easier to make cross-platform XUL code look good on platforms with different default window border widths.

### XPCOM

- `nsISupports` proxies are no longer supported. You should be using runnables instead.
- Firefox 11 changed the behavior of [`Components.utils.getWeakReference()`](/en-US/docs/Components.utils.getWeakReference) to throw an exception when the object reference is null; the previous behavior of silently failing has been restored.

### XPConnect

- The [`PRUint64`](/en-US/docs/PRUint64) data type was incorrectly essentially identical to [`PRint64`](/en-US/docs/PRInt64) when used with XPConnect. This has been fixed.

### Interface changes

- The `nsIScreen_MOZILLA_2_0_BRANCH` interface has been merged into `nsIScreen`. The APIs defined in that interface (for controlling minimum screen brightness) had not previously been documented, but now they are.
- The `nsIScriptError2` interface has been merged into `nsIScriptError`.
- `nsIDownloadManager.addDownload()` is now handled asynchronously rather than synchronously.
- The `imgIContainerObserver.frameChanged()` method now receives as its first parameter an `imgIRequest` object identifying the corresponding request.
- The `nsIDOMWindowUtils.sendTouchEvent()` method has been added to allow synthesizing touch events.
- You can now scroll the specified content to the vertical center of the view by specifying `SCROLL_CENTER_VERTICALLY` as the scroll constant when calling `nsISelectionController.scrollSelectionIntoView()`.
- The new `nsIMemoryMultiReporter.explicitNonHeap` attribute has been added; this is a more efficient way to obtain the sum of all of the multi-reporter's measurements that have a path that starts with "explicit" **and** are of the kind `KIND_NONHEAP`.
- The `nsIDOMWindowUtils.paintingSuppressed` attribute has been added; this boolean value indicates whether or not painting is currently suppressed on the window. This is used on mobile to prevent bouncy rendering that occurs when attempts to draw the page begin before enough content is available to do so smoothly.
- The `nsIDocCharset` and `nsIDocumentCharsetInfo` interfaces have been merged into `nsIDocShell`. As part of this work, the old `forcedDetector` attribute has been removed; it never did anything.

### SpiderMonkey

- `JSThread` has been eliminated.
- `JSThreadData` has been merged into `JSRuntime`.

### Building

- When building on Windows, you must have the Windows 7 SDK installed.

### Other changes

- The editor component (known as [Midas](/en-US/docs/Midas)) now [only accepts events](/en-US/docs/Using_the_Editor_from_XUL#editor_event_handling) from privileged code.

## See also

{{Firefox_for_developers('11')}}
