---
title: SubtleCrypto.importKey()
slug: Web/API/SubtleCrypto/importKey
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - SubtleCrypto
  - Web Crypto API
  - importKey
browser-compat: api.SubtleCrypto.importKey
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`importKey()`** method of the {{domxref("SubtleCrypto")}}
interface imports a key: that is, it takes as input a key in an external, portable
format and gives you a {{domxref("CryptoKey")}} object that you can use in the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API).

The function accepts several import formats: see [Supported formats](#supported_formats) for details.

## Syntax

```js
importKey(format, keyData, algorithm, extractable, keyUsages)
```

### Parameters

- `format`
  - : A string describing the data format of the key to import. It can be one of the following:
    - `raw`: [Raw](#raw) format.
    - `pkcs8`: [PKCS #8](#pkcs_8) format.
    - `spki`: [SubjectPublicKeyInfo](#subjectpublickeyinfo) format.
    - `jwk`: [JSON Web Key](#json_web_key) format.
- `keyData`
  - : An {{jsxref("ArrayBuffer")}}, a [TypedArray](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray),
    a {{jsxref("DataView")}}, or a `JSONWebKey` object containing the key in
    the given format.
- `algorithm`
  - : An object defining the type of key to import and providing extra algorithm-specific parameters.
    - For [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      Pass an [`RsaHashedImportParams`](/en-US/docs/Web/API/RsaHashedImportParams) object.
    - For [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      Pass an [`EcKeyImportParams`](/en-US/docs/Web/API/EcKeyImportParams) object.
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac):
      Pass an [`HmacImportParams`](/en-US/docs/Web/API/HmacImportParams) object.
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw)):
      Pass the string identifying the algorithm or an object of the form `{ "name": ALGORITHM }`, where `ALGORITHM` is the name of the algorithm.
    - For [PBKDF2](/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2): Pass the string `PBKDF2`.
    - For [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf): Pass the string `HKDF`.
- `extractable`
  - : A boolean value indicating whether it will be possible to export the key
    using {{domxref("SubtleCrypto.exportKey()")}} or {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} indicating what can be done with the key. Possible array values are:
    - `encrypt`: The key may be used to {{domxref("SubtleCrypto.encrypt()", "encrypt")}} messages.
    - `decrypt`: The key may be used to {{domxref("SubtleCrypto.decrypt()", "decrypt")}} messages.
    - `sign`: The key may be used to {{domxref("SubtleCrypto.sign()", "sign")}} messages.
    - `verify`: The key may be used to {{domxref("SubtleCrypto.verify()", "verify")}} signatures.
    - `deriveKey`: The key may be used in {{domxref("SubtleCrypto.deriveKey()", "deriving a new key")}}.
    - `deriveBits`: The key may be used in {{domxref("SubtleCrypto.deriveBits()", "deriving bits")}}.
    - `wrapKey`: The key may be used to {{domxref("SubtleCrypto.wrapKey()", "wrap a key")}}.
    - `unwrapKey`: The key may be used to {{domxref("SubtleCrypto.unwrapKey()", "unwrap a key")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that fulfills with the imported key as a {{domxref("CryptoKey")}} object.

### Exceptions

The promise is rejected when one of the following exceptions is encountered:

- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` is empty but the unwrapped key is of
    type `secret` or `private`.
- {{jsxref("TypeError")}}
  - : Raised when trying to use an invalid format or if the `keyData`
    is not suited for that format.

## Supported formats

This API supports four different key import/export formats: Raw, PKCS #8,
SubjectPublicKeyInfo, and JSON Web Key.

### Raw

You can use this format to import or export AES or HMAC secret keys, or Elliptic Curve
public keys.

In this format the key is supplied as an
[`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the raw bytes for the key.

### PKCS #8

You can use this format to import or export RSA or Elliptic Curve private keys.

The PKCS #8 format is defined in [RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208),
using the [ASN.1 notation](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One):

```plain
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

The `importKey()` method expects to receive this object as an
[`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the [DER-encoded](https://luca.ntop.org/Teaching/Appunti/asn1.html)
form of the `PrivateKeyInfo`. DER is a set of rules for encoding ASN.1
structures into a binary form.

You are most likely to encounter this object in [PEM format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail). PEM format
is a way to encode binary data in ASCII. It consists of a header and a footer, and in
between, the [base64-encoded](/en-US/docs/Glossary/Base64)
binary data. A PEM-encoded `PrivateKeyInfo` looks like this:

```plain
-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDAU9BD0jxDfF5OV380z
9VIEUN2W5kJDZ3hbuaDenCxLiAMsoquKTfFaou71eLdN0TShZANiAARMUhCee/cp
xmjGc1roj0D0k6VlUqtA+JVCWigXcIAukOeTHCngZDKCrD4PkXDBvbciJdZKvO+l
ml2FIkoovZh/8yeTKmjUMb804g6OmjUc9vVojCRV0YdaSmYkkJMJbLg=
-----END PRIVATE KEY-----
```

To get this into a format you can give to `importKey()` you need to do two
things:

- base64-decode the part between header and footer, using
  [`window.atob()`](/en-US/docs/Web/API/atob).
- convert the resulting string into an
  [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

See the [Examples](#examples) section for more concrete guidance.

### SubjectPublicKeyInfo

You can use this format to import or export RSA or Elliptic Curve public keys.

`SubjectPublicKey` is defined in [RFC 5280, Section 4.1](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1) using
the [ASN.1 notation:](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One)

```plain
SubjectPublicKeyInfo  ::=  SEQUENCE  {
    algorithm            AlgorithmIdentifier,
    subjectPublicKey     BIT STRING  }
```

Just like [PKCS #8](#pkcs_8), the `importKey()` method expects to
receive this object as an
[`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the [DER-encoded](https://luca.ntop.org/Teaching/Appunti/asn1.html)
form of the `SubjectPublicKeyInfo`.

Again, you are most likely to encounter this object in [PEM format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail).
A PEM-encoded `SubjectPublicKeyInfo` looks like this:

```plain
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3j+HgSHUnc7F6XzvEbD0
r3M5JNy+/kabiJVu8IU1ERAl3Osi38VgiMzjDBDOrFxVzNNzl+SXAHwXIV5BHiXL
CQ6qhwYsDgH6OqgKIwiALra/wNH4UHxj1Or/iyAkjHRR/kGhUtjyVCjzvaQaDpJW
2G+syd1ui0B6kJov2CRUWiPwpff8hBfVWv8q9Yc2yD5hCnykVL0iAiyn+SDAk/rv
8dC5eIlzCI4efUCbyG4c9O88Qz7bS14DxSfaPTy8P/TWoihVVjLaDF743LgM/JLq
CDPUBUA3HLsZUhKm3BbSkd7Q9Ngkjv3+yByo4/fL+fkYRa8j9Ypa2N0Iw53LFb3B
gQIDAQAB
-----END PUBLIC KEY-----
```

Just as with [PKCS #8](#pkcs_8), to get this into a format you can give to
`importKey()` you need to do two things:

- base64-decode the part between header and footer, using
  [`window.atob()`](/en-US/docs/Web/API/atob).
- convert the resulting string into an
  [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

See the [Examples](#examples) section for more concrete guidance.

### JSON Web Key

You can use JSON Web Key format to import or export RSA or Elliptic Curve public or
private keys, as well as AES and HMAC secret keys.

JSON Web Key format is defined in [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517).
It describes a way to represent public, private, and secret keys as JSON objects.

A JSON Web Key looks something like this (this is an EC private key):

```json
{
  "crv": "P-384",
  "d": "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  "ext": true,
  "key_ops": ["sign"],
  "kty": "EC",
  "x": "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  "y": "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW"
};
```

## Examples

> **Note:** You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/import-key/index.html) on GitHub.

### Raw import

This example imports an AES key from an `ArrayBuffer` containing the bytes
to use. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/raw.js)

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

/*
Import an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an ArrayBuffer string containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey(
    "raw",
    rawKey,
    "AES-GCM",
    true,
    ["encrypt", "decrypt"]
  );
}
```

### PKCS #8 import

This example imports an RSA private signing key from a PEM-encoded PKCS #8 object.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/pkcs8.js)

```js
/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

const pemEncodedKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDD0tPV/du2vftjvXj1t/gXTK39sNBVrOAEb/jKzXae+Xa0H+3LhZaQIQNMfACiBSgIfZUvEGb+7TqXWQpoLoFR/R7MvGWcSk98JyrVtveD8ZmZYyItSY7m2hcasqAFiKyOouV5vzyRe87/lEyzzBpF3bQQ4IDaQu+K9Hj5fKuU6rrOeOhsdnJc+VdDQLScHxvMoLZ9Vtt+oK9J4/tOLwr4CG8khDlBURcBY6gPcLo3dPU09SW+6ctX2cX4mkXx6O/0mmdTmacr/vu50KdRMleFeZYOWPAEhhMfywybTuzBiPVIZVP8WFCSKNMbfi1S9A9PdBqnebwwHhX3/hsEBt2BAgMBAAECggEABEI1P6nf6Zs7mJlyBDv+Pfl5rjL2cOqLy6TovvZVblMkCPpJyFuNIPDK2tK2i897ZaXfhPDBIKmllM2Hq6jZQKB110OAnTPDg0JxzMiIHPs32S1d/KilHjGff4Hjd4NXp1l1Dp8BUPOllorR2TYm2x6dcCGFw9lhTr8O03Qp4hjn84VjGIWADYCk83mgS4nRsnHkdiqYnWx1AjKlY51yEK6RcrDMi0Th2RXrrINoC35sVv+APt2rkoMGi52RwTEseA1KZGFrxjq61ReJif6p2VXEcvHeX6CWLx014LGk43z6Q28P6HgeEVEfIjyqCUea5Du/mYb/QsRSCosXLxBqwQKBgQD1+fdC9ZiMrVI+km7Nx2CKBn8rJrDmUh5SbXn2MYJdrUd8bYNnZkCgKMgxVXsvJrbmVOrby2txOiqudZkk5mD3E5O/QZWPWQLgRu8ueYNpobAX9NRgNfZ7rZD+81vh5MfZiXfuZOuzv29iZhU0oqyZ9y75eHkLdrerNkwYOe5aUQKBgQDLzapDi1NxkBgsj9iiO4KUa7jvD4JjRqFy4Zhj/jbQvlvM0F/uFp7sxVcHGx4r11C+6iCbhX4u+Zuu0HGjT4d+hNXmgGyxR8fIUVxOlOtDkVJa5sOBZK73/9/MBeKusdmJPRhalZQfMUJRWIoEVDMhfg3tW/rBj5RYAtP2dTVUMQKBgDs8yr52dRmT+BWXoFWwaWB0NhYHSFz/c8v4D4Ip5DJ5M5kUqquxJWksySGQa40sbqnD05fBQovPLU48hfgr/zghn9hUjBcsoZOvoZR4sRw0UztBvA+7jzOz1hKAOyWIulR6Vca0yUrNlJ6G5R56+sRNkiOETupi2dLCzcqb0PoxAoGAZyNHvTLvIZN4iGSrjz5qkM4LIwBIThFadxbv1fq6pt0O/BGf2o+cEdq0diYlGK64cEVwBwSBnSg4vzlBqRIAUejLjwEDAJyA4EE8Y5A9l04dzV7nJb5cRak6CrgXxay/mBJRFtaHxVlaZGxYPGSYE6UFS0+3EOmmevvDZQBf4qECgYEA0ZF6Vavz28+8wLO6SP3w8NmpHk7K9tGEvUfQ30SgDx4G7qPIgfPrbB4OP/E0qCfsIImi3sCPpjvUMQdVVZyPOIMuB+rV3ZOxkrzxEUOrpOpR48FZbL7RN90yRQsAsrp9e4iv8QwB3VxLe7X0TDqqnRyqrc/osGzuS2ZcHOKmCU8=
-----END PRIVATE KEY-----`;

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true,
    ["sign"]
  );
}
```

### SubjectPublicKeyInfo import

This example imports an RSA public encryption key from a PEM-encoded
SubjectPublicKeyInfo object. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/spki.js)

```js
  // from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
  function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy3Xo3U13dc+xojwQYWoJLCbOQ5fOVY8LlnqcJm1W1BFtxIhOAJWohiHuIRMctv7dzx47TLlmARSKvTRjd0dF92jx/xY20Lz+DXp8YL5yUWAFgA3XkO3LSJgEOex10NB8jfkmgSb7QIudTVvbbUDfd5fwIBmCtaCwWx7NyeWWDb7A9cFxj7EjRdrDaK3ux/ToMLHFXVLqSL341TkCf4ZQoz96RFPUGPPLOfvN0x66CM1PQCkdhzjE6U5XGE964ZkkYUPPsy6Dcie4obhW4vDjgUmLzv0z7UD010RLIneUgDE2FqBfY/C+uWigNPBPkkQ+Bv/UigS6dHqTCVeD5wgyBQIDAQAB
-----END PUBLIC KEY-----`;

  function importRsaKey(pem) {
    // fetch the part of the PEM string between header and footer
    const pemHeader = "-----BEGIN PUBLIC KEY-----";
    const pemFooter = "-----END PUBLIC KEY-----";
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    // base64 decode the string to get the binary data
    const binaryDerString = window.atob(pemContents);
    // convert from a binary string to an ArrayBuffer
    const binaryDer = str2ab(binaryDerString);

    return window.crypto.subtle.importKey(
      "spki",
      binaryDer,
      {
        name: "RSA-OAEP",
        hash: "SHA-256"
      },
      true,
      ["encrypt"]
    );
  }
```

### JSON Web Key import

This code imports an ECDSA private signing key, given a JSON Web Key object that
represents it. [See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/jwk.js)

```js
const jwkEcKey = {
  "crv": "P-384",
  "d": "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  "ext": true,
  "key_ops": ["sign"],
  "kty": "EC",
  "x": "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  "y": "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW"
};

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(jwk) {
  return window.crypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "ECDSA",
      namedCurve: "P-384"
    },
    true,
    ["sign"]
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key format](https://datatracker.ietf.org/doc/html/rfc7517).
