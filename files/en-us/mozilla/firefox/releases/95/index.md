---
title: Firefox 95 for developers
slug: Mozilla/Firefox/Releases/95
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 95 that will affect developers.
Firefox 95 was released on December 7, 2021.

## Changes for web developers

### HTML

- The [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) global attribute is now supported on all platforms, instead of just Android.
  This provides a hint to browsers about the type of virtual keyboard that would be best suited to editing a particular element ([Firefox bug 1205133](https://bugzil.la/1205133)).

### CSS

- The CSS [`cursor`](/en-US/docs/Web/CSS/cursor) property is now supported on Firefox for Android,
  making it easier for Android users with a mouse to determine which elements are clickable ([Firefox bug 1672609](https://bugzil.la/1672609)).

### JavaScript

No notable changes

### APIs

- The {{domxref("Crypto.randomUUID()")}} function is now supported. This returns a cryptographically strong 36 character fixed-length UUID ([Firefox bug 1723674](https://bugzil.la/1723674)).

#### Media, WebRTC, and Web Audio

- {{domxref("SpeechSynthesisEvent.elapsedTime")}} now returns the elapsed time in seconds rather than milliseconds, matching an update to the specification (see [Firefox bug 1732498](https://bugzil.la/1732498)).

### WebDriver conformance (Marionette)

- The `port` used by Marionette is now written to the `MarionetteActivePort` file in the profile directory. This can be used to easily retrieve the `port`, which before was only possible by parsing the `prefs.js` file of the profile. ([Firefox bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` now waits for the initial tab to have completed loading to prevent unexpected unloads of the window proxy. ([Firefox bug 1736323](https://bugzil.la/1736323)).

## Changes for add-on developers

- Added `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}} to provide the ability to control the preference `layout.css.prefers-color-scheme.content-override` and set pages' preferred color scheme (light or dark) independently of the browser theme ([Firefox bug 1733461](https://bugzil.la/1733461)).

- Added `globalPrivacyControl` in {{WebExtAPIRef("privacy.network")}} to provide visibility into whether the user has enabled Global Privacy Control inside the browser. ([Firefox bug 1670058](https://bugzil.la/1670058)).

- Added the `"webRequestFilterResponse.serviceWorkerScript"` [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). This permission provides access to {{WebExtAPIRef("webRequest.filterResponseData")}} for requests originated for service worker scripts. This permission can be provided as an optional permission. See {{WebExtAPIRef("webRequest.filterResponseData")}} for more information on using these permissions ([Firefox bug 1636629](https://bugzil.la/1636629)).

## Older versions

{{Firefox_for_developers(94)}}
