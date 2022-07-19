---
title: Firefox 62 for developers
slug: Mozilla/Firefox/Releases/62
tags:
  - '62'
  - Firefox
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 62 that will affect developers. Firefox 62 was released on September 5, 2018.

## Changes for web developers

### Developer tools

- The Shape Path Editor is now available by default — see [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) for more information.
- You can now split the Rules view out into its own pane, separate from the other tabs on the CSS pane. See [Page inspector 3-pane mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) for more details.
- The Grid inspector has updated features, and all new documentation — see [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- You now have four options for the location of the Developer Tools. In addition to the default location on the bottom of the window, you can choose to locate the tools on either the left or right sides of the main window or in a separate window ({{bug(1192642)}}).
- A close button has been added to the [split console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) toolbar.
- If the option to "Select an iframe as the currently targeted document" is checked, the icon will appear in the toolbar while the Settings tab is displayed, even if the current page doesn't include any iframes ({{bug(1456069)}}).
- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) now shows the cookie `samesite` attribute ({{bug(1452715)}}).
- [Responsive design mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) now works inside container tabs ({{bug(1306975)}}).
- When {{Glossary("CORS")}} errors occur and are reported on the console, Firefox now provides a link to the corresponding page in our [CORS error documentation](/en-US/docs/Web/HTTP/CORS/Errors) ({{bug(1475391)}}).
- Create a screenshot of the current page (with an optional filename) from the Console tab ({{bug(1464461)}}) using the following command:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  where `<filename.png>` is the desired filename. The file will be saved to your downloads folder. The `--fullpage` parameter is optional, but if included, it will save the full web page. This option also adds `-fullpage` to the name of the file. For a list of all options available for this command, enter: `:screenshot --help`

#### Removals

- The _Developer Toolbar/GCLI_ (accessed with `Shift` + `F2`), **has been removed** from Firefox ({{bug(1461970)}}). Both the Developer Toolbar UI and the GCLI upstream library have become unmaintained, some of its features are broken (some ever since e10s), it is blocking the `unsafeSetInnerHTML` work, usage numbers are very low, alternatives exist for the most used commands.

### HTML

_No changes._

### CSS

- `:-moz-selection` has been unprefixed to {{cssxref("::selection")}} ({{bug(509958)}}).
- `x` is now supported as a unit for the {{cssxref("&lt;resolution&gt;")}} type ({{bug(1460655)}}).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, and {{cssxref("shape-image-threshold")}} are now enabled by default ({{bug(1457297)}}).

#### Removals

- All [XUL `display` values](/en-US/docs/Web/CSS/display#xul_values) with the exception of `-moz-box` and `-moz-inline-box` have been removed from non-XUL documents in {{bug(1288572)}}.

### SVG

_No changes._

### JavaScript

- The {{jsxref("WebAssembly.Global()")}} constructor is now supported, along with global variables in WebAssembly ({{bug(1464656)}}).
- The {{jsxref("Array.prototype.flat()")}} and {{jsxref("Array.prototype.flatMap()")}} methods are now enabled by default ({{bug(1435813)}}).
- The [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) property has been implemented to expose context-specific metadata to a JavaScript module ({{bug(1427610)}}).
- JavaScript [string literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) may now directly contain the U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR characters. As a consequence, {{jsxref("JSON")}} syntax is now a subset of JavaScript literal syntax (see {{bug(1435828)}} and the TC39 proposal [json-superset](https://github.com/tc39/proposal-json-superset)).
- For out-of-bounds [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) indexes, {{jsxref("Reflect.defineProperty()")}} and {{jsxref("Reflect.set()")}} will now return `false` instead of `true` ({{bug(1308735)}}).

#### Removals

- The `DOMPoint` and `DOMPointReadOnly` constructors no longer support an input parameter of type `DOMPointInit`; the values of the properties must be specified using the `x`, `y`, `z`, and `w` parameters ({{bug(1186265)}}).
- The {{domxref("URL.createObjectURL()")}} method no longer supports creating object URLs to represent a {{domxref("MediaStream")}}. This capability has been obsolete for some time, since you can now set {{domxref("HTMLMediaElement.srcObject")}} to the `MediaStream` directly ({{bug(1454889)}}).

### APIs

#### New APIs

- The {{domxref("Web_Speech_API", "Speech Synthesis API (Text-to-Speech)", "", "1")}} is now enabled by default on Firefox for Android ({{bug(1463496)}}).

#### DOM

- The {{domxref("DOMPointReadOnly")}} interface now supports the static function {{domxref("DOMPointReadOnly.fromPoint()")}}, which creates a new point object from a dictionary that's compatible with {{domxref("DOMPointInit")}}, which includes any {{domxref("DOMPoint")}} object. This function is also available on {{domxref("DOMPoint")}} ({{bug(1186265)}}).
- For compatibility purposes, the {{domxref("Event.srcElement")}} property is now supported. It is an alias for {{domxref("Event.target")}} ({{bug(453968)}}).
- {{domxref("Navigator.registerProtocolHandler()")}} now must only be called from a secure context ({{bug(1460506)}}).
- The {{domxref("Navigator.registerContentHandler()")}} method has been disabled by default in preparation for being removed entirely, as it's been obsolete for some time ({{bug(1460481)}}).
- The {{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} constructor has been implemented ({{bug(1351193)}}).
- {{domxref("Document.domain")}} can no longer return `null` ({{bug(819475)}}). If the domain cannot be identified, then `domain` returns an empty string instead of `null`.
- Added the {{domxref("console.timeLog()")}} method to display the current value of a console timer while continuing to track the time ({{bug(1458466)}}).
- Added {{domxref("console.countReset()")}} to reset a console counter value ({{bug(1459279)}}).

#### DOM events

_No changes._

#### Service workers

_No changes._

#### Media, Web Audio, and WebRTC

- The `"media.autoplay.enabled"` preference now controls automatic playback of both audio and video media, instead of just video media ({{bug(1413098)}}).
- The {{domxref("ChannelSplitterNode")}} has been fixed to correctly default to having 6 channels with the `channelInterpretation` set to `"discrete"` and the `channelCountMode` set to `"explicit"`, as per the specification ({{bug(1456265)}}).

#### Removals

- The `userproximity` and `deviceproximity` events, as well as the `UserProximityEvent` and `DeviceProximityEvent` interfaces, have been disabled by default behind the `device.sensors.proximity.enabled` preference ({{bug(1462308)}}).
- The `devicelight` event of type `DeviceLightEvent` has been disabled by default behind the `device.sensors.ambientLight.enabled` preference ({{bug(1462308)}}).
- The `DOMSubtreeModified` and `DOMAttrModified` [mutation events](/en-US/docs/Web/API/MutationEvent) are no longer thrown when the {{htmlattrxref("style")}} attribute is changed via the CSSOM ({{bug(1460295)}}.
- Support for {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} has been removed ({{bug(1408301)}}).
- Support for {{domxref("CSSValue")}}, {{domxref("CSSPrimitiveValue")}}, and {{domxref("CSSValueList")}} has been removed ({{bug(1459871)}}).
- {{domxref("window.getComputedStyle()")}} no longer returns `null` when called on a `Window` which has no presentation ({{bug(1467722)}}).

### HTTP

#### Removals

- The deprecated CSP {{CSP("referrer")}} directive has been removed. Please use the {{HTTPHeader("Referrer-Policy")}} header instead ({{bug(1302449)}}).

### Security

_No changes._

### Plugins

_No changes._

### WebDriver conformance (Marionette)

#### New features

- Command `WebDriver:ElementSendKeys` has been made WebDriver conforming for file uploads ({{bug(1448792)}}).
- User prompts as raised by `beforeunload` events are automatically dismissed for `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, and `WebDriver:Close` commands ({{bug(1434872)}}).
- `WebDriver:PerformActions` for `Ctrl` + `Click` synthesizes a {{domxref("Element/contextmenu_event", "contextmenu")}} event ({{bug(1421323)}}).

#### API changes

- Removed obsolete endpoints including `getWindowPosition`, `setWindowPosition`, `getWindowSize`, and `setWindowSize` ({{bug(1348145)}}).
- WebDriver commands which return success with data `null` now return an empty dictionary ({{bug(1461463)}}).

#### Bug fixes

- `WebDriver:ExecuteScript` caused cyclic reference error for [WebElement](/en-US/docs/Web/WebDriver/WebElement) collections ({{bug(1447977)}}).
- Dispatching a `pointerMove` or `pause` action primitive could cause a hang, and the command to never send a reply ({{bug(1467743)}}, {{bug(1447449)}}).

### Other

_No changes._

## Changes for add-on developers

### API changes

- Added the {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API to examine details of TLS connections ({{bug(1322748)}}).
- Added the {{WebExtAPIRef("browserSettings.newTabPosition")}} to customize where new tabs open ({{bug(1344749)}}).
- `windowTypes` has been deprecated in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, and {{WebExtAPIRef("windows.getLastFocused()")}} ({{bug(1419132)}}).
- It's now possible to modify a browser action on a per-window basis ({{bug(1419893)}}).

### Manifest changes

- New `open_at_install` property of the [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest key enables extensions to control whether their sidebars should open automatically on install or not ({{bug(1460910)}}).
- Changes to the `browser_style` property of various manifest keys:

  - In [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) and [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) it defaults to `false`.
  - In [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) and [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) it defaults to `true`.

### Theme changes

- New `tab_background_separator` property of the [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key enables extensions to change the color of the tab separator ({{bug(1459455)}}).

### Removals

- Support for unpacked sideloaded extensions has been removed ({{bug(1385057)}}).
- The warning about `browser_style` displayed when temporarily loading an extension for testing is no longer displayed ({{bug(1404724)}}).

## Older versions

{{Firefox_for_developers(61)}}
