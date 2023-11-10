---
title: Firefox 121 for developers
slug: Mozilla/Firefox/Releases/121
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 121 that affect developers. Firefox 121 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [December 19, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

- Fixed a bug that resulted in background pages not starting when a manifest.json `background` key contains `service_worker` and `scripts` declarations ([Firefox bug 1860304](https://bugzil.la/1860304)).

  > **Note:** Incidentally, a change in Chrome 121 sees the `scripts` property ignored when specified with the `service_worker` property. Previously, Chrome refused to load extensions containing both properties ([Chromium bug 1418934](https://crbug.com/1418934)).
  > For more information, see [Browser support of the `background` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Older versions

{{Firefox_for_developers(120)}}
