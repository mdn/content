---
title: Firefox 154 release notes for developers (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 154 that affect developers.
Firefox 154 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [August 18, 2026](https://whattrainisitnow.com/release/?version=154).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} method and {{domxref("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} event are now supported for getting the current {{domxref("RTCIceCandidatePair")}} for the transport.
  ([Firefox bug 2019332](https://bugzil.la/2019332)).
- The {{domxref("RTCDtlsTransport/error_event", "error")}} event is now fired on {{domxref("RTCDtlsTransport")}} to report DTLS and fingerprinting errors.
  ([Firefox bug 1805447](https://bugzil.la/1805447)).
- Firefox now reports all WebRTC `certificate` statistics defined in the {{domxref("RTCCertificateStats")}} dictionary, and the following additional WebRTC `transport` statistics defined in the {{domxref("RTCTransportStats")}} dictionary: {{domxref("RTCTransportStats/remoteCertificateId", "remoteCertificateId")}}, {{domxref("RTCTransportStats/localCertificateId", "localCertificateId")}}, {{domxref("RTCTransportStats/packetsSent", "packetsSent")}}, {{domxref("RTCTransportStats/packetsReceived", "packetsReceived")}}, {{domxref("RTCTransportStats/bytesSent", "bytesSent")}}, and {{domxref("RTCTransportStats/bytesReceived", "bytesReceived")}}.
  ([Firefox bug 2019349](https://bugzil.la/2019349) and [Firefox bug 2019333](https://bugzil.la/2019333)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 154 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
