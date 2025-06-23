---
title: Firefox 64 for developers
slug: Mozilla/Firefox/Releases/64
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 64 that will affect developers. Firefox 64 was released on December 11, 2018.

## Changes for web developers

### Developer tools

- The [Accessibility info-bar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) has been enhanced to include information about the color contrast ratio of text or images on the page ([Firefox bug 1473037](https://bugzil.la/1473037)).
- [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) device selection is now saved between sessions ([Firefox bug 1248619](https://bugzil.la/1248619)).
- Resources that are potentially affected by [Tracking Protection](/en-US/docs/Web/Privacy/Guides/Firefox_tracking_protection) are now indicated in the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ([Firefox bug 1333994](https://bugzil.la/1333994)).
- The [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) got improvements around entering and evaluating code:

  - [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) for Console expressions is now case-insensitive ([Firefox bug 672733](https://bugzil.la/672733)).
  - You can now step through the [Console expression history](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) with bash-like reverse search ([Firefox bug 1024913](https://bugzil.la/1024913)).
  - [Evaluated code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in the Console is now syntax-highlighted in both the input and output ([Firefox bug 1463669](https://bugzil.la/1463669)).

- Stepping in the [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) also had some improvements:

  - [Stepping out](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) of a function in the Debugger now skips the return value ([Firefox bug 923975](https://bugzil.la/923975)).

#### Removals

- The Developer Tools GCLI has been removed ([Firefox bug 1429421](https://bugzil.la/1429421)).

### HTML

_No changes._

### CSS

- [CSS Scrollbars](/en-US/docs/Web/CSS/CSS_scrollbars_styling) spec functionality has been enabled by default ([Firefox bug 1492012](https://bugzil.la/1492012)).
- Interaction Media Features implemented, including [`pointer:coarse`](/en-US/docs/Web/CSS/@media/pointer) ([Firefox bug 1035774](https://bugzil.la/1035774)). For [`any-pointer`](/en-US/docs/Web/CSS/@media/any-pointer) and [`any-hover`](/en-US/docs/Web/CSS/@media/any-hover) implementation, see [Firefox bug 1483111](https://bugzil.la/1483111).
- The [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media feature is now supported in Firefox for Android ([Firefox bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} values now support multi-position color stop syntax, e.g., `yellow 25%, yellow 50%` can now be written `yellow 25% 50%` ([Firefox bug 1352643](https://bugzil.la/1352643)).
- The {{cssxref("text-transform")}} property now accepts the `full-size-kana` value ([Firefox bug 1498148](https://bugzil.la/1498148)).
- Support added for {{cssxref("appearance", "-webkit-appearance")}} to alleviate associated web compat issues ([Firefox bug 1368555](https://bugzil.la/1368555)).
- Closely associated with the above update, we've also removed most of the Firefox-specific `-moz-appearance` values ([Firefox bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` is now supported on {{htmlelement("legend")}} elements ([Firefox bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, as usable in {{cssxref("offset-path")}}, are now animatable ([Firefox bug 1486094](https://bugzil.la/1486094)).
- If a selector chain or group includes a `-webkit-`-prefixed pseudo-element, that pseudo-element no longer invalidates it (see [Firefox bug 1424106](https://bugzil.la/1424106) for the details, and [Firefox bug 1486325](https://bugzil.la/1486325) for enabling this feature).

#### Removals

- The non-standard `-moz-box` and `-moz-inline-box` {{CSSxRef("display")}} values have been hidden from web content ([Firefox bug 1496961](https://bugzil.la/1496961)).
- The non-standard `::-moz-tree` [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) has been hidden from web content ([Firefox bug 1496961](https://bugzil.la/1496961)).
- The `layout.css.filters.enabled` preference has been removed; [CSS filters](/en-US/docs/Web/CSS/CSS_filter_effects) can no longer be disabled ([Firefox bug 1408841](https://bugzil.la/1408841)).
- A previous change — to swap the values of the 2-value {{cssxref("overflow")}} syntax so block is specified first and inline second ([Firefox bug 1481866](https://bugzil.la/1481866)) — has been reverted ([Firefox bug 1492567](https://bugzil.la/1492567)). See [Bug 1481866 comment 14](https://bugzil.la/1481866#c14) for why.

### SVG

_No changes._

### JavaScript

- The TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) proposal has been implemented, to prevent {{jsxref("JSON.stringify")}} from returning ill-formed Unicode strings ([Firefox bug 1469021](https://bugzil.la/1469021)).
- Proxied functions can now be used with {{jsxref("Function.prototype.toString")}} ([Firefox bug 1440468](https://bugzil.la/1440468)).
- In the [`WebAssembly.Global()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) constructor, if no value is specified a typed 0 value is used. This is specified by the [`DefaultValue` algorithm](https://webassembly.github.io/spec/js-api/#defaultvalue) ([Firefox bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- A number of changes related to the {{domxref("Fullscreen_API", "Fullscreen API", "", "1")}} have been implemented:

  - The API has been unprefixed ([Firefox bug 1269276](https://bugzil.la/1269276)).
  - The {{domxref("Element.requestFullscreen()")}} and {{domxref("Document.exitFullscreen()")}} methods both now return a {{jsxref("Promise")}}, which is resolved when the mode change is complete ([Firefox bug 1188256](https://bugzil.la/1188256) and [Firefox bug 1491212](https://bugzil.la/1491212)).
  - Previously, {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} and {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} events were dispatched to the {{domxref("Document")}} first, then the {{domxref("Element")}}. This has been reversed so that the element gets the event first. This matches the latest specification as well as the behavior of Google Chrome ([Firefox bug 1375319](https://bugzil.la/1375319)).

- The {{domxref("WebVR_API", "WebVR API", "", "1")}} (1.1) is now re-enabled in macOS ([Firefox bug 1476091](https://bugzil.la/1476091)).
- {{domxref("Window.screenLeft")}} and {{domxref("Window.screenTop")}} have been implemented, as aliases of {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} ([Firefox bug 1498860](https://bugzil.la/1498860)).
- The {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} method now returns header names all in lowercase, as per spec ([Firefox bug 1398718](https://bugzil.la/1398718)).
- The legacy `HTMLAllCollection` interface has been updated as per recent [spec updates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) ([Firefox bug 1398354](https://bugzil.la/1398354)).
- {{domxref("Navigator.buildID")}} now returns a fixed timestamp as a privacy measure ([Firefox bug 583181](https://bugzil.la/583181)).
- The following {{domxref("Document.execCommand()")}} UI feature commands have been disabled by default ([Firefox bug 1490641](https://bugzil.la/1490641):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service workers

- The {{domxref("ServiceWorkerContainer.startMessages()")}} method has been implemented ([Firefox bug 1263734](https://bugzil.la/1263734)).

#### Media, Web Audio, and WebRTC

- The {{domxref("PannerNode.refDistance")}}, {{domxref("PannerNode.maxDistance")}}, {{domxref("PannerNode.rolloffFactor")}}, and {{domxref("PannerNode.coneOuterGain")}} properties now correctly throw exceptions when set to values outside their accepted ranges ([Firefox bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` settings changed via {{domxref("RTCRtpSender.setParameters()")}} used to not update if the changes were made during a call. They will now update live, without renegotiation ([Firefox bug 1253499](https://bugzil.la/1253499)).
- {{domxref("RTCIceCandidateStats.relayProtocol")}} has been implemented — this is the standardized version of `RTCIceCandidateStats.mozLocalTransport`, which has now been deprecated ([Firefox bug 1435789](https://bugzil.la/1435789)).
- Automatic Gain Control (AGC) is now enabled by default; this can be changed using the preference `media.getusermedia.agc_enabled` ([Firefox bug 1496714](https://bugzil.la/1496714)).

#### Removals

- The {{domxref("Window.event")}} property, added in Firefox 63 to aid with web compat issues, has been put behind a pref (`dom.window.event.enabled`) and disabled by default in release versions for now due to other issues that have been uncovered ([Firefox bug 1493869](https://bugzil.la/1493869)). Note that this was actually done late in the Firefox 63 release cycle, but we are mentioning it here just in case.
- The `LocalMediaStream` interface and its `stop()` method have been removed ([Firefox bug 1258143](https://bugzil.la/1258143)). This method is no longer available with the deprecation of `LocalMediaStream`. See the [Stopping a video stream](/en-US/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream) section to learn how to stop an entire stream.
- The `AudioStreamTrack` and `VideoStreamTrack` interfaces have been removed, as both have been deprecated for some time ([Firefox bug 1377146](https://bugzil.la/1377146)). Their functionality has been merged into {{domxref("MediaStreamTrack")}}; tracks are now identified by the value of their {{domxref("MediaStreamTrack.kind", "kind")}} property, such as `audio` or `video`.

### Security

- The Symantec CA Distrust plan has been implemented (see [Firefox bug 1409257](https://bugzil.la/1409257); see also the [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) discussion for more details).
- {{httpheader("Referrer-Policy")}} can now be used to govern resources fetched via stylesheets ([Firefox bug 1330487](https://bugzil.la/1330487)) — see [Integration with CSS](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) for more information.

### Plugins

_No changes._

### WebDriver conformance (Marionette)

#### API changes

- Deprecated command end-points without the `Marionette:`, `L10n:`, or `Addon:` prefix (including `singeTap`) have been removed ([Firefox bug 1504478](https://bugzil.la/1504478), [Firefox bug 1504940](https://bugzil.la/1504940)).

#### Bug fixes

- Synthesized `Shift` key events by using `WebDriver:PerformActions` didn't result in capitalized letters ([Firefox bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` could cause an infinite hang if the tab's underlying content process is changed multiple times during that navigation ([Firefox bug 1504807](https://bugzil.la/1504807)).
- To improve the performance, and to reduce the memory footprint of Firefox the default page to be loaded for a new tab or window is no longer `about:newtab` but `about:blank` ([Firefox bug 1506643](https://bugzil.la/1506643)).
- The content blocking introduction panel, which was shown on various web pages and caused element interactions to fail is disabled by default now ([Firefox bug 1488826](https://bugzil.la/1488826)).

## Changes for add-on developers

### API changes

#### Menus

- A new API, {{WebExtAPIRef("menus.overrideContext()")}}, can be called from the `contextmenu` DOM event to set a custom context menu in extension pages. This API allows extensions to hide all default Firefox menu items in favor of providing a custom context menu UI. This context menu can consist of multiple top-level menu items from the extension, and may optionally include tab or bookmark context menu items from other extensions. See [this blog post](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) for more details.

  - {{WebExtAPIRef("menus.overrideContext()")}} was implemented in ([Firefox bug 1280347](https://bugzil.la/1280347)).
  - The `showDefaults: false` option, which can be used to hide the default context menu options, was implemented in ([Firefox bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` can now be used to match a `moz-extension://` document URL, even if {{WebExtAPIRef("menus.overrideContext()")}} is used. This way, it can reliably be used to restrict custom menu items to certain documents ([Firefox bug 1498896](https://bugzil.la/1498896)).

- You can now restrict where context menus can appear in an add-on using the new `viewTypes` property in {{WebExtAPIRef("menus.create()")}} and {{WebExtAPIRef("menus.update()")}} ([Firefox bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} can now be used to update the icon of an existing menu item ([Firefox bug 1414566](https://bugzil.la/1414566)).
- Extensions can now detect which mouse button was used when a menu item was clicked — this can be found using the new `button` property of {{WebExtAPIRef("menus.OnClickData")}} ([Firefox bug 1469148](https://bugzil.la/1469148)).

#### Windows

- The {{WebExtAPIRef("windows.create()")}} method now has a new option available — `cookieStoreId` — which specifies the `CookieStoreId` to use for all tabs that were created when the window is opened ([Firefox bug 1393570](https://bugzil.la/1393570)).

#### Privacy

- The {{WebExtAPIRef("privacy.websites")}} `cookieConfig` property is an object that can accept a `behavior` property — this property can now take a new value, `reject_trackers`, which instructs the extension to reject tracking cookies ([Firefox bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- The [`devtools.panels.elements`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` method is now supported ([Firefox bug 1398734](https://bugzil.la/1398734)).

### Manifest changes

- The new `pinned` property of the [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key enables extensions to control whether their page actions should be pinned to the location bar on install or not ([Firefox bug 1494135](https://bugzil.la/1494135)).
- In native manifests on Windows, the 32-bit registry view ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) will be checked first for registry keys, followed by the "native" registry view; you should use whichever is appropriate for your application ([Firefox bug 1494709](https://bugzil.la/1494709)).
- The [`chrome_settings_overrides`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) field's `search_provider` object can now include new properties — `suggest_url` and `suggest_url_post_params` ([Firefox bug 1486819](https://bugzil.la/1486819)), and `search_url_post_params`.

## See also

- Hacks release post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Older versions

{{Firefox_for_developers}}
