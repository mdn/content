---
title: "RTCCertificate: getFingerprints() method"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
page-type: web-api-instance-method
browser-compat: api.RTCCertificate.getFingerprints
---

{{APIRef("WebRTC")}}

The **`getFingerprints()`** method of the **{{domxref("RTCCertificate")}}** interface is used to get an array of certificate fingerprints.

An application can use this method to compare the client certificate fingerprints with the certificate fingerprints from the server.
The server and client may support different sets of algorithms: all fingerprint values for the set of algorithms supported by both client and server should match.

## Syntax

```js-nolint
getFingerprints()
```

### Parameters

None

### Return value

An [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of fingerprint values.
Each fingerprint is represented by an object with the following properties:

- `algorithm`
  - : A string indicating the hash function algorithm used to create the fingerprint in `value`.
    Allowed values include: `"sha-1"`, `"sha-224"`, `"sha-256"`,`"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : A string containing the certificate fingerprint in lowercase hex string, as calculated with the `algorithm` hash function.
    The format is more precisely defined in [RFC4572, Section 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Examples

### Getting certificate fingerprints

This example shows how you might get certificate fingerprints and compare them to fingerprints from a server.

First we create a connection and get the fingerprints.
We also get the fingerprints from the server using "some mechanism".

```js
const rtcPeerConnection = new RTCPeerConnection();

// Get the certificate fingerprints from the client.
const fingerprintsFromClient = rtcPeerConnection.certificate.getFingerprints();

// Get the certificate fingerprints from the server (pseudo code)
const fingerprintsFromServer = ...;
```

There are numerous ways to compare the fingerprint arrays.
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
