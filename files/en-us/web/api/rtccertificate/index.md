---
title: RTCCertificate
slug: Web/API/RTCCertificate
page-type: web-api-interface
browser-compat: api.RTCCertificate
---

{{APIRef("WebRTC")}}

The **`RTCCertificate`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides an object representing a certificate that an {{domxref("RTCPeerConnection")}} uses to authenticate.

`RTCCertificate` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

## Instance properties

- {{domxref("RTCCertificate.expires")}} {{ReadOnlyInline}}
  - : Returns the expiration date of the certificate.

## Instance methods

- {{domxref("RTCCertificate.getFingerprints()")}}
  - : Returns an array of certificate fingerprints, calculated using the different algorithms supported by the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`RTCPeerConnection.RTCPeerConnection()` argument `configuration.certificates`](/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#certificates)
- {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}
