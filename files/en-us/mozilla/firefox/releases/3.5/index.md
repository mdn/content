---
title: Firefox 3.5 for developers
slug: Mozilla/Firefox/Releases/3.5
tags:
  - CSS
  - Firefox
  - Firefox 3.5
  - Gecko
  - Gecko 1.9.1
  - HTML
  - JavaScript
  - Storage
  - XUL
---
{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-US/firefox/3.5/releasenotes/) (_released June 30, 2009)_ introduces a number of new features, as well as additional and improved support for a wide variety of web standards.  This article offers an extensive list, with links to articles covering the major improvements.

## New developer features in Firefox 3.5

### For web site and application developers

#### HTML 5 support

- [Using audio and video](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Firefox 3.5 adds support for the HTML 5 [`audio`](/en-US/docs/Web/HTML/Element/audio) and [`video`](/en-US/docs/Web/HTML/Element/video) elements.
- [Offline resources in Firefox](/en-US/docs/Web/HTML/Using_the_application_cache)
  - : Firefox 3.5 now fully supports the HTML 5 offline resource specification.
- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - : The HTML 5 drag and drop API allows support for dragging and dropping items within and between web sites.  This also provides a simpler API for use by extensions and Mozilla-based applications.

#### Newly-supported CSS features

- [Downloadable fonts support](/en-US/docs/Web/CSS/@font-face)
  - : The new {{ cssxref("@font-face") }} @rule lets web pages provide downloadable fonts, so that sites can be rendered exactly as the page author expects.
- [CSS media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : Firefox 3.5 now supports CSS media queries, which enhance support for media-dependent style sheets.
- {{ cssxref("::before") }} and {{ cssxref("::after") }} updated to CSS 2.1
  - : The `::before` and `::after` pseudo-elements have been updated to full CSS 2.1 support, adding support for the `position`, `float`, `list-style-*`, and some `display` properties.
- `ch` units for length
  - : The `ch` unit can now be used anywhere that accepts a [unit of length](/en-US/docs/Web/CSS/length#units).`1ch` is the width of the "0" (zero) character.
- {{ cssxref("opacity") }}
  - : The`-moz-opacity` Mozilla extension to CSS has been removed in favor of the standard `opacity` property.
- {{ cssxref("text-shadow") }}
  - : The `text-shadow` property, which allows web content to specify shadow effects to apply to text and text decorations, is now supported.
- {{ cssxref("overflow-wrap") }}
  - : This newly-supported property lets content specify whether or not lines may be broken within words in order to prevent overflow when an otherwise unbreakable string is too long to fit on one line.
- `white-space` property supports the `pre-line` value
  - : The {{ cssxref("white-space") }} property now accepts the `pre-line` value.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 adds support for these Mozilla extensions to CSS.

- The {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} color value
  - : This new color value represents the user's system's default hyperlink color.
- The {{ cssxref("-moz-window-shadow") }} property and the {{ cssxref(":-moz-system-metric(mac-graphite-theme)") }} pseudo-class
  - : These new CSS features were added to facilitate theming.
- New values for `-moz-appearance`
  - : The `-moz-win-glass` and `-moz-mac-unified-toolbar` values have been added to `-moz-appearance`.
- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
  - : Firefox 3.5 supports CSS transforms.  See {{ cssxref("transform", "-moz-transform") }} and {{ cssxref("transform-origin", "-moz-transform-origin") }} for details.
- {{ cssxref(":nth-child") }}

  {{ cssxref(":nth-last-child") }}

  {{ cssxref(":nth-of-type") }}

  {{ cssxref(":nth-last-of-type") }}

  {{ cssxref(":first-of-type") }}

  {{ cssxref(":last-of-type") }}

  {{ cssxref(":only-of-type") }}

  - : These selectors are all newly-supported in Firefox 3.5.

#### New DOM features

- [localStorage](/en-US/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 adds support for the Web Storage `localStorage` property, which provides a way for web applications to store data locally on the client's computer.
- [Using web workers](/en-US/Using_web_workers)
  - : Firefox 3.5 supports web workers to allow easy multi-threading support in web applications.
- [Using geolocation](/en-US/Using_geolocation)
  - : Firefox 3.5 supports the Geolocation API, which allows web applications to obtain information about the user's current location if a provider for that information is installed and enabled.
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  - : The selectors API allows querying a document to locate the elements that match a given selection rule.
- [Mouse gesture events](/en-US/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 supports mouse gesture events such as trackpad swipes.
- [The `NodeIterator` object](/en-US/docs/Web/API/NodeIterator)
  - : The `NodeIterator` object provides support for iterating over the list of the nodes in a DOM subtree.
- [The MozAfterPaint event](/en-US/docs/Gecko-Specific_DOM_Events#MozAfterPaint)
  - : This new DOM event is sent after painting updates in windows.
- [The MozMousePixelScroll event](/en-US/docs/Gecko-Specific_DOM_Events#MozMousePixelScroll)
  - : This new DOM event allows detection of pixel-based mouse scroll wheel events instead of line-based scroll events.

#### New JavaScript features

- [New in JavaScript 1.8.1](/en-US/docs/JavaScript/New_in_JavaScript/1.8.1)
  - : An overview of all the changes in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : This new method returns the prototype of a specified object.
- [Using native JSON](/en-US/Using_native_JSON)
  - : Firefox 3.5 has native support for [JSON](/en-US/docs/Glossary/JSON).
- New trim methods on the String object
  - : The [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object now has [`trim()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim), [`trimLeft()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart), and [`trimRight()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) methods.

#### Networking

- [Cross-site access controls for HTTP](/en-US/docs/Web/HTTP_access_control)
  - : In Firefox 3.5, it's now possible for HTTP requests, including those made by [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest), to work across domains if the server supports it.
- [Progress events for ](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)[`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)
  - : Progress events are now offered to enable extensions to monitor the progress of requests.
- Improved Synchronous `XMLHttpRequest` support
  - : [DOM Timeout](https://bugzilla.mozilla.org/show_bug.cgi?id=340345) and [Input Events](https://bugzilla.mozilla.org/show_bug.cgi?id=333198) are now suppressed during a synchronous `XMLHttpRequest`.
- [Controlling DNS prefetching](/en-US/Controlling_DNS_prefetching)
  - : Firefox 3.5 provides DNS prefetching, whereby it performs domain name resolution ahead of time for links included in the current page, in order to save time when links are actually clicked.  This article describes how you can tune your web site to disable prefetching, or to adjust how prefetching operates.

#### New Canvas features

- [HTML 5 text API for `canvas` elements](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas elements now support the HTML 5 text API.
- [Shadow effects in a `canvas`](/en-US/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows)
  - : Canvas shadow effects are now supported.
- [`createImageData()`](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : The canvas method `createImageData()` is now supported, allowing code to specifically create an `ImageData` object instead of requiring it to be done automatically. This can improve performance of other `ImageData` methods by preventing them from having to create the object.
- `moz-opaque` attribute
  - : Added the {{htmlattrxref("moz-opaque", "canvas")}} attribute, which lets the canvas know whether or not translucency will be a factor.  If the canvas knows there's no translucency, painting performance can be optimized. See also {{domxref("HTMLCanvasElement.mozOpaque")}}.

#### New SVG features

- [Applying SVG effects to HTML content](/en-US/Applying_SVG_effects_to_HTML_content)
  - : You can now apply SVG effects to HTML and XHTML content; this article describes how.

#### Miscellaneous new features

- [ICC color correction in Firefox](/en-US/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 now supports ICC color correction for tagged images.
- The `defer` attribute is now supported on [`script`](/en-US/docs/Web/HTML/Element/script) elements
  - : This attribute indicates to the browser that it _may_ choose to continue to parse and render the page without waiting for the script to finish executing.

### Other improvements

- The Text node's [`wholeText`](/en-US/docs/Web/API/Text/wholeText) property and [`replaceWholeText()`](/en-US/docs/Web/API/Text/replaceWholeText) method have been implemented.
- The property [`element.children`](/en-US/docs/Web/API/Element/children) has been added. It returns a _collection_ of child elements of the given element.
- The property {{ domxref("element.contentEditable") }} is now supported, to support editable elements.
- The Element Traversal API is now supported by the DOM [Element](/en-US/docs/Web/API/Element) object.
- HTML document nodes may now be cloned using [`cloneNode()`](/en-US/docs/Web/API/Node/cloneNode).
- The non-standard `getBoxObjectFor()` DOM method has been removed. You should be using [`getBoundingClientRect()`](/en-US/docs/Web/API/Element/getBoundingClientRect) instead.
- Dispatched DOM events can now be re-dispatched.  This makes Firefox 3.5 pass Acid 3 test 30.
- Improvements have been made to DOM 2 Range handling.
- In non-chrome scope, caught objects in exceptions are now the actual thrown object instead of an [XPConnect](/en-US/docs/XPConnect) wrapper containing the thrown object.
- SVG ID references are now live.
- SVG filters now work for `foreignObject`.
- The `GetSVGDocument()` method has been added to [`object`](/en-US/docs/Web/HTML/Element/object) and [`iframe`](/en-US/docs/Web/HTML/Element/iframe) elements for compatibility.
- Implicit setting of properties in object and array initializers no longer execute setters in JavaScript. See the blog post [Object and array initializers should not invoke setters when evaluated](/web-tech/2009/04/29/object-and-array-initializers-should-not-invoke-setters-when-evaluated) for details.
- The `gDownloadLastDir.path` variable has been renamed to `gDownloadLastDir.file` since it refers to an {{ interface("nsIFile") }}, not a path.
- The `gDownloadLastDirPath` variable has been renamed to `gDownloadLastDirFile` since it refers to an {{ interface("nsIFile") }}, not a path.
- Starting in Firefox 3.5, you can no longer use `data:` bindings in chrome packages that get `XPCNativeWrapper` automation.

### For XUL and add-on developers

If you're an extension developer, you should start by reading [Updating extensions for Firefox 3.5](/en-US/Updating_extensions_for_Firefox_3.5), which offers a helpful overview of what changes may affect your extension.

#### New components and functionality

- [Supporting private browsing mode](/en-US/Supporting_private_browsing_mode)
  - : Firefox 3.5 offers Private Browsing mode, which doesn't record the user's activities.  Extensions may support private browsing following the guidelines offered by this article.
- [Security changes in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5)
  - : This article covers security-related changes in Firefox 3.5.
- [Theme changes in Firefox 3.5](/en-US/Theme_changes_in_Firefox_3.5)
  - : This article covers theme-related changes in Firefox 3.5.
- [Monitoring WiFi access points](/en-US/Monitoring_WiFi_access_points)
  - : Code with UniversalXPConnect privileges can now monitor the list of available access points, getting information on their SSIDs, MAC addresses, and signal strength.  This can be used in tandem with Geolocation to offer WiFi-based location service.

#### Notable changes and improvements

- The XUL [`textbox`](/en-US/docs/XUL/textbox) widget now offers a [`search`](/en-US/docs/XUL/Attribute/textbox.type) type, for use as search fields.
- In order to support dragging and dropping tabs between windows, the [`browser`](/en-US/docs/XUL/browser) widget now has a [`swapDocShells()`](/en-US/XUL/Method/SwapDocShells) method.
- Added the [`level`](/en-US/docs/XUL/Attribute/panel.level) attribute to the [`panel`](/en-US/docs/XUL/panel) element; this specifies whether panels appear on top of other applications, or just on top of the window the panel is contained within.
- XUL elements now support the `clientHeight`,`clientWidth`,`scrollHeight`, and`scrollWidth`properties.
- [`keyset`](/en-US/docs/XUL/keyset)s now include a `disabled` attribute.
- In addition, `keyset`s can now be removed using the node's [`removeChild()`](/en-US/docs/Web/API/Node/removeChild) method.
- [`mozIStorageStatement`](/en-US/docs/mozIStorageStatement) had the `initialize()` method removed; consumers should use the [`createStatement()`](</en-US/docs/mozIStorageConnection#createStatement()>) method instead to get a new statement object.
- The [Storage](/en-US/docs/Storage) API now offers support for asynchronous requests.
- The [`nsICookie2`](/en-US/docs/XPCOM_Interface_Reference/nsICookie2) interface now exposes the time at which cookies were created in its new `creationTime` attribute.
- Added a flag to [`nsIProtocolHandler`](/en-US/docs/nsIProtocolHandler) (`URI_IS_LOCAL_RESOURCE`) that is checked during chrome registration to make sure a protocol is allowed to be registered.
- Firefox now looks for plugins in `/usr/lib/mozilla/plugins` on Linux, as well as the previously supported locations.
- The plugin API has been updated to include support for private browsing mode; you may now use [`NPN_GetValue()`](/en-US/docs/NPN_GetValue) to query the state of private browsing mode using the variable `NPNVprivateModeBool`.

## New features for end users

### User experience

- Location aware browsing
  - : If you choose, you may allow Firefox 3.5 to share information about your current location with web sites.  Firefox 3.5 can use information about the network you're connected to in order to share your location. Of course, it asks for your permission before doing so, to ensure your privacy.
- Open audio and video support
  - : Firefox 3.5 supports embedded video and audio using the open Ogg format, as well as WAV for audio. No plugins, no confusing error messages about needing to install something or other that turns out not to be available on your platform anyway.
- Local data storage
  - : Web applications can now use Web Storage's local storage capabilities to store data on your computer.  This is great for anything from site preferences to more complex data.

### Security and privacy

- Private Browsing
  - : Need to use someone else's computer? Switch on Private Browsing mode and nothing will be recorded about your session, including cookies, history, and any other potentially private information.
- Better privacy controls
  - : The Privacy preference pane has been completely redesigned to offer users more control over their private information. Users can choose to retain or discard anything including history information, cookies, downloads, and form field information.  In addition, users can specify whether or not to include history and/or bookmarks in the location bar's automated suggestions, so you can keep private web addresses from popping up unexpectedly while typing in the location bar.

### Performance

- Faster JavaScript performance
  - : JavaScript, the "J" in "AJAX," is sped up dramatically in Firefox 3.5 with the new TraceMonkey JavaScript engine.  Web applications are much faster than in Firefox 3.
- Faster page rendering
  - : Web content draws faster in Firefox 3.5, thanks to technologies such as "speculative parsing." Your users don't need to know what it means, other than "it makes things draw faster."

## See also

{{Firefox_for_developers('3')}}
