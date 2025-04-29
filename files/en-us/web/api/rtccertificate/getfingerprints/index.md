---
title: "RTCCertificate: getFingerprints() method"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
page-type: web-api-instance-method
browser-compat: api.RTCCertificate.getFingerprints
---

{{APIRef("WebRTC")}}

The **`getFingerprints()`** method of the **{{domxref("RTCCertificate")}}** interface is used to get an array of certificate fingerprints.

This can be used in application-level code to get certificate fingerprints, which are {{glossary("hash function","hashes")}} of the certificate created using the various algorithms supported by the browser.

## Syntax

```js-nolint
getFingerprints()
```

### Parameters

None.

### Return value

An [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of fingerprint values.
Each fingerprint is represented by an object with the following properties:

- `algorithm`
  - : A string indicating the hash function algorithm used to create the fingerprint in `value`.
    Allowed values include: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : A string containing the certificate fingerprint in lowercase hex string, as calculated with the `algorithm` hash function.
    The format is more precisely defined in [RFC4572, Section 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Description

The {{domxref("RTCCertificate")}} instances used for a particular {{DOMxRef("RTCPeerConnection")}} can created using the {{DOMxRef("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}} static method or fetched from storage in an [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), and set in the constructor.
If no certificates are passed in the constructor they will be created automatically, in which case the certificates used can be fetched with {{DOMxRef("RTCPeerConnection.getConfiguration()")}}.

Browsers will automatically exchange certificates and fingerprints associated with each {{DOMxRef("RTCPeerConnection")}} during the SDP offer phase, and these will be used as part of the DTLS handshake to verify that the remote party matches the certificate/endpoint send in the SDP.
This provides a low level validation that the WebRTC communication is being set up with the remote party that initiated the offer, but does not, for example, provide any validation of the identity of the communicating users.

In some cases it can be useful for the application layer to share certificate fingerprints out-of-band:

- If a trust relationship has been established between two web-browsers it can be persisted by storing the certificates and reusing them in a later session (up to a year later).
  The trusted certificates are identified by their fingerprints.
- Peers than want to identify a particular user can send fingerprints and validate the associated user "out of band" (i.e., outside of the browser-mediated WebRTC communications flow).
  The application can use the fingerprint to identify later sessions with the specific user.
- In some conferencing server ("middlebox") implementations, the server may need to known the fingerprints before doing any offer/answer.

Peers may support different sets of algorithms.
When comparing certificates, all fingerprint values for the set of algorithms supported by peers should match.

## Examples

### Getting certificate fingerprints

This example shows how you might get certificate fingerprints from the local peer and compare them to fingerprints from the remote peer.

First we create a connection and get certificates and their fingerprints.
We get the fingerprints from the remote peer using "some out of band mechanism".

```js
// Get the certificate fingerprints from the local peer.
const rtcPeerConnection = new RTCPeerConnection();
const configuration = rtcPeerConnection.getConfiguration();
const certificates = configuration.certificates;
let fingerprintsFromClient;

if (certificates && certificates.length > 0) {
  certificates.forEach((cert) => {
    // For purpose of demonstration, just get first certificate
    fingerprintsFromClient = cert.getFingerprints();
    break;
  });
}

// Get the certificate fingerprints from the remote peer for particular certificate (pseudo code)
const fingerprintsFromServer = [
  /* … */
];
```

There are numerous ways to compare the fingerprint arrays for a particular certificate.
Here we convert the arrays to dictionary objects where the algorithm name is the property and then compare them.
This works because only one fingerprint value can exist for each algorithm.
(There are many other ways to sort and compare the two arrays).

```js
let clientFingerprintDict = Object.fromEntries(
  fingerprintsFromClient.map((x) => [x.algorithm, x.value]),
);
let serverFingerprintDict = Object.fromEntries(
  fingerprintsFromServer.map((x) => [x.algorithm, x.value]),
);

// Function to compare two objects and return true if there are common properties
// and all common properties match.
function compareObjects(obj1, obj2) {
  const commonProperties = Object.keys(obj1).filter((prop) =>
    obj2.hasOwnProperty(prop),
  );
  // Return false if there are no common properties
  if (Object.keys(commonProperties).length === 0) return false;

  // Return false if any common properties don't match
  for (const prop of commonProperties) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

const matchingFingerprints = compareObjects(
  clientFingerprintDict,
  serverFingerprintDict,
);
console.log(matchingFingerprints);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
