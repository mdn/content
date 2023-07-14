---
title: Firefox 6 for developers
slug: Mozilla/Firefox/Releases/6
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 6, based on Gecko 6.0, was released on August 16, 2011. This article provides links to information about the changes that affect developers in this release.

## Changes for web developers

### HTML

- The HTML5 {{ HTMLElement("progress") }} element, which lets you create a progress bar, is now supported.
- The parsing of the HTML5 {{ HTMLElement("track") }} element, which specifies text tracks for media elements, is now supported. This element should appear in the DOM now, though its behavior is still not implemented.
- The {{ HTMLElement("iframe") }} element is now clipped correctly by its container when the container's corners have been rounded using the {{ cssxref("border-radius") }} property.
- {{ HTMLElement("form") }} elements' text {{ HTMLElement("input") }} fields no longer support the XUL [`maxwidth`](/en-US/docs/XUL/Property/maxwidth) property; this was never intentional, and is in violation of the HTML specification. You should instead use the [`size`](/en-US/docs/Web/HTML/Element/input#size) attribute to set the maximum width of input fields.
- The {{ HTMLElement("canvas") }} {{ domxref("CanvasRenderingContext2d") }} properties `fillStyle` and `strokeStyle` used to ignore garbage included after a valid color definition; now this is correctly treated as an error. For example, "red blue" as a color used to be treated as "red", when it should have been ignored.
- The width and height of {{ HTMLElement("canvas") }} elements can now properly be set to 0px; previously, these were getting arbitrarily set to 300px when you tried to do that.
- Support for the HTML [custom data attributes](/en-US/docs/Web/HTML/Global_attributes#data-) (`data-*`) has been added. The DOM {{ domxref("element.dataset") }} property allows to access them.
- When a {{ HTMLElement("textarea") }} element receives focus, the text insertion point is now placed, by default, at the beginning of the text rather than at the end. This makes Firefox's behavior consistent with other browsers.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : This new property lets you set the color used by text decorations, such as underlines, overlines, and strikethroughs.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : This new property lets you set the kind of text decorations added to an element.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : This new property lets you set the style of text decorations, such as underlines, overlines, and strikethroughs. Styles include single-strokes, double strokes, wavy lines, dotted lines, and so forth.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : This new property lets you control how hyphenation of words during line wrapping is handled.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : A new (currently Mozilla-specific) property which lets you control the vertical or horizontal orientation of certain elements (particularly {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : A Mozilla-specific pseudo-element that lets you style the area of an {{ HTMLElement("progress") }} element representing the completed portion of a task.

#### Other changes

- The `@-moz-document` property has a new `regexp()` function, which lets you match the document's URL to a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions).
- The {{ cssxref("azimuth") }} CSS property is no longer supported, as we have removed what little code we had for the `aural` media group. It was never significantly implemented, so it made more sense to remove the crufty implementation for the time being rather than try to patch it up.
- In the past, the {{ cssxref(":hover") }} pseudoclass was not applied to class selectors when in quirks mode; for example, `.someclass:hover` did not work. This quirk has been removed.
- The {{ cssxref(":indeterminate") }} pseudo-class can be applied to {{ HTMLElement("progress") }} elements. This is non-standard, but we hope it will be adopted by other browsers, because it will be useful.
- The `-moz-win-exclude-glass` value has been added to the `-moz-appearance` CSS property in order to exclude opaque regions in Aero Glass glaze effects on Windows systems.
- [Webkit bug 658949](https://bugzil.la/658949) changed how the hash (#) symbol is treated in data URLs which may break CSS stylesheets which contain such a symbol if it is not escaped.

### DOM

- [Using media queries from code](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : You can now test the result of a media query string programmatically using the {{ domxref("window.matchMedia()") }} method and the {{ domxref("MediaQueryList") }} interface.
- [Touch events](/en-US/docs/Web/API/Touch_events)
  - : Firefox 6 adds support for W3C standard touch events; these make it easy to interpret one or more touches at a time on touch-sensitive surfaces such as touch screens and trackpads.
- [Server-sent events](/en-US/docs/Web/API/Server-sent_events)
  - : Server-sent events make it possible for a web application to ask a server to send events just like any locally-created DOM event.

<!---->

- `navigator.securityPolicy`, which has returned an empty string for a long time, has been removed outright.
- {{ domxref("BlobBuilder") }} is now implemented, although for now it's prefixed (so you need to use `MozBlobBuilder`).
- The {{ domxref("document.height") }} and {{ domxref("document.width") }} have been removed. [Webkit bug 585877](https://bugzil.la/585877)
- The {{ domxref("DocumentType") }} object's `entities` and `notations` properties, which were never implemented and always returned `null`, have been removed, since they've been removed from the specification anyway.
- The `DOMConfiguration` interface and the `document.domConfig` property that used it have both been removed; they were never supported and have since been removed from the DOM specification.
- The `hashchange` event now correctly includes [the `newURL` and `oldURL` fields](/en-US/docs/Web/API/Window/hashchange_event).
- The {{ domxref("FileReader") }} interface's `abort()` method now throws an exception when used if no file read is in progress.
- The {{ domxref("window.postMessage()") }} method now uses [the structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) to let you pass JavaScript objects instead of just strings from one window to another.
- The {{ domxref("window.history") }} API now uses [the structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) to serialize the objects you pass to the `pushState()` and `replaceState()` methods; this lets you use more complex objects (including those that contain cyclic graphs of references).
- You can now [detect when printing has been initiated and has completed](/en-US/docs/Web/Guide/Printing#detecting_print_requests) by listening for the new `beforeprint` and `afterprint` events.
- The `document.strictErrorChecking` property has been removed, since it was never implemented and was removed from the DOM specification.
- The standard {{ domxref("event.defaultPrevented") }} property is now supported; you should use this instead of the non-standard `getPreventDefault()` method to detect whether or not {{ domxref("event.preventDefault()") }} was called on the event.
- The {{ domxref("window.top") }} property is now properly read only.
- DOM views, which we never documented, have been removed. This was a bit of implementation detail that was unnecessarily complicating things, so we got rid of it. If you notice this change, you're probably doing something wrong.
- The `EventTarget` function [`addEventListener()`](/en-US/docs/XPCOM_Interface_Reference/nsIDOMEventTarget)'s `useCapture` parameter is now optional, as it is in WebKit (and as per the latest version of the specification).
- The `mozResponseArrayBuffer` property of the [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) object has been replaced with the `responseType` and `response` properties.
- The {{ domxref("element.dataset") }} property has been added to the [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) interface allowing access to the [`data-*` global attributes](/en-US/docs/Web/HTML/Global_attributes#data-) of an element.
- The {{ domxref("CustomEvent") }} interface has been implemented. (see [Firefox bug 427537](https://bugzil.la/427537))
- For security reasons, `data:` and `javascript:` URLs no longer inherit the security context of the current page when the user enters them in the location bar; instead, a new, empty, security context is created. This means that script loaded by entering `javascript:` URLs in the location bar no longer has access to DOM methods and the like, for example. These URLs continue to work as before when used by script, however.

### JavaScript

- In the past, it was possible to use the `new` operator on several built-in functions (`eval()`, `parseInt()`, `Date.parse()`, …) that should not have allowed it, according to the specification. This behavior is no longer supported. Using the `new` operator in this way was never officially supported and was not widely done, so it's unlikely that this change affects you.
- ECMAScript 2015 [WeakMaps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) have been added as a prototype implementation.

### SVG

- The {{ SVGAttr("pathLength") }} attribute is now supported.
- SVG patterns, gradients, and filters now work correctly when loaded from [`data:` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

### MathML

- The implementation of {{ MathMLElement("mstyle") }} has been corrected.

### Accessibility (ARIA)

- A state change event is now correctly sent when the value of `aria-busy` changes.
- An attribute change event is now correctly sent when `aria-sort` occurs.

### Networking

- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
  - : WebSockets was updated to protocol version 07 for Firefox 6. In addition, the global `WebSocket` object has been renamed to `MozWebSocket` to prevent it from incorrectly being used to detect the availability of unprefixed WebSockets.

<!---->

- Parsing of the `Content-Disposition` header has been fixed to properly interpret backslash-escaped ASCII characters as just that character itself. Previously it was incorrectly replacing that character with an underscore ("\_").
- The value of the path field on `Set-Cookie` headers is now interpreted correctly when quotes are used; previously, they were being treated as part of the path string instead of as delimiters. **This change may affect compatibility with some websites**, so authors should check their code.
- The [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) request header is now supported; you can request an upgrade of an HTTP channel to another protocol by calling `nsIHttpChannelInternal.HTTPUpgrade()`.

### Other changes

- Support for microsummaries has been removed; these were never widely used, were not very discoverable, and continuing to support them was making improvements to the Places (bookmark and history) architecture difficult.
- WebGL now supports the [`OES_texture_float`](https://www.khronos.org/registry/OpenGL/extensions/OES/OES_texture_float.txt) extension.
- The new _Scratchpad_ tool provides a handy place to experiment with JavaScript code.
- The `console.trace()` method has been added to the [Console API](/en-US/docs/Web/API/Console_API) ([Firefox bug 585956](https://bugzil.la/585956)).

## Changes for Mozilla and add-on developers

For an overview of the changes you may need to make in order to make your add-on compatible with Firefox 6, see [Updating add-ons for Firefox 6](/en-US/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> **Note:** Firefox 6 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) for details.

### JavaScript code modules

#### FileUtils.jsm

- The `openSafeFileOutputStream()` method now opens files with the `DEFER_OPEN` [behavior flag](/en-US/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) instead of attempting to open them immediately.

#### XPCOMUtils.jsm

- The new [`importRelative()`](<https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.html#importRelative()>) method lets you load one JavaScript code module from a path relative to the path of another JavaScript code module. This makes it easier to build modules that depend on each other.

### XPCOM

- [`nsCOMArray<T>`](/en-US/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) now has a [`RemoveObjectsAt()`](/en-US/docs/XPCOM_array_guide#deleting_objects) method for removing multiple objects at once from the array.

### Using the DOM from chrome

- [Using the DOM File API in chrome code](/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Although you've always been able to use the DOM File API from chrome code, the {{ domxref("File") }} constructor now supports specifying a local pathname string when used from chrome. In addition, you can also specify the file to access using the DOM File API using an `nsIFile` object.

### Interface changes

- `nsINavHistoryQueryOptions` now supports sorting in frequency order using the new `SORT_BY_FREQUENCY_ASCENDING` and `SORT_BY_FREQUENCY_DESCENDING` constants.
- `nsIFilePicker` has a new `nsIFilePicker.addToRecentDocs` attribute, which lets you indicate that the selected file should be added to the user's "recent documents" list if there is one. This attribute has no effect when in private browsing mode.
- `nsINavBookmarkObserver` methods with item ID parameters now require a GUID as well.
- `nsIPrefBranch.clearUserPref()` no longer throws an exception if the specified preference doesn't exist or has no user-set value. Instead, it does nothing.
- The `nsIMemoryReporter` interface now provides support for indicating the kind of memory being described (mapped, heap, or other).
- The `stateData` attribute of `nsISHEntry` now returns a `nsIStructuredCloneContainer`.
- `nsIURI` has a new `nsIURI.ref` attribute, which returns the reference portion (the part after the "#") of the URI. It also has new methods `nsIURI.cloneIgnoringRef()` which clones the `nsIURI` without the ref member and `nsIURI.equalsExceptRef()` which compares to another `nsIURI` ignoring the ref member.

#### New interfaces

- `mozIAsyncFavicons`
  - : A new service that lets you access the favicon service asynchronously.
- `nsIEventSource`
  - : _Details forthcoming._
- `nsIGSettingsCollection`
  - : _Details forthcoming._
- `nsIGSettingsService`
  - : _Details forthcoming._
- `nsIHttpUpgradeListener`
  - : The callback interface for handling HTTP upgrade requests via the `nsIHttpChannelInternal.HTTPUpgrade()` method.
- `nsIStructuredCloneContainer`
  - : A container for objects that have been serialized using the [structured clone algorithm](/en-US/docs/HTML/Structured_clones).
- `nsITelemetry`
  - : Implements telemetry support to allow recording of telemetry data to be used to present histograms for performance tracking purposes. See [Firefox bug 649502](https://bugzil.la/649502) and [Firefox bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : See [Firefox bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : See [Firefox bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : See [Firefox bug 640003](https://bugzil.la/640003).

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsIDOMDocumentEvent` (see [Firefox bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (see [Firefox bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (see [Firefox bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (see [Firefox bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (see [Firefox bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (see [Firefox bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (see [Firefox bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (see [Firefox bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (see [Firefox bug 649534](https://bugzil.la/649534))

### Other changes

- [Using preferences from application code](/en-US/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : A new static API is available for easily accessing preferences; this is only available to application code and can't be used by add-ons.

## See also

{{Firefox_for_developers('5')}}
