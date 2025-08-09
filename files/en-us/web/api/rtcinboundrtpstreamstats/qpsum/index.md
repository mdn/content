---
title: "RTCInboundRtpStreamStats: qpSum property"
short-title: qpSum
slug: Web/API/RTCInboundRtpStreamStats/qpSum
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.qpSum
---

{{APIRef("WebRTC")}}

The **`qpSum`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the sum of the **Quantization Parameter** (**QP**) values for every frame sent or received on the video track corresponding to this `RTCInboundRtpStreamStats` object.

In general, a larger numbers indicates that the video data is more heavily compressed.

> [!NOTE]
> This value is only available for video media.

## Value

A positive integer.

## Description

[Quantization](https://en.wikipedia.org/wiki/Quantization) is the process of applying lossy compression to a range of values, resulting in a single **quantum value**.
This value takes the place of the range of values, thereby reducing the number of different values that appear in the overall data set, making the data more compressible.
The quantization process and the amount of compression can be controlled using one or more parameters.

It's important to keep in mind that the value of QP can change periodically—even every frame—so it's difficult to know for certain how substantial the compression is.
The best you can do is make an estimate.
You can, for example, use the value of {{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} if receiving the media (or {{domxref("RTCSentRtpStreamStats.framesEncoded")}} if sending it) to get the number of frames handled so far, and compute an average from there.
See [Calculating average quantization](#calculating_average_quantization) below for a function that does this.

Also, the exact meaning of the QP value depends on the {{Glossary("codec")}} being used.
For example, for the VP8 codec, the QP value can be anywhere from 1 to 127 and is found in the frame header element `"y_ac_qi"`, whose value is defined in {{RFC(6386, "", "19.2")}}.
H.264 uses a QP which ranges from 0 to 51; in this case, it's an index used to derive a scaling matrix used during the quantization process.
Additionally, QP is not likely to be the only parameter the codec uses to adjust the compression. See the individual codec specifications for details.

## Examples

### Calculating average quantization

The `calculateAverageQP()` function shown below computes the average QP for the given {{domxref("RTCStatsReport")}} object that contains RTP stream statistics, returning 0 if the object doesn't describe an RTP stream.

```js
function calculateAverageQP(stats) {
  let frameCount = 0;

  switch (stats.type) {
    case "inbound-rtp":
    case "remote-inbound-rtp":
      frameCount = stats.framesDecoded;
      break;
    case "outbound-rtp":
    case "remote-outbound-rtp":
      frameCount = stats.framesEncoded;
      break;
    default:
      return 0;
  }

  return status.qpSum / frameCount;
}
```

Note that QP values can vary from codec to codec.
This value is therefore only potentially useful when compared against the same codec.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
