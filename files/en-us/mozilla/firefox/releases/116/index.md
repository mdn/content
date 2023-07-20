---
title: Firefox 116 for developers
slug: Mozilla/Firefox/Releases/116
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 116 that affect developers. Firefox 116 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [August 01, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

- The [`dirname`](/en-US/docs/Web/HTML/Element/input#dirname) attribute is now supported on [`input`](/en-US/docs/Web/HTML/Element/input#dirname) and [`textarea`](/en-US/docs/Web/HTML/Element/textarea#dirname) elements.
  This attribute allows for passing text directionality information (`ltr` or `rtl`) to the server during form submission ([Firefox bug 675943](https://bugzil.la/675943)).

#### Removals

### CSS

#### Removals

### Accessibility (ARIA)

- The [`image`](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role) role is now supported as a synonym for `img`.
  This maintains consistency with most role names which are complete words or concatenations of complete words ([Firefox bug 1829269](https://bugzil.la/1829269)).

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

- Configuring a [Content-Security-Policy](/en-US/docs/Web/HTTP/CSP) now supports specifying [external JavaScript files to be whitelisted using hashes](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#whitelisting_external_scripts_using_hashes), where previously only inline scripts could be whitelisted using a hash ([Firefox bug 1409200](https://bugzil.la/1409200)).

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("TextMetrics.fontBoundingBoxAscent")}} and {{domxref("TextMetrics.fontBoundingBoxDescent")}} properties are now supported.
  These metrics return, respectively, the distance above and below the {{domxref("CanvasRenderingContext2D.textBaseline")}} to the bounding rectangle of all the fonts used to render the text ([Firefox bug 1801198](https://bugzil.la/1801198)).

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
- Adds {{WebExtAPIRef("action.getUserSettings")}} providing the user-specified settings for an extension's browser action ([Firefox bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` is now supported in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, and {{WebExtAPIRef("tabs.query")}} ([Firefox bug 1809094](https://bugzil.la/1809094)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(115)}}
