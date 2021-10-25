---
title: Firefox 89 for developers
slug: Mozilla/Firefox/Releases/89
tags:
  - '89'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 89 that will affect developers. Firefox 89 was released on June 1, 2021.

> **Note:** See also [Looking fine with Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

_No changes._

### HTML

_No changes._

### CSS

- The {{cssxref("@media/forced-colors","forced-colors")}} media feature has been implemented ({{bug(1659511)}}).
- The {{cssxref("@font-face/ascent-override", "ascent-override")}}, {{cssxref("@font-face/descent-override", "descent-override")}}, and {{cssxref("@font-face/line-gap-override", "line-gap-override")}} `@font-face` descriptors have been implemented ({{bug(1681691)}} and {{bug(1704494)}}).
- The `type()` function for {{cssxref("image-set()","image-set()")}} has been implemented ({{bug(1695404)}}).
- The {{cssxref("aspect-ratio")}} CSS property is now supported ({{bug(1672073)}}).

### JavaScript

- Top-level [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await#top-level-await) is now enabled by default ({{bug(1681046)}}).
- [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)s can now be created with a length greater than 2GB-1 (up to 8GB) on 64-bit systems ({{bug(1703505)}}).

### HTTP

_No changes._

### APIs

#### DOM

- {{domxref("PerformanceEventTiming")}} is now enabled by default ({{bug(1701029)}}).
- The content of {{htmlelement("input")}} and {{htmlelement("textarea")}} elements can now be manipulated using {{domxref("Document.execCommand()")}} commands by default, preserving edit history and providing parity with other browsers, without [`contentEditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) or any lengthy workarounds required ({{bug(1220696)}}).

#### Removals

- The following sensor events and their associated handlers have been removed (primarily for better compatibility with other major browser engines, and to address concerns related to privacy leaks):

  - {{domxref("DeviceProximityEvent")}} and its event handler `window.ondeviceproximity` ({{bug(1699707)}}).
  - {{domxref("UserProximityEvent")}} and its event handler `window.onuserproximity`) ({{bug(1699707)}}).
  - `DeviceLightEvent` and its event handler `window.ondevicelight` ({{bug(1701824)}}).

### WebDriver conformance (Marionette)

#### Removals

- The `rotatable` capability that is not part of the WebDriver specification is no longer used ({{bug(1697630)}}).

## Changes for add-on developers

- [Dynamic JS module imports](/en-US/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) are now working in WebExtension content scripts ({{bug(1536094)}}).
- Extension resources listed in [web_accessible_resources](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) can be loaded regardless of the request's CORS mode ({{bug(1694679)}}).
- Firefox's UI has been redesigned, which affects usage of the {{WebExtAPIRef("theme")}} API. The `tab_background_separator` and `toolbar_field_separator` properties are no longer supported. The `tab_line` and `toolbar_vertical_separator` will behave differently. For more information, see [Changes to themeable areas of Firefox in version 89](https://blog.mozilla.org/addons/2021/04/19/changes-to-themeable-areas-of-firefox-in-version-89/).
- The {{WebExtAPIRef("pageAction")}} button can no longer be pinned or unpinned from the address bar, because the three-dot meatball menu is no longer visible by default ({{bug(1691454)}}). As a result, the `pinned` property of the [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key no longer has any effect ({{bug(1703537)}}).
- The "Remove from Address Bar" context menu item has been removed from the {{WebExtAPIRef("pageAction")}} button ({{bug(1704474)}}). For alternatives to this functionality, see {{bug(1712556)}}.

## Older versions

{{Firefox_for_developers(88)}}
