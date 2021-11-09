---
title: Firefox 95 for developers
slug: Mozilla/Firefox/Releases/95
tags:
  - '95'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 95 that will affect developers.
Firefox 95 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [December 7, 2021](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

- The [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) global attribute is now supported on all platforms, instead of just Android.
  This provides a hint to browsers about the type of virtual keyboard that would be best suited to editing a particular element ({{bug(1205133)}}).

#### Removals

### CSS

- The CSS [`cursor`](/en-US/docs/Web/CSS/cursor) property is now supported on Firefox for Android,
  making it easier for Android users with a mouse to determine which elements are clickable ({{bug(1672609)}}).

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("Crypto.randomUUID()")}} function is now supported. This returns a cryptographically strong 36 character fixed-length UUID ({{bug(1723674)}}).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

- Added `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}} to provide the ability to control the preference `layout.css.prefers-color-scheme.content-override` and set pages' preferred color scheme (light or dark) independently of the browser theme ({{bug(1733461)}}).

#### Removals

### Other

## Older versions

{{Firefox_for_developers(94)}}
