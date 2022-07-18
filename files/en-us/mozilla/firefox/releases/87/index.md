---
title: Firefox 87 for developers
slug: Mozilla/Firefox/Releases/87
tags:
  - '87'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 87 that will affect developers. Firefox 87 was released on March 23, 2021.

> **Note:** See also [In March, we see Firefox 87](https://hacks.mozilla.org/2021/03/in-march-we-see-firefox-87/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- Developers can now use the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) to simulate {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} media queries, without having to change the operating system to light or dark mode ({{bug(1679408)}} and {{bug(1692272)}}).
- Developers can now use the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) to toggle the {{cssxref(":target")}} pseudo-class for the currently selected element in addition to the pseudo-classes that were previously supported: {{cssxref(":hover")}}, {{cssxref(":active")}} and {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, {{cssxref(":focus-visible")}}, and {{cssxref(":visited")}} ({{bug(1689899)}}).
- Firefox 87 sees a number of [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#rule-display) improvements and bug fixes related to inactive CSS rules:

  - The {{cssxref("table-layout")}} property is now marked as inactive for non-table elements ({{bug(1551571)}}).
  - The {{cssxref("scroll-padding")}} properties (shorthand and longhand) are now marked as inactive for non-scrollable elements ({{bug(1551577)}}).
  - The {{cssxref("text-overflow")}} property was previously incorrectly marked as inactive for some {{cssxref("overflow")}} values ({{bug(1671457)}}).

### HTML

_No changes._

### CSS

- Some languages have digraphs that are always capitalized together, for example `IJ` in Dutch. The {{cssxref("::first-letter")}} pseudo-element now respects these digraphs and treats them as a single unit ({{bug(92176)}}).
- The {{HTMLElement("link")}} element is no longer matched by {{cssxref(":link")}}, {{cssxref(":visited")}}, or {{cssxref(":any-link")}}. This aligns the behavior in Firefox to existing behavior in Chrome and to a recent spec change ({{bug(1687538)}}).

#### Removals

- The following Firefox-specific theme-related media features have been disabled for use in web pages ({{bug(787521)}}):

  - `-moz-mac-graphite-theme`
  - `-moz-mac-lion-theme`
  - `-moz-maemo-classic`
  - `-moz-windows-classic`
  - `-moz-windows-compositor`
  - `-moz-windows-default-theme`
  - `-moz-windows-theme`
  - `-moz-scrollbar-end-backward`
  - `-moz-scrollbar-end-forward`
  - `-moz-scrollbar-start-backward`
  - `-moz-scrollbar-start-forward`
  - `-moz-scrollbar-thumb-proportional`
  - `-moz-menubar-drag`

- The non-standard values of {{cssxref("caption-side")}} (`left`, `right`, `top-outside`, and `bottom-outside`) have been removed and placed behind the `layout.css.caption-side-non-standard.enabled` flag ({{bug(1688695)}}).

### JavaScript

_No changes._

### HTTP

- Some enterprise authentication services require that TLS client certificates be [sent in CORS preflight requests](/en-US/docs/Web/HTTP/CORS#preflight_requests_and_credentials). Users of these services can enable this (non-specification compliant) behavior using the `network.cors_preflight.allow_client_cert` preference ({{bug(1511151)}}).
- The default [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) has been changed to [`strict-origin-when-cross-origin`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin) (from `no-referrer-when-downgrade`), reducing the risk of leaking referrer information in cross-origin requests ({{bug(1589074)}}).
- [`Content-Length`](/en-US/docs/Web/HTTP/Headers/Content-Length) has been added to the list of [CORS-safelisted response headers](/en-US/docs/Glossary/CORS-safelisted_response_header) ({{bug(1460299)}}).

### Security

_No changes._

### APIs

#### DOM

- The {{domxref("HTMLElement.beforeinput_event", "beforeinput")}} event and {{domxref('InputEvent.getTargetRanges()', 'getTargetRanges()')}} method are now enabled by default. They allow web apps to override text edit behavior before the browser modifies the DOM tree, and provide more control over input events to improve performance. The global `beforeinput` event is sent to an {{HTMLElement("input")}} element — or any element whose {{htmlattrxref("contenteditable")}} attribute is set to `true` — immediately before the element's value changes. The `getTargetRanges()` method of the {{domxref("InputEvent")}} interface returns an array of static ranges that will be affected by a change to the DOM if the input event is not canceled.

### WebDriver conformance (Marionette)

- The work of rewriting Marionette to support Fission (site-isolation) has been finished, so the old Marionette implementation has been removed. The `marionette.actors.enabled` preference, which toggled between the new and old implementations, has therefore also been removed ({{bug(1669172)}}).
- WebDriver commands following a call to `WebDriver:SwitchToFrame` will no longer fail with a "no such window" error if the frame's content hasn't yet finished loading ({{bug(1691348)}}).
- After a [cross-group page navigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations), accessing a previously-retrieved element will now always raise a "stale element" error; there is no longer a chance that this action will lead to a "no such element" error ({{bug(1690308)}}).
- `Addon:Uninstall` now raises an `unknown error` when the id of the add-on to uninstall is unknown ({{bug(1693022)}}).

## Changes for add-on developers

- [nativeMessaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) is now an [optional permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) ({{bug(1630415)}}).
- Added support for querying and setting color management related features with {{WebExtAPIRef("browserSettings.colorManagement")}} ({{bug(1719688)}}) and ({{bug(1714428)}}).

## Older versions

{{Firefox_for_developers(86)}}
