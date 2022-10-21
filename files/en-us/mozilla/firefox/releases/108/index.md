---
title: Firefox 108 for developers
slug: Mozilla/Firefox/Releases/108
tags:
  - "108"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 108 that will affect developers. Firefox 108 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and will ship on [December 13, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

- [Extension version numbers](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) in Manifest V3 have been simplified. The version number is now a string with 1 to 4 numbers separated by dots, for example, `1.2.3.4`. Each number can have up to 9 digits. However, a leading zero before another digit is not allowed. For example, `2.01` is not an allowed version number; however, `0.2`, `2.0.1`, and `2.10` are allowed. The regular expression for these version numbers is `^(0|[1-9]\d{0,9})(\.(0|[1-9]\d{0,9})){0,3}$` ({{bug(1793925)}}).

### Removals

### Other

## Older versions

{{Firefox_for_developers(107)}}
