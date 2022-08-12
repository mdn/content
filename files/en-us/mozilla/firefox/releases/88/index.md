---
title: Firefox 88 for developers
slug: Mozilla/Firefox/Releases/88
tags:
  - '88'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 88 that will affect developers. Firefox 88 was released on April 19, 2021.

> **Note:** See also [Never too late for Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- The toggle button for switching between raw and formatted response views has been implemented ({{bug(1693147)}}). For examples, see [Network request details > Response tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab).

### HTML

_No changes._

### CSS

- The {{cssxref(":user-valid")}} and {{cssxref(":user-invalid")}} pseudo-classes have been implemented ({{bug(1694141)}}).
- The {{cssxref("image-set", "image-set()")}} functional notation is now enabled ({{bug(1698133)}}), and was made available for {{cssxref("content")}} and {{cssxref("cursor")}} in {{bug(1695402)}} and {{bug(1695403)}}.
- The default `monospace` font for MacOS has been changed to Menlo ({{bug(1342741)}}).
- The `collapse` value of {{cssxref("visibility")}} is now implemented for ruby annotations ({{bug(1697529)}}).
- The `alternate` value for {{cssxref("ruby-position")}} has been implemented, and is the new initial value for the property ({{bug(1694748)}}).
- The {{cssxref("outline")}} CSS property has been updated to follow the outline created by {{cssxref("border-radius")}}. As part of this work the non-standard {{cssxref("-moz-outline-radius")}} property has been removed. ({{bug(315209)}} and {{bug(1694146)}}.)

#### Removals

- The {{cssxref(":-moz-submit-invalid")}} pseudo-class has been hidden behind a preference, thereby removing it from web content ({{bug(1694129)}}).
- Default styling for the non-standard {{cssxref(":-moz-ui-invalid")}} and {{cssxref(":-moz-ui-valid")}} has been removed ({{bug(1693969)}}).

### JavaScript

- Added support for [RegExp match indices](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) ({{bug(1519483)}}).
- [`Intl.DisplayNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames) and [`Intl.ListFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) now have stricter checking that `options` passed to the constructor are [objects](/en-US/docs/Learn/JavaScript/Objects), and will throw an exception if a string or other primitive is used instead ({{bug(1696881)}}).

### HTTP

- FTP has been disabled on all releases (preference `network.ftp.enabled` now defaults to `false`), with the intent of removing it altogether in Firefox 90 ({{bug(1691890)}}). Complementing this change, the extension setting [`browserSettings.ftpProtocolEnabled`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) has been made read-only, and web extensions can now register themselves as [protocol handlers](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) for FTP ({{bug(1626365)}}).

### Security

_No changes._

### APIs

#### DOM

- Code can now use the new static method [`AbortSignal.abort()`](/en-US/docs/Web/API/AbortSignal/abort) to return an {{domxref("AbortSignal")}} that is already set as [`aborted`](/en-US/docs/Web/API/AbortSignal/aborted) ({{bug(1698468)}}).

### WebDriver conformance (Marionette)

- Marionette will no longer be enabled unless the `--marionette` command line argument or the `MOZ_MARIONETTE` environment variable is specified. As such the `marionette.enabled` preference is no longer used. With this change the state of `navigator.webdriver` now correctly reflects the enabled state of Marionette ({{bug(1593343)}}).
- Fixed a bug where pointer actions other than `down` and `up` inappropriately led to buttons being pressed ({{bug(1686361)}}).
- Fixed a race condition in `WebDriver:GetCurrentURL` that could have led the command to return the URL of the previously opened page, or even a hang in Marionette ({{bug(1664881)}}).

## Changes for add-on developers

- `url` can now be used to limit the properties for which the {{WebExtAPIRef("tabs.onUpdated")}} event is triggered ({{bug(1680279)}}).

## Older versions

{{Firefox_for_developers(87)}}
