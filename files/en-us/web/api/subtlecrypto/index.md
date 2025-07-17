---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
page-type: web-api-interface
browser-compat: api.SubtleCrypto
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

The **`SubtleCrypto`** interface of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) provides a number of low-level cryptographic functions.

The interface name includes the term "subtle" to indicate that many of its algorithms have subtle usage requirements, and hence that it must be used carefully in order to provide suitable security guarantees.

An instance of `SubtleCrypto` is available as the {{domxref("Crypto.subtle", "subtle")}} property of the {{domxref("Crypto")}} interface, which in turn is available in windows through the {{domxref("Window.crypto")}} property and in workers through the {{domxref("WorkerGlobalScope.crypto")}} property.

> [!WARNING]
> This API provides a number of low-level cryptographic primitives. It's very easy to misuse them, and the pitfalls involved can be very subtle.
>
> Even assuming you use the basic cryptographic functions correctly, secure key management and overall security system design are extremely hard to get right, and are generally the domain of specialist security experts.
>
> Errors in security system design and implementation can make the security of the system completely ineffective.
>
> Please learn and experiment, but don't guarantee or imply the security of your work before an individual knowledgeable in this subject matter thoroughly reviews it. The [Crypto 101 Course](https://www.crypto101.io/) can be a great place to start learning about the design and implementation of secure systems.

## Instance properties

_This interface doesn't inherit any properties, as it has no parent interface._

## Instance methods

_This interface doesn't inherit any methods, as it has no parent interface._

- {{domxref("SubtleCrypto.encrypt()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with the encrypted data corresponding to the clear text, algorithm, and key given as parameters.
- {{domxref("SubtleCrypto.decrypt()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with the clear data corresponding to the encrypted text, algorithm, and key given as parameters.
- {{domxref("SubtleCrypto.sign()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with the signature corresponding to the text, algorithm, and key given as parameters.
- {{domxref("SubtleCrypto.verify()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a boolean value indicating if the signature given as a parameter matches the text, algorithm, and key that are also given as parameters.
- {{domxref("SubtleCrypto.digest()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a digest generated from the algorithm and text given as parameters.
- {{domxref("SubtleCrypto.generateKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a newly-generated {{domxref("CryptoKey")}}, for symmetrical algorithms, or a {{domxref("CryptoKeyPair")}}, containing two newly generated keys, for asymmetrical algorithms. These will match the algorithm, usages, and extractability given as parameters.
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a newly generated {{domxref("CryptoKey")}} derived from the master key and specific algorithm given as parameters.
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a newly generated buffer of pseudo-random bits derived from the master key and specific algorithm given as parameters.
- {{domxref("SubtleCrypto.importKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("CryptoKey")}} corresponding to the format, the algorithm, raw key data, usages, and extractability given as parameters.
- {{domxref("SubtleCrypto.exportKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with the raw key data containing the key in the requested format.
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a wrapped symmetric key for usage (transfer and storage) in insecure environments. The wrapped key matches the format specified in the given parameters, and wrapping is done by the given wrapping key, using the specified algorithm.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("CryptoKey")}} corresponding to the wrapped key given in the parameter.

## Using SubtleCrypto

We can split the functions implemented by this API into two groups: cryptography functions and key management functions.

### Cryptography functions

These are the functions you can use to implement security features such as privacy and authentication in a system. The `SubtleCrypto` API provides the following cryptography functions:

- {{DOMxRef("SubtleCrypto.sign","sign()")}} and {{DOMxRef("SubtleCrypto.verify","verify()")}}: create and verify digital signatures.
- {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} and {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}: encrypt and decrypt data.
- {{DOMxRef("SubtleCrypto.digest","digest()")}}: create a fixed-length, collision-resistant digest of some data.

### Key management functions

Except for {{DOMxRef("SubtleCrypto.digest","digest()")}}, all the cryptography functions in the API use cryptographic keys. In the `SubtleCrypto` API a cryptographic key is represented using a {{DOMxRef("CryptoKey")}} object. To perform operations like signing and encrypting, you pass a {{DOMxRef("CryptoKey")}} object into the {{DOMxRef("SubtleCrypto.sign","sign()")}} or {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} function.

#### Generating and deriving keys

The {{DOMxRef("SubtleCrypto.generateKey","generateKey()")}} and {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}} functions both create a new {{DOMxRef("CryptoKey")}} object.

The difference is that `generateKey()` will generate a new distinct key value each time you call it, while `deriveKey()` derives a key from some initial keying material. If you provide the same keying material to two separate calls to `deriveKey()`, you will get two `CryptoKey` objects that have the same underlying value. This is useful if, for example, you want to derive an encryption key from a password and later derive the same key from the same password to decrypt the data.

#### Importing and exporting keys

To make keys available outside your app, you need to export the key, and that's what {{DOMxRef("SubtleCrypto.exportKey","exportKey()")}} is for. You can choose one of a number of export formats.

The inverse of `exportKey()` is {{DOMxRef("SubtleCrypto.importKey","importKey()")}}. You can import keys from other systems, and support for standard formats like [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) and [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) helps you do this. The `exportKey()` function exports the key in an unencrypted format.

If the key is sensitive you should use {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}}, which exports the key and then encrypts it using another key; the API calls a "key-wrapping key".

The inverse of `wrapKey()` is {{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}}, which decrypts then imports the key.

#### Storing keys

`CryptoKey` is a {{glossary("serializable object")}}, which allows keys to be stored and retrieved using standard web storage APIs.

The specification expects that most developers will use the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API), storing `CryptoKey` objects against some key string identifier that is meaningful to the application, along with any other metadata it finds useful.
This allows the storage and retrieval of the `CryptoKey` without having to expose its underlying key material to the application or the JavaScript environment.

### Supported algorithms

The cryptographic functions provided by the Web Crypto API can be performed by one or more different _cryptographic algorithms_: the `algorithm` argument to the function indicates which algorithm to use. Some algorithms need extra parameters: in these cases the `algorithm` argument is a dictionary object that includes the extra parameters.

The table below summarizes which algorithms are suitable for which cryptographic operations:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/sign">sign</a><br /><a href="/en-US/docs/Web/API/SubtleCrypto/verify">verify</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/encrypt">encrypt</a><br /><a href="/en-US/docs/Web/API/SubtleCrypto/decrypt">decrypt</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/digest">digest</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/deriveBits">deriveBits</a><br /><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey">deriveKey</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/wrapKey">wrapKey</a><br /><a href="/en-US/docs/Web/API/SubtleCrypto/unwrapKey">unwrapKey</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/generateKey">generateKey</a><br /><a href="/en-US/docs/Web/API/SubtleCrypto/exportKey">exportKey</a>
      </th>
      <th scope="col">
        <a href="/en-US/docs/Web/API/SubtleCrypto/importKey">importKey</a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5">RSASSA-PKCS1-v1_5</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss">RSA-PSS</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa">ECDSA</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/sign#ed25519">Ed25519</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/sign#hmac">HMAC</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep">RSA-OAEP</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr">AES-CTR</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc">AES-CBC</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm">AES-GCM</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw">AES-KW</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-1</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-256</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-384</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-512</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh">ECDH</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey#x25519">X25519</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf">HKDF</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2">PBKDF2</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [Non-cryptographic uses of SubtleCrypto](/en-US/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Web security](/en-US/docs/Web/Security)
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
- {{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): an introductory course on cryptography.
