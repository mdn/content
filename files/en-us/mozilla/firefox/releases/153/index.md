---
title: Firefox 153 release notes for developers (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 153 that affect developers.
Firefox 153 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [July 21, 2026](https://whattrainisitnow.com/release/?version=153).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- HTML parsing rules for {{htmlelement("select")}} elements have been updated to allow all nested elements to be parsed into DOM rather than just `<option>`, `<optgroup>`, and `<hr>`.
  This enables possible future support of [customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox bug 2019977](https://bugzil.la/2019977)).
- The `muted` attribute has now been updated for the {{htmlelement("audio", "", "#muted")}} and {{htmlelement("video", "", "#muted")}} elements to reflect when it is added to or removed from the DOM. This attribute now also matches the state of the {{cssxref(":muted")}} CSS pseudo-class.
  ([Firefox bug 2037015](https://bugzil.la/2037015)).

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("::-webkit-scrollbar")}} pseudo-element selector is now recognized, so the `@supports selector(::-webkit-scrollbar)` check returns `true`. Note that this reports the selector as supported even though scrollbar styling via `::-webkit-scrollbar` is not truly implemented. This was added to fix an issue where scrollbars of nested scrollable areas could stack on top of each other. For example, when a scrollbar is set to `display: none` or `width: 0` leaving some content unreachable. ([Firefox bug 2038877](https://bugzil.la/2038877)).

<!-- #### Removals -->

### JavaScript

- The [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) is now supported.
  This includes all the instance methods on `Intl.Locale` that are prefixed with "get" — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, and {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox bug 2037069](https://bugzil.la/2037069)).
- The {{jsxref("Error.stackTraceLimit")}} static data property is supported for setting or getting the maximum number of stack frames captured in an error stack trace.
  Setting the value smaller than the default can improve performance.
  ([Firefox bug 2037856](https://bugzil.la/2037856)).
- Text modules can now be imported into a string using [`with { type: "text" }`](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text).
  Unlike for JavaScript or CSS modules, the media type of the response is ignored, and the content is parsed as text even if the file contains scripts or other executable code.
  ([Firefox bug 2039881](https://bugzil.la/2039881)).
- The [`import source`](/en-US/docs/Web/JavaScript/Reference/Statements/import/source) syntax (part of the [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) proposal) is now supported.
  It is similar to the normal [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declaration, but instead of loading and evaluating a module, it produces an object representing the module's source code that can be evaluated later.
  Note that this feature is not yet useful for developers, as only the syntax is currently supported: the source representation of WebAssembly modules is implemented separately and is not yet available.
  ([Firefox bug 2043242](https://bugzil.la/2043242)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("IDBObjectStore.getAllRecords()")}} and {{domxref("IDBIndex.getAllRecords()")}} methods are now supported.
  These retrieve all records (or a specified subset of records) from an object store and index, respectively.
  ([Firefox bug 1927945](https://bugzil.la/1927945)).
- The [Picture-in-Picture API](/en-US/docs/Web/API/Picture-in-Picture_API) is now supported on desktop platforms.
  This provides a convenient mechanism for websites to toggle display of a {{htmlelement("video")}} element between a page and a floating always-on-top video window, allowing users to continue watching while they interact with other sites or applications.
  ([Firefox bug 1463402](https://bugzil.la/1463402)).

#### DOM

- The [Popover API](/en-US/docs/Web/API/Popover_API) now has more consistent behavior when [`hint` and `auto` popovers are opened and closed](/en-US/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  This follows the specification update in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox bug 2029974](https://bugzil.la/2029974)).

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCDtlsTransport.getRemoteCertificates()")}} method gets the certificates used by the remote peer to secure the DTLS communication.
  These can be used for application-layer authentication of a remote peer.
  ([Firefox bug 1805446](https://bugzil.la/1805446)).
- The {{domxref("MediaCapabilities.decodingInfo()", "decodingInfo()")}} and {{domxref("MediaCapabilities.encodingInfo()", "encodingInfo()")}} methods of the {{domxref("MediaCapabilities")}} interface now accept the `"webrtc"` configuration type.
  This allows a site to query whether a given audio or video configuration can be decoded or encoded using WebRTC, and whether doing so will be smooth, power efficient, or both.
  Support for the non-standard [`transmission`](/en-US/docs/Web/API/MediaCapabilities/encodingInfo#transmission) type, which was used as an alias for `webrtc`, is removed.
  ([Firefox bug 2037610](https://bugzil.la/2037610) and [Firefox bug 2032075](https://bugzil.la/2032075)).
- All mandatory and some optional WebRTC "transport" statistics can now be reported in a {{domxref("RTCStatsReport")}}.
  The returned object is a {{domxref("RTCTransportStats")}} with the following properties: {{domxref("RTCTransportStats.dtlsCipher","dtlsCipher")}}, {{domxref("RTCTransportStats.dtlsRole","dtlsRole")}}, {{domxref("RTCTransportStats.dtlsState","dtlsState")}}, {{domxref("RTCTransportStats.iceLocalUsernameFragment","iceLocalUsernameFragment")}}, {{domxref("RTCTransportStats.iceRole","iceRole")}}, {{domxref("RTCTransportStats.iceState","iceState")}}, {{domxref("RTCTransportStats.id","id")}}, {{domxref("RTCTransportStats.selectedCandidatePairId","selectedCandidatePairId")}}, {{domxref("RTCTransportStats.srtpCipher","srtpCipher")}}, {{domxref("RTCTransportStats.timestamp","timestamp")}}, {{domxref("RTCTransportStats.tlsVersion","tlsVersion")}}, and {{domxref("RTCTransportStats.type","type")}}.
  In addition the `transportId` property is now available on {{domxref("RTCOutboundRtpStreamStats.transportId","RTCOutboundRtpStreamStats")}}, {{domxref("RTCRemoteOutboundRtpStreamStats.transportId","RTCRemoteOutboundRtpStreamStats")}}, {{domxref("RTCRemoteInboundRtpStreamStats.transportId","RTCRemoteInboundRtpStreamStats")}} and {{domxref("RTCInboundRtpStreamStats.transportId","RTCInboundRtpStreamStats")}}.
  ([Firefox bug 1225723](https://bugzil.la/1225723) and [Firefox bug 2019389](https://bugzil.la/2019389)).

<!-- #### Removals -->

### WebAssembly

- JavaScript Promise Integration (JS-PI) is now enabled, allowing [WebAssembly](/en-US/docs/WebAssembly) modules to interoperate with asynchronous, {{jsxref("Promise")}}-based JavaScript APIs. This lets WebAssembly code suspend while waiting for a JavaScript promise and resume when the promise settles. See [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending) for an explanation and working example. ([Firefox bug 2044809](https://bugzil.la/2044809)).

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Improved the window manipulation commands in Marionette and WebDriver BiDi to allow individual window geometry properties, such as x, y, width, and height, to be adjusted independently. ([Firefox bug 1941404](https://bugzil.la/1941404)).
- Fixed a bug where click and pointer action commands could fail if the element's first DOMRect (e.g., inline elements spanning multiple lines) was zero-sized. ([Firefox bug 2038932](https://bugzil.la/2038932)).
- Restricted navigation to privileged pages (certain `about:*` pages, `chrome://`, and `resource://` URLs) when operating in content scope. ([Firefox bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Extended the `emulation.setLocaleOverride` command to also apply a locale emulation to dedicated and shared workers. ([Firefox bug 2015655](https://bugzil.la/2015655)).
- Extended the `emulation.setTimezoneOverride` command to also apply a timezone emulation to dedicated and shared workers. ([Firefox bug 2015657](https://bugzil.la/2015657)).
- Updated the `browsingContext.create` command to no longer emit `browsingContext.domContentLoaded` and `browsingContext.load` events for the initial `about:blank` page when creating new top-level browsing contexts, and to now emit the `browsingContext.contextCreated` event at the end of the creation process. ([Firefox bug 1930594](https://bugzil.la/1930594)).
- Fixed a bug where functions created by the `script.addPreloadScript` command might have stopped working after several navigations. ([Firefox bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Fixed the `Take Element Screenshot` command from WebDriver Classic to crop screenshots of elements which exceed the viewport. ([Firefox bug 2013176](https://bugzil.la/2013176)).
- Fixed the `Perform Actions` command to properly await internal action finalization, preventing potential race conditions. ([Firefox bug 2031596](https://bugzil.la/2031596)).

## Changes for add-on developers

- Extensions now require explicit user permission to access `file://` URLs. Previously, access to local files was covered by the "Access your data for all websites" host permission. This change introduces a separate "Access local files on your computer" option in the extension's permissions settings (desktop only), and file access is turned off by default for all extensions, including existing ones. The {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} method now correctly returns `true` if the user has granted file scheme access; previously, Firefox always returned `false`. Additionally, calling {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} on `file://` URLs now requires this permission. ([Firefox bug 2034168](https://bugzil.la/2034168))
- Supports the {{WebExtAPIRef("userScripts.execute()")}} method, enabling extensions to inject user scripts on demand into a tab or frame. Unlike {{WebExtAPIRef("userScripts.register()")}}, this method supports one-off injection of multiple script sources executed in a defined order. ([Firefox bug 1930776](https://bugzil.la/1930776))
- Adds the {{WebExtAPIRef("publicSuffix")}} API, enabling extensions to determine the registrable domain (eTLD+1) and public suffix of a hostname using the browser's built-in [Public Suffix List](https://publicsuffix.org/). The API provides three synchronous methods: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, and {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox bug 1315558](https://bugzil.la/1315558))
- Extension content scripts can now read and modify constructed stylesheets in {{domxref("document.adoptedStyleSheets")}} and {{domxref("ShadowRoot.adoptedStyleSheets")}}, without `.wrappedJSObject`. ([Firefox bug 1751346](https://bugzil.la/1751346))
- Adds `documentId` to a range of WebExtension APIs, including a new {{WebExtAPIRef("runtime.getDocumentId()")}} method, {{WebExtAPIRef("webNavigation")}} events and methods, {{WebExtAPIRef("webRequest")}} events, scripting injection targets, and messaging APIs. See [Work with documentId](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) for the full list of supported events and methods, along with guidance on using `documentId`. ([Firefox bug 1891478](https://bugzil.la/1891478))
- For contextual identities (containers):
  - Adds the {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} and {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} methods to retrieve the supported colors and icons, avoiding the need to hardcode those values. ([Firefox bug 2044712](https://bugzil.la/2044712))
  - Updates the colors available. `"turquoise"` is renamed to `"cyan"`, `"toolbar"` is renamed to `"gray"`, and `"violet"` is added. The legacy names `"turquoise"` and `"toolbar"` are accepted for backward compatibility. To avoid hardcoding color names, use {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} to retrieve the available colors. ([Firefox bug 2044354](https://bugzil.la/2044354))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 153 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **JPEG XL image support** (Nightly): `image.jxl.enabled`

  The Rust-based [JPEG XL](https://jpeg.org/jpegxl/) image decoder is now enabled by default in Nightly. ([Firefox bug 2040074](https://bugzil.la/2040074)).

- **Tree counting CSS functions**: `layout.css.tree-counting-functions.enabled`

  The {{cssxref("sibling-count")}} and {{cssxref("sibling-index")}} function are now supported. The `sibling-count()` function returns the number sibling elements as well as the element itself. The `sibling-index()` function returns the index number of the element in relation to its siblings, this starts from `1` and not `0`.
  ([Firefox bug 2042063](https://bugzil.la/2042063)).

- **Updating attributes of external recourses**: `layout.css.link-parameters.enabled`

  The {{cssxref("link-parameters")}} CSS property and {{cssxref("param")}} CSS function are now supported. This allows the user to update attributes of external resources, such as SVGs, that have their attributes set with the {{cssxref("env")}} CSS function. This means that single external resource can be used rather than creating multiple variations that only have different colors or other values. ([Firefox bug 2046153](https://bugzil.la/2046153)).
