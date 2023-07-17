---
title: Firefox 61 for developers
slug: Mozilla/Firefox/Releases/61
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 61 that will affect developers. Firefox 61 was released on June 26, 2018.

## Changes for web developers

### Developer tools

- The new-look Console UI has been enabled by default for the [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) & [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) ([Firefox bug 1362023](https://bugzil.la/1362023)/[Firefox bug 1347127](https://bugzil.la/1347127)). The old UI has been removed.
- In the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html), clicking _Open in New Tab_ in a `POST` request's context menu correctly resends the request with the expected `POST` parameters ([Firefox bug 1407515](https://bugzil.la/1407515)).
- [CSS variables now autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#css-variable-autocompletion) with color swatches, allowing you to see exactly what color value is stored in each variable ([Firefox bug 1451211](https://bugzil.la/1451211)).

  - In addition, hovering over a CSS variable name brings up a tooltip showing what color value is stored in that variable ([Firefox bug 1431949](https://bugzil.la/1431949)).

- The main toolbox's toolbar has been redesigned. Highlights are better responsiveness for narrow and wide viewports with a new overflow dropdown, cleaned up meatball menu, and sortable tabs to let you move up your most used panels ([Firefox bug 1226272](https://bugzil.la/1226272)).
- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s toolbar now includes a dropdown menu providing easier access to the 'Copy All As HAR' and 'Save All As HAR' commands, as well as an 'Import…' option ([Firefox bug 1403530](https://bugzil.la/1403530)).
- The Network Monitor's details pane now includes a [Cache tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cache), which displays information about previously cached resources ([Firefox bug 859051](https://bugzil.la/859051)).
- The Network Monitor's main toolbar got redesigned to be more responsive on smaller viewports and visually aligned with the Console.
- The Network Monitor's main toolbar now includes a [Throttling](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#throttling) dropdown which was only available in the [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#network-throttling) before. It allows you to throttle your network speed to emulate various different network speed conditions ([Firefox bug 1349559](https://bugzil.la/1349559)).
- The Browser Console now hides CSS errors by default for readability and performance reasons ([Firefox bug 1452143](https://bugzil.la/1452143)).
- The Browser Console now includes a command to restart the browser. Use `Ctrl` + `Alt` + `R` (Windows, Linux) or `Cmd` + `Alt` + `R` (Mac) to restart the browser with the same tabs open as before the restart.
- DevTools' web extension APIs [`devtools.network.onRequestFinished`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished) ([Firefox bug 1311171](https://bugzil.la/1311171)) and [`devtools.network.getHAR`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR) ([Firefox bug 1311177](https://bugzil.la/1311177)) got implemented (enabling extensions like [har-export-trigger](/en-US/docs/Web)).
- The Firebug theme got removed since the transition of Firebug users into DevTools is complete ([Firefox bug 1378108](https://bugzil.la/1378108)).

### HTML

_No changes._

### CSS

- CSS parsing has been parallelized ([Firefox bug 1346988](https://bugzil.la/1346988)).
- Support for {{cssxref("font-variation-settings")}} and {{cssxref("font-optical-sizing")}} has been enabled by default ([Firefox bug 1447163](https://bugzil.la/1447163)).
- The `grid-gap`, `grid-row-gap`, and `grid-column-gap` properties have been renamed to {{cssxref("gap")}}, {{cssxref("row-gap")}}, and {{cssxref("column-gap")}}, as they are no longer grid-specific ([Firefox bug 1398482](https://bugzil.la/1398482)). See [Box alignment; Gaps between boxes](/en-US/docs/Web/CSS/CSS_box_alignment#gaps_between_boxes) for additional details. The old names have been kept as aliases for web compatibility purposes.
- The {{cssxref("flex-basis")}} `content` value is now supported ([Firefox bug 1105111](https://bugzil.la/1105111)).
- Percentage values of {{cssxref("column-gap")}} are now supported in [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) ([Firefox bug 1398537](https://bugzil.la/1398537)).
- The CSS {{cssxref(":host")}} pseudo-class is now supported; this selects a custom element from inside its shadow DOM ([Firefox bug 992245](https://bugzil.la/992245)).
- {{cssxref("overflow")}} now accepts two-value syntax ([Firefox bug 1453148](https://bugzil.la/1453148)).
- Flex items that are sized according to their content are now sized using `max-content`, not `fit-content` ([Firefox bug 1282821](https://bugzil.la/1282821)). See the [`width` value definitions](/en-US/docs/Web/CSS/width#values) for more details of these values.
- {{cssxref("font-weight")}}, {{cssxref("font-stretch")}} and {{cssxref("font-style")}} now support additional values as defined by [CSS Fonts level 4](https://drafts.csswg.org/css-fonts-4/) ([Firefox bug 1436048](https://bugzil.la/1436048)):

  - {{cssxref("font-weight")}} now accepts a floating-point value between 1 and 1000 inclusive.
  - {{cssxref("font-stretch")}} now accepts percentage values.
  - {{cssxref("font-style")}} now accepts an angle after the `oblique` keyword.

- The {{cssxref("@font-face")}} descriptor equivalents of the three properties mentioned in the above entry also support the new syntax listed above, and additionally now support a two-value syntax allowing us to specify a range of descriptor values supported by a font-face ([Firefox bug 1436061](https://bugzil.la/1436061), [Firefox bug 1436048](https://bugzil.la/1436048)).

### SVG

- The `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` and `text` properties have been added to the {{SVGElement("a")}} element ({{domxref("SVGAElement")}}) to be consistent with the HTML {{HTMLElement("a")}} element ([Firefox bug 1451823](https://bugzil.la/1451823)).
- The {{SVGElement("textPath")}} element ({{domxref("SVGTextPathElement")}}) now supports the SVG2 `path` and `side` attributes ([Firefox bug 1446617](https://bugzil.la/1446617) and [Firefox bug 1446650](https://bugzil.la/1446650)).
- The {{domxref("SVGGeometryElement")}} interface is now supported for more elements and not just for the {{SVGElement("path")}} element ([Firefox bug 1325320](https://bugzil.la/1325320)).

### JavaScript

- The {{jsxref("String.prototype.trimStart()")}} and {{jsxref("String.prototype.trimEnd()")}} methods have been implemented (see [Firefox bug 1434007](https://bugzil.la/1434007)). `trimLeft` and `trimRight` remain as aliases for web compatibility reasons.

### APIs

#### New APIs

- The {{domxref("PerformanceServerTiming")}} API has been implemented. It surfaces server-side metrics sent via the {{HTTPHeader("Server-Timing")}} header ([Firefox bug 1423495](https://bugzil.la/1423495)).

#### DOM

- The {{domxref("Document.anchors", "anchors")}}, {{domxref("Document.applets", "applets")}}, {{domxref("Document.embeds", "embeds")}}, {{domxref("Document.forms", "forms")}}, {{domxref("Document.head", "head")}}, {{domxref("Document.images", "images")}}, {{domxref("Document.links", "links")}}, {{domxref("Document.plugins", "plugins")}}, and {{domxref("Document.scripts", "scripts")}} properties have been moved from the {{domxref("HTMLDocument")}} interface onto {{domxref("Document")}} ([Firefox bug 1415588](https://bugzil.la/1415588)).
- {{domxref("DOMTokenList.replace()")}} now returns a boolean value to indicate whether the replacement occurred successfully, rather than void ([Firefox bug 1444909](https://bugzil.la/1444909)).
- The [Fetch API](/en-US/docs/Web/API/Fetch_API)'s {{domxref("Request.credentials")}} property now defaults to `"same-origin"` per the latest revision of the specification ([Firefox bug 1394399](https://bugzil.la/1394399)).
- The {{domxref("Request.destination")}} property has been implemented ([Firefox bug 1402892](https://bugzil.la/1402892)).
- The {{domxref("MutationObserver")}} option dictionary, `MutationObserverInit`, no longer has `false` as the default value of all of its Boolean properties. Now, only `childList` and `subtree` have default values (of `false` still). The other properties have no default values ([Firefox bug 973638](https://bugzil.la/973638)).
- The [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) method {{domxref("PaymentRequest.show()")}} now supports using a {{jsxref("Promise")}} to let the client side code provide updated payment details prior to activating the payment interface ([Firefox bug 1441709](https://bugzil.la/1441709)).

#### DOM events

_No changes._

#### Service workers

The "Forget" button, available in Firefox's customization options, now clears service workers and their caches ([Firefox bug 1252998](https://bugzil.la/1252998)).

#### Web Audio, Media and WebRTC

- The {{domxref("AudioContext.AudioContext", "AudioContext()")}} constructor now accepts an optional `options` parameter. This lets you configure the preferred latency and/or sample rate for the new context.
- Firefox now throws the correct exceptions when instantiation of an {{domxref("AudioBuffer")}} fails.

#### WebVR

- The [WebVR API](/en-US/docs/Web/API/WebVR_API) has been enabled by default on macOS ([Firefox bug 1244242](https://bugzil.la/1244242)).

#### Canvas and WebGL

_No changes._

#### CSSOM

- The {{domxref("CSSStyleRule.selectorText")}} property is now fully implemented and no longer read-only ([Firefox bug 37468](https://bugzil.la/37468)).
- The {{domxref("MediaList")}} interface implementation is now a little closer to the specification. It is not all the way there yet; for example, stringifier attributes haven't been implemented yet ([Firefox bug 1455807](https://bugzil.la/1455807)).

### HTTP

- The cookie directive `SameSite` has been implemented. See [Set-Cookie](/en-US/docs/Web/HTTP/Headers/Set-Cookie) and [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) ([Firefox bug 795346](https://bugzil.la/795346)).

### Networking

- Firefox 61 and later no longer support using the FTP protocol (that is, URLs with the `"ftp://"` scheme) to load subresources from within HTML content. FTP is still supported as a top-level URL entered directly into the URL bar or loaded as a standalone document ([Firefox bug 1404744](https://bugzil.la/1404744)).

### Security

_No changes._

### Plugins

_No changes._

### Other

_No changes._

## Removals from the web platform

### Developer tools

`Cmd`/`Ctrl` + `Shift` + `O` no longer shows/hides the DevTools options panel — use `F1` instead ([Firefox bug 1409456](https://bugzil.la/1409456)).

### HTML

_No changes._

### CSS

`@-moz-document` has been disabled in content pages ([Firefox bug 1422245](https://bugzil.la/1422245)).

### APIs

- The {{domxref("File")}} interface's property {{domxref("File.lastModifiedDate", "lastModifiedDate")}} has been removed ([Firefox bug 1458883](https://bugzil.la/1458883)).
- The `Node.setUserData` and `Node.getUserData` methods have been removed from the platform completely ([Firefox bug 749981](https://bugzil.la/749981)).
- The {{domxref("Element.createShadowRoot()")}} method has been removed. Use {{domxref("Element.attachShadow()")}} instead ([Firefox bug 1453789](https://bugzil.la/1453789)).
- The {{domxref("MediaStream")}} overload of the {{domxref("URL.createObjectURL()")}} method has been removed ([Firefox bug 1454889](https://bugzil.la/1454889)).

### SVG

- The deprecated (and never properly implemented) {{domxref("SVGViewElement")}}`.viewTarget` property has been removed ([Firefox bug 1455763](https://bugzil.la/1455763)).
- The following deprecated properties have been removed from {{domxref("SVGSVGElement")}} ([Firefox bug 1133172](https://bugzil.la/1133172)):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- The non-standard `SVGNumber()` constructor has been removed ([Firefox bug 1455940](https://bugzil.la/1455940)).

### Other

_No changes._

## Changes for add-on and Mozilla developers

### WebExtensions

- Autocomplete popups are now themeable ([Firefox bug 1417883](https://bugzil.la/1417883)).
- [`tabs.onUpdated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) now has a filter template ([Firefox bug 1329507](https://bugzil.la/1329507)).
- The default document colors can now be overridden, using [`browserSettings.overrideDocumentColors`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors) ([Firefox bug 1417810](https://bugzil.la/1417810)).
- [tabs.query](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) has been optimized with the implementation of some useful search/filter option parameters ([Firefox bug 1445316](https://bugzil.la/1445316)).
- You can now use [`permissions.request`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request) from an `about:addons` preferences page ([Firefox bug 1382953](https://bugzil.la/1382953)).
- You can now force web pages to use system fonts instead of the fonts they specify using the [`browserSettings.useDocumentFonts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts) property ([Firefox bug 1400805](https://bugzil.la/1400805)).
- You can now cause browser search autocomplete suggestions to automatically open in a new tab rather than the current tab using the [`browserSettings.openUrlbarResultsInNewTabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs) property ([Firefox bug 1432645](https://bugzil.la/1432645)).
- You can control whether the user can close a tab using double-click with the [`browserSettings.closeTabsByDoubleClick`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/closeTabsByDoubleClick) property ([Firefox bug 1435142](https://bugzil.la/1435142)).
- The `toolbar`, `toolbar_text`, `toolbar_field`, `toolbar_field_text`, and `toolbar_field_border` [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest properties now also apply to the findbar ([Firefox bug 1418605](https://bugzil.la/1418605)).
- In [`sidebarAction.getPanel()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel), [`sidebarAction.getTitle()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle), [`sidebarAction.setPanel()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel), [`sidebarAction.setTitle()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle), and [`sidebarAction.setIcon()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon), you can now specify a `windowId` so that the features will be set/got only for a specific window ([Firefox bug 1390464](https://bugzil.la/1390464)).
- [`tabs.hide()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide) and [`tabs.show()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show) are now enabled by default ([Firefox bug 1455040](https://bugzil.la/1455040)).

  - The first time an extension hides a tab, the browser will tell the user that the tab is being hidden, show them how they can access the hidden tab, and give them the option of disabling the extension instead ([Firefox bug 1438363](https://bugzil.la/1438363)).

## Older versions

{{Firefox_for_developers(60)}}
