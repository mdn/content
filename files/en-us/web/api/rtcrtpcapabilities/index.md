---
title: RTCRtpCapabilities
slug: Web/API/RTCRtpCapabilities
page-type: web-api-interface
tags:
  - API
  - Audio
  - Codec
  - Dictionary
  - Media
  - Negotiation
  - RTCRtpCapabilities
  - RTP
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - WebRTC Device API
browser-compat: api.RTCRtpCapabilities
---
{{DefaultAPISidebar("WebRTC")}}

The **`RTCRtpCapabilities`** dictionary is a data type used to describe the capabilities of an {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}} in response to a call to the {{domxref("RTCRtpSender.getCapabilities()")}} or {{domxref("RTCRtpReceiver.getCapabilities()")}} static functions, both of which return an array of `RTCRtpCapabilities` objects.

An `RTCRtpCapabilities` object contains an array of objects conforming to {{domxref("RTCRtpCodecCapability")}} (each describing the capabilities of one codec) and an array of the supported {{Glossary("RTP")}} [header extensions](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) for that codec.

## Properties

- `codecs`
  - : An array of {{domxref("RTCRtpCodecCapability")}} objects, each describing one of the codecs supported by the {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}}. There are some special entries in this array, described below in the section [The codecs array](#the_codecs_array).
- `headerExtensions`
  - : An array of objects conforming to the {{domxref("RTCRtpHeaderExtensionCapability")}} dictionary. Each object contains a single string, `uri`, specifying the URI of the header extension, as described in {{RFC(5285)}}.

## Description

### The codecs array

The `codecs` array is an array of objects conforming to the dictionary {{domxref("RTCRtpCodecCapability")}}. Each of these objects describes a single codec and its basic capabilities.

The browser will only report distinct capability combinations separately. If two sets of capabilities can be described as one, they will be. That means that, for instance, if there are two entries for the H.264 codec (as identified by the {{domxref("RTCRtpCodecCapability.mimeType", "mimeType")}} being "video/H264"), there are other values in the capabilities objects indicating how they're different in some way.

> **Note:** The MIME type strings used by RTP differ from those used elsewhere. See {{RFC(3555, "", 4)}} for the complete IANA registry of these types.

There are three special entries that should always be present, representing underlying components of the transport. Those components are:

- RED (REDundant Audio Data)
  - : The media type of an RED entry may vary due to there being several versions of it, but it will end with `red`, such as `video/red` or `video/fwdred`. The base RED standard can be found in {{RFC(2198)}}. There may be multiple entries for RED if different forms are supported; each will have a unique media type in that case.
- FEC (Forward Error Correction)
  - : An FEC component handles error correction data; its media type may also vary due to there being advanced versions of the standard available, but it will always end with `fec`. One possible value is `video/ulpfec` (a generic error connection model). There may also be multiple FEC entries if more than one form is supported.
- RTX (Retransmission)
  - : This component is responsible for retransmission of data; it's media type should be `video/rtx`. There will only be one entry for RTX, and it will not have an {{domxref("RTCRtpCodecCapability.sdpFmtpLine", "sdpFmtpLine")}} property.

Don't be surprised to see these show up ijn the list; be prepared to ignore them if you're only interested in the actual codecs used for the media itself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
