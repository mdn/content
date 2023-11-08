---
title: Firefox 109 for developers
slug: Mozilla/Firefox/Releases/109
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 109 that will affect developers. Firefox 109 was released on January 17, 2023.

## Changes for web developers

### HTML

- The {{HTMLElement("input/range", "range")}} element supports the [`list`](/en-US/docs/Web/HTML/Element/input/range#list) attribute, which links via an id to a {{HTMLElement("datalist")}} to allow Firefox to display tick marks along the range.

### CSS

- The [`<system-color>`](/en-US/docs/Web/CSS/system-color) CSS data type now supports the values [`Mark`](/en-US/docs/Web/CSS/system-color#mark), [`MarkText`](/en-US/docs/Web/CSS/system-color#marktext), and [`ButtonBorder`](/en-US/docs/Web/CSS/system-color#buttonborder) ([Firefox bug 1638052](https://bugzil.la/1638052)).

### JavaScript

No notable changes.

### SVG

#### Removals

- `SVGGraphicsElement.getTransformToElement()` has been removed.
  This follows its removal from the SVG2 specification in 2015, and from other major browsers.
  ([Firefox bug 1803790](https://bugzil.la/1803790)).

- The `SVGGraphicsElement.nearestViewportElement` and `SVGGraphicsElement.farthestViewportElement` attributes have been disabled by default in nightly and early beta builds (behind preference `svg.nearestAndFarthestViewportElement.enabled`).
  [`SVGElement.viewportElement`](/en-US/docs/Web/API/SVGElement#svgelement.viewportelement) can be used as an alternative to `SVGGraphicsElement.nearestViewportElement`.
  They have been removed from the SVG2 specification and are likely to be removed entirely from Firefox in a future release.
  ([Firefox bug 1133174](https://bugzil.la/1133174)).

### HTTP

- The `'unsafe-hashes'` value for {{HTTPHeader("Content-Security-Policy")}} source directives is now supported.
  For more information, see [CSP unsafe-hashes](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_hashes) ([Firefox bug 1343950](https://bugzil.la/1343950)).

### APIs

#### DOM

- The `scrollend` events are now supported, which indicate that the user has completed scrolling in {{domxref("Element")}} and {{domxref("Document")}} objects.
  For more information, see [Element: `scrollend` event](/en-US/docs/Web/API/Element/scrollend_event) and [Document: `scrollend` event](/en-US/docs/Web/API/Document/scrollend_event) ([Firefox bug 1797013](https://bugzil.la/1797013), [Firefox bug 1803435](https://bugzil.la/1803435)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- The connection details for WebDriver BiDi are now written to `WebDriverBiDiServer.json` instead of `WebDriverBiDiActivePort`, which contains both the port (`ws_port`) and the host (`ws_host`). This file is located in the Firefox profile folder ([Firefox bug 1792875](https://bugzil.la/1792875)).
- Added support for subscribing / unsubscribing to individual `contexts` when using `session.subscribe` and `session.unsubscribe` ([Firefox bug 1723102](https://bugzil.la/1723102)).
- Added support for serializing `Node` objects ([Firefox bug 1770731](https://bugzil.la/1770731)).
- Fixed the `columnNumber` for `exceptions` and `stackTraces` to be 0-based ([Firefox bug 1796073](https://bugzil.la/1796073)).

#### Marionette

- Fixed a bug where `WebDriver:NewWindow` and `WebDriver:SwitchToWindow` were not focusing the new window properly ([Firefox bug 1798655](https://bugzil.la/1798655)).
- Fixed a bug where `WebDriver:FindElement` (and similar commands) would fail if the Firefox window was occluded by other applications on Windows ([Firefox bug 1802473](https://bugzil.la/1802473)).

## Changes for add-on developers

- Manifest V3 is now supported with the ability to sign and release Manifest V3 extensions on AMO. See the [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/) blog post for more information. The following preview features are now fully available:

  - The {{WebExtAPIRef("scripting")}} API, although this has been available to Manifest V2 extensions from Firefox 102.
  - The {{WebExtAPIRef("action")}} API, and [`"action"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) manifest key and [`_execute_action` special shortcut](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) in the manifest `commands` key.
  - The [`"host_permissions"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) manifest key.

- The default [Content Security Policy (CSP)](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for Manifest V3 extensions has been updated to [include `upgrade-insecure-requests`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3). This means that, by default, all network requests are upgraded to use `https:`. Extensions that need to use `http:` can do so by overriding the default CSP using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key ([Firefox bug 1797086](https://bugzil.la/1797086)).
- The property `secretKeyLength` has been added to {{WebExtAPIRef("webRequest.SecurityInfo")}}. This property provides the length in bits of the secret key in the security properties of a web request ([Firefox bug 1778473](https://bugzil.la/1778473)).
- With the introduction of the [extensions button](https://support.mozilla.org/kb/unified-extensions), the default value of `default_area` in the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) and [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest keys has changed from `"navbar"` to `"menupanel"` ([Firefox bug 1799947](https://bugzil.la/1799947)).
- Support for {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} and the `deletable` property in {{WebExtAPIRef("omnibox.SuggestResult")}}, enabling extensions to react to a user deleting an address bar search result ([Firefox bug 1799947](https://bugzil.la/1799947)).

## Older versions

{{Firefox_for_developers(108)}}
