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

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

### JavaScript

- The {{jsxref("Error.stackTraceLimit")}} static data property is supported for setting or getting the maximum number of stack frames captured in an error stack trace.
  Setting the value smaller than the default can improve performance.
  ([Firefox bug 2037856](https://bugzil.la/2037856)).
- Text modules can now be imported into a string using [`with { type: "text" }`](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text).
  Unlike for JavaScript or CSS modules, the media type of the response is ignored, and the content is parsed as text even if the file contains scripts or other executable code.
  ([Firefox bug 2039881](https://bugzil.la/2039881)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("IDBObjectStore.getAllRecords()")}} and {{domxref("IDBIndex.getAllRecords()")}} methods are now supported.
  These retrieve all records (or a specified subset of records) from an object store and index, respectively.
  ([Firefox bug 1927945](https://bugzil.la/1927945)).

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCDtlsTransport.getRemoteCertificates()")}} method gets the certificates used by the remote peer to secure the DTLS communication.
  These can be used for application-layer authentication of a remote peer.
  ([Firefox bug 1805446](https://bugzil.la/1805446)).
- The {{domxref("MediaCapabilities.decodingInfo()", "decodingInfo()")}} and {{domxref("MediaCapabilities.encodingInfo()", "encodingInfo()")}} methods of the {{domxref("MediaCapabilities")}} interface now accept the `"webrtc"` configuration type.
  This allows a site to query whether a given audio or video configuration can be decoded or encoded using WebRTC, and whether doing so will be smooth, power efficient, or both.
  Support for the non-standard [`transmission`](/en-US/docs/Web/API/MediaCapabilities/encodingInfo#transmission) type, which was used as an alias for `webrtc`, is removed.
  ([Firefox bug 2037610](https://bugzil.la/2037610) and [Firefox bug 2032075](https://bugzil.la/2032075)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

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
