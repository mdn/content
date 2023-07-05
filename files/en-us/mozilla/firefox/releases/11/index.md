---
title: Firefox 11 for developers
slug: Mozilla/Firefox/Releases/11
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 11 shipped on March 13, 2012. This article provides information about the new features and key bugs fixed in this release, as well as links to more detailed documentation for both web developers and add-on developers.

## Changes for Web developers

### HTML

- The attributes `muted` and `loop` on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements have been implemented.

### DOM

- The {{domxref("element.outerHTML")}} property is now supported on HTML elements.
- [`XMLHttpRequest` supports HTML parsing](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest).
- Removed support for using the {{domxref("XMLHttpRequest")}} `responseType` and `withCredentials` attributes when performing synchronous requests. Attempting to do so throws an `NS_ERROR_DOM_INVALID_ACCESS_ERR` exception. This change has been proposed to the W3C for standardization.
- The new {{domxref("window.navigator.mozVibrate()")}} method lets you vibrate the device where supported; this is implemented as `mozVibrate()` on Gecko.
- {{domxref("window.navigator.mozApps")}} returns an [`Apps`](/en-US/docs/DOM/Apps) object you can use to install and manage [open web applications](/en-US/docs/Web/Progressive_web_apps).
- `MozBeforePaint` events are no longer fired. {{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} consumers who used these should pass a callback function instead.
- Support for canceling animation frame requests has been added; {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} now returns a request ID value, which you can pass to {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} to cancel the request.
- Several {{domxref("Event")}} constructors (`Event`, HTML events, `UIEvent`, and `MouseEvent`) introduced in DOM4 specifications are now supported.
- The {{domxref("window.navigator.mozBattery", "Battery API")}} is now enabled by default.
- Support for the [`defaultMuted`](/en-US/docs/Web/API/HTMLMediaElement), [`loop`](/en-US/docs/Web/API/HTMLMediaElement) and [`muted`](/en-US/docs/Web/API/HTMLMediaElement) properties on [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement) has been added.
- Calling {{domxref("Document/exitFullscreen")}} now restores the previously fullscreen element if some other element was in fullscreen mode when the current element's {{domxref("Element/requestFullScreen")}} method was called.
- The {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} method no longer supports a no-argument form. This form was not used much and is unlikely to become part of the standard.
- SVG-as-an-image can now be drawn into a canvas without [tainting the canvas](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- The non-standard `countryCode` property of the `GeoPositionAddress` interface has been removed; see `nsIDOMGeoPositionAddress`.
- [Server-sent events](/en-US/docs/Web/API/Server-sent_events) now support [CORS](/en-US/docs/Web/HTTP/CORS).
- In the past, when the user followed a link, the values set on the {{domxref("window.navigator")}} object were retained by the new page. Now a new `navigator` object is created for the new page. This makes Firefox behave like all other browsers.

### CSS

- the [`text-size-adjust`](/en-US/docs/Web/CSS/text-size-adjust) property is now supported
- [CSS3](/en-US/docs/CSS/CSS3) [Conditional Rules](/en-US/docs/CSS/CSS3#conditional_rules) are now better supported: nested statements can now be added to [@media](/en-US/docs/Web/CSS/@media), [@-moz-document](/en-US/docs/Web/CSS/@document). (See [CSS Syntax](/en-US/docs/Web/CSS/Syntax) and [CSS at-rules](/en-US/docs/Web/CSS/At-rule)).

### JavaScript

_No change._

### SVG

- The {{domxref("SVGSVGElement")}} DOM interface now support the `getElementById` method.

### WebSocket

- [WebSocket](/en-US/docs/Web/API/WebSockets_API) API now supports binary messages (see [Firefox bug 676439](https://bugzil.la/676439)).
- Both the protocol and the API has been updated to the latest draft of the specification and the API has been unprefixed (see [Firefox bug 666349](https://bugzil.la/666349) and [Firefox bug 695635](https://bugzil.la/695635)).
- Previously, messages sent and received using WebSockets in Firefox were limited to 16 MB in size; they may now be up to 2 GB (although memory capacity limitations may prevent them from being that large, Firefox supports it).

### IndexedDB

- The support for [IDBFactory.cmp()](/en-US/docs/Web/API/IDBFactory#cmp%28%29) has been added.
- An [IndexedDB key](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key) can also be of one of the following types: Date, Arrays and Float (and not only String and Integer).
- From now on, transactions are started when the transaction is created, not when the first request is placed; for example consider this:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  After the code is executed the object store should contain the value "2", since `trans2` should run after `trans1`.

- Previous to Firefox 11, object store {{domxref("IDBObjectStore.autoIncrement","autoIncrement")}} counters were shared across all object stores for a given database, whereas per spec each object store should have a separate counter. This is now fixed.
- It is now possible to {{domxref("IDBObjectStore.createIndex","create an index")}} with an empty `keyPath`.
- It is now possible to create a multi-entry index (see [`IDBObjectStore.createIndex` parameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- The {{domxref("IDBTransaction/abort_event", "abort")}} event now bubbles; in addition, an {{domxref("IDBDatabase.onabort")}} handler has been added.
- IndexedDB can now be used to store files/blobs.
- IndexedDB now supports complex key paths, e.g. `foo.bar` to access property `bar` of property `foo`.
- IndexedDB can now accept an array as a `keyPath` when creating an {{domxref("IDBDatabase.createObjectStore()","object store")}} or an {{domxref("IDBObjectStore.createIndex()","index")}} ([Firefox bug 694138](https://bugzil.la/694138).)

### Network

- The change in Firefox 8 that removed support for double quote characters as delimiters for {{rfc(2231)}} and {{rfc(5987)}} has been reverted, as this broke some sites, including Outlook Web Access.
- The user agent string in HTTP headers now includes an identifier that [lets the server know if the Firefox accessing it is a phone or a tablet](/en-US/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Developer tools

- The [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) now offers a [3D view](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) if your system supports [WebGL](/en-US/docs/Web/API/WebGL_API).
- The new [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) provides a free-form way to edit and compose CSS style sheets in real-time.
- The [View Source feature](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) now uses the new HTML5 parser instead of the old HTML parser.

## Changes for Mozilla and add-on developers

### JavaScript code modules

#### NetUtil.jsm

- [`readInputStreamToString()`](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/NetUtil.html) has a new, optional, parameter to configure the character set interpretation while reading the input stream.

#### New JavaScript code modules

- [`source-editor.jsm`](/en-US/docs/JavaScript_code_modules/source-editor.jsm)
  - : Provides a convenient, easy-to-use source code editor that you can use in your add-ons. This is the same editor used by _Scratchpad_ and other developer tools integrated into Firefox.

### Interface changes

- The `mozIAsyncHistory` interface has a new method `mozIAsyncHistory.isURIVisited()` to check if a URI has been visited.
- A new interface `mozIVisitStatusCallback` has been added to provide callback handling functionality for `mozIAsyncHistory.isURIVisited()`.
- The `nsIMacDockSupport` interface now supports adding a text badge to the application's icon in the Dock using its new `badgeText` attribute.
- In the `nsINavHistoryResultObserver` interface, you now need to implement `nsINavHistoryResultObserver.containerStateChanged()` instead of the obsolete `containerOpened()` and `containerClosed()` methods.

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsICharsetResolver`
- `nsIDOMNSElement`, see [bug707576](https://bugzil.la/707576), use `nsIDOMElement` instead.

### Theme-related changes

- The `omni.jar` file is now called [`omni.ja`](</en-US/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Preference changes

- `ui.tooltipDelay`
  - : Specifies the delay, in milliseconds, between the mouse cursor beginning to hover and the display of a tooltip.

### Build system changes

- The `--enable-tracejit` build option has been removed.

### Other changes

- Add-ons that have not been updated in a long time are no longer assumed to be compatible by default; this is currently add-ons that indicate a `maxVersion` of 4.0.

## See also

{{Firefox_for_developers('10')}}
