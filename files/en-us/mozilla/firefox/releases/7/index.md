---
title: Firefox 7 for developers
slug: Mozilla/Firefox/Releases/7
tags:
  - Firefox
  - Firefox 7
  - Gecko 7
---
{{FirefoxSidebar}}

Firefox 7 shipped on September 27, 2011. This article provides information about the changes that affect developers -- both of web content and of Firefox add-ons.

## Changes for web developers

### HTML

- The {{ domxref("HTMLHeadElement") }} `profile` property has been removed, this property has been deprecated since {{ gecko("2.0") }}.
- The {{ domxref("HTMLImageElement") }} `x` and `y` properties have been removed.
- The {{ domxref("HTMLSelectElement") }} `add()` method `before` parameter is now optional.
- The {{ HTMLElement("body") }} element's {{ htmlattrxref("background", "body") }} attribute is no longer resolved as a URI; this is in compliance with the current HTML specification.
- The {{ HTMLElement("option") }} element's {{ htmlattrxref("label", "option") }} attribute now reflects the value of the element's text content if the attribute isn't specified.

#### Canvas

- As part of the [Azure project](https://blog.mozilla.com/joe/2011/04/26/introducing-the-azure-project/) the Direct2D Azure Backend [has been implemented](https://bugzilla.mozilla.org/show_bug.cgi?id=651858) and will significantly improve the performance of the 2D canvas.
- Specifying invalid values when calling `setTransform()`, `bezierCurveTo()`, or `arcTo()` no longer throws an exception; these calls are now correctly silently ignored.
- The [`isPointInPath()`](</en-US/docs/Web/API/CanvasRenderingContext2D#ispointinpath()>) method now correctly considers the transformation matrix when comparing the specified point to the current path.
- Calling `strokeRect()` with a zero width and height now correctly does nothing.
- Calling [`drawImage()`](</en-US/docs/Web/API/CanvasRenderingContext2D#drawimage()>) with a zero width or height {{ HTMLElement("canvas") }} now throws `INVALID_STATE_ERR`.
- Calling [`drawImage()`](</en-US/docs/Web/API/CanvasRenderingContext2D#drawimage()>) with non-finite coordinates no longer throws an exception.
- `toDataURL()` method now accepts a second argument to control JPEG quality.
- Support for the non-standard `globalCompositeOperation` operations `clear` and `over` has been removed.
- [Shadows](/en-US/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows) are now only drawn for `source-over` compositing operations.
- You can now configure the fill rule used by canvas by setting the `mozFillRule` [attribute](/en-US/docs/Web/API/CanvasRenderingContext2D#attributes) on the context.
- Support for the experimental `mozDash`, `mozDashOffset`, `mozCurrentTransform` and `mozCurrentTransformInverse` attributes has been added.
- Support for the non-standard methods `mozDrawText()`, `mozMeasureText()`, `mozPathText()` and `mozTextAlongPath()` has been removed.

### CSS

- {{ cssxref("text-overflow") }} is now supported.
- The {{ cssxref("-moz-orient", "-moz-orient") }} property has been fixed so that {{ HTMLElement("progress") }} elements that are vertically oriented have appropriate default dimensions.

### MathML

- XLink href has been restored and the MathML3 `href` attribute is now supported. Developers are encouraged to move to the latter syntax.
- Support for the `voffset` attribute on {{ MathMLElement("mpadded") }} elements has been added and behavior of `lspace` attribute has been fixed.
- The top-level {{ MathMLElement("math") }} element now accepts any attributes of the {{ MathMLElement("mstyle") }} element.
- Support for [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/) fonts has been added.
- The `medium` line thickness of fraction bars in {{ MathMLElement("mfrac") }} elements has been corrected to match the default thickness.
- [Names for negative spaces](</en-US/docs/Web/MathML/Attribute/Values#constants_(namedspaces)>) are now supported.

### DOM

- The {{ domxref("File") }} interface's non-standard methods `getAsBinary()`, `getAsDataURL()`, and `getAsText()` have been removed as well as the non-standard properties `fileName` and `fileSize` ({{bug("661876")}}).
- The {{ domxref("FormData", "FormData") }} interface no longer reports the filename as an empty string when sending the `Content-Disposition` HTTP header if the data was set using a {{ domxref("Blob") }}. This fixes errors that were happening with some servers.
- The {{ domxref("element.dir") }} attribute now always returns its result as all lower-case, as required by the HTML specification.
- The {{ domxref("FileReader") }} `readAsArrayBuffer()` method is now implemented.
- {{ domxref("document.createEntityReference") }} has been removed. It was never properly implemented and is not implemented in most other browsers.
- `document.normalizeDocument` has been removed. Use {{ domxref("Node.normalize") }} instead.
- {{ domxref("DOMTokenList.item") }} now returns `undefined` if the `index` is out of bounds, previously it returned `null`.
- `Node.getFeature` has been removed.
- The `HTMLInsElement` and `HTMLDelElement` interfaces have been removed, since the {{ HTMLElement("ins") }} and {{ HTMLElement("del") }} elements actually use the {{ domxref("HTMLModElement") }} interface.
- In a effort to conform to the upcoming [DOM4](https://www.w3.org/TR/dom/) specification where {{ domxref("Attr") }} do not inherit from {{ domxref("Node") }} anymore (it did in DOM Core 1, 2 and 3), many {{ domxref("Node") }} properties and methods on the {{ domxref("Attr") }} interface are [now reporting warnings](/en-US/docs/Web/API/Attr#deprecated_properties_and_methods) as we work toward removing them in a later version.
- Added support for the {{ domxref("window.ondeviceorientation") }} and {{ domxref("window.ondevicemotion") }} properties on {{ domxref("window") }} objects.
- {{ domxref("window.resizeTo") }}, {{ domxref("window.resizeBy") }}, {{ domxref("window.moveTo") }} , and {{ domxref("window.moveBy") }} no longer apply to the main window.

### JavaScript

- The [`Function.arity`](/en-US/docs/JavaScript/Reference/Global_Objects/Function/arity) property has been removed; use [`Function.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) instead.

### WebSockets

- The `network.websocket.max-connections` preference is used to determine the maximum number of WebSocket connections that can be open at a time. The default value is 200.
- The underlying WebSocket protocol version 8 (as specified by [IETF draft 10](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10)) is used now instead of the version 7 protocol used by Firefox 6.
- The WebSocket API is now available on Firefox Mobile.

### console API

- Message logged with `console.log` while the [web console](/en-US/docs/Tools/Web_Console) isn't open are still logged, although they aren't displayed when the web console is opened.

### Web timing

- Initial implementation of the [Navigation Timing](/en-US/docs/Web/API/Navigation_timing_API) specification which provides data that can be used to measure the performance of a website.

### XML

- In addition to the previously supported `text/xsl`, XSLT stylesheets can now use the official internet media (MIME) type `application/xslt+xml` (in the [stylesheet processing instruction](https://www.w3.org/TR/xml-stylesheet/) or the [HTTP Link header field](https://datatracker.ietf.org/doc/html/rfc5988)).

## Changes for Mozilla and add-on developers

These changes affect add-on developers as well as developers working on or with Mozilla code itself. Add-on developers should see [Updating extensions for Firefox 7](/en-US/docs/Mozilla/Firefox/Updating_extensions_for_Firefox_7) for additional information.

> **Note:** Firefox 7 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) for details.

### JavaScript code modules

#### FileUtils.jsm

- New method `openFileOutputStream()` opens a file output stream, the non-safe variant, for writing.

#### AddonManager.jsm

- The Add-on Manager has new methods for managing lists of add-ons that changed during applications startup: [`AddonManager.addStartupChange()`](</en-US/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager#addstartupchange()>), [`AddonManager.removeStartupChange()`](</en-US/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager#removestartupchange()>), and [`AddonManager.getStartupChanges()`](</en-US/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager#getstartupchanges()>).

### XUL

- {{ xulelem("tree") }} elements can now persist the state of disclosure triangles if the nodes referenced by {{ XULAttr("datasources") }} all have unique IDs specified by "id" attributes.
- {{ xulelem("panel") }} elements can now be configured to [let the user drag them by clicking anywhere on their background](/en-US/docs/XUL/PopupGuide/Panels#Letting_panels_be_dragged_by_grabbing_the_background) by using the new {{ XULAttr("backdrag") }} attribute.

### XPCOM

- The new [`Components.utils.schedulePreciseGC()`](/en-US/docs/Components.utils.schedulePreciseGC) method lets you schedule a thorough garbage collection cycle to occur at some point in the future when no JavaScript code is executing; a callback is executed once collection is complete.
- The [`Components.utils.unload()`](/en-US/docs/Components.utils.unload) method lets you unload JavaScript code modules previously loaded by calling [`Components.utils.load()`](/en-US/docs/Components.utils.load).

### Memory reporters

Support has been added for multi-reporters; that is, memory reporters that gather data on request and call a callback for each generated result. See {{ interface("nsIMemoryMultiReporter") }} and {{ interface("nsIMemoryMultiReporterCallback") }} for the relevant interfaces, as well as the {{ ifmethod("nsIMemoryReporterManager", "registerMultiReporter") }} and {{ ifmethod("nsIMemoryReporterManager", "unregisterMultiReporter") }} methods.

### User experience changes

- Extension options can now be [displayed inside the Add-on Manager](/en-US/docs/Extensions/Inline_Options) for both restartless and traditional extensions.
- The destination of downloads is now remembered on a site-by-site basis. This data can be accessed using [DownloadLastDir.jsm](/en-US/docs/JavaScript_code_modules/DownloadLastDir.jsm).

### Changes to the build system

- The ActiveX embedding API is no longer built and support has been removed from the build system. Supporting interfaces have also been removed; see {{ anch("Removed interfaces") }}.
- You should no longer specify `-Zc:wchar_t-` when building on Windows. See the [updated Build documentation](/en-US/docs/Mozilla/Developer_guide/Build_Instructions#build_and_install) for details.

### Interface changes

- {{ interface("nsISocketTransport") }} now offers a new connection flag: `DISABLE_IPV6`; this causes a socket to only attempt to connect to IPv4 addresses, ignoring any available IPv6 addresses. In addition, {{ interface("nsIDNSService") }} now offers a new resolve flag: `RESOLVE_DISABLE_IPV6`; this causes domain name resolution to only consider IPv4 hosts, ignoring any available IPv6 addresses. These changes are used to implement the ["happy eyeballs" strategy](https://datatracker.ietf.org/doc/html/draft-wing-http-new-tech-00) for improving response time when attempting to connect on hosts that support both IPv4 and IPv6 (especially those that have broken IPv6 connectivity).
- {{ interface("inIDOMUtils") }} has two new methods, {{ ifmethod("inIDOMUtils","getChildrenForNode") }} which returns a list of child nodes of a node and {{ ifmethod("inIDOMUtils","getUsedFontFaces") }} which returns a list of font faces used in a range.
- The `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` interface has been merged into the {{ interface("nsIMarkupDocumentViewer") }} interface.
- The `nsIDOMWindow2` interface has been merged into the {{ interface("nsIDOMWindow") }} interface.
- The `nsIDOMWindow_2_0_BRANCH` interface has been merged into the {{ interface("nsIDOMWindowInternal") }} interface.
- {{ interface("nsINavHistoryObserver") }} methods with URI parameters now require a GUID as well.
- The `nsISHistory_2_0_BRANCH` interface has been merged into the {{ interface("nsISHistory") }} interface.
- {{ interface("nsITelemetry") }} has a new method, {{ ifmethod("nsITelemetry","getHistogramById") }} which returns a histogram by its ID, and a new attribute, `canRecord` which when set to `false` disables recording of telemetry statistics. Telemetry statistics are no longer recorded when in Private Browsing Mode. (see {{ bug("661574") }} and {{ bug("661573") }}) Telemetry histograms defined with {{ ifmethod("nsITelemetry","newHistogram") }} will not be reported in the telemetry ping.
- The {{ interface("nsIMemoryReporter") }} interface has been substantially changed; if you use it, you will need to make some adjustments to your code.
- {{ interface("nsIXMLHttpRequest") }}, headers set by {{ ifmethod("nsIXMLHttpRequest","setRequestHeader") }} are sent with the request when following a redirect. Previously these headers would not be sent.
- {{ interface("nsIDocShell") }} has a new `allowWindowControl` attribute. If `true`, the docshell's content is allowed to control the window (that is, to move or resize the window).
- The `nsIThreadInternal2` interface has been merged into the {{ interface("nsIThreadInternal") }} interface.

#### New interfaces

- {{ interface("nsIDOMFontFace") }}
  - : Describes a single font face.
- {{ interface("nsIDOMFontFaceList") }}
  - : Describes a list of font faces, each represented by {{ interface("nsIDOMFontFace") }}.

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsIDOM3Attr`
- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `nsIDOM3Text`
- `nsIDOMDocumentStyle`
- `nsIDOMNSDocument`
- `nsIDOMNSFeatureFactory`
- {{ interface("nsIDOMNSHTMLDocument") }}
- `nsIDOMNSHTMLFormElement`
- `nsIDOMNSHTMLHRElement`
- `nsIDOMNSHTMLTextAreaElement`

The following interfaces were removed as part of the removal of the ActiveX embedding API:

- `DITestScriptHelper`
- `DWebBrowserEvents`
- `DWebBrowserEvents2`
- {{ interface("IDispatch") }}
- `IMozControlBridge`
- `IMozPluginHostCtrl`
- `IWebBrowser`
- `IWebBrowser2`
- `IWebBrowserApp`
- `IXMLDocument`
- `IXMLElement`
- `IXMLElementCollection`
- `IXMLError`
- `nsIActiveXSecurityPolicy`
- {{ interface("nsIDispatchSupport") }}
- `nsIMozAxPlugin`
- `nsIScriptEventHandler`
- `nsIScriptEventManager`

### Other Changes

- The structure of the library window (`places.xul`) [has been cleaned up](https://bugzilla.mozilla.org/show_bug.cgi?id=588027). This [may break extensions](https://bugzilla.mozilla.org/show_bug.cgi?id=677417) and themes.
- The look of the print preview window [has been modernized](https://bugzilla.mozilla.org/show_bug.cgi?id=663028) and theme authors are encouraged to style it using the CSS pseudo-elements {{ cssxref("::-moz-page") }}, {{ cssxref("::-moz-page-sequence") }} and {{ cssxref("::-moz-scrolled-page-sequence") }}.

## See also

{{Firefox_for_developers('6')}}
