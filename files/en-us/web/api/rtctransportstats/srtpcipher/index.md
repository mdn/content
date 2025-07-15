---
title: "RTCTransportStats: srtpCipher property"
short-title: srtpCipher
slug: Web/API/RTCTransportStats/srtpCipher
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.srtpCipher
---

{{APIRef("WebRTC")}}

The **`srtpCipher`** property of the {{domxref("RTCTransportStats")}} dictionary indicates the descriptive name of the protection profile used for the [Secure Real-time Transport Protocol (SRTP)](/en-US/docs/Glossary/RTP) transport.

## Value

A string that indicates the descriptive name of the SRTP protection profile.

Values are defined in the "Profile" column of the [IANA DTLS-SRTP protection profile registry](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) and {{rfc("5764","", "4.1.2")}}.

## Examples

### SRTP_AES128_CM_HMAC_SHA1_80

`"SRTP_AES128_CM_HMAC_SHA1_80"` is the descriptive name of the following profile, where `maximum_lifetime` is the maximum number of packets that can be protected by a single set of keys.

```plain
SRTP_AES128_CM_HMAC_SHA1_80
cipher: AES_128_CM
cipher_key_length: 128
cipher_salt_length: 112
maximum_lifetime: 2^31
auth_function: HMAC-SHA1
auth_key_length: 160
auth_tag_length: 80
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
