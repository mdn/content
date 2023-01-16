---
title: Firefox 109 for developers
slug: Mozilla/Firefox/Releases/109
tags:
  - "109"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 109 that will affect developers. Firefox 109 was released on January 17, 2023.

## Changes for web developers

### HTML

- The {{HTMLElement("input/range", "range")}} element supports the [`list`](/en-US/docs/Web/HTML/Element/input/range#list) attribute, which links via an id to a {{HTMLElement("datalist")}} to allow Firefox to display tick marks along the range.

### CSS

- The [`<system-color>`](/en-US/docs/Web/CSS/system-color) CSS data type now supports the values [`Mark`](/en-US/docs/Web/CSS/system-color#mark), [`MarkText`](/en-US/docs/Web/CSS/system-color#marktext), and [`ButtonBorder`](/en-US/docs/Web/CSS/system-color#buttonborder) ({{bug(1638052)}}).
- The [`content-visibility`](/en-US/docs/Web/CSS/content-visibility) CSS property now supports the value `auto`, which allows content to skip rendering if it is not [relevant to the user](/en-US/docs/Web/CSS/CSS_Containment#relevant_to_the_user) ({{bug(1791759)}}).

### JavaScript

No notable changes.

### SVG

#### Removals

- `SVGGraphicsElement.getTransformToElement()` has been removed.
  This follows its removal from the SVG2 specification in 2015, and from other major browsers.
  ({{bug(1803790)}}).

- The `SVGGraphicsElement.nearestViewportElement` and `SVGGraphicsElement.farthestViewportElement` attributes have been disabled by default in nightly and early beta builds (behind preference `svg.nearestAndFarthestViewportElement.enabled`).
  [`SVGElement.viewportElement`](/en-US/docs/Web/API/SVGElement#svgelement.viewportelement) can be used as an alternative to `SVGGraphicsElement.nearestViewportElement`.
  They have been removed from the SVG2 specification and are likely to be removed entirely from Firefox in a future release.
  ({{bug(1133174)}}).

### APIs

- The `scrollend` events are now supported, which indicate that the user has completed scrolling in {{domxref("Element")}} and {{domxref("Document")}} objects.
  For more information, see [Element: `scrollend` event](/en-US/docs/Web/API/Element/scrollend_event) and [Document: `scrollend` event](/en-US/docs/Web/API/Document/scrollend_event) ({{bug(1797013)}}, {{bug(1803435)}}).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- The connection details for WebDriver BiDi are now written to `WebDriverBiDiServer.json` instead of `WebDriverBiDiActivePort`, which contains both the port (`ws_port`) and the host (`ws_host`). This file is located in the Firefox profile folder ({{bug(1792875)}}).
- Added support for subscribing / unsubscribing to individual `contexts` when using `session.subscribe` and `session.unsubscribe` ({{bug(1723102)}}).
- Added support for serializing `Node` objects ({{bug(1770731)}}).
- Fixed the `columnNumber` for `exceptions` and `stackTraces` to be 0-based ({{bug(1796073)}}).

#### Marionette

- Fixed a bug where `WebDriver:NewWindow` and `WebDriver:SwitchToWindow` were not focusing the new window properly ({{bug(1798655)}}).
- Fixed a bug where `WebDriver:FindElement` (and similar commands) would fail if the Firefox window was occluded by other applications on Windows ({{bug(1802473)}}).

## Changes for add-on developers

- Manifest V3 is now supported with the ability to sign and release Manifest V3 extensions on AMO. See the [Manifest v3 signing available November 21 on Firefox Nightly](https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/) blog post for more information.
- The default [Content Security Policy (CSP)](/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for Manifest V3 extensions has been updated to [include `upgrade-insecure-requests`](/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3). This means that, by default, all network requests are upgraded to use `https:`. Extensions that need to use `http:` can do so by overriding the default CSP using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key ({{bug(1797086)}}).
- The property `secretKeyLength` has been added to {{WebExtAPIRef("webRequest.SecurityInfo")}}. This property provides the length in bits of the secret key in the security properties of a web request ({{bug(1778473)}}).

## Older versions

{{Firefox_for_developers(108)}}
