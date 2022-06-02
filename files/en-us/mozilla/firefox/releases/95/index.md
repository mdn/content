---
title: Firefox 95 for developers
slug: Mozilla/Firefox/Releases/95
tags:
  - '95'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 95 that will affect developers.
Firefox 95 was released on December 7, 2021.

## Changes for web developers

### HTML

- The [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) global attribute is now supported on all platforms, instead of just Android.
  This provides a hint to browsers about the type of virtual keyboard that would be best suited to editing a particular element ({{bug(1205133)}}).

### CSS

- The CSS [`cursor`](/en-US/docs/Web/CSS/cursor) property is now supported on Firefox for Android,
  making it easier for Android users with a mouse to determine which elements are clickable ({{bug(1672609)}}).

### JavaScript

No notable changes

### APIs

- The {{domxref("Crypto.randomUUID()")}} function is now supported. This returns a cryptographically strong 36 character fixed-length UUID ({{bug(1723674)}}).

#### Media, WebRTC, and Web Audio

- {{domxref("SpeechSynthesisEvent.elapsedTime")}} now returns the elapsed time in seconds rather than milliseconds, matching an update to the specification (see {{bug(1732498)}}).

### WebDriver conformance (Marionette)

- The `port` used by Marionette is now written to the `MarionetteActivePort` file in the profile directory. This can be used to easily retrieve the `port`, which before was only possible by parsing the `prefs.js` file of the profile. ({{bug(1735162)}}).
- `WebDriver:NewSession` now waits for the initial tab to have completed loading to prevent unexpected unloads of the window proxy. ({{bug(1736323)}}).

## Changes for add-on developers

- Added `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}} to provide the ability to control the preference `layout.css.prefers-color-scheme.content-override` and set pages' preferred color scheme (light or dark) independently of the browser theme ({{bug(1733461)}}).

## Older versions

{{Firefox_for_developers(94)}}
