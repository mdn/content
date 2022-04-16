---
title: Firefox 58 for developers
slug: Mozilla/Firefox/Releases/58
tags:
  - '58'
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 58 that will affect developers. Firefox 58 was released on January 23, 2018.

## Changes for Web developers

### Developer Tools

- The [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) has been enabled by default for shapes generated via {{cssxref("clip-path")}} ({{bug(1405339)}}).
- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) now has a button to [pause/play recording of network traffic](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#pausing-and-resume-network-traffic-recording) ({{bug(1005755)}}).
- In the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) the "Flash" filter button is no longer available, and Flash requests are included in the "Others" filter ({{bug(1413540)}}).
- The code for the old Responsive Design Mode (enabled by default pre-Firefox 52) has now been removed from the Devtools ({{bug(1305777)}}). See [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) for information on the new tools.
- The option to view MDN docs from the CSS pane of the page inspector has been removed ({{bug(1382171)}}) (was disabled since 55, {{bug(1352801)}}).

### HTML

_No changes._

### CSS

- The {{cssxref("@font-face/font-display", "font-display")}} descriptor is now available by default on all platforms ({{bug(1317445)}}).

### SVG

_No changes._

### JavaScript

- The {{jsxref("Promise.prototype.finally()")}} method has been implemented ({{bug(1019116)}}).
- The {{jsxref("Intl/PluralRules", "Intl.PluralRules")}} object has been implemented ({{bug(1403318)}}).
- The {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} method has been implemented ({{bug(1403319)}}).
- The {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} object now supports the `hourCycle` option and the `hc` language tag ({{bug(1386146)}}).
- The [optional catch binding proposal](https://github.com/tc39/proposal-optional-catch-binding) has been implemented ({{bug(1380881)}}).

### APIs

#### New APIs

- The {{domxref("PerformanceNavigationTiming")}} API has been implemented ({{bug(1263722)}}).

  - Gecko has also been given a pref that can be used to disable the interface if required — `dom.enable_performance_navigation_timing`, defaulting to `true` ({{bug(1403926)}}).

#### DOM

- Errors reported via error objects in certain APIs — for example in the `error` property of {{domxref("FileReader")}}, {{domxref("IDBRequest")}}, and {{domxref("IDBTransaction")}}, and when requests made via certain methods of {{domxref("RTCPeerConnection")}} are unsuccessful — are now represented by {{domxref("DOMException")}} instances. {{domxref("DOMError")}} is now deprecated, having been removed from the DOM4 spec ({{bug(1120178)}}).
- The {{domxref("PerformanceResourceTiming.workerStart")}} property is now supported ({{bug(1191943)}}).
- Budget-based background timeout throttling has been implemented — see [Policies in place to aid background page performance](/en-US/docs/Web/API/Page_Visibility_API#policies_in_place_to_aid_background_page_performance) for more details ({{bug(1377766)}}).

#### DOM events

_No changes._

#### Media and WebRTC

- The prefixed version of {{domxref("HTMLMediaElement.srcObject")}} has been removed; make sure code is updated to use the standard `srcObject` instead of `mozSrcObject` ({{bug(1183495)}}).
- Using {{domxref("MediaStream.addTrack()")}} to add tracks to a stream obtained using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, then attempting to record the resulting stream now works as expected. Previously, only the tracks originally included in the stream returned by `getUserMedia()` were being included in the recorded media ({{bug(1296531)}}).
- The [WebVTT](/en-US/docs/Web/API/WebVTT_API) {{domxref("VTTRegion")}} interface has always been created when interpreting WebVTT files, but the resulting regions were not previously utilized. Starting in Firefox 58, they are, if you enable the preference `media.webvtt.regions.enabled` by setting its value to `true`.

#### Canvas and WebGL

- Support for prefixed WebGL extensions has been removed ({{bug(1403413)}}):

  - For `MOZ_WEBGL_compressed_texture_atc` use `WEBGL_compressed_texture_atc` instead.
  - For `MOZ_WEBGL_compressed_texture_pvrtc` use {{domxref("WEBGL_compressed_texture_pvrtc")}} instead.
  - For `MOZ_WEBGL_compressed_texture_s3tc` use {{domxref("WEBGL_compressed_texture_s3tc")}} instead.
  - For `MOZ_WEBGL_depth_texture` use {{domxref("WEBGL_depth_texture")}} instead.
  - For `MOZ_WEBGL_lose_context` use {{domxref("WEBGL_lose_context")}} instead.

### HTTP

- [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) is no longer ignored in {{httpheader("Content-Security-Policy-Report-Only")}} ({{bug(1380755)}}).
- Firefox now implements a TLS handshake timeout with a default value of 30 seconds. The timeout value can be varied by editing the `network.http.tls-handshake-timeout` pref in about:config ({{bug(1393691)}}).
- The [`worker-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) CSP directive has been implemented ({{bug(1302667)}}).
- The [425: Too Early](/en-US/docs/Web/HTTP/Status/425) status code and related {{httpheader("Early-Data")}} request header are now supported ({{bug(1406908)}}).

### Security

_No changes._

### Plugins

_No changes._

### Other

- "Add to home screen" is now supported in Firefox for Android, part of the [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) effort ({{bug(1212648)}}).
- [WebAssembly](/en-US/docs/WebAssembly) now has a tiered compiler providing load time optimizations ({{bug(1277562)}}), and new streaming APIs — {{jsxref("WebAssembly.compileStreaming()")}} and {{jsxref("WebAssembly.installStreaming()")}} {{bug(1347644)}}.

## Removals from the web platform

### HTML

- You can no longer nest an {{htmlelement("a")}} element inside a {{htmlelement("map")}} element to create a hotspot region — an {{htmlelement("area")}} element needs to be used instead ({{bug(1317937)}}).

### CSS

- The following proprietary Mozilla system metric pseudo-classes are no longer available to web content ({{bug(1396066)}}):

  - {{Cssxref(":-moz-system-metric(images-in-menus)")}}
  - {{Cssxref(":-moz-system-metric(mac-graphite-theme)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-thumb-proportional)")}}
  - {{Cssxref(":-moz-system-metric(touch-enabled)")}}
  - {{Cssxref(":-moz-system-metric(windows-default-theme)")}}

- The following proprietary Mozilla media features are no longer available to web content ({{bug(1396066)}}):

  - `-moz-color-picker-available`
  - `-moz-is-glyph`
  - [`-moz-mac-graphite-theme`](/en-US/docs/Web/CSS/@media/-moz-mac-graphite-theme)
  - `-moz-mac-yosemite-theme`
  - [`-moz-os-version`](/en-US/docs/Web/CSS/@media/-moz-os-version)
  - `-moz-overlay-scrollbars`
  - `-moz-physical-home-button`
  - [`-moz-scrollbar-end-backward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-end-backward)
  - [`-moz-scrollbar-end-forward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-end-forward)
  - [`-moz-scrollbar-start-backward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-start-backward)
  - [`-moz-scrollbar-start-forward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-start-forward)
  - [`-moz-scrollbar-thumb-proportional`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-thumb-proportional)
  - `-moz-swipe-animation-enabled`
  - [`-moz-windows-accent-color-in-titlebar`](/en-US/docs/Web/CSS/@media/-moz-windows-accent-color-in-titlebar)
  - [`-moz-windows-classic`](/en-US/docs/Web/CSS/@media/-moz-windows-classic)
  - [`-moz-windows-compositor`](/en-US/docs/Web/CSS/@media/-moz-windows-compositor)
  - [`-moz-windows-default-theme`](/en-US/docs/Web/CSS/@media/-moz-windows-default-theme)
  - [`-moz-windows-glass`](/en-US/docs/Web/CSS/@media/-moz-windows-glass)
  - [`-moz-windows-theme`](/en-US/docs/Web/CSS/@media/-moz-windows-theme)

- The proprietary Mozilla `:-moz-styleeditor-transitioning` pseudo-class is no longer available to web content ({{bug(1396099)}}).

### JavaScript

- The non-standard {{jsxref("Date.prototype.toLocaleFormat()")}} method has been removed ({{bug(818634)}}). See [Warning: Date.prototype.toLocaleFormat is deprecated](/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat) for more information and migration help.
- The non-standard and deprecated {{jsxref("Object.prototype.watch()")}} and {{jsxref("Object.prototype.unwatch", "unwatch()")}} methods have been removed and will no longer work ({{bug(638054)}}). Consider using [setters and getters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters) or [proxies](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) instead.
- The [legacy Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol), the [`StopIteration`](/en-US/docs/Archive/Web/StopIteration) object, the [legacy generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) and the non-standard {{jsxref("Function.prototype.isGenerator()")}} method have been removed. Use the ES2015 [iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and standards-compliant [iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) instead ({{bug(1083482)}}, {{bug(1413867)}}, {{bug(1119777)}}).
- The non-standard [Array comprehensions](/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) and [Generator comprehensions](/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) have been removed ({{bug(1414340)}}).

### APIs

- The proprietary `moz-blob` and `moz-chunked-text` values of the {{domxref("XMLHttpRequest.responseType")}} property were removed completely in Firefox 58 ({{bug(1397145)}}, {{bug(1397151)}}, {{bug(1120171)}}).
- The `dom.abortController.enabled` and `dom.abortController.fetch.enabled` prefs that controlled exposure of the [Abort API functionality](/en-US/docs/Web/API/Fetch_API#aborting_a_fetch) have now been removed, since those features are now enabled by default ({{bug(1402317)}}).
- The proprietary `mozSrcObject` property was removed in Firefox 58 ({{bug(1183495)}}). Use the standard {{domxref("HTMLMediaElement.srcObject")}} property instead.

### SVG

_No changes._

## Changes for add-on and Mozilla developers

### WebExtensions

- [browserSettings](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [browserSettings.webNotificationsDisabled](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled) has been implemented (bug 1364942)

- [browsingData](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [browsingData.localStorage](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage) now supports deleting localStorage by host (bug 1388428)

- [pkcs11](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11) API to manage security devices (Bug 1357391)
- privacy

  - first party isolation can now be toggled though firstPartyIsolate (bug 1409045)
  - resist fingerprinting pref can now be toggle through resistFingerprinting (bug [1397611)](https://bugzilla.mozilla.org/show_bug.cgi?id=1397611)

- tabs

  - [tabs.discard](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) has been implemented (Bug 1322485)
  - isArticle, isInReaderMode properties of Tab implemented (Bug 1381992)
  - [toggleReaderMode](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)() method implemented (Bug 1381992)
  - openInReaderMode option of tabs.created implemented (Bug 1408993)
  - tabs.onUpdated now notifies when entering/exiting reader mode (Bug 1402921)

- theme

  - [getCurrent](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent)() method to obtain current theme properties (Bug [1349944](https://bugzilla.mozilla.org/show_bug.cgi?id=1349944))
  - onUpdated method to receive WebExtension theme updates (Bug [1349944](https://bugzilla.mozilla.org/show_bug.cgi?id=1349944))
  - colors.bookmark_text now supported as alias of colors.toolbar_text (Bug [1412595](https://bugzilla.mozilla.org/show_bug.cgi?id=1412595))
  - colors.toolbar_top_separator, colors.toolbar_bottom_separator and colors.toolbar_vertical_separator implemented (Bug [1347190)](https://bugzilla.mozilla.org/show_bug.cgi?id=1347190)

- webRequest

  - [webRequest.onBeforeRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) now includes a "frameAncestors" parameter

## Older versions

{{Firefox_for_developers(57)}}
