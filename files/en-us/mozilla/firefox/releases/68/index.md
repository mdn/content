---
title: Firefox 68 for developers
slug: Mozilla/Firefox/Releases/68
tags:
  - '68'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 68 that will affect developers. Firefox 68 was released on July 9, 2019.

## Changes for web developers

### Developer tools

#### Browser/web console

- The Web console now shows [more information about CSS warnings](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), including a node list of the DOM elements that used the rule ({{bug(1093953)}}).
- You can now filter content in the Web console using regular expressions ({{bug(1441079)}}).
- The Browser console now allows you to show or hide messages from the content process by setting or clearing the checkbox labeled _Show Content Messages_ ({{bug(1260877)}}).

#### JavaScript debugger

- You can now [Search](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files) in all files in the current project from the debugger by pressing `Shift` + `Ctrl` + `F` (Windows or Linux) or `Shift` + `Cmd` + `F` (macOS) ({{bug(1320325)}}).

#### Network monitor

- The Network monitor [request list](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) now allows you to block a specific URL ({{bug(1151368)}}).
- You can now resend a network request without editing the method, URL, parameters, and headers, using the [Resend](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu) command on the context menu ({{bug(1422014)}}).
- The context menu of the Network monitor [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) tab now allows you to copy all or some of the header information to the clipboard in JSON format ({{bug(1442249)}}).

#### Page inspector

- A button has been added to the [rules panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) of the Page inspector that allows you to toggle the display of any print media queries ({{bug(1534984)}}).
- The [fonts panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) now includes a slider to modify `letter-spacing` ({{bug(1536237)}}).
- A warning icon appears next to unsupported CSS properties or rules that have invalid values, to help you understand why certain styles are not being applied ({{bug(1306054)}}).

#### Storage inspector

- You can now [delete local and session storage](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage) entries by selecting the item in the storage inspector and pressing the backspace key ({{bug(1522893)}}).

#### Other

- The [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) now includes a new _Check for issues_ feature, which will include a number of audit tools to highlight accessibility problems on your web pages. The first available check is _contrast_, for highlighting color contrast problems.
- The preference that controls the visibility of internal extensions (system add-ons and hidden extensions) on the [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) page has been changed from `devtools.aboutdebugging.showSystemAddons` to `devtools.aboutdebugging.showHiddenAddons` ({{bug(1544372)}}).
- [Responsive design mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) has been redesigned — the _Device Settings_ dialog (device selection menu > _Edit List…_) is now more intuitive and simpler to use ({{bug(1487857)}}).

#### Removals

- The "Enable add-on debugging" checkbox has been removed from the [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) page ({{bug(1544813)}}).

### HTML

- The {{HTMLElement("track")}} element — represented by {{domxref("HTMLTrackElement")}} — now receives a {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}} event in addition to the {{domxref("TextTrack")}} itself, if the text track is a contained by a media element ({{bug(1548731)}}).
- {{htmlelement("link")}} elements support the `disabled` attribute again, albeit with different behavior. When `disabled` is set on a `<link>` element along with `rel="stylesheet"`, the referenced stylesheet is not loaded during page load, and will be loaded on demand when the `disabled` attribute is changed to `false` or removed ({{bug(1281135)}}).

#### Removals

- [`<meta http-equiv="set-cookie">`](/en-US/docs/Web/HTML/Element/meta) is no longer supported ({{bug(1457503)}}).

### CSS

- [CSS Scroll Snapping](/en-US/docs/Web/CSS/CSS_Scroll_Snap) has been updated to the latest version of the specification ({{bug(1312163)}}) and ({{bug(1544136)}}), this includes:

  - The `scroll-padding` properties ({{bug(1373832)}})
  - The `scroll-margin` properties ({{bug(1373833)}})
  - {{CSSxRef("scroll-snap-align")}} ({{bug(1373835)}})

- The {{CSSxRef("-webkit-line-clamp")}} property has been implemented for compatibility with other browsers ({{bug(866102)}}).
- Support has been added for the {{CSSxRef("::marker")}} pseudo-element ({{bug(205202)}}) and animation for `::marker` pseudos ({{bug(1538618)}})
- We changed {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} to be a computed value (except for the {{cssxref("color")}} property)  ({{bug(760345)}}).
- Support has been fixed for the `ch` length unit so it now matches the spec (fallback for no '0' glyph, vertical metrics) ({{bug(282126)}})
- The {{CSSxRef("counter-set")}} property has been implemented. ({{bug(1518201)}}).
- We now implement list numbering using a built-in "list-item" counter; this fixes list numbering bugs ({{bug(288704)}}).
- Selector matching and parsing support has been implemented for [`::part()`](/en-US/docs/Web/CSS/::part) ({{bug(1545430)}}) and ({{bug(1545425)}}).
- [CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms) are now supported in indirectly rendered things e.g.) {{SVGElement("mask")}},  {{SVGElement("marker")}},  {{SVGElement("pattern")}},  {{SVGElement("clipPath")}} ({{bug(1323962)}}).
- While we're keeping the prefixed versions of the various gradient properties ({{cssxref("linear-gradient", "linear-gradient()")}}, {{cssxref("radial-gradient", "radial-gradient()")}}, and {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}} available for compatibility reasons, we have revised how they're parsed so that they're handled much more like the non-prefixed versions. This means that certain existing styles won't work correctly.

  In particular, the complicated syntax taking both an angle and a position will no longer work, and the `to` keyword in the `<side-or-corner>` parameter is not required for the prefixed gradient properties. You are encouraged to use the standard, non-prefixed gradient properties instead, as they're now widely supported ({{bug(1547939)}}).

#### Removals

- {{CSSxRef("scroll-snap-coordinate")}}, {{CSSxRef("scroll-snap-destination")}}, {{CSSxRef("scroll-snap-type-x")}} and {{CSSxRef("scroll-snap-type-y")}} have been removed.
- The {{CSSxRef("scroll-snap-type")}} property has become a longhand, so the old shorthand syntax like `scroll-snap-type:mandatory` will stop working.

### SVG

_No changes._

### JavaScript

- The new {{jsxref("BigInt")}} primitive is enabled by default ({{bug(1527902)}}).
- String generic methods have been removed ({{bug(1222552)}}). See the [deprecation warning](/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_String_generics) for more information.

### APIs

#### CSS Object Model (CSSOM)

- The legacy {{domxref("CSSStyleSheet.rules", "rules")}} property and {{domxref("CSSStyleSheet.addRule", "addRule()")}} and {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} methods have been added to the {{domxref("CSSStyleSheet")}} interface. These were introduced by Internet Explorer 9 and have never managed to quite be stamped out, so they have been added to improve compatibility with the small percentage of sites that still use them ({{bug(1545823)}}).

#### DOM

- The [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API) has now been enabled by default on Android ({{bug(1512813)}}). Adding this API to desktop versions of Firefox is being tracked in {{bug(1551302)}}.
- The {{domxref("Window")}} feature [`noreferrer`](/en-US/docs/Web/API/Window/open) is now supported; if specified, the new window's content is loaded without sharing the hostname, IP address, URL, or other identifying information about the host device ({{bug(1527287)}}).
- The {{domxref("HTMLImageElement.decode", "decode()")}} method on `HTMLImageElement` is now implemented. This can be used to trigger loading and decoding of an image prior to adding it to the DOM ({{bug(1501794)}}).
- {{domxref("XMLHttpRequest")}} has been updated to no longer accept the non-standard `moz-chunked-arraybuffer` value for {{domxref("XMLHttpRequest.responseType", "responseType")}}. Code still using it should be updated to [use the Fetch API as a stream](/en-US/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ({{bug(1120171)}}).
- `XMLHttpRequest` now outputs a warning to console if you perform a synchronous request while handling an {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, or {{domxref("Window.pagehide_event", "pagehide")}} event ({{bug(980902)}}).
- The {{domxref("Document.cookie", "cookie")}} property has moved from the {{domxref("HTMLDocument")}} interface to the {{domxref("Document")}} interface, allowing documents other than {{Glossary("HTML")}} to use cookies ({{bug(144795)}}).
- The {{domxref("HTMLElement.focus()")}} and {{domxref("SVGElement.focus()")}} methods now accept an optional object that may contain a boolean `preventScroll` option specifying whether or not to block the browser from scrolling the newly-focused element into view ({{bug(1374045)}}).

#### DOM events

- [Firefox for Android](/en-US/docs/Mozilla/Firefox_for_Android) no longer incorrectly sends a {{domxref("Window.resize_event", "resize")}} event until after the first frame is painted; this improves web compatibility with sites that don't expect this event to occur ({{bug(1528052)}}).
- The dispatching of events for non-primary mouse buttons has been made to more closely follow the specification; the {{domxref("Element.click_event", "click")}} event is no longer sent when non-primary buttons are clicked, instead using {{domxref("Element.auxclick_event", "auxclick")}}. In addition, {{domxref("Element.dblclick_event", "dblclick")}} no longer fires for non-primary buttons ({{bug(1379466)}}).
- The proprietary {{domxref("MouseEvent.mozPressure")}} property has been deprecated, and will now trigger a warning in the console ({{bug(1165211)}}).

#### Media, Web Audio, and WebRTC

- Due to changes in the Google Play store's policies, starting with Firefox 68 for Android, the OpenH264 codec used to handle AVC/H.264 video in WebRTC connections can no longer be downloaded and installed. Therefore, fresh installs of Firefox on Android devices no longer support AVC in WebRTC calls. If you upgrade from earlier versions of Firefox and already have the codec downloaded, it will continue to work. This does _not_ affect other platforms. For more details, see [this article on SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) or {{bug(1548679)}}.
- WebRTC has been updated to recognize that a `null` candidate passed into the {{domxref("RTCPeerConnection/icecandidate_event", "icecandidate")}} event handler, indicating the receipt of a candidate, instead indicates that there are no further candidates coming; when this happens the ICE gathering ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) state reaches `complete` ({{bug(1318167)}}).
- The {{domxref("RTCRtpReceiver")}} methods {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} and {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} now support video tracks; previously they only worked on audio ({{bug(1534466)}}).
- The Web Audio API {{domxref("MediaStreamTrackAudioSourceNode")}} interface is now supported, as is the method {{domxref("AudioContext.createMediaStreamTrackSource()")}} ({{bug(1324548)}}).
- {{domxref("RTCDataChannel.negotiated")}} is now implemented ({{bug(1529695)}}).
- The {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} constructor has been updated to match the current specification's definition that the "first audio track" in the stream is the track whose ID comes first in lexicographical order ({{bug(1324548)}}).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} may no longer be used from a non-secure context; attempting to do so now throws a `NotAllowedError` exception. Secure contexts are those loaded using HTTPS, those located using the `file:///` scheme, and those loaded from `localhost`. For now, if you must, you can re-enable the ability to perform insecure calls to `getUserMedia()` by setting the preference `media.getusermedia.insecure.enabled` to `true` ({{bug(1335740)}}).

  > **Note:** In the future, Firefox will also remove the {{domxref("navigator.mediaDevices")}} property on insecure contexts, preventing all access to the {{domxref("MediaDevices")}} APIs. **This is already the case in Nightly builds.**

#### Removals

- Removed the non-standard {{DOMxRef("XMLDocument.load()")}} method ({{bug(332175)}}).
- Removed the non-standard {{DOMxRef("XMLDocument.async")}} property ({{bug(1328138)}}).
- The {{domxref("RTCIceServer.credentialType")}} `token` value has been removed ({{bug(1529595)}}).

### HTTP

- The [HTTP](/en-US/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} header no longer supports the `executionContexts` directive. This was removed due to problems with interactions between interconnections among different kinds of data at different points in the navigation process and the way the specification is designed. It [has been proposed](https://github.com/w3c/webappsec-clear-site-data/issues/59) that this directive be removed from the specification for this reason, among others ({{bug(1548034)}}).

#### Removals

- The {{HTTPHeader("Content-Security-Policy")}} directive `require-sri-for` is no longer supported due to concerns about its standardization status. It was previously available only behind a preference, which was off by default ({{bug(1386214)}}).

### Security

- Due to [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), changes have been made so that Firefox now treats files in the same directory as being from different origins. This has a number of side-effects on what will work in documents loaded via file:// URLs (see {{bug("file-fallout")}} for useful background research). For example, workers can no longer be loaded.

### WebDriver conformance (Marionette)

#### Bug fixes

- If `WebDriver:SwitchToWindow` changes the selection to a different window it now waits for its `focus` and `activate` events before returning ({{bug(1335085)}}).
- Fixed the `TypeError: this.tabModal is null` failure, which sometimes appeared when interacting with modal dialogs or user prompts ({{bug(1538782)}})

#### Other

- Disabled the feature to force unloading background tabs on low memory conditions, to prevent top-level browser contexts from magically disappearing ({{bug(1553748)}}).
- Disabled privileged content processes that caused HTTP authentication dialogs not to appear when navigating to a website after opening a new tab ({{bug(1558763)}}).

### Plugins

_No changes._

## Changes for add-on developers

### API changes

- The [`proxy.register()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register) and [`proxy.unregister()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister) functions have been deprecated and will be removed from Firefox 71 ({{bug(1545811)}}).
- A `boolean` flag, `incognito`, has been added to the [proxy.RequestDetails](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). object. When `true`, it indicates that this was a private browsing request ({{bug(1545163)}}).
- The [webRequest.RequestFilter](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) parameters can include an incognito parameter. If provided, requests that do not match the incognito state (`true` or `false`) will be filtered out ({{bug(1548177)}}).
- A `string` value, `cookieStoreId`, representing the cookie store ID of the current context, has been added to the [proxy.RequestDetails](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). object ({{bug(1545420)}}).
- When an add-on attempts to add a bookmark folder to the root folder, the resulting error message is now much more intuitive ({{bug(1512171)}}).
- The promise returned by [`browser.tabs.duplicate()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) now resolves immediately, before the tabs are completely loaded ({{bug(1394376)}}).
- Support has been added for chrome.storage.managed, allowing web extension settings to be implemented via enterprise policy ({{bug(1230802)}}).
- `proxyAuthorization` and `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} now apply only to HTTPS proxies ({{bug(1549368)}}.

### Manifest changes

_No changes._

## See also

- Hacks release post: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Older versions

{{Firefox_for_developers(67)}}
