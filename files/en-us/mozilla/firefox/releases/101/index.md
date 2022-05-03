---
title: Firefox 101 for developers
slug: Mozilla/Firefox/Releases/101
tags:
  - '101'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 101 that will affect developers. Firefox 101 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [May 31, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

#### DOM

- [`HTMLMediaElement.preservesPitch`](/en-US/docs/Web/API/HTMLMediaElement/preservesPitch) is now supported without the `moz` prefix.
  `mozPreservesPitch` is now an alias of `preservesPitch`, but is deprecated, and may be removed in future releases.
  ({{bug(1652950)}}).
  
- [`HTMLInputElement.showPicker()`](/en-US/docs/Web/API/HTMLInputElement/showPicker) is now supported, allowing the picker for an input element to be displayed when a user interacts with some other element, such as a button ({{bug(1745005)}}).


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

{{Firefox_for_developers(100)}}
