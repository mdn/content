---
title: Firefox 84 for developers
slug: Mozilla/Firefox/Releases/84
tags:
  - '84'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 84 that will affect developers. Firefox 84 was released on December 15, 2020.

> **Note:** See also [And now for … Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- The Firefox [Accessibility Inspector](/en-US/docs/Tools/Accessibility_inspector) now supports displaying the [keyboard tab order](/en-US/docs/Tools/Accessibility_inspector#show_web_page_tabbing_order) on a web page. This provides a better high-level overview of how the page will be navigated using the keyboard than tabbing through the links ({{bug(1654956)}}).

### HTML

_No changes._

### CSS

- We've added support for complex selectors to the {{cssxref(":not")}} pseudo-class ({{bug(933562)}}).

#### Removals

- We've removed the proprietary `-moz-default-appearance` property values `scrollbar-small` (`scrollbar-width: thin` is used instead) and `scrollbar` (macOS only; `scrollbar-horizontal` and `scrollbar-vertical` are used instead) ({{bug(1673132)}}).

### JavaScript

- Custom date/time formats specified as options to the [`Intl.DateTimeFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) can now include `fractionalSecondDigits` — the number of digits used to represent fractions of a second ({{bug(1645107)}}).

### HTTP

_No changes._

### Security

- Firefox now ensures that `localhost` URLs — such as *http\://localhost/* and *http\://dev.localhost/* — refer to the local host's loopback interface (e.g. _http\://127.0.0.1_). As a result, resources loaded from `localhost` are now assumed to have been delivered securely (see [Secure contexts](/en-US/docs/Web/Security/Secure_Contexts)), and also will not be treated as [mixed content](/en-US/docs/Web/Security/Mixed_content) ({{bug(1220810)}}, {{bug(1488740)}}).

### APIs

- We've added support for the {{domxref('PerformancePaintTiming')}} interface of the Paint Timing API ({{bug(1518999)}}).
- The {{domxref('Navigator.registerProtocolHandler()')}} method now only accepts two parameters: `scheme` and `url`. `title` has been removed ({{bug(1631464)}}).

#### Media, WebRTC, and Web Audio

- The {{domxref('MediaRecorder.start()')}} method now throws an `InvalidModificationError` if the number of tracks on the stream being recorded has changed ({{bug(1581139)}}).

#### Removals

- The [application cache](/en-US/docs/Web/HTML/Using_the_application_cache) has been removed — developers should use the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) instead ({{bug(1619673)}}).

### WebAssembly

_No changes._

### WebDriver conformance (Marionette)

- Added chrome scope support for `WebDriver:PerformActions` and `WebDriver:ReleaseActions` ({{bug(1365886)}}).
- The new Fission-compatible API has been enabled by default now. To revert to the former API the `marionette.actors.enabled` preference has to be set to `false` ({{bug(1669169)}}).
- Fixed `WebDriver:SwitchToWindow` to always switch back to the top-level browsing context ({{bug(1305822)}}).
- Improved browsing context checks for `WebDriver:SwitchToParentFrame` ({{bug(1671622)}}).
- Fixed a hang for `WebDriver:Back` encountered when the currently-selected [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) gets unloaded ({{bug(1672758)}}).

#### Known bugs

- After page navigation, accessing a previously-retrieved element might not always raise a "stale element" error, and can also lead to a "no such element" error. To prevent this, set the `marionette.actors.enabled` preference to `false` ({{bug(1684827)}}).

## Changes for add-on developers

- The [`browsingData.remove()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove) API now supports removing a subset of data types by `cookieStoreId`.

## Older versions

{{Firefox_for_developers(83)}}
