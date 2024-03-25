---
title: Firefox 125 for developers
slug: Mozilla/Firefox/Releases/125
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 125 that affect developers. Firefox 125 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 16, 2024](https://whattrainisitnow.com/release/?version=125).

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

- The {{domxref("RTCIceTransport")}} properties {{domxref("RTCIceTransport/state","state")}} and {{domxref("RTCIceTransport/gatheringState","gatheringState")}}, and their associated events {{domxref("RTCIceTransport/statechange_event","statechange")}} and {{domxref("RTCIceTransport/gatheringstatechange_event","gatheringstatechange_event")}}, are now supported, along with the {{domxref("RTCDtlsTransport.iceTransport")}} property (which returns the underlying `RTCIceTransport` for a {{domxref("RTCDtlsTransport")}}).
  These allow much finer-grained monitoring than provided by the {{domxref("RTCPeerConnection")}} properties {{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}} and {{domxref("RTCPeerConnection.connectionState","connectionState")}}.
  ([Firefox bug 1811912](https://bugzil.la/1811912))

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

## Experimental web features

These features are newly shipped in Firefox 125 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
