---
title: Firefox 116 for developers
slug: Mozilla/Firefox/Releases/116
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 116 that affect developers. Firefox 116 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [August 01, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- The [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API) is now supported on all platforms except for Android.
  This API allows web applications to redirect audio output to a permitted Bluetooth headset, speakerphone, or other device, instead of having to use the browser or underlying OS default.
  Affected APIs include {{domxref("MediaDevices.selectAudioOutput()")}}, {{domxref("MediaDevices.enumerateDevices()")}}, [`HTMLMediaElement.setSinkId()`](/en-US/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/en-US/docs/Web/API/HTMLMediaElement/sinkId), and the permission policy [`Permissions-Policy: speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection "[Firefox bug 1498512](https://bugzil.la/1498512").

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- The URL of a page visited when an extension is uninstalled, provided in {{WebExtAPIRef("runtime.setUninstallURL")}}, can now be up to 1023 characters instead of 255 ([Firefox bug 1835723](https://bugzil.la/1835723)).
- `autoDiscardable` is now supported in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, and {{WebExtAPIRef("tabs.query")}} ([Firefox bug 1809094](https://bugzil.la/1809094)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(115)}}
