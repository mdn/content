---
title: "RTCIceCandidateStats: address property"
short-title: address
slug: Web/API/RTCIceCandidateStats/address
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidateStats.address
---

{{APIRef("WebRTC")}}

The **`address`** property of the
{{domxref("RTCIceCandidateStats")}} dictionary indicates the address of the
{{Glossary("ICE")}} candidate. While it's preferred that the address be specified as
an IPv4 or IPv6 numeric address, a fully-qualified domain name can be used as
well.

When a domain name is specified, the first IP address selected for that
address is used, even if the domain name maps to multiple IP addresses.

## Value

Either an IPv4 or IPv6 address or a fully-qualified domain name, which corresponds to
the candidate.

- If the value of `address` is comprised entirely of digits from 0-9 with
  periods as separators, the value is interpreted as an IPv4 address.
- If the value is entirely comprised of hexadecimal digits and colon (":")
  characters, it is interpreted as an IPv6 address.
- Otherwise, the `address` is presumed to be a fully-qualified domain name,
  which is resolved first using an AAAA record (assuming IPv6 is available), then using
  an A record (if no result is found or the device only supports IPv4). If multiple IP
  addresses are returned in response to the query, the {{Glossary("user agent")}}
  selects one, which is then used for the duration of ICE processing.

## Usage notes

The `address` property was previously known as `ip`, and only
permitted IPv4 and IPv6 addresses to be used. The addition of support for
fully-qualified domain names to be used for the address brought about the renaming of
the property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
