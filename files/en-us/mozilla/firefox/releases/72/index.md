---
title: Firefox 72 for Developers
slug: Mozilla/Firefox/Releases/72
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 72 that will affect developers. Firefox 72 was released on January 7, 2020.

## Changes for web developers

### Developer tools

[Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- In the [multi-line mode of the interactive JS interpreter](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode), you can open and save files using the keyboard shortcuts `Ctrl` + `O` and `Ctrl` + `S`, respectively ([Firefox bug 1592308](https://bugzil.la/1592308)).
- You can set a [preference so that asynchronous messages are visually separated](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) ([Firefox bug 1592969](https://bugzil.la/1592969)).

[JavaScript debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- You can now right/`Ctrl` click on objects in the Scopes panel, and choose _Property set_ or _Property get_ to [set watchpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) ([Firefox bug 1574192](https://bugzil.la/1574192)).

[Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- The Timings tab now shows [queued, started, and downloaded](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) times for each resource ([Firefox bug 1580431](https://bugzil.la/1580431)).

[Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- You can set a [preference to enable a simulator](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) for different values of the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature ([Firefox bug 1550804](https://bugzil.la/1550804)).

#### Removals

- The _Scratchpad_ feature has been removed ([Firefox bug 1519103](https://bugzil.la/1519103)).

### HTML

_No changes._

### CSS

- CSS Shadow Parts are now enabled. This includes the [`part` attribute](/en-US/docs/Web/HTML/Global_attributes/part) and [`::part` pseudo-element](/en-US/docs/Web/CSS/::part), which allow shadow hosts to selectively expose chosen elements from their shadow tree to the outside page for styling purposes ([Firefox bug 1559074](https://bugzil.la/1559074)).
- [CSS Motion Path](/en-US/docs/Web/CSS/CSS_motion_path) has been shipped ([Firefox bug 1582554](https://bugzil.la/1582554), also see the [Intent to Ship](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc)). This includes:

  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- The individual transform properties — {{cssxref("scale")}}, {{cssxref("rotate")}}, and {{cssxref("translate")}} — are now enabled by default ([Firefox bug 1424900](https://bugzil.la/1424900)).

#### Removals

### SVG

_No changes._

### JavaScript

- The [nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) has been implemented ([Firefox bug 1566141](https://bugzil.la/1566141)).

### APIs

#### New APIs

- {{domxref("FormDataEvent")}} and [event-based form participation](/en-US/docs/Web/API/FormData/Using_FormData_Objects#using_a_formdata_event) is now enabled by default ([Firefox bug 1594708](https://bugzil.la/1594708)).
- The {{domxref("crossOriginIsolated")}} property is now supported ([Firefox bug 1591892](https://bugzil.la/1591892)).

#### DOM

- The [Geolocation API](/en-US/docs/Web/API/Geolocation_API) has had some interface name updates, as per recent spec changes ([Firefox bug 1575144](https://bugzil.la/1575144)):

  - `Coordinates` has been changed to {{domxref("GeolocationCoordinates")}}.
  - `Position` has been changed to {{domxref("GeolocationPosition")}}.
  - `PositionError` has been changed to {{domxref("GeolocationPositionError")}}.

- A number of properties have been updated to use standard stringifiers ([Firefox bug 824857](https://bugzil.la/824857)):

  - {{domxref("DOMTokenList.value")}}
  - {{domxref("HTMLAnchorElement.href")}}
  - {{domxref("Location.href")}}
  - {{domxref("MediaList.mediaText")}}
  - {{domxref("URL.href")}}
  - {{domxref("WorkerLocation.href")}}

#### DOM events

- {{domxref("Notification.requestPermission_static")}} and {{domxref("PushManager.subscribe()")}} can now only be called in response to a user gesture such as a [`click`](/en-US/docs/Web/API/Element/click_event) event ([Firefox bug 1593644](https://bugzil.la/1593644)).

#### Media, Web Audio, and WebRTC

- The {{domxref("MediaDevices.getDisplayMedia()")}} method can now only be called in response to a user gesture such as a [`click`](/en-US/docs/Web/API/Element/click_event) event ([Firefox bug 1580944](https://bugzil.la/1580944)).
- The {{domxref("RTCRtpContributingSource")}} dictionary can now include the {{domxref("RTCRtpContributingSource.rtpTimestamp", "rtpTimestamp")}} property, which is a source-generated time at which the packet's media was generated or sampled ([Firefox bug 1583867](https://bugzil.la/1583867)).

#### Removals

- Removed the non-standard `window.mozPaintCount` property. ([Firefox bug 1591968](https://bugzil.la/1591968))
- The {{domxref("BatteryManager")}} interface is no longer exposed to web content ([Firefox bug 1441976](https://bugzil.la/1441976)).
- {{domxref("Navigator.vibrate()")}} is no longer supported in cross-origin {{htmlelement("iframe")}}s ([Firefox bug 1591113](https://bugzil.la/1591113)).
- WebRTC no longer supports the `rid=` and `pt=` parameters on the `simulcast` attribute. The new syntax for a line such as "`a=simulcast: send rid=7 recv rid=8`" is now "`a=simulcast: send 7 recv 8`". The new syntax has been supported since Firefox 68, so now it's time tor retire support for the old syntax ([Firefox bug 1470568](https://bugzil.la/1470568)).

### Security

- Opting-out of MIME sniffing using {{HTTPHeader("X-Content-Type-Options")}} is now also applied to top-level documents if a {{HTTPHeader("Content-type")}} is provided. This can cause HTML web pages to be downloaded instead of being rendered when they are served with a MIME type other than `text/html`. Make sure to set both headers correctly. ([Firefox bug 1591932](https://bugzil.la/1591932)).
- Dropped the support for HTTP Public Key Pinning (HPKP) because of the low adoption rate and interoperability risk. The `Public-Key-Pins` and `Public-Key-Pins-Report-Only` headers are now silently ignored [Firefox bug 1412438](https://bugzil.la/1412438).

### Plugins

_No changes._

### WebDriver conformance (Marionette)

- Removed `Anon` and `AnonAttribute` strategies from `WebDriver:FindElement` and `WebDriver:FindElements` commands ([Firefox bug 1587627](https://bugzil.la/1587627)).
- `Webdriver:TakeScreenshot` no longer fails if captured area exceeds upper maximum bound for the canvas width, height, or size ([Firefox bug 1590064](https://bugzil.la/1590064)).

## Changes for add-on developers

### API changes

- The [`browserSettings.ftpProtocolEnabled`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) property has been implemented ([Firefox bug 1592687](https://bugzil.la/1592687)).
- The [`BrowserSetting.onChange`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) event has been implemented ([Firefox bug 1410412](https://bugzil.la/1410412)).
- The [`captivePortal.canonicalURL`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) property has been implemented ([Firefox bug 1592932](https://bugzil.la/1592932)).
- The callback functions for the [`browserAction.onClicked`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) and [`pageAction.onClicked`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) events now include a `OnClickData` property containing an object whose properties describe the mouse button pressed along with any keyboard modifiers ([Firefox bug 1405031](https://bugzil.la/1405031)). This allows support for additional types of mouse click.
- The {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} property has been implemented and enables the highest and lowest versions of TLS supported by the browser to be read ([Firefox bug 1593635](https://bugzil.la/1593635)).

### Manifest changes

_No changes._

## See also

- Hacks release post: [Firefox 72 — our first song of 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## Older versions

{{Firefox_for_developers(71)}}
