---
title: Firefox 63 for developers
slug: Mozilla/Firefox/Releases/63
tags:
  - '63'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 63 that will affect developers. Firefox 63 was released on October 23, 2018.

## Changes for web developers

### Developer tools

- The Fonts tab in the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) now includes an editor that makes it easy to view and edit the settings of the fonts on your page. See [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) for details.
- The [Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) is now enabled by default ({{bug(1482454)}}).
- When you hover over an object in the [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), [the item is highlighted](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) and its role and name will be shown in an information bar on the page ({{bug(1473030)}}).
- The command line in the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) is now shown immediately following the console output ({{bug(1136299)}}).
- A new icon has been added to the content in the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) to indicate when a URL belongs to a known tracker — see [security icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ({{bug(1333994)}}).
- The default value of `devtools.aboutdebugging.showSystemAddons` is now `false`, meaning that system add-ons will not be listed on the `about:debugging` page. You can change the settings by navigating to `about:config` ({{bug(1425347)}}).
- The [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) toolbar was simplified, and we added the option to left-align the viewport.
- The Page Inspector includes a [link to the class definition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) for a custom element. ({{bug(1443923)}}).

### HTML

- Support for the {{HTMLElement("img")}} element's `decoding` attribute has been added ({{bug(1416328)}}); see also {{DOMxRef("HTMLImageElement.decoding")}}.

#### Removals

- Support for the `sidebar` link type (`rel="sidebar"`) has been removed. If an anchor tag includes this attribute, it will be ignored ({{bug(1452645)}}).

### CSS

- Support for the {{CSSxRef(":defined")}} pseudo-class has been added ({{bug(1331334)}}).
- Support for {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} and {{CSSxRef("gap")}} have been added in [Flexbox layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox#the_gap_properties) ({{bug(1398483)}}).
- Re-enabled support for [webkit-prefixed pixel-density @media queries](/en-US/docs/Web/CSS/@media/-webkit-device-pixel-ratio) ({{bug(1444139)}}).
- Support added for the [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) (Flexbox) properties {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, and {{CSSxRef("align-items")}} as well as the {{CSSxRef("justify-content")}} property ({{bug(1472843)}}).
- Implemented the `path()` function for {{CSSxRef("offset-path")}} ({{bug(1429298)}}).
- Implemented [syntax improvements from the Media Queries Level 4 specification](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4) ({{bug(1472843)}}).
- Renamed `offset-*` properties to {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, and {{CSSxRef("inset-inline-end")}} ({{bug(1464782)}}).
- Added support for the [prefers-reduced-motion](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media feature ({{bug(1365045)}}, {{bug(1475462)}}).
- Added flow relative values (`block`, `inline`) for the {{CSSxRef("resize")}} property ({{bug(1464786)}}).
- Implemented flexbox layout for `safe` & `unsafe` values in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, and {{CSSxRef("justify-content")}} ({{bug(1297774)}}).
- The [logical properties](/en-US/docs/Web/CSS/CSS_Logical_Properties) (where appropriate) are now animatable ({{bug(1309752)}}).

#### Removals

- Removed `offset-block-start`, `offset-block-end`, `offset-inline-start`, and `offset-inline-end`; these have been renamed to `inset-*`, as described above ({{bug(1464782)}}).

### SVG

_No changes._

### JavaScript

- The {{JSxRef("Symbol.prototype.description")}} property has been implemented ({{bug(1472170)}}).
- The {{JSxRef("Object.fromEntries()")}} method has been added ({{bug(1469019)}}).
- When you try to access a property of an undefined object, the error message is now much improved. Considering the case where `x` is undefined and you try to access `x.y`, instead of `TypeError: x is undefined` the console now returns the more descriptive [`x is undefined; can't access its "y" property`](/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_property) ({{bug(1259822)}}).

#### Removals

- Experimental WebAssembly Module IndexedDB serialization support has been removed ({{bug(1469395)}}).

### APIs

#### New APIs

- The Shadow DOM ({{bug(1471947)}}) and Custom Elements ({{bug(1471948)}}) APIs have been enabled by default; See [Web components](/en-US/docs/Web/Web_Components) for more details.
- The {{domxref("Media_Capabilities_API", "Media Capabilities API", "", "1")}} has been implemented ({{bug(1409664)}}).
- The {{domxref("Clipboard", "Async Clipboard API", "", "1")}} has been implemented and enabled by default for all channels ({{bug(1461465)}}). As is the case with Chrome, Firefox currently implements only the {{domxref("Clipboard.writeText", "writeText()")}} and {{domxref("Clipboard.readText", "readText()")}} methods; however, unlike Chrome, `readText()` is only available in [browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).
- The {{DOMxRef("SecurityPolicyViolationEvent")}} interface is now supported. It allows sending events when the {{HTTPHeader("Content-Security-Policy")}} is violated ({{bug(1472661)}}).

#### DOM

- The following portions of the {{domxref("Web_Animations_API", "Web Animations API", "", "1")}} have been enabled by default (see {{bug(1476158)}}):

  - The {{DOMxRef("Animation")}} properties {{DOMxRef("Animation.ready", "ready")}} and {{DOMxRef("Animation.finished", "finished")}}, specifying the `Animation` object's `ready` and `finished` {{JSxRef("Promise")}}s.
  - The {{DOMxRef("Animation")}} object's {{DOMxRef("Animation.effect", "effect")}} property.
  - The interfaces {{DOMxRef("KeyframeEffect")}} and {{DOMxRef("AnimationEffect")}}.

- The {{DOMxRef("Element.toggleAttribute()")}} method has been implemented ({{bug(1469592)}}).
- The historical, previously non-standard, {{DOMxRef("Event.returnValue")}} property is now supported for compatibility purposes ({{bug(1452569)}}).
- We implemented the {{DOMxRef("Window.event")}} property to improve web compatibility, now that it's become standard ({{bug(218415)}}). However, due to some web compat issues (e.g. {{bug(1479964)}}), this was quickly disabled in non-Nightly channels, hidden behind the `dom.window.event.enabled` pref ({{bug(1493869)}}).
- To bring Firefox into alignment with Edge and Chrome, the {{DOMxRef("Navigator/platform", "navigator.platform")}} property now returns `"Win32"` even when running on 64-bit Windows ({{bug(1472618)}}).
- Prior to Firefox 63, links that open new windows that had `rel="noopener"`, as well as calls to {{DOMxRef("Window.open()")}} with the [`noopener`](/en-US/docs/Web/API/Window/open) window feature enabled would default to having all window features disabled so that you had to explicitly re-enable any standard features you wanted. Now, these windows have the same set of features enabled like any other window, and you need to explicitly turn off any you don't want ({{bug(1419960)}}).

#### DOM events

- Handling of the `Alt` key _on the right side_ of the keyboard has been improved on Windows. If the user's current keyboard layout maps the `Alt` key to the `AltGr` modifier key, the value of {{DOMxRef("KeyboardEvent.key")}} is now reported as `"AltGraph"`. This behavior matches the behavior recently introduced in Chrome ({{bug(900750)}}).

#### Media, Web Audio, and WebRTC

- Microphone access now works simultaneously in multiple tabs, even within the same content process ({{bug(1404977)}}).
- {{DOMxRef("RTCDataChannel")}} has been updated to support the sctp-sdp-21 data format for the data, in addition to the older sctp-sdp-05 format previously supported.
- The {{DOMxRef("ConstantSourceNode")}} node type for Web Audio API now has a default channel count of 2 rather than 1, in order to match the specification ({{bug(1413283)}}).
- The {{domxref("Web_Audio_API", "Web Audio API", "", "1")}} interface {{DOMxRef("AudioScheduledSourceNode")}} (and by extension, all the other node types based on it) now throw the correct exception when a negative value is specified for the node start time. That error is `RangeError` ({{bug(1413284)}}).
- The minimum and maximum permitted values for an {{DOMxRef("AudioParam")}} object's {{DOMxRef("AudioParam.value", "value")}} have been changed to the minimum negative single-precision floating-point value (-340,282,346,638,528,859,811,704,183,484,516,925,440) and the maximum positive single-precision floating-point value (+340,282,346,638,528,859,811,704,183,484,516,925,440) respectively ({{bug(1476695)}}).
- The {{DOMxRef("SourceBuffer.changeType")}} method, which allows you to change codecs during an active stream, has been enabled by default. This is part of the {{domxref("Media_Source_Extensions_API", "Media Source Extensions API", "", "1")}} ({{bug(1481166)}}).
- The {{DOMxRef("AudioParam.setValueCurveAtTime()")}} method has been updated to correctly accept an array of floating-point values to indicate the parameter's values to change to over time. Previously, it required a {{jsxref("Float32Array")}} ({{bug(1421091)}}).
- {{DOMxRef("AudioParam.setValueCurveAtTime()")}} has also been updated to correctly return a proper `TypeError` when a non-finite value is found in the `values` array ({{bug(1472095)}}).
- In addition, `setValueCurveAtTime()` has been updated to ensure that, when the parameter finishes following the specified value curve after the duration elapses, the value of the parameter is set to the last value in the list of values to curve through ({{bug(1308436)}}).
- The `RTCRTPStreamStats` dictionary has been renamed to {{DOMxRef("RTCRtpStreamStats")}} for consistency with other WebRTC dictionaries and the specification ({{bug(1480498)}}).
- Support for the `RTCRtpStreamStats` dictionary's {{DOMxRef("RTCRtpStreamStats.kind", "kind")}} property has been added ({{bug(1481851)}}).
- The `RTCRtpStreamStats` dictionary's `isRemote` property is deprecated and will be removed in Firefox 65. A warning is now output to console when this property is accessed. See [this blog post on the Advancing WebRTC blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) for details ({{bug(1393306)}}).

#### Canvas and WebGL

- A new `powerPreference` context attribute has been added to {{DOMxRef("HTMLCanvasElement.getContext()")}}. On macOS this allows WebGL non-performance-critical applications and applets to request the low-power GPU instead of the high-power GPU in multi-GPU systems ({{bug(1349799)}}).

#### Removals

- The obsolete and non-standard Firefox-only methods {{DOMxRef("Window.back()")}} and {{DOMxRef("Window.forward()")}} have been removed. Please use the {{DOMxRef("History.back", "window.history.back()")}} and {{DOMxRef("History.forward", "window.history.forward()")}} methods instead ({{bug(1479486)}}).
- The {{DOMxRef("URL.createObjectURL", "createObjectURL()")}} and {{DOMxRef("URL.revokeObjectURL", "revokeObjectURL()")}} methods are no longer available on {{DOMxRef("ServiceWorker")}} instances due to the potential they introduced for memory leaks to occur ({{bug(1264182)}}).
- Since it was deprecated in the specification anyway, the limited support for Doppler effects on {{DOMxRef("PannerNode")}} has been removed from the Web Audio API. The {{DOMxRef("AudioListener")}} properties {{DOMxRef("AudioListener.dopplerFactor", "dopplerFactor")}} and {{DOMxRef("AudioListener.speedOfSound", "speedOfSound")}} have been removed, along with the `PannerNode` method {{DOMxRef("PannerNode.setVelocity", "setVelocity()")}} ({{bug(1148354)}}).

### CSSOM

_No changes._

### HTTP

- The {{HTTPHeader("Clear-Site-Data")}} header is implemented and no longer behind a preference ({{bug(1470111)}}).

### Security

- Site favicons are now subject to [Content Security Policy](/en-US/docs/Web/HTTP/CSP) if one is configured for the site ({{bug(1297156)}}).
- CSP `script-src` directive's `'report-sample'` expression now recognized when generating violation reports. This directive indicates that a short sample of where the violation occurred should be included in the report. Previously, Firefox always included this sample ({{bug(1473218)}}).
- Firefox now uses NSS 3.39 ({{bug(1470914)}}).

### Plugins

_No changes._

### WebDriver conformance (Marionette)

#### New features

- Marionette now returns a `setWindowRect` [capability](/en-US/docs/Web/WebDriver/Capabilities) in the `WebDriver:NewSession` response that is true if the browser window can be repositioned and resized, which e.g. is the case for Firefox but not any mobile applications ({{bug(1470659)}}).
- Added support for the `unhandledPromptBehavior` capability, which allows to define a specific [prompt behavior](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) of the WebDriver specification ({{bug(1264259)}}).
- Handling of user prompts has been added to the `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` commands ({{bug(1439995)}}).

#### API changes

- Deprecated command end-points without the `WebDriver:` prefix have been removed ({{bug(1451725)}}).
- The `WebDriver:NewSession` command returns recommended strings (`linux`, `mac`, `windows`) for `platformName` as defined in the WebDriver specification ({{bug(1470646)}}).

#### Bug fixes

- Focus related events were missing on element interaction when Firefox was not running as the top-most application ({{bug(1398111)}}).
- Performing a `pointerDown` and `pointerUp` action in a subsequent action sequence could trigger a double click because `WebDriver:ReleaseActions` didn't reset the double click tracker ({{bug(1422583)}}).
- Executing `pause` actions repeatedly could cause an infinite hang ({{bug(1447449)}}).
- Fixed a bug where returning an element collection from `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` would cause a cyclic reference error ({{bug(1447977)}}).
- To prevent a race condition both the `WebDriver:AcceptAlert` and `WebDriver:DismissAlert` commands now wait until the user prompt has been closed ({{bug(1479368)}}).
- Log entries as emitted by the frame script were no longer limited by `MarionettePrefs.logLevel` but logged everything ({{bug(1482829)}}).
- `WebDriver:TakeScreenshot` raised an error when taking a screenshot of a window larger than 32767 pixels in width or height ({{bug(1485730)}}).
- `WebDriver:SendAlertText` didn't replace default user prompt value if text to send is an empty string ({{bug(1486485)}}).

### Other

- Corrected the behavior of {{DOMxRef("PerformanceObserver.observe()")}} to do nothing if no valid entry types are found in the specified array of entry types to observe, or if the array is empty or missing. Previously, Firefox was incorrectly throwing a `TypeError` ({{bug(1403027)}}).
- In [OpenSearch](/en-US/docs/Web/OpenSearch), Firefox now accepts `application/json` as a search URL type, as an alias of `application/x-suggestions+json` ({{bug(1425827)}}).

## Changes for add-on developers

### API changes

#### Theming

- The default text color for {{WebExtAPIRef("browserAction")}} badges is now automatically set to black or white, to maximize contrast with the background ({{bug(1474110)}}).
- The `accentcolor` and `textcolor` properties of the [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key are now optional ({{bug(1413144)}}).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} and {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} enable you to get and set the text color of browser action badges ({{bug(1424620)}}).
- The theme `colors` key in `manifest.json` now supports the `ntp_text` property to set the text color in a new tab, and the `ntp_background` property to set the color of a new tab ({{bug(1347204)}}).
- Themes can now define the colors for sidebars, such as the bookmarks sidebar ({{bug(1418602)}}). The relevant properties include:

  - `sidebar`: The background color for sidebars.
  - `sidebar_text`: The text color for sidebars.
  - `sidebar_highlight`: The background color of a selected item in a sidebar.
  - `sidebar_highlight_text`: The text color of a selected item in a sidebar.

- The method {{WebExtAPIRef("management.install()")}} allows web extensions to install and enable signed browser themes ({{bug(1369209)}}).
- The manifest key [theme_experiment](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) was introduced ({{bug(1472740)}}). This key enables the definition of experimental [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) key properties for the Firefox interface.

#### Search

- The new {{WebExtAPIRef("search")}} AP[I](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/search) enables you to retrieve the list of installed search engines and perform searches with them ({{bug(1352598)}}).
- {{WebExtAPIRef("topSites.get()")}} now takes an `options` parameter enabling you to set various options for the list of sites returned ({{bug(1445836)}}).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} now supports multi-select ({{bug(1474440)}}).
- {{WebExtAPIRef("tabs.highlight")}} now includes an optional field in the `highlightInfo` object — `populate` — which defaults to `true`. Setting it to `false` prevents the returned `windows.Window` object from being populated with a list of tabs, to improve performance ({{bug(1489814)}}).
- {{WebExtAPIRef("tabs.update")}} now supports changing the selection status of a tab by including `highlighted: true` in the `updateProperties` parameter ({{bug(1479129)}}).
- {{WebExtAPIRef("tabs.update")}} now supports changing the selection status of a tab without changing the focused tab ({{bug(1486050)}}) by including both `highlighted: true` and `active: false` in the `updateProperties` parameter.
- {{WebExtAPIRef("tabs.query")}} now returns an array of {{WebExtAPIRef("tabs.Tab")}} objects if multiple tabs are selected ({{bug(1465170)}}).
- The {{WebExtAPIRef("tabs.Tab")}} property now properly reflects which tabs in a browser window are selected (highlighted) and {{WebExtAPIRef("tabs.highlight")}} supports changing the highlighted status of multiple tabs ({{bug(1464862)}}).
- The `isarticle` property in the `extraParameters` object passed into {{WebExtAPIRef("tabs.onUpdated")}} has been renamed to `isArticle`. The old name is retained but deprecated. This change was uplifted to Firefox 62 ({{bug(1461695)}}).
- The {{WebExtAPIRef('tabs.onUpdated')}} event can be used to track when a tab is drawing the user's attention with `attention` property of the `changeInfo` object ({{bug(1396684)}}).

#### Menus

- Added {{WebExtApiRef("menus.getTargetElement()")}} to the {{WebExtApiRef("menus")}} API. The method returns the element referenced by the `targetElementId` parameter that identifies the clicked element. If the `targetElementId` is no longer valid, the method returns null ({{bug(1325814)}}).
- {{WebExtAPIRef("menus.create()")}} now enables you to create invisible menu items, and {{WebExtAPIRef("menus.update()")}} enables you to toggle menu item visibility ({{bug(1482529)}}).
- Items created using the {{WebExtAPIRef("menus")}} API now support access keys ({{bug(1320462)}}).
- The `targetUrlPatterns` parameter of {{WebExtApiRef("menus.create()")}} and {{WebExtApiRef("menus.update()")}} now supports any URL scheme, even those that are usually not allowed in a match pattern ({{bug(1280370)}}).
- When a tab context menu item is clicked, the ["activeTab" permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) is now granted for that tab, even if that's not the currently active tab ({{bug(1446956)}}).

#### Other

- {{WebExtAPIRef("commands.onCommand")}} is now treated as [user input](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions) ({{bug(1408129)}}).
- The {{WebExtAPIRef("webRequest")}} API now enables you to filter for speculative connections ({{bug(1479565)}}).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} adds two new properties, `keaGroupName`, and `signatureSchemeName`. This change was uplifted to Firefox 62 ({{bug(1471959)}}).
- {{WebExtAPIRef("cookies.Cookie")}} now includes a property indicating the SameSite state of the cookie. The {{WebExtAPIRef("cookies.SameSiteStatus")}} enumeration defines SameSite state values ({{bug(1351663)}}).
- Match patterns for URLs now explicitly match the "data" URL scheme ({{bug(1280370)}}).

## Older versions

{{Firefox_for_developers(62)}}
