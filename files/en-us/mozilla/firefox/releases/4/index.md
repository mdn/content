---
title: Firefox 4 for developers
slug: Mozilla/Firefox/Releases/4
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 4, which shipped on March 22, 2011, enhances performance, adds more support for HTML5 and other evolving Web technologies, and further improves security. This article provides information about this release and what features are available for Web developers, add-on developers, and Gecko platform developers alike.

## Features for web developers

Gecko now uses the [HTML5](/en-US/docs/Glossary/HTML5) parser, which fixes bugs, improves interoperability, and improves performance. It also lets content embed [SVG](/en-US/docs/Web/SVG) and [MathML](/en-US/docs/Web/MathML) directly in the HTML markup.

### HTML

- [Meet the HTML5 parser](/en-US/docs/Learn/HTML)
  - : A look at what the HTML5 parser means to you, and how to embed SVG and MathML into your content inline.
- [Forms in HTML5](/en-US/docs/Learn/Forms)
  - : A look at improvements to web forms. Among these changes are added input types in the {{HTMLElement("input")}} element, data validation, and more.
- [HTML5 Sections](/en-US/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko now supports the new HTML5 elements related to sections in a document: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} and {{HTMLElement("footer")}}.
- [HTML5 hidden attribute](/en-US/docs/Web/HTML/Global_attributes#hidden)
  - : This attribute, common to all elements, is used to hide content in a webpage that is not currently relevant to the user.
- Other HTML5 elements
  - : Gecko now also supports the following new HTML5 elements: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, and {{HTMLElement("figcaption")}}.
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
  - : A guide to using the new WebSockets API for real-time communication between a web application and a server. Note that WebSockets as implemented in Firefox 4 is not compatible with the final standard, and should not generally be used.

#### Canvas improvements

The following changes were made to the {{domxref("CanvasRenderingContext2D")}} interface to bring our {{HTMLElement("canvas")}} implementation closer to being in line with the specification:

- Specifying a negative radius when calling `arc()` now correctly throws an `INDEX_SIZE_ERR` exception.
- Specifying non-finite values when calling `createLinearGradient()` and `createRadialGradient()` now throws `NOT_SUPPORTED_ERR` instead of `SYNTAX_ERR`.
- Setting `miterLimit` to a negative value no longer throws an exception; instead, it properly ignores non-positive values.
- Setting `lineWidth` to a negative value no longer throws an exception; instead, it properly ignores non-positive values.
- The `putImageData()` method now supports the optional parameters `dirtyX`, `dirtyY`, `dirtyWidth`, and `dirtyHeight`.

#### Miscellaneous HTML changes

- {{HTMLElement("textarea")}} elements are now resizable by default; you can use the {{cssxref("resize")}} CSS property to disable this.
- `canvas.getContext` and `canvas.toDataURL` no longer throw an exception when called with unrecognized arguments.
- The {{HTMLElement("canvas")}} element now supports the Mozilla-specific `mozGetAsFile()` method, which lets you obtain a memory-based file containing an image of the canvas's contents. See {{domxref("HTMLCanvasElement")}} for details.
- `canvas2dcontext.lineCap` and `canvas2dcontext.lineJoin` no longer throw an exception when set to an unrecognized value.
- `canvas2dcontext.globalCompositeOperation` no longer throws an exception when set to an unrecognized value, and no longer supports the non-standard `darker` value.
- Support for the obsolete `<spacer>` element, which was absent in all other browsers, has been removed.
- The {{HTMLElement("isindex")}} element, when created by calling {{domxref("document.createElement()")}}, is now created as a simple element with no properties or methods.
- Gecko now supports calling `click()` on {{HTMLElement("input")}} elements to open the file picker. See the [example](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) in the article [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications).
- The {{HTMLElement("input")}} element supports a new `mozactionhint` attribute, which lets you specify the label for the enter key on virtual keyboards.
- {{HTMLElement("script")}} elements inside {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, and {{HTMLElement("noframes")}} elements now get executed, which they weren't in previous versions of Firefox. This is in compliance with the specification, and matches the behavior of other browsers.

### CSS

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : New CSS transitions support is available in Firefox 4.
- Computed values in CSS
  - : Support for `-moz-calc` has been added. This lets you specify `{{cssxref("&lt;length&gt;")}}` values as mathematical expressions.
- Selector grouping
  - : Support for `:-moz-any` to group selectors and factorize combinators.
- Background image subrectangle support
  - : The {{cssxref("-moz-image-rect")}} function makes it possible to use subrectangles of images as a {{cssxref("background-image")}}.
- CSS touch properties
  - : Support for touch properties is added. Details, and real article names, to come later.
- [Using arbitrary elements as CSS backgrounds](/en-US/docs/Web/CSS/element)
  - : You can use the `-moz-element` CSS function and the {{domxref("document.mozSetImageElement()")}} DOM function to use arbitrary HTML elements as backgrounds.
- [Privacy and the :visited selector](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Changes have been made to what information can be obtained about the style of visited links using CSS selectors. This may affect some web applications.

#### New CSS properties

<table>
  <tbody>
    <tr>
      <td>Property</td>
      <td>Description</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Lets you customized advanced features of OpenType fonts.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Specifies the width in space characters of a tab character (U+0009) when
        rendering text.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Lets you control the dimensions in which an element may be resized.
      </td>
    </tr>
  </tbody>
</table>

#### New CSS pseudo-classes

<table>
  <tbody>
    <tr>
      <td>Pseudo-class</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-handler-crashed")}}</td>
      <td>Used to style elements whose plugins have crashed.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Applied to placeholder text in form fields.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Applied to the submit button on forms when one or more of the form's
        fields doesn't validate.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Applied to elements in inactive windows.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Automatically applied to {{HTMLElement("input")}} fields when
        their contents are invalid.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Automatically applied to {{HTMLElement("input")}} fields that
        don't specify the <code>required</code> attribute.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Automatically applied to {{HTMLElement("input")}} fields that
        specify the <code>required</code> attribute.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Automatically applied to {{HTMLElement("input")}} fields when
        their contents validate successfully.
      </td>
    </tr>
  </tbody>
</table>

#### New CSS pseudo-selectors

<table>
  <tbody>
    <tr>
      <td>Pseudo-selector</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-focusring")}}</td>
      <td>
        Lets you specify the appearance of an element when Gecko believes it
        should have a focus indication rendered.
      </td>
    </tr>
  </tbody>
</table>

#### New CSS functions

<table>
  <tbody>
    <tr>
      <td>Function</td>
      <td>Description</td>
    </tr>
    <tr>
      <td><code>:-moz-any</code></td>
      <td>Lets you group selectors and factorize combinators.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Lets you specify
        {{cssxref("&lt;length&gt;")}} values as
        mathematical expressions.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Lets you use an arbitrary element as a background for
        {{cssxref("background-image")}} and
        {{cssxref("background")}}.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Lets you use a subrectangle of an image as a
        {{cssxref("background-image")}} or
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Renamed CSS properties

| Old Name               | New Name                       | Notes                                                                                                                                                                        |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | The name `-moz-background-size` is no longer supported.                                                                                                                      |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | The old name is supported for a limited time to allow you time to update your sites. Rendering changes have also been made to match the latest version of the specification. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                              |

#### Miscellaneous CSS changes

- The {{cssxref("text-shadow")}} property now caps the blur radius to 300px for sanity and performance reasons.
- The {{cssxref("overflow")}} property no longer applies to table-group elements (`<thead>`, `<tbody>`, and `<tfoot>`).
- The `-moz-appearance` property now supports the `-moz-win-borderless-glass` value, which applies a borderless Aero Glass look to an element.
- The [`-moz-device-pixel-ratio`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) media feature has been added, allowing the use of the device pixels per CSS pixel ratio to be used in [Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).
- Gecko's handling of [CSS units](/en-US/docs/Web/CSS/length) has been revised to better match other browsers, and to more accurately translate absolute lengths into screen pixel counts based on the device's DPI.

### Graphics and video

- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : The developing WebGL standard is now supported by Firefox.
- [Optimizing graphics performance](/en-US/docs/Optimizing_graphics_performance)
  - : Tips and tricks for getting the most out of graphics and video performance in Firefox 4.
- [Support for WebM video](/en-US/docs/Web/Media/Formats#webm)
  - : The new open [WebM](https://www.webmproject.org/) video format is supported by Gecko 2.0.
- [SVG animation with SMIL](/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Support for SMIL animation of SVG is now available.
- Using SVG as images and as CSS backgrounds
  - : You can now use SVG with the {{htmlelement("img")}} element, as well as a CSS {{cssxref("background-image")}}.
- Media `buffered` attribute support
  - : The `buffered` attribute on {{HTMLElement("video")}} and {{HTMLElement("audio")}} elements is now supported, letting you determine which ranges of a media file have been buffered. The {{domxref("TimeRanges")}} DOM interface has been implemented to support this.
- Media `preload` attribute
  - : The `preload` attribute from the HTML5 specification has been implemented, replacing the previously-implemented (and no longer supported) `autobuffer` attribute. This affects the {{HTMLElement("video")}} and {{HTMLElement("audio")}} elements, as well as the `nsIDOMHTMLMediaElement` interface.
- SVG text positioning improvements
  - : You can now specify lists for the values of the `x`, `y`, `dx`, and `dy` properties on SVG {{SVGElement("text")}} and {{SVGElement("tspan")}} elements. This lets you control the positioning of each character in a string individually.

### DOM

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Support has been added for JavaScript typed arrays; this allows you to manipulate buffers containing raw data using native data types. Several APIs make use of this, including the [File API](/en-US/docs/Web/API/File), [WebGL](/en-US/docs/Web/API/WebGL_API), and [WebSockets](/en-US/docs/Web/API/WebSockets_API).
- Obtaining boundary rectangles for ranges
  - : The {{domxref("Range")}} object now has {{domxref("range.getClientRects()")}} and {{domxref("range.getBoundingClientRect()")}} methods.
- Capturing mouse events on arbitrary elements
  - : Support for the Internet Explorer-originated `setCapture()` and `releaseCapture()` APIs has been added. See [Firefox bug 503943](https://bugzil.la/503943).
- [Manipulating the browser history](/en-US/docs/Web/API/History_API)
  - : The existing document history object, available through the {{domxref("window.history")}} object, now supports the new HTML5 `pushState()` and `replaceState()` methods.
- [Animations using MozBeforePaint](/en-US/docs/DOM/Animations_using_MozBeforePaint)
  - : A new event has been added which, in concert with the `window.mozRequestAnimationFrame()` method and `window.mozAnimationStartTime` property, provides a way to create animations that are synchronized with one another.
- Touch and multi-touch events
  - : Support has been added for touch and multi-touch events.

#### HTML elements' DOM interfaces have changed

Several HTML elements have had their DOM interfaces changed to the ones required by the HTML5 specification, as shown below.

| Interface in Firefox 3.6                                 | Interface in Firefox 4                           | HTML Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`HTMLSpanElement`](/en-US/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, , {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/en-US/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`HTMLWBRElement`](/en-US/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Miscellaneous DOM changes

- The wrapping of a {{HTMLElement("textarea")}} element can now be controlled via the DOM, via the `wrap` DOM attribute. [Firefox bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} elements created using {{domxref("document.createElement()")}} and inserted into a document now behave according to the HTML5 specification by default. Scripts with the `src` attribute execute as soon as available (without maintaining ordering) and scripts without the `src` attribute execute synchronously. To make script-inserted scripts that have the `src` attribute execute in the insertion order, set `.async=false` on them.
- DOM {{domxref("file")}} objects now offer a `url` property.
- [FormData](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#using_formdata_objects) support for XMLHttpRequest.
- The {{domxref("element.isContentEditable")}} property has been implemented.
- The {{domxref("document.currentScript")}} property lets you determine which {{HTMLElement("script")}} element's script is currently executing. The new {{domxref("element.onbeforescriptexecute")}} and {{domxref("element.onafterscriptexecute")}} events are fired before and after a script element executes.
- Added the `mozSourceNode` property to the [`DragTransfer`](/en-US/docs/Web/API/DataTransfer) object.
- Added the [`selection.modify()`](/en-US/docs/Web/API/Selection/modify) method to the {{domxref("Selection")}} object; this lets you easily alter the current text selection or cursor position in a browser window.
- Support for the `window.directories` object and the `directories` feature for {{domxref("window.open")}}, which are not supported in any other browser, has been removed. Use `personalbar` instead. [Webkit bug 474058](https://bugzil.la/474058)
- The {{domxref("event.mozInputSource")}} property has been added to DOM user interface events; this non-standard property lets you determine the type of device that generated an event.
- The {{domxref("document.onreadystatechange")}} event has been implemented.
- The {{domxref("document.createElement")}} method no longer accepts `<` and `>` around the tag name in quirks mode.
- The {{domxref("element.setCapture()")}} and {{domxref("document.releaseCapture()")}} methods have been added, allowing elements to continue tracking mouse events even while the mouse is outside their normal tracking area after a `mousedown` event has occurred.
- The `window.mozPaintCount` property has been added; it lets you determine how many times a document has been painted. This can be useful when testing performance of your web application.
- The language token has been removed from {{domxref("window.navigator.appVersion")}} and {{domxref("window.navigator.userAgent")}}. Use {{domxref("window.navigator.language")}} or the [Accept-Language header](/en-US/docs/Web/HTTP/Content_negotiation) instead. [Webkit bug 572656](https://bugzil.la/572656)
- The [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) object now exposes the response as a JavaScript typed array as well as a string, using the Gecko-specific `mozResponseArrayBuffer` property.
- [Mouse events](/en-US/docs/Web/API/MouseEvent) now include a `mozPressure` property indicating the amount of pressure on supported pressure-sensitive input devices.
- The {{domxref("URL/createObjectURL", "window.URL.createObjectURL()")}} and {{domxref("URL/revokeObjectURL", "window.URL.revokeObjectURL()")}} methods let you create object URLs which reference local files.
- The {{domxref("DOMImplementation.createHTMLDocument()")}} method lets you create a new HTML document.
- {{domxref("Node.mozMatchesSelector()")}} now throws a `SYNTAX_ERR` exception if the specified selector string is invalid, instead of incorrectly returning `false`.
- You can now set an element's SVG properties' values using the same shorthand syntax as with CSS. For example: `element.style.fill = 'lime'`. See {{domxref("element.style")}} for details.
- The document root now has [a `privatebrowsingmode` attribute](/en-US/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent) that describes the state of private browsing mode, including an indication of whether private browsing is temporary or permanent for the session.
- The second parameter of the {{domxref("window.getComputedStyle()")}} method is now optional, as it is in every other major browser.
- The DOM [`StorageEvent`](/en-US/docs/DOM/event/StorageEvent) object now matches the latest version of the specification.
- The minimum allowed delay for the {{domxref("setTimeout()")}} method is now a preference, `dom.min_timeout_value`.
- The [`MozAfterPaint`](/en-US/docs/Gecko-Specific_DOM_Events#mozafterpaint) event is no longer sent by default, due to a potential security issue. It can be re-enabled by setting a preference.

### Security

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) is a Mozilla proposal designed to help web designers and server administrators specify how content on their websites interacts. The goal is to help detect and mitigate attacks including cross-site scripting and data injection attacks.
- [HTTP Strict Transport Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security is a security feature that lets a website tell browsers that it should only be communicated with using HTTPS, instead of using HTTP.
- [The X-FRAME-OPTIONS response header](/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  - : The X-FRAME-OPTIONS HTTP response header introduced in Internet Explorer 8 is now supported by Firefox. This allows sites to indicate whether or not their pages can be used in frames, and if so, whether or not to restrict that to the same origin.
- [User Agent string](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox) changes
  - : As a means to reduce the amount of data and entropy sent out in HTTP requests (see [Firefox bug 572650](https://bugzil.la/572650)), the crypto strength and language tokens have been removed from the user agent string.

### JavaScript

For an overview of the changes implemented in JavaScript 1.8.5, see [New in JavaScript 1.8.5](/en-US/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 will have additional adherence to the ECMAScript 5 standard.

### Developer tools

- [Using the Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : The Web Console tool is a useful debugging aid for web developers and extension developers alike.

> **Note:**The Error Console is disabled by default starting in Gecko 2.0. You can re-enable it by changing the `devtools.errorconsole.enabled` preference to `true` and restarting the browser.

## Changes for Mozilla and add-on developers

For helpful tips on updating existing extensions for Firefox 4, see [Updating extensions for Firefox 4](/en-US/docs/Extensions/Updating_extensions_for_Firefox_4). There are several key changes that break compatibility with existing add-ons, so be sure to read that article.

If you're a theme developer, you should read [Theme changes in Firefox 4](/en-US/docs/Theme_changes_in_Firefox_4) to understand some critical changes you'll need to be aware of.

### JavaScript code modules

- [Services.jsm](/en-US/docs/JavaScript_code_modules/Services.jsm)
  - : The `Services.jsm` code module provides getters that make it easy to obtain references to commonly-used services, such as the preferences service or the window mediator, among others.
- [JS-ctypes API](/en-US/docs/JavaScript_code_modules/ctypes.jsm)
  - : The JS-ctypes API makes it possible to call C-compatible foreign library functions without using XPCOM.
- [Add-ons Manager](/en-US/docs/Addons/Add-on_Manager)
  - : The new Add-ons Manager provides information about installed add-ons, support for managing them, and provides ways to install and remove add-ons.
- [PopupNotifications.jsm](/en-US/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : The new popup notifications module makes it easy to present attractive, non-modal notifications to the user. You can see how to use this API in [Using popup notifications](/en-US/docs/Using_popup_notifications).
- [Loading code modules from chrome: URLs](/en-US/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : You can now load JavaScript code modules using **chrome:** URLs, even inside JAR files.
- DownloadLastDir.jsm
  - : The [`DownloadLastDir.jsm`](/en-US/docs/JavaScript_code_modules/DownloadLastDir.jsm) code module provides the `gDownloadLastDir` global variable, which contains a string you can use to learn the path of the directory into which the last download occurred. This module handles issues related to private browsing for you.
- [Measuring performance using the PerfMeasurement.jsm code module](/en-US/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : The [`PerfMeasurement.jsm`](/en-US/docs/JavaScript_code_modules/PerfMeasurement.jsm) code module provides an API to measure CPU-level performance data in JavaScript code.

#### Miscellaneous changes to code modules

- The `NetUtil.jsm` code module now offers the `readInputStreamToString()` method, which lets you read arbitrary bytes from a stream into a string, even if the stream includes zeroes.
- The XPCOMUtils.jsm code module now offers IterSimpleEnumerator() and IterStringEnumerator() helpers to iterate over XPCOM enumerators.
- You can now [use workers in JavaScript code modules](/en-US/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM changes

- {{domxref("ChromeWorker")}}
  - : A new type of worker for privileged code; this lets you use things like [js-ctypes](/en-US/docs/js-ctypes) from workers in extensions and application code.
- [Touch events](/en-US/docs/Web/API/Touch_events)
  - : Support for (non-standard) touch events has been added; these let you track multiple fingers moving on a touch screen at the same time.

#### Other DOM changes

- The [new "document-element-inserted" notification](/en-US/docs/Observer_Notifications#documents) is sent when a document's root element is created, but before any scripts are executed on it.

### XUL

#### Changes to the tabbrowser element

Several changes were made to the [`<xul:tabbrowser>`](/en-US/docs/Mozilla/Tech/XUL/tabbrowser) element that impact extensions that interact with tabs. In addition to supporting app tabs, these changes also change the tab bar into a standard toolbar, which lets the user drag toolbar buttons into it.

- The `TabClose`, `TabSelect`, and `TabOpen` events no longer bubble up to the [`<xul:tabbrowser>`](/en-US/docs/Mozilla/Tech/XUL/tabbrowser) element (`gBrowser`). Event listeners for those events should be added to `gBrowser.tabContainer` rather than to `gBrowser` directly.
- The tab context menu is no longer an anonymous child of the [`<xul:tabbrowser>`](/en-US/docs/Mozilla/Tech/XUL/tabbrowser). It can therefore be overlaid directly with [XUL overlays](/en-US/docs/XUL_Overlays). It can also be accessed more directly in JavaScript via `gBrowser.tabContextMenu`. See [this blog post](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) for more details.
- The new [`visibleTabs`](/en-US/docs/XUL/Property/visibleTabs) property was added to let you get an array of the currently visible tabs; this lets you determine which tabs are visible in the current tab set. This is used by Firefox Panorama, for example.
- Added the new [`showOnlyTheseTabs`](/en-US/docs/Mozilla/Tech/XUL/Method/showOnlyTheseTabs) method; this is used by Firefox Panorama.
- Added the new [`getIcon`](/en-US/docs/Mozilla/Tech/XUL/Method/getIcon) method, which lets you get a tab's favicon without having to pull up the [`<xul:browser>`](/en-US/docs/Mozilla/Tech/XUL/browser) element.
- Added the new [`tabbrowser.tabs`](/en-US/docs/XUL/Property/tabbrowser.tabs) property, which lets you easily get a list of the tabs in a [`<xul:tabbrowser>`](/en-US/docs/Mozilla/Tech/XUL/tabbrowser) element.
- The new [`pinTab`](/en-US/docs/Mozilla/Tech/XUL/Method/pinTab) and [`unpinTab`](/en-US/docs/Mozilla/Tech/XUL/Method/unpinTab) methods let you pin and unpin tabs (that is, switch them between being app tabs and regular tabs).
- Added the [`getTabModalPromptBox`](/en-US/docs/Mozilla/Tech/XUL/Method/getTabModalPromptBox) method and [`tabmodalPromptShowing`](/en-US/docs/Mozilla/Tech/XUL/Attribute/tabmodalPromptShowing) attribute to the [`<xul:tabbrowser>`](/en-US/docs/Mozilla/Tech/XUL/tabbrowser) to support tab-modal alerts.

#### Changes to popups

- The [`<xul:popup>`](/en-US/docs/Mozilla/Tech/XUL/popup) element is no longer supported; you should use [`<xul:menupopup>`](/en-US/docs/Mozilla/Tech/XUL/menupopup) instead. (If you continue using `popup`, you will encounter glitches, since the element has no special meaning anymore. For example, [`<xul:menuseparator>`](/en-US/docs/Mozilla/Tech/XUL/menuseparator) can appear transparent when used in a [`<xul:popup>`](/en-US/docs/Mozilla/Tech/XUL/popup).)
- The [`<xul:menupopup>`](/en-US/docs/Mozilla/Tech/XUL/menupopup) XUL element now has a [`triggerNode`](/en-US/docs/XUL/Property/triggerNode) property, which indicates the node on which the event occurred that caused the popup to open. This also required the addition of a trigger event parameter to the [`openPopup`](/en-US/docs/Mozilla/Tech/XUL/Method/openPopup) method. Also, the [`anchorNode`](/en-US/docs/XUL/Property/anchorNode) property has been added; it returns the anchor specified when the popup was created.
- The [`<xul:panel>`](/en-US/docs/Mozilla/Tech/XUL/panel) element now offers [`fade`](/en-US/docs/Mozilla/Tech/XUL/Attribute/fade) and [`flip`](/en-US/docs/Mozilla/Tech/XUL/Attribute/flip) attributes, which are used to configure the behavior of new "arrow" style notification panels.

#### Remote XUL support removed

Remote XUL is no longer supported; this affects XUL documents being served through HTTP; also, you can no longer load XUL documents using `file://` URLs unless you create the preference `dom.allow_XUL_XBL_for_file` and set it to `true`. There is, however, a whitelist feature that can be used to allow specific domains to load remote XUL.

#### Miscellaneous XUL changes

- The `readonly` attribute now correctly works for [XBL fields](/en-US/docs/XBL/XBL_1.0_Reference/Elements#field).
- The [`<xul:resizer>`](/en-US/docs/Mozilla/Tech/XUL/resizer) element now lets you use the [`element`](/en-US/docs/Mozilla/Tech/XUL/Attribute/element) attribute to specify an element to resize, instead of resizing the window.
- The [`<xul:resizer>`](/en-US/docs/Mozilla/Tech/XUL/resizer) element now has an [`type`](/en-US/docs/Mozilla/Tech/XUL/Attribute/resizer.type) attribute that lets you specify that the resizer is for a window instead of an element, to prevent the window resizer from being drawn twice.
- The "active" attribute no longer gets set on active XUL windows. Instead, you can use the new [`:-moz-window-inactive`](/en-US/docs/Web/CSS/:-moz-window-inactive) pseudoclass in order to assign different styles to background windows.
- The [`emptytext`](/en-US/docs/Mozilla/Tech/XUL/Attribute/emptytext) attribute is now deprecated; you should use [`placeholder`](/en-US/docs/Mozilla/Tech/XUL/Attribute/placeholder) instead.
- The [`<xul:window>`](/en-US/docs/Mozilla/Tech/XUL/window) element now offers a [`accelerated`](/en-US/docs/Mozilla/Tech/XUL/Attribute/accelerated) attribute; when true, the hardware layer manager is permitted to accelerate the window.
- The [`<xul:stack>`](/en-US/docs/Mozilla/Tech/XUL/stack) element now supports the [`bottom`](/en-US/docs/Mozilla/Tech/XUL/Attribute/bottom) and [`right`](/en-US/docs/Mozilla/Tech/XUL/Attribute/right) attributes.
- Events are now fired during [`<xul:toolbox>`](/en-US/docs/Mozilla/Tech/XUL/toolbox) customization, allowing you to [detect changes to toolbars](/en-US/docs/XUL/Toolbars/Toolbar_customization_events).
- The [`alternatingbackground`](/en-US/docs/Mozilla/Tech/XUL/Attribute/alternatingbackground) attribute for [`<xul:tree>`](/en-US/docs/Mozilla/Tech/XUL/tree) elements is no longer supported; you can use the [`:-moz-tree-row`](/en-US/docs/Web/CSS/:-moz-tree-row) pseudo-class instead.
- The Bookmarks Toolbar overflow button with anonid chevronPopup is no longer anonymous; it has an ID of "PlacesChevron".
- The [`<xul:tabs>`](/en-US/docs/Mozilla/Tech/XUL/tabs) element now has a [`tabbox`](/en-US/docs/XUL/Property/tabbox) property, replacing the old `_tabbox` property, which has been deprecated (and was never documented).
- XUL [`<xul:window>`](/en-US/docs/Mozilla/Tech/XUL/window) elements now have the [`drawintitlebar`](/en-US/docs/Mozilla/Tech/XUL/Attribute/drawintitlebar) attribute; if this is `true`, the window's content area includes the title bar, allowing drawing into the title bar.
- New `TabPinned` and `TabUnpinned` events are available, allowing you to [detect when tabs are pinned and unpinned](/../../../../en-US/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab_is_pinned_or_unpinned).
- The new [`TabAttrModified` event](/en-US/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab%27s_attributes_change) is sent when a tab's [`label`](/en-US/docs/Mozilla/Tech/XUL/Attribute/label), [`crop`](/en-US/docs/Mozilla/Tech/XUL/Attribute/crop), [`busy`](/en-US/docs/Mozilla/Tech/XUL/Attribute/busy), [`image`](/en-US/docs/Mozilla/Tech/XUL/Attribute/image), or [`selected`](/en-US/docs/Mozilla/Tech/XUL/Attribute/selected) attributes change.
- [`<xul:tab>`](/en-US/docs/Mozilla/Tech/XUL/tab) elements now have a [`pinned`](/en-US/docs/Mozilla/Tech/XUL/Attribute/pinned) attribute, letting you determine whether or not a tab is currently pinned.
- The `setDirectionIndicator` class on [`<xul:tree>`](/en-US/docs/Mozilla/Tech/XUL/tree) elements hasn't done anything for some time now; now it's not used at all anymore.
- The [`<xul:window>`](/en-US/docs/Mozilla/Tech/XUL/window) element now has a [`chromemargin`](/en-US/docs/Mozilla/Tech/XUL/Attribute/chromemargin) attribute that lets you set the margin between chrome and content on each side of a window; you can use this to draw into the title bar, for example.
- The [`<xul:window>`](/en-US/docs/Mozilla/Tech/XUL/window) element now has a [`disablechrome`](/en-US/docs/Mozilla/Tech/XUL/Attribute/disablechrome) attribute; this is used to hide most of the chrome in a window when it's being used to display in-browser UI, such as `about:addons`.
- The [`<xul:window>`](/en-US/docs/Mozilla/Tech/XUL/window) element now has a [`disablefastfind`](/en-US/docs/Mozilla/Tech/XUL/Attribute/disablefastfind) attribute, which lets you disable the find bar in a window when the content doesn't support it. This is used, for example, by the add-ons panel.
- Toolbars can now be external to toolboxes, while still being considered a member of the [`<xul:toolbox>`](/en-US/docs/Mozilla/Tech/XUL/toolbox), by setting the [`toolboxid`](/en-US/docs/XUL/Property/toolboxid) property of the [`<xul:toolbar>`](/en-US/docs/Mozilla/Tech/XUL/toolbar). Also, the [`<xul:toolbox>`](/en-US/docs/Mozilla/Tech/XUL/toolbox) element now has a [`externalToolbars`](/en-US/docs/XUL/Property/externalToolbars) property, which lists all the toolbars that are considered members of the toolbox.
- Support has been added for [logging XUL templates](/en-US/docs/XUL/Template_Guide/Template_Logging) for debugging purposes.

### UI changes affecting developers

- [The add-on bar](/en-US/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : The status bar has been removed in favor of the new add-on bar. You'll need to update your extension to use this if you've been adding UI to the status bar in the past.
- [Hiding browser chrome](/en-US/docs/Hiding_browser_chrome)
  - : You can now hide the browser's chrome when it's desirable to do so; for example, `about:addons` does this.

### Storage

#### Miscellaneous storage API changes

- The `mozIStorageBindingParamsArray` interface now has a length attribute that indicates the number of `mozIStorageBindingParams` objects in the array.
- The `mozIStorageStatement.bindParameters()` method now returns an error if the specified `mozIStorageBindingParamsArray` is empty.
- Added the `mozIStorageConnection.clone()` method, which lets you clone an existing database connection.
- Added the `mozIStorageConnection.asyncClose()` method, which lets you close a database connection asynchronously; you specify a callback to be notified when the close operation is complete.
- Added the `mozIStorageConnection.setGrowthIncrement()` method, which lets you specify the amount by which a database file is grown at a time, in order to help SQLite reduce fragmentation.
- The `SQLITE_CONSTRAINT` error is now reported as `NS_ERROR_STORAGE_CONSTRAINT` instead of as `NS_ERROR_FAILURE`.

### XPCOM

In addition to the specific changes referenced below, it's important to note that there are no longer any frozen interfaces. All interfaces are now unfrozen, regardless of what the documentation may say. We'll update the documentation over time.

- [XPCOM changes in Gecko 2.0](/en-US/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details about changes to XPCOM that impact compatibility in Firefox 4.
- [Components.utils.getGlobalForObject()](/en-US/docs/Components.utils.getGlobalForObject)
  - : This new method returns the global object with which an object is associated; this replaces a common use case of the now-removed `__parent__`.

### Places

- Places query results may now be observed by multiple observers, and queries may be executed asynchronously. This means there have been some changes to the `nsINavHistoryResult`, `nsINavHistoryQueryOptions`, and `nsINavHistoryContainerResultNode` interfaces. More significantly, the `nsINavHistoryResultViewer` interface has been renamed to `nsINavHistoryResultObserver`.
- Some [new notifications](/en-US/docs/Observer_Notifications#places) have been added to enable the browser to track the shutdown process of the Places service more reliably. Of these, most are for internal use only, but the `places-connection-closed` notification is available to know when the Places service has completed its shutdown process.
- The array size output parameter on several Places methods is now optional.
- Support for `<menupopup type="places">` has been removed. Instead, you need to create and populate a menu with Places information manually, instead of having it done for you. See [Displaying Places information using views: Menu view](/en-US/docs/Displaying_Places_information_using_views#menu_view) for details.

### Interface changes

- The `nsIDocShell` and `nsIWebBrowser` interfaces now have a new `isActive` attribute, which is used to allow optimization of code paths for documents that aren't currently visible.
- The `nsIMemory` method `nsIMemory.isLowMemory()` has been deprecated. You should use ["memory-pressure" notifications](/en-US/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) to watch for low memory situations instead.
- The API for handling redirects on HTTP channels has changed to let them be processed asynchronously. Any code that implements redirect handling using `nsIChannelEventSink.onChannelRedirect()` needs to be updated to use `nsIChannelEventSink.asyncOnChannelRedirect()` instead. This accepts a callback handler that must be called when a redirect is successfully completed.
- The `nsINavHistoryResultObserver.batching()` method has been added, providing a way to group Places operations into batches, reducing the number of update notifications delivered, which can improve performance when observers are performing relatively involved tasks (such as refreshing views).
- The long-obsolete `nsIPref` interface has finally been removed. If you haven't already switched to `nsIPrefService`, now is the time.
- The `nsISessionStore` and `nsISessionStartup` interfaces received changes to support on-demand session restore. See the `nsISessionStore.restoreLastSession()` method.
- The `nsIPrincipal` methods `nsIPrincipal.subsumes()` and `nsIPrincipal.checkMayLoad()`, as well as its `origin`, `csp`, and `URI` attributes, are now available from script; previously they were only available from native code.
- The `nsIPrompt` interface now supports tab-modal alerts; see [Using tab-modal prompts](/en-US/docs/Using_tab-modal_prompts) for details.
- The `nsIEffectiveTLDService.getPublicSuffixFromHost()` method now correctly rejects host name starting with a period (".").
- The `mozIJSSubScriptLoader.loadSubScript()` method now has an optional argument allowing you to specify the character set of the script; if one is not provided, ASCII is assumed (as was always assumed previously).
- The `nsIAccessProxy` interface has been removed. It was an implementation detail that has outlived its usefulness.
- The `nsIContentView` and `nsIContentViewManager` interfaces have been added for Firefox Mobile. It represents a scrollable content view whose contents are actually drawn by a separate process.
- The `nsIDiskCacheStreamInternal` interface has been added.
- The `nsIExternalURLHandlerService` interface has been added.
- The `nsISyncJPAKE` interface has been added. See [Firefox bug 601645](https://bugzil.la/601645).
- The `nsIINIParserWriter` interface was added in Gecko 1.9.2.4 to support writing to INI files.

### Memory management

- [Infallible memory allocation](/en-US/docs/Infallible_memory_allocation)
  - : Mozilla now provides infallible memory allocators that are guaranteed not to return null. You should read this article to learn how they work and how to explicitly request fallible versus infallible memory allocation.

### Other changes

- Most of the resources contained within Firefox have been combined into a single JAR archive, `omni.jar`, which improves startup performance by reducing I/O. For details, read [About omni.jar](/en-US/docs/About_omni.jar).
- The `accessibility.disablecache` preference is no longer supported; it was only exposed for debugging purposes and is no longer used.
- Addons whose GUID changes from one version to another can now be updated properly.
- As a side effect of the removal of platform-specific directories in add-on bundles, you can no longer provide different default preferences for each platform.
- By default, [extensions are no longer unpacked when they are installed](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), but are instead run directly from the XPI file. Extensions can use the [unpack](/en-US/docs/Install_Manifests#unpack) property in the [install manifest](/en-US/docs/Install_Manifests) to choose the old behavior. Extensions that use binary components, DLLs loaded using [js-ctypes](/en-US/docs/js-ctypes), [search plugins](/en-US/docs/Web/OpenSearch), dictionaries, and window icons must specify that they need to be unpacked. Extensions that [create SQLite database](/en-US/docs/XUL_School/Local_Storage#sqlite), or do copy things from the filesystem relatively to the extension's directory, may also need to change their code.
- You may now include extensions that [automatically get installed at application startup](/en-US/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) within a customized Firefox.

## Other changes

- Only the root chrome.manifest file is loaded
  - : Only the root `chrome.manifest` file is loaded now; if you need secondary manifest files to be loaded, you can use the [`manifest`](/en-US/docs/Chrome_Registration#manifest) command in your root `chrome.manifest` to load them.
- Gopher support removed
  - : The Gopher protocol is no longer supported natively. Continued support is available via the [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) extension.
- [Content process event handling](/en-US/docs/The_message_manager)
  - : In order to support out-of-process plugins and other multiple-process features, a new API has been introduced to support sending messages across processes.
- [Bootstrapped extensions](/en-US/docs/Extensions/Bootstrapped_extensions)
  - : You can now create extensions that can be installed, uninstalled, and upgraded (or downgraded) without requiring a browser restart.
- Default plugin removed
  - : The default plugin has been removed. The application plugins folder has also been removed by default, however support for installing plugins via this folder still exists. See [Firefox bug 533891](https://bugzil.la/533891).
- Extension Manager replaced by Addon Manager
  - : `nsIExtensionManager` has been replaced by [AddonManager](/en-US/docs/Addons/Add-on_Manager/AddonManager).
- Child HWNDs no longer used
  - : Firefox no longer creates child HWNDs for its internal use on Windows. If you've written an extension that uses native code to manipulate these HWNDs, your extension will not work on Firefox 4. You'll need to either stop using HWNDs or wrap your code that relies on HWNDs in an [NPAPI](/en-US/docs/NPAPI) plugin. That's a lot of work, so if you can avoid using HWNDs directly, you should.
- Gesture changes
  - : The three finger up and down swipe gestures on trackpads have been changed to, by default, open and close Firefox Panorama view (neé TabCandy). To change these back to the previous scroll-to-top and scroll-to-bottom commands, open about:config and set `browser.gesture.swipe.down` to `cmd_scrollBottom` and `browser.gesture.swipe.up` to `cmd_scrollTop`.

## See also

{{Firefox_for_developers('3.6')}}
