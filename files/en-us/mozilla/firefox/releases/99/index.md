---
title: Firefox 99 for developers
slug: Mozilla/Firefox/Releases/99
tags:
  - '99'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 99 that will affect developers. Firefox 99 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [April 5, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- {{domxref("navigator.pdfViewerEnabled")}} is now enabled, and is the recommend way to determine whether a browser supports inline display of PDF files when navigating to them.
  Sites that use the deprecated properties {{domxref("navigator.plugins")}} and {{domxref("navigator.mimeTypes")}} to infer PDF viewer support should now use the new property, even though these now return hard-coded mock values that match the signal provided by `pdfViewerEnabled` ({{bug(1720353)}}).


#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(98)}}
