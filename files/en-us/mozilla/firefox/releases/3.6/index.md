---
title: Firefox 3.6 for developers
slug: Mozilla/Firefox/Releases/3.6
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[Firefox 3.6](https://www.mozilla.org/firefox/) offers support for new and developing web standards, increased performance, and an overall better experience for web users and developers. This page provides links to articles covering the new capabilities of Firefox 3.6.

## For website and application developers

### CSS

- [Using gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Firefox 3.6 adds support for the proposed `-moz-linear-gradient` and `-moz-radial-gradient` properties for {{Cssxref("background")}}.
- [Multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
  - : The {{cssxref("background")}} property (as well as {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, and {{Cssxref("background-attachment")}}) now supports multiple backgrounds. This lets you specify multiple backgrounds that are rendered atop one another in layers.
- [Mozilla-specific media features](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#mozilla-specific_media_features)
  - : Media features have been added for Mozilla-specific system metrics, so that [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) can be used to more safely check on the availability of features such as touch support.
- [Scaling background images](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
  - : The `background-size` property from the [CSS 3 Backgrounds and Borders draft](https://drafts.csswg.org/css-backgrounds-3/) is now supported under the name `-moz-background-size`.
- [WOFF font support](/en-US/docs/Web/Guide/WOFF)
  - : {{cssxref("@font-face")}} now supports the WOFF downloadable font file format.
- [Pointer events](/en-US/docs/Web/CSS/pointer-events)
  - : The {{cssxref("pointer-events")}} property lets content specify whether or not an element may be the target of mouse pointer events.

#### Miscellaneous CSS changes

- The [`rem`](/en-US/docs/Web/CSS/length#relative_length_units) length unit from [CSS3 Values and Units](https://www.w3.org/TR/css3-values/#lengths) is now supported. [Firefox bug 472195](https://bugzil.la/472195)
- {{Cssxref("image-rendering")}} is supported for images, background images, videos and canvases. [Firefox bug 423756](https://bugzil.la/423756)
- {{Cssxref("text-align")}}:end is now supported. [Firefox bug 299837](https://bugzil.la/299837)
- DOM changes to elements using the table {{Cssxref("display")}} types now work much better.
- Added {{cssxref(":-moz-locale-dir(ltr)")}} and {{cssxref(":-moz-locale-dir(rtl)")}} to make it easier to customize layouts based on whether the user interface is being displayed using a left-to-right or a right-to-left locale. [Firefox bug 478416](https://bugzil.la/478416)
- Added support for the {{cssxref(":indeterminate")}} pseudo-class, which matches `checkbox` [`input`](/en-US/docs/Web/HTML/Element/input) elements whose `indeterminate` attribute is `true`.
- Windowed plugins are no longer displayed in CSS transforms, because they can't be transformed properly by the compositor.

### HTML

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Support for the new HTML5 File API has been added to Gecko, making it possible for web applications to access local files selected by the user. This includes support for selecting multiple files using the `input type="file"` HTML element's new `multiple` attribute.
- HTML5 video supports poster frames
  - : The `poster` attribute is now supported for the [`video`](/en-US/docs/Web/HTML/Element/video) element, allowing content to specify a poster frame to be displayed until the video begins to play.
- Checkboxes and radio buttons support the `indeterminate` property
  - : HTML [`input`](/en-US/docs/Web/HTML/Element/input) elements of types `checkbox` and `radio` now support the indeterminate property, which allows a third, "indeterminate" state.
- Canvas image smoothing can be controlled
  - : The new [`mozImageSmoothingEnabled`](/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#controlling_image_scaling_behavior) property can be used to turn on and off image smoothing when scaling in [`canvas`](/en-US/docs/Web/HTML/Element/canvas) elements.
- Asynchronous script execution
  - : By setting the `async` attribute on a [`script`](/en-US/docs/Web/HTML/Element/script) element, the `script` will not block loading or display of the rest of the page. Instead the `script` executes as soon as it is downloaded.

### JavaScript

Gecko 1.9.2 introduces JavaScript 1.8.2, which adds a number of language features from the [ECMAScript 5 standard](/en-US/docs/JavaScript/ECMAScript_5_support_in_Mozilla):

- [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can now parse ISO 8601 dates like YYYY-MM-DD.
- The [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) property of function instances is no longer enumerable.

### DOM

- Web workers can now self-terminate
  - : [Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) now support the `nsIWorkerScope.close()` method, which allows them to terminate themselves.
- Drag and drop now supports files
  - : The [`DataTransfer`](/en-US/docs/Web/API/DataTransfer) object provided to drag listeners now includes a list of files that were dragged.
- Checking to see if an element matches a specified CSS selector
  - : The new {{domxref("Node.mozMatchesSelector", "element.mozMatchesSelector")}} method lets you determine whether or not an element matches a specified CSS selector. See [Firefox bug 518003](https://bugzil.la/518003).
- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Content can now detect the orientation of the device if it has a supported accelerometer, using the [`MozOrientation`](/en-US/docs/DOM/MozOrientation) event. Firefox 3.6 supports the accelerometer in Mac laptops.
- [Detecting document width and height changes](/en-US/docs/DOM/Detecting_document_width_and_height_changes)
  - : The new `MozScrollAreaChanged` event is dispatched whenever the document's `scrollWidth` and/or `scrollHeight` properties change.

#### Miscellaneous DOM changes

- The `getBoxObjectFor()` method has been **removed**, as it was non-standard and exposed even more non-standard stuff to the web. See [Firefox bug 340571](https://bugzil.la/340571). Also affects [MooTools](https://mootools.net/) which uses this call for Gecko detection; this has been fixed in the latest version of MooTools, so be sure to update.
- The new [`mozInnerScreenX`](/en-US/docs/Web/API/Window/mozInnerScreenX) and [`mozInnerScreenY`](/en-US/docs/Web/API/Window/mozInnerScreenY) properties on DOM windows have been added; these return the screen coordinates of the top-left corner of the window's viewport.
- The new `mozScreenPixelsPerCSSPixel` attribute on the `nsIDOMWindowUtils` interface, accessible only to chrome, provides a conversion factor between CSS pixels and screen pixels; this value can vary based on the zoom level of the content.
- When the page's URI's document fragment identifier (the part after the "#" (hash) character) changes, a new `hashchange` event is sent to the page. See the [`hashchange`](/en-US/docs/Web/API/Window/hashchange_event) event for more information. [Firefox bug 385434](https://bugzil.la/385434)
- The attribute [`document.readyState`](/en-US/docs/Web/API/Document/readyState) is now supported. [Firefox bug 347174](https://bugzil.la/347174)
- Support for HTML5's [`element.classList`](/en-US/docs/Web/API/Element/classList) to allow easier handling of the class attribute. [Firefox bug 501257](https://bugzil.la/501257)
- `localName` and `namespaceURI` in HTML documents now behave like they do in XHTML documents: `localName` returns in lower case and `namespaceURI` for HTML elements is `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/en-US/docs/Web/API/Element/getElementsByTagNameNS) no longer lowercases its argument, so upper-case ASCII letters in the argument make matches against HTML elements fail. The same is true for [`document.getElementsByTagNameNS`](/en-US/docs/Web/API/Document/getElementsByTagNameNS).
- Support has been added for addresses in geolocation via the `nsIDOMGeoPositionAddress` interface and a new field added to `nsIDOMGeoPosition`.
- The {{domxref("window.getComputedStyle")}} function now returns quotes within `url()` values.

### XPath

- The choose() XPath method is now supported
  - : The [`choose()`](/en-US/docs/Web/XPath/Functions/choose) method is now supported by our implementation of [XPath](/en-US/docs/Web/XPath).

## For XUL and add-on developers

If you're an extension developer, you should start by reading [Updating extensions for Firefox 3.6](/en-US/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions), which offers a helpful overview of what changes may affect your extension. Plug-in developers should read [Updating plug-ins for Firefox 3.6](/en-US/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins).

### New features

- [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Content can now detect the orientation of the device if it has a supported accelerometer, using the [`MozOrientation`](/en-US/docs/DOM/MozOrientation) event. Firefox 3.6 supports the accelerometer in Mac laptops.
- [Monitoring HTTP activity](/en-US/docs/Monitoring_HTTP_activity)
  - : You can now monitor HTTP transactions to observe requests and responses in real time.
- [Working with the Windows taskbar](/en-US/docs/Working_with_the_Windows_taskbar)
  - : It's now possible to customize the appearance of windows in the taskbar in Windows 7 or later. _This has been disabled by default in Firefox 3.6._

### Places

- Places queries can now use the `redirectsMode` attribute on the `nsINavHistoryQueryOptions` interface to specify whether or not to include redirected pages in results.
- Added the new `nsIFaviconService.expireAllFavicons()` method to the `nsIFaviconService` interface.

### Storage

- [Locale-aware collation of data is now supported by the Storage API](</en-US/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 added several new collation methods to provide optimized collation (sorting) of results using locale-aware techniques.
- [Properties on a statement can now be enumerated](/en-US/docs/mozIStorageStatementParams#enumeration_of_properties)
  - : You can now use a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) enumeration to enumerate all the properties on a statement.
- mozIStorageStatement's getParameterIndex changed behavior between 3.5 and 3.6.
  - : See [Firefox bug 528166](https://bugzil.la/528166) for details.
- Asynchronously bind multiple sets of parameters and execute a statement.
  - : See [Firefox bug 490085](https://bugzil.la/490085) for details. Documentation coming soon.

### Preferences

- The `nsIContentPrefService` interface has two new methods: `nsIContentPrefService.getPrefsByName()` and `nsIContentPrefService.removePrefsByName()`.

### Themes

See [Updating themes for Firefox 3.6](/en-US/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) for a list of changes related to themes.

- [Lightweight themes](/en-US/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 supports lightweight themes; these are easy-to-create themes that apply a background to the top (URL bar and button bar) and bottom (status bar) of browser windows. This is an integration of the existing [Personas](https://addons.mozilla.org/en-US/firefox/themes/) theme architecture into Firefox.

### Miscellaneous

- Firefox will no longer load third-party components installed in its internal components directory. This helps to ensure stability by preventing buggy third-party components from being executed. Developers that install components this way must [repackage their components as XPI packages](/en-US/docs/Migrating_raw_components_to_add-ons) so they can be installed as standard add-ons.
- `contents.rdf` is no longer supported for registering chrome in extensions. You must now use the [`chrome.manifest`](/en-US/docs/Install_Manifests) file instead. See [Firefox bug 492008](https://bugzil.la/492008).
- Added support for hiding the menu bar automatically. See [Firefox bug 477256](https://bugzil.la/477256).
- Added support for the `container-live-role` attribute to objects. See [Firefox bug 391829](https://bugzil.la/391829).
- The `tabs-closebutton` binding has been removed. See [Firefox bug 500971](https://bugzil.la/500971).
- Added support to `nsISound` for playing sounds based on events that have occurred. See [Firefox bug 502799](https://bugzil.la/502799).
- The syntax for the `nsITreeView` methods `nsITreeView.canDrop()` and `nsITreeView.drop()` has changed to support the new drag & drop API introduced in Gecko 1.9. See [Firefox bug 455590](https://bugzil.la/455590).
- Added support to snap the mouse cursor to the default button of dialog or wizard on Windows, see [Firefox bug 76053](https://bugzil.la/76053). This is processed automatically by dialog and wizard element. But if a XUL application creates a window using the `window` element and it has a default button, it needs to call `nsIDOMChromeWindow.notifyDefaultButtonLoaded` during the window's `onload` event handler.
- The `nsILocalFileMac` interface has had two methods removed: `setFileTypeAndCreatorFromMIMEType()` and `setFileTypeAndCreatorFromExtension()`.
- The new [`NetUtils.jsm`](/en-US/docs/JavaScript_code_modules/NetUtil.jsm) code module provides an easy-to-use method for asynchronously copying data from an input stream to an output stream.
- The new [`openLocationLastURL.jsm`](/en-US/docs/JavaScript_code_modules/openLocationLastURL.jsm) code module makes it easy to read and change the value of the "Open Location" dialog box's remembered URL while properly taking private browsing mode into account.
- On Windows, the `nsIScreen` interface now reports 24-bit per pixel color depths when the graphics driver claims 32 bits, since 24 more accurately represents the actual number of color pixels in use.
- Menu bars can now be hidden on Windows, using the new [`autohide`](/en-US/docs/Mozilla/Tech/XUL/Attribute/autohide) attribute on the [`<xul:toolbar>`](/en-US/docs/Mozilla/Tech/XUL/toolbar) XUL element.
- The [`loadOneTab`](/en-US/docs/Mozilla/Tech/XUL/Method/loadOneTab) and [`addTab`](/en-US/docs/Mozilla/Tech/XUL/Method/addTab) methods now accept a new `relatedToCurrent` parameter and, in addition, allow the parameters to be specified by name, since nearly all of the parameters are optional.
- The "[hidden](/en-US/docs/Install_Manifests#hidden)" property is no longer supported in install manifests; it's no longer possible to prevent the user from seeing add-ons in the add-on manager window.
- The `@mozilla.org/webshell;1` component no longer exists; you need to use `@mozilla.org/docshell;1` instead.
- You can now register with the update-timer category to schedule timer events without having to instantiate the object that the timer will eventually call into; it will instead be instantiated when it's needed. See `nsIUpdateTimerManager.registerTimer()` for details.
- The [`NPN_GetValue()`](/en-US/docs/NPN_GetValue) function no longer provides access to XPCOM through the variable values `NPNVserviceManager`, `NPNVDOMelement`, and `NPNVDOMWindow`. This is part of the work toward making plugins run in separate processes in a future version of Gecko.
- Plugins are no longer scriptable through XPCOM (IDL) interfaces, [NPRuntime](/en-US/docs/Gecko_Plugin_API_Reference/Scripting_plugins) is the API to use for making plugins scriptable, and [`NPP_GetValue()`](/en-US/docs/NPP_GetValue) is no longer called to with the value `NPPVpluginScriptableInstance` or `NPPVpluginScriptableIID`. This is part of the work toward making plugins run in separate processes in a future version of Gecko.

## For Firefox/Gecko developers

Certain changes are only really interesting if you work on the internals of Firefox itself.

### Interfaces merged

The following interfaces have been combined together:

- `nsIPluginTagInfo2` has been merged into `nsIPluginTagInfo`.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2`, and `nsIPluginInstancePeer3` have all been merged into `nsIPluginInstance`.
- `nsIWindowlessPlugInstPeer` has been merged into `nsIPluginInstance`.
- `nsIPluginManager` and `nsIPluginManager2` have been merged into `nsIPluginHost`.

### Interfaces removed

The following interfaces have been removed entirely because they were unused, unimplemented, or obsolete:

- `nsIFullScreen`
- `nsIDOMSVGListener`
- `nsIDOMSVGZoomListener`
- `nsIInternetConfigService`
- `nsIDKey`
- `nsIEventHandler`
- `nsIJRILiveConnectPIPeer`
- `nsIJRILiveConnectPlugin`
- `nsIScriptablePlugin`
- `nsIClassicPluginFactory`
- `nsIFileUtilities`

### Interfaces moved

The following interfaces have been relocated from their previous IDL files into new ones:

- `nsIDOMNSCSS2Properties` is now located in its own IDL file (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` is now located in its own IDL file.

A large number of interfaces have been moved. See [Interfaces moved in Firefox 3.6](/en-US/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) for a complete list.

### Other interface changes

The following assorted changes have been made:

- The `nsIPlugin` interface now inherits from `nsISupports` instead of `nsIFactory`.
- The `nsIPluginHost` interface now inherits from `nsISupports` instead of `nsIFactory`.
- The `nsIFrame` interface now inherits from `nsQueryFrame` instead of `nsISupports`.
- The `nsIDeviceContext` method `getPaletteInfo()` has been removed, as it was never implemented.
- The `nsIScriptContext` method `reportPendingException()` has been removed, since it was no longer being used.

### Changes in accessibility code

- The `EVENT_REORDER` [accessibility event](/en-US/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) is now sent when the children of frames and iframes change, as well as when the main document's children change. See [Firefox bug 420845](https://bugzil.la/420845).
- The `nsIAccessibleTable.selectRow()` now correctly removes any current selection before selecting the specified row.

## See also

{{Firefox_for_developers('3.5')}}
