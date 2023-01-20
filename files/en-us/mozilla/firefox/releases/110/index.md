---
title: Firefox 110 for developers
slug: Mozilla/Firefox/Releases/110
tags:
  - "110"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 110 that will affect developers. Firefox 110 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [February 14, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Added the `"webRequestFilterResponse"`[API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). This permission provides access to {{WebExtAPIRef("webRequest.filterResponseData")}}. This permission can be provided as an optional permission. See {{WebExtAPIRef("webRequest.filterResponseData")}} for more information on using this permission ({{bug(1809235)}}).
- The `defaultZoomFactor` property of {{WebExtAPIRef("tabs.ZoomSettings")}} now returns the value of the default zoom factor setting ({{bug(1772166)}})

### Removals

### Other

## Older versions

{{Firefox_for_developers(109)}}
