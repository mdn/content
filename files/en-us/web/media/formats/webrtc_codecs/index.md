---
title: Codecs used by WebRTC
slug: Web/Media/Formats/WebRTC_codecs
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) makes it possible to construct websites and apps that let users communicate in real time, using audio and/or video as well as optional data and other information. To communicate, the two devices need to be able to agree upon a mutually-understood codec for each track so they can successfully communicate and present the shared media. This guide reviews the codecs that browsers are required to implement as well as other codecs that some or all browsers support for WebRTC.

## Containerless media

WebRTC uses bare {{domxref("MediaStreamTrack")}} objects for each track being shared from one peer to another, without a container or even a {{domxref("MediaStream")}} associated with the tracks. Which codecs can be within those tracks is not mandated by the WebRTC specification. However, {{RFC(7742)}} specifies that all WebRTC-compatible browsers must support [VP8](/en-US/docs/Web/Media/Formats/Video_codecs#vp8) and [H.264](</en-US/docs/Web/Media/Formats/Video_codecs#avc_(h.264)>)'s Constrained Baseline profile for video, and {{RFC(7874)}} specifies that browsers must support at least the [Opus](/en-US/docs/Web/Media/Formats/Audio_codecs#opus) codec as well as [G.711](/en-US/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies)'s PCMA and PCMU formats.

These two RFCs also lay out options that must be supported for each codec, as well as specific user comfort features such as echo cancellation. This guide reviews the codecs that browsers are required to implement as well as other codecs that some or all browsers support for WebRTC.

While compression is always a necessity when dealing with media on the web, it's of additional importance when videoconferencing in order to ensure that the participants are able to communicate without lag or interruptions. Of secondary importance is the need to keep the video and audio synchronized, so that the movements and any ancillary information (such as slides or a projection) are presented at the same time as the audio that corresponds.

## General codec requirements

Before looking at codec-specific capabilities and requirements, there are a few overall requirements that must be met by _any_ codec configuration used with WebRTC.

Unless the {{Glossary("SDP")}} specifically signals otherwise, the web browser receiving a WebRTC video stream must be able to handle video at 20 FPS at a minimum resolution of 320 pixels wide by 240 pixels tall. It's encouraged that video be encoded at a frame rate and size no lower than that, since that's essentially the lower bound of what WebRTC generally is expected to handle.

SDP supports a codec-independent way to specify preferred video resolutions ({{RFC(6236)}}. This is done by sending an `a=imageattr` SDP attribute to indicate the maximum resolution that is acceptable. The sender is not required to support this mechanism, however, so you have to be prepared to receive media at a different resolution than you requested. Beyond this simple maximum resolution request, specific codecs may offer further ways to ask for specific media configurations.

## Supported video codecs

WebRTC establishes a baseline set of codecs which all compliant browsers are required to support. Some browsers may choose to allow other codecs as well.

Below are the video codecs which are _required_ in any fully WebRTC-compliant browser, as well as the profiles which are required and the browsers which actually meet the requirement.

<table class="standard-table">
  <caption>
    Mandatory video codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec name</th>
      <th scope="col">Profile(s)</th>
      <th scope="col">Browser compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>—</td>
      <td>Chrome, Edge, Firefox, Safari (12.1+)</td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc">AVC / H.264</a></th>
      <td>Constrained Baseline (CB)</td>
      <td>
        <p>Chrome (52+), Edge, Firefox, Safari</p>
        <p>
          Firefox for Android 68 and later do not support AVC (H.264) anymore.
          This is due to a change in Google Play store requirements that prevent
          Firefox from downloading and installing the OpenH264 codec needed to
          handle H.264 in WebRTC connections. See
          <a
            href="https://support.mozilla.org/en-US/kb/firefox-android-openh264"
            >this article on SUMO</a
          >
          for details.
        </p>
      </td>
    </tr>
  </tbody>
</table>

For details on WebRTC-related considerations for each codec, see the sub-sections below by following the links on each codec's name.

Complete details of what video codecs and configurations WebRTC is required to support can be found in {{RFC(7742, "WebRTC Video Processing and Codec Requirements")}}. It's worth noting that the RFC covers a variety of video-related requirements, including color spaces (sRGB is the preferred, but not required, default color space), recommendations for webcam processing features (automatic focus, automatic white balance, automatic light level), and so on.

> **Note:** These requirements are for web browsers and other fully-WebRTC compliant products. Non-WebRTC products that are able to communicate with WebRTC to some extent may or may not support these codecs, although they're encouraged to by the specification documents.

In addition to the mandatory codecs, some browsers support additional codecs as well. Those are listed in the following table.

<table class="standard-table">
  <caption>
    Other video codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec name</th>
      <th scope="col">Profile(s)</th>
      <th scope="col">Browser compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">VP9</th>
      <td>—</td>
      <td>Chrome (48+), Firefox</td>
    </tr>
  </tbody>
</table>

### VP8

VP8, which we [describe in general](/en-US/docs/Web/Media/Formats/Video_codecs#vp8) in the main [guide to video codecs used on the web](/en-US/docs/Web/Media/Formats/Video_codecs), has some specific requirements that must be followed when using it to encode or decode a video track on a WebRTC connection.

Unless signaled otherwise, VP8 will use square pixels (that is, pixels with an aspect ratio of 1:1).

#### Other notes

The network payload format for sharing VP8 using {{Glossary("RTP")}} (such as when using WebRTC) is described in {{RFC(7741, "RTP Payload Format for VP8 Video")}}.

### AVC / H.264

Support for AVC's Constrained Baseline (CB) profile is required in all fully-compliant WebRTC implementations. CB is a subset of the main profile, and is specifically designed for low-complexity, low-delay applications such as mobile video and videoconferencing, as well as for platforms with lower performing video processing capabilities.

Our [overview of AVC](</en-US/docs/Web/Media/Formats/Video_codecs#avc_(h.264)>) and its features can be found in the main video codec guide.

#### Special parameter support requirements

AVC offers a wide array of parameters for controlling optional values. In order to improve reliability of WebRTC media sharing across multiple platforms and browsers, it's required that WebRTC endpoints that support AVC handle certain parameters in specific ways. Sometimes this means a parameter must (or must not) be supported. Sometimes it means requiring a specific value for a parameter, or that a specific set of values be allowed. And sometimes the requirements are more intricate.

##### Parameters which are useful but not required

These parameters don't have to be supported by the WebRTC endpoint, and their use is not required either. Their use can improve the user experience in various ways, but don't have to be used. Indeed, some of these are pretty complicated to use.

- `max-br`
  - : If specified and supported by the software, the `max-br` parameter specifies the maximum video bit rate in units of 1,000 bps for VCL and 1,200 bps for NAL. You'll find details about this on [page 47 of RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-47).
- `max-cpb`
  - : If specified and supported by the software, `max-cpb` specifies the maximum coded picture buffer size. This is a fairly complicated parameter whose unit size can vary. See [page 45 of RFC 6184](https://datatracker.ietf.org/doc/html/rfc6184#page-45) for details.
- `max-dpb`
  - : If specified and supported, `max-dpb` indicates the maximum decoded picture buffer size, given in units of 8/3 macroblocks. See [RFC 6184, page 46](https://datatracker.ietf.org/doc/html/rfc6184#page-46) for further details.
- `max-fs`
  - : If specified and supported by the software, `max-fs` specifies the maximum size of a single video frame, given as a number of macroblocks.
- `max-mbps`
  - : If specified and supported by the software, this value is an integer specifying the maximum rate at which macroblocks should be processed per second (in macroblocks per second).
- `max-smbps`
  - : If specified and supported by the software, this specifies an integer stating the maximum static macroblock processing rate in static macroblocks per second (using the hypothetical assumption that all macroblocks are static macroblocks).

##### Parameters with specific requirements

These parameters may or may not be required, but have some special requirement when used.

- `packetization-mode`
  - : All endpoints are required to support mode 1 (non-interleaved mode). Support for other packetization modes is optional, and the parameter itself is not required to be specified.
- `sprop-parameter-sets`
  - : Sequence and picture information for AVC can be sent either in-band or out-of-band. When AVC is used with WebRTC, this information _must_ be signaled in-band; the `sprop-parameter-sets` parameter must therefore _not_ be included in the SDP.

##### Parameters which must be specified

These parameters must be specified whenever using AVC in a WebRTC connection.

- `profile-level-id`
  - : All WebRTC implementations are _required_ to specify and interpret this parameter in their SDP, identifying the sub-profile used by the codec. The specific value that is set is not defined; what matters is that the parameter be used at all. This is useful to note, since in {{RFC(6184)}} ("RTP Payload Format for H.264 Video"), `profile-level-id` is entirely optional.

#### Other requirements

For the purposes of supporting switching between portrait and landscape orientations, there are two methods that can be used. The first is the video orientation (CVO) header extension to the RTP protocol. However, if this isn't signaled as supported in the SDP, then it's encouraged that browsers support Display Orientation SEI messages, though not required.

Unless signaled otherwise, the pixel aspect ratio is 1:1, indicating that pixels are square.

#### Other notes

The payload format used for AVC in WebRTC is described in {{RFC(6184, "RTP Payload Format for H.264 Video")}}. AVC implementations for WebRTC are required to support the special "filler payload" and "full frame freeze" SEI messages; these are used to support switching among multiple input streams seamlessly.

## Supported audio codecs

The audio codecs which {{RFC(7874)}} mandates that all WebRTC-compatible browsers must support are shown in the table below.

<table class="standard-table">
  <caption>
    Mandatory audio codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec name</th>
      <th scope="col">Browser compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Media/Formats/Audio_codecs#opus">Opus</a>
      </th>
      <td>Chrome, Edge, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/en-US/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (A-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/en-US/docs/Web/Media/Formats/Audio_codecs#g.711_pulse_code_modulation_of_voice_frequencies"
          >G.711 PCM (µ-law)</a
        >
      </th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
  </tbody>
</table>

See below for more details about any WebRTC-specific considerations that exist for each codec listed above.

It's useful to note that {{RFC(7874)}} defines more than a list of audio codecs that a WebRTC-compliant browser must support; it also provides recommendations and requirements for special audio features such as echo cancellation, noise reduction, and audio leveling.

> **Note:** The list above indicates the minimum required set of codecs that all WebRTC-compatible endpoints are required to implement. A given browser may also support other codecs; however, cross-platform and cross-device compatibility may be at risk if you use other codecs without carefully ensuring that support exists in all browsers your users might choose.

In addition to the mandatory audio codecs, some browsers support additional codecs as well. Those are listed in the following table.

<table class="standard-table">
  <caption>
    Other audio codecs
  </caption>
  <thead>
    <tr>
      <th scope="row">Codec name</th>
      <th scope="col">Browser compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">G.722</th>
      <td>Chrome, Firefox, Safari</td>
    </tr>
    <tr>
      <th scope="row">iLBC</th>
      <td>Chrome, Safari</td>
    </tr>
    <tr>
      <th scope="row">iSAC</th>
      <td>Chrome, Safari</td>
    </tr>
  </tbody>
</table>

**[Internet Low Bitrate Codec](https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec)** (**iLBC**) is an open-source narrow-band codec developed by Global IP Solutions and now Google, designed specifically for streaming voice audio. Google and some other browser developers have adopted it for WebRTC.

The **[Internet Speech Audio Codec](https://en.wikipedia.org/wiki/Internet_Speech_Audio_Codec)** (**iSAC**) is another codec developed by Global IP Solutions and now owned by Google, which has open-sourced it. It's used by Google Talk, QQ, and other instant messaging clients and is specifically designed for voice transmissions which are encapsulated within an RTP stream.

**[Comfort noise](https://en.wikipedia.org/wiki/Comfort_noise)** (**CN**) is a form of artificial background noise which is used to fill gaps in a transmission instead of using pure silence. This helps to avoid a jarring effect that can occur when voice activation and similar features cause a stream to stop sending data temporarily—a capability known as Discontinuous Transmission (DTX). In {{RFC(3389)}}, a method for providing an appropriate filler to use during silences.

Comfort Noise is used with G.711, and may potentially be used with other codecs that don't have a built-in CN feature. Opus, for example, has its own CN capability; as such, using RFC 3389 CN with the Opus codec is not recommended.

An audio sender is never required to use discontinuous transmission or comfort noise.

### Opus

The Opus format, defined by {{RFC(6716)}} is the primary format for audio in WebRTC. The RTP payload format for Opus is found in {{RFC(7587)}}. You can find more general information about Opus and its capabilities, and how other APIs can support Opus, in the [corresponding section](/en-US/docs/Web/Media/Formats/Audio_codecs#opus) of our [guide to audio codecs used on the web](/en-US/docs/Web/Media/Formats/Audio_codecs).

Both the speech and general audio modes should be supported. Opus's scalability and flexibility are useful when dealing with audio that may have varying degrees of complexity. Its support of in-band stereo signals allows support for stereo without complicating the demultiplexing process.

The entire range of bit rates supported by Opus (6 kbps to 510 kbps) is supported in WebRTC, with the bit rate allowed to be dynamically changed. Higher bit rates typically improve quality.

#### Bit rate recommendations

Given a 20 millisecond frame size, the following table shows the recommended bit rates for various forms of media.

| Media type                         | Recommended bit rate range |
| ---------------------------------- | -------------------------- |
| Narrow-band speech (NB)            | 8 to 12 kbps               |
| Wide-band speech (WB)              | 16 to 20 kbps              |
| Full-band speech (FB)              | 28 to 40 kbps              |
| Full-band monaural music (FB mono) | 48 to 64 kbps              |
| Full-band stereo music (FB stereo) | 64 to 128 kbps             |

The bit rate may be adjusted at any time. In order to avoid network congestion, the average audio bit rate should not exceed the available network bandwidth (minus any other known or anticipated added bandwidth requirements).

### G.711

G.711 defines the format for **Pulse Code Modulation** (**PCM**) audio as a series of 8-bit integer samples taken at a sample rate of 8,000 Hz, yielding a bit rate of 64 kbps. Both [µ-law](https://en.wikipedia.org/wiki/M-law) and [A-law](https://en.wikipedia.org/wiki/A-law) encodings are allowed.

G.711 is [defined by the ITU](https://www.itu.int/rec/T-REC-G.711-198811-I/en) and its payload format is defined in {{RFC(3551, "", "4.5.14")}}.

WebRTC requires that G.711 use 8-bit samples at the standard 64 kbps rate, even though G.711 supports some other variations. Neither G.711.0 (lossless compression), G.711.1 (wideband capability), nor any other extensions to the G.711 standard are mandated by WebRTC.

Due to its low sample rate and sample size, G.711 audio quality is generally considered poor by modern standards, even though it's roughly equivalent to what a landline telephone sounds like. It is generally used as a least common denominator to ensure that browsers can achieve an audio connection regardless of platforms and browsers, or as a fallback option in general.

## Specifying and configuring codecs

### Getting the supported codecs

Because a given browser and platform may have different availability among the potential codecs—and may have multiple profiles or levels supported for a given codec—the first step when configuring codecs for an {{domxref("RTCPeerConnection")}} is to get the list of available codecs. To do this, you first have to establish a connection on which to get the list.

There are a couple of ways you can do this. The most efficient way is to use the static method {{domxref("RTCRtpSender/getCapabilities_static", "RTCRtpSender.getCapabilities()")}} (or the equivalent {{domxref("RTCRtpReceiver/getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}} for a receiver), specifying the type of media as the input parameter. For example, to determine the supported codecs for video, you can do this:

```js
codecList = RTCRtpSender.getCapabilities("video").codecs;
```

Now `codecList` is an array [`codec`](/en-US/docs/Web/API/RTCRtpSender/getCapabilities_static#codecs) objects, each describing one codec configuration.
Also present in the list will be entries for [retransmission](/en-US/docs/Web/API/RTCRtpSender/getCapabilities_static#rtx_retransmission) (RTX), [redundant coding](/en-US/docs/Web/API/RTCRtpSender/getCapabilities_static#red_redundant_audio_data) (RED), and [forward error correction](/en-US/docs/Web/API/RTCRtpSender/getCapabilities_static#fec_forward_error_correction) (FEC).

If the connection is in the process of starting up, you can use the {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} event to watch for the completion of {{Glossary("ICE")}} candidate gathering, then fetch the list.

```js
let codecList = null;

peerConnection.addEventListener("icegatheringstatechange", (event) => {
  if (peerConnection.iceGatheringState === "complete") {
    const senders = peerConnection.getSenders();

    senders.forEach((sender) => {
      if (sender.track.kind === "video") {
        codecList = sender.getParameters().codecs;
        return;
      }
    });
  }

  codecList = null;
});
```

The event handler for `icegatheringstatechange` is established; in it, we look to see if the ICE gathering state is `complete`, indicating that no further candidates will be collected. The method {{domxref("RTCPeerConnection.getSenders()")}} is called to get a list of all the {{domxref("RTCRtpSender")}} objects used by the connection.

With that in hand, we walk through the list of senders, looking for the first one whose {{domxref("MediaStreamTrack")}} indicates that it's {{domxref("MediaStreamTrack.kind", "kind")}} is `video`, indicating that the track's data is video media.
We then call that sender's {{domxref("RTCRtpSender.getParameters", "getParameters()")}} method and set `codecList` to the `codecs` property in the returned object, and then return to the caller.

If no video track is found, we set `codecList` to `null`.

On return, then, `codecList` is either `null` to indicate that no video tracks were found or it's an array of {{domxref("RTCRtpCodecParameters")}} objects, each describing one permitted codec configuration. Of special importance in these objects: the {{domxref("RTCRtpCodecParameters.payloadType", "payloadType")}} property, which is a one-byte value which uniquely identifies the described configuration.

> **Note:** The two methods for obtaining lists of codecs shown here use different output types in their codec lists. Be aware of this when using the results.

### Customizing the codec list

Once you have a list of the available codecs, you can alter it and then send the revised list to {{domxref("RTCRtpTransceiver.setCodecPreferences()")}} to rearrange the codec list. This changes the order of preference of the codecs, letting you tell WebRTC to prefer a different codec over all others.

```js
function changeVideoCodec(mimeType) {
  const transceivers = peerConnection.getTransceivers();

  transceivers.forEach((transceiver) => {
    const kind = transceiver.sender.track.kind;
    let sendCodecs = RTCRtpSender.getCapabilities(kind).codecs;
    let recvCodecs = RTCRtpReceiver.getCapabilities(kind).codecs;

    if (kind === "video") {
      sendCodecs = preferCodec(mimeType);
      recvCodecs = preferCodec(mimeType);
      transceiver.setCodecPreferences([...sendCodecs, ...recvCodecs]);
    }
  });

  peerConnection.onnegotiationneeded();
}
```

In this sample, the function `changeVideoCodec()` takes as input the MIME type of the codec you wish to use. The code starts by getting a list of all of the {{domxref("RTCPeerConnection")}}'s transceivers.

Then, for each transceiver, we get the kind of media represented by the transceiver from the {{domxref("RTCRtpSender")}}'s track's {{domxref("MediaStreamTrack.kind", "kind")}}. We also get the lists of all codecs supported by the browser for both sending and receiving video, using the `getCapabilities()` static method of both {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}}.

If the media is video, we call a method called `preferCodec()` for both the sender's and receiver's codec lists; this method rearranges the codec list the way we want (see below).

Finally, we call the {{domxref("RTCRtpTransceiver")}}'s {{domxref("RTCRtpTransceiver.setCodecPreferences", "setCodecPreferences()")}} method to specify that the given send and receive codecs are allowed, in the newly rearranged order.

That's done for each transceiver on the `RTCPeerConnection`; once all of the transceivers have been updated, we call the {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}} event handler, which will create a new offer, update the local description, send the offer along to the remote peer, and so on, thereby triggering the renegotiation of the connection.

The `preferCodec()` function called by the code above looks like this to move a specified codec to the top of the list (to be prioritized during negotiation):

```js
function preferCodec(codecs, mimeType) {
  let otherCodecs = [];
  let sortedCodecs = [];
  let count = codecs.length;

  codecs.forEach((codec) => {
    if (codec.mimeType === mimeType) {
      sortedCodecs.push(codec);
    } else {
      otherCodecs.push(codec);
    }
  });

  return sortedCodecs.concat(otherCodecs);
}
```

This code is just splitting the codec list into two arrays: one containing codecs whose MIME type matches the one specified by the `mimeType` parameter, and the other with all the other codecs. Once the list has been split up, they're concatenated back together with the entries matching the given `mimeType` first, followed by all of the other codecs. The rearranged list is then returned to the caller.

## Default codecs

Unless otherwise specified, the default—or, more accurately, preferred—codecs requested by each browser's implementation of WebRTC are shown in the table below.

<table class="standard-table">
  <caption>
    Preferred codecs for WebRTC in major web browsers
  </caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Audio</th>
      <th scope="col">Video</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Edge</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Firefox</th>
      <td></td>
      <td>VP9 (Firefox 46 and later)<br />VP8</td>
    </tr>
    <tr>
      <th scope="row">Opera</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Safari</th>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Choosing the right codec

Before choosing a codec that isn't one of the mandatory codecs (VP8 or AVC for video and Opus or PCM for audio), you should seriously consider the potential drawbacks: in particular, only these codecs can be generally assumed to be available on essentially all devices that support WebRTC.

If you choose to prefer a codec other than the mandatory ones, you should at least allow for fallback to one of the mandatory codecs if support is unavailable for the codec you prefer.

### Audio

In general, if it's available and the audio you wish to send has a sample rate greater than 8 kHz, you should strongly consider using Opus as your primary codec. For voice-only connections in a constrained environment, using G.711 at an 8 kHz sample rate can provide an acceptable experience for conversation, but typically you'll use G.711 as a fallback option, since there are other options which are more efficient and sound better, such as Opus in its narrowband mode.

### Video

There are a number of factors that come into play when deciding upon a video codec (or set of codecs) to support.

#### Licensing terms

Before choosing a video codec, make sure you're aware of any licensing requirements around the codec you select; you can find information about possible licensing concerns in our main [guide to video codecs used on the web](/en-US/docs/Web/Media/Formats/Video_codecs). Of the two mandatory codecs for video—VP8 and AVC/H.264—only VP8 is completely free of licensing requirements. If you select AVC, make sure you're; aware of any potential fees you may need to pay; that said, the patent holders have generally said that most typical website developers shouldn't need to worry about paying the license fees, which are typically focused more on the developers of the encoding and decoding software.

> **Warning:** The information here does _not_ constitute legal advice! Be sure to confirm your exposure to liability before making any final decisions where potential exists for licensing issues.

#### Power needs and battery life

Another factor to consider—especially on mobile platforms—is the impact a codec may have on battery life. If a codec is handled in hardware on a given platform, that codec is likely to allow for much better battery life and less heat production.

For example, Safari for iOS and iPadOS introduced WebRTC with AVC as the only supported video codec. AVC has the advantage, on iOS and iPadOS, of being able to be encoded and decoded in hardware. Safari 12.1 introduced support for VP8 within IRC, which improves interoperability, but at a cost—VP8 has no hardware support on iOS devices, so using it causes increased processor impact and reduced battery life.

#### Performance

Fortunately, VP8 and AVC perform similarly from an end-user perspective, and are equally adequate for use in videoconferencing and other WebRTC solutions. The final decision is yours. Whichever you choose, be sure to read the information provided in this article about any particular configuration issues you may need to contend with for that codec.

Keep in mind that choosing a codec that isn't on the list of mandatory codecs likely runs the risk of selecting a codec which isn't supported by a browser your users might prefer. See the article [Handling media support issues in web content](/en-US/docs/Web/Media/Formats/Support_issues) to learn more about how to offer support for your preferred codecs while still being able to fall back on browsers that don't implement that codec.

## Security implications

There are interesting potential security issues that come up while selecting and configuring codecs. WebRTC video is protected using Datagram Transport Layer Security ({{Glossary("DTLS")}}), but it is theoretically possible for a motivated party to infer the amount of change that's occurring from frame to frame when using variable bit rate (VBR) codecs, by monitoring the stream's bit rate and how it changes over time. This could potentially allow a bad actor to infer something about the content of the stream, given the ebb and flow of the bit rate.

For more about security considerations when using AVC in WebRTC, see {{RFC(6184, "RTP Payload Format for H.264 Video: Security Considerations", 9)}}.

## RTP payload format media types

It may be useful to refer to the {{Glossary("IANA")}}'s list of {{Glossary("RTP")}} payload format media types; this is a complete list of the MIME media types defined for _potential_ use in RTP streams, such as those used in WebRTC. Most of these are not used in WebRTC contexts, but the list may still be useful.

See also {{RFC(4855)}}, which covers the registry of media types.

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Guide to video codecs used on the web](/en-US/docs/Web/Media/Formats/Video_codecs)
- [Guide to audio codecs used on the web](/en-US/docs/Web/Media/Formats/Audio_codecs)
- [Digital video concepts](/en-US/docs/Web/Media/Formats/Video_concepts)
- [Digital audio concepts](/en-US/docs/Web/Media/Formats/Audio_concepts)
