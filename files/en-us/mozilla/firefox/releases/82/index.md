---
title: Firefox 82 for developers
slug: Mozilla/Firefox/Releases/82
tags:
  - '82'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 82 that will affect developers. Firefox 82 was released on October 20, 2020.

> **Note:** See also [Coming through with Firefox 82](https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/) on Mozilla Hacks.

## Changes for web developers

### Developer tools

- You can now [inspect server-sent events](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_server-sent_events/index.html) using the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ({{bug(1640857)}}).
- The Network Monitor's _Message_ panel has now been merged with the _Response_ panel — messages (e.g. from WebSockets or server-sent events) can now be viewed right below the responses list ({{bug(1636421)}}).

### HTML

- The color picker used for [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color) is now keyboard-accessible on Windows ({{bug(1526820)}}).
- The `allow-downloads` flag for the [`<iframe sandbox>`](/en-US/docs/Web/HTML/Element/iframe) attribute is now supported  ({{bug(1656212)}}).

### CSS

- Support for the new {{CSSxRef("::file-selector-button", "::file-selector-button")}} pseudo-element has been added. This pseudo-element represents the file selection button inside an [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file) element ({{bug(1635675)}}, {{bug(1662478)}}).
- We have improved error recovery for the {{CSSxRef(":is", ":is()")}} and {{CSSxRef(":where", ":where()")}} pseudo-classes. These pseudo-classes now accept a forgiving selector list, where an invalid selector in the list will not render the entire list invalid ({{bug(1664718)}}).
- `appearance: button` now applies only to buttons; the `button` value of {{CSSxRef("appearance")}} will otherwise behave as `auto` ({{bug(1662703)}}).

#### Removals

- We have removed the proprietary [`:-moz-user-disabled`](/en-US/docs/Web/CSS/:-moz-user-disabled) pseudo-class ({{bug(1664432)}}).

### HTTP

- The [`Content-Disposition`](/en-US/docs/Web/HTTP/Headers/Content-Disposition) header's `inline` directive will now be ignored if the HTML [`<a>`](/en-US/docs/Web/HTML/Element/a) element's `download` attribute is specified (for [same-origin URLs](/en-US/docs/Web/Security/Same-origin_policy)). Note that if specified the `Content-Disposition` header `filename` will be used in preference to a filename specified in the `download` attribute ({{bug(1658877)}}).

### APIs

#### New APIs

- The [Media Session API](/en-US/docs/Web/API/Media_Session_API) is now enabled by default ({{bug(1665496)}}).

#### DOM

- [`Document.execCommand()`](/en-US/docs/Web/API/Document/execCommand) is no longer supported for nested/recursive calls, which will now return `false` ({{bug(1634262)}}).
- [`Element.setPointerCapture()`](/en-US/docs/Web/API/Element/setPointerCapture) throws the `NotFoundError` exception if the pointer `id` is invalid, as per the [specification](https://w3c.github.io/pointerevents/#setting-pointer-capture) ({{bug(1662124)}}). Previously it wrongly threw an `InvalidPointerId` exception.
- The [`window.name`](/en-US/docs/Web/API/Window/name) property is reset to an empty string if a tab loads a page from a different domain, and restored if the original page is reloaded (e.g. via the "back" button). This prevents an untrusted page from accessing any information that the previous page might have stored in the variable. This change may impact frameworks that use `window.name` for cross-domain messaging ({{bug(444222)}}).

### WebDriver conformance (Marionette)

- To simulate a more realistic user navigation, all supported navigation commands have been moved to the parent process ({{bug(1612831)}}).
- We updated the checks for the current or top-level browsing context for all the commands to improve conformance with the WebDriver specification ({{bug(1493108)}}).
- Fixed a bug in `WebDriver:ElementClick` that sometimes caused the command to return before the click event was actually synthesized ({{bug(1394354)}}).

## Changes for add-on developers

- The [`tabs.captureTab()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab) and [`tabs.captureVisibleTab()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) methods now capture an area of the relevant tab's content specified by the `rect` property of the provided [`options`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails) object, or the visible area of the tab if this property is not provided ({{bug(1636508)}}). Previously the `rect` property was not available, and these methods always captured the visible area of the relevant tab

## Older versions

{{Firefox_for_developers(81)}}
