---
title: "SubtleCrypto: deriveKey() method"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
page-type: web-api-instance-method
browser-compat: api.SubtleCrypto.deriveKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

The **`deriveKey()`** method of the {{domxref("SubtleCrypto")}} interface can be used to derive a secret key from a master key.

It takes as arguments some initial key material, the derivation algorithm to use, and the desired properties for the key to derive.
It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which will be fulfilled with a {{domxref("CryptoKey")}} object representing the new key.

It's worth noting that the supported key derivation algorithms have quite different characteristics and are appropriate in quite different situations.
See [Supported algorithms](#supported_algorithms) for some more detail on this.

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameters

- `algorithm`
  - : An object defining the [derivation algorithm](#supported_algorithms) to use.
    - To use [ECDH](#ecdh), pass an [`EcdhKeyDeriveParams`](/en-US/docs/Web/API/EcdhKeyDeriveParams) object, specifying the string `ECDH` as the `name` property.
    - To use [HKDF](#hkdf), pass an [`HkdfParams`](/en-US/docs/Web/API/HkdfParams) object.
    - To use [PBKDF2](#pbkdf2), pass a [`Pbkdf2Params`](/en-US/docs/Web/API/Pbkdf2Params) object.
    - To use [X25519](#x25519), pass an [`EcdhKeyDeriveParams`](/en-US/docs/Web/API/EcdhKeyDeriveParams) object, specifying the string `X25519` as the `name` property.
- `baseKey`
  - : A {{domxref("CryptoKey")}} representing the input to the derivation algorithm.
    If `algorithm` is ECDH or X25519, then this will be the ECDH or X25519 private key.
    Otherwise it will be the initial key material for the derivation function: for example, for PBKDF2 it might be a password, imported as a `CryptoKey` using [`SubtleCrypto.importKey()`](/en-US/docs/Web/API/SubtleCrypto/importKey).
- `derivedKeyAlgorithm`
  - : An object defining the algorithm the derived key will be used for:
    - For [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) pass an [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams) object.
    - For [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw), pass an [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams) object.
    - For [HKDF](#hkdf), pass an [`HkdfParams`](/en-US/docs/Web/API/HkdfParams) object.
    - For [PBKDF2](#pbkdf2), pass a [`Pbkdf2Params`](/en-US/docs/Web/API/Pbkdf2Params) object.
- `extractable`
  - : A boolean value indicating whether it will be possible to export the key using {{domxref("SubtleCrypto.exportKey()")}} or {{domxref("SubtleCrypto.wrapKey()")}}.
- `keyUsages`
  - : An {{jsxref("Array")}} indicating what can be done with the derived key.
    Note that the key usages must be allowed by the algorithm set in `derivedKeyAlgorithm`.
    Possible values of the array are:
    - `encrypt`: The key may be used to [encrypt](/en-US/docs/Web/API/SubtleCrypto/encrypt) messages.
    - `decrypt`: The key may be used to [decrypt](/en-US/docs/Web/API/SubtleCrypto/decrypt) messages.
    - `sign`: The key may be used to [sign](/en-US/docs/Web/API/SubtleCrypto/sign) messages.
    - `verify`: The key may be used to [verify](/en-US/docs/Web/API/SubtleCrypto/verify) signatures.
    - `deriveKey`: The key may be used in deriving a new key.
    - `deriveBits`: The key may be used in [deriving bits](/en-US/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: The key may be used to [wrap a key](/en-US/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: The key may be used to [unwrap a key](/en-US/docs/Web/API/SubtleCrypto/unwrapKey).

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("CryptoKey")}}.

### Exceptions

The promise is rejected when one of the following exceptions are encountered:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Raised when the master key is not a key for the requested derivation algorithm or if the `keyUsages` value of that key doesn't contain `deriveKey`.
- `NotSupported` {{domxref("DOMException")}}
  - : Raised when trying to use an algorithm that is either unknown or isn't suitable for derivation, or if the algorithm requested for the derived key doesn't define a key length.
- `SyntaxError` {{domxref("DOMException")}}
  - : Raised when `keyUsages` is empty but the unwrapped key is of type `secret` or `private`.

## Supported algorithms

The algorithms supported by `deriveKey()` have quite different characteristics and are appropriate in different situations.

### Key derivation algorithms

#### HKDF

HKDF is a _key derivation function_.
It's designed to derive key material from some high-entropy input, such as the output of an ECDH key agreement operation.

It's _not_ designed to derive keys from relatively low-entropy inputs such as passwords.
For that, use PBKDF2.

HKDF is specified in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869).

#### PBKDF2

PBKDF2 is also a _key derivation function_.
It's designed to derive key material from some relatively low-entropy input, such as a password.
It derives key material by applying a function such as HMAC to the input password along with some salt, and repeating this process many times.
The more times the process is repeated, the more computationally expensive key derivation is: this makes it harder for an attacker to use brute-force to discover the key using a dictionary attack.

PBKDF2 is specified in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898).

### Key agreement algorithms

#### ECDH

ECDH (Elliptic Curve Diffie-Hellman) is a _key-agreement algorithm_.
It enables two people who each have an ECDH public/private key pair to generate a shared secret: that is, a secret that they — and no one else — share.
They can then use this shared secret as a symmetric key to secure their communication, or can use the secret as an input to derive such a key (for example, using the HKDF algorithm).

ECDH is specified in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090).

#### X25519

X25519 is a key agreement algorithm like ECDH, but built on the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) elliptic curve, which is part of the Edwards-Curve Digital Signature Algorithm (EdDSA) family of algorithms defined in {{rfc("8032")}}.

The Curve25519 algorithms are widely used in cryptography, and are considered to be some of the most efficient/fast available.
By comparison with the NIST (National Institute of Standards and Technology) curve key exchange algorithms used with ECDH, Curve25519 is simpler to implement, and its non-governmental origin means that the decisions behind its design choices are transparent and open.

X25519 is specified in {{rfc("7748")}}.

## Examples

> [!NOTE]
> You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html) on GitHub.

### ECDH: derive shared secret key

In this example Alice and Bob each generate an ECDH key pair, then exchange public keys.
They then use `deriveKey()` to derive a shared AES key, that they could use to encrypt messages.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Derive an AES key, given:
- our ECDH private key
- their ECDH public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

async function agreeSharedSecretKey() {
  // Generate 2 ECDH key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely
  let aliceKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let aliceSecretKey = await deriveSecretKey(
    aliceKeyPair.privateKey,
    bobKeyPair.publicKey,
  );

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobSecretKey = await deriveSecretKey(
    bobKeyPair.privateKey,
    aliceKeyPair.publicKey,
  );

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(aliceSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobSecretKey);
  });
}
```

### X25519: derive shared secret key

In this example Alice and Bob each generate an X25519 key pair, then exchange public keys.
They then each use `deriveKey()` to derive a shared AES key from their own private key and each other's public key.
They can use this shared key to encrypt and decrypt messages they exchange.

#### HTML

First we define an HTML {{HTMLElement("input")}} that you will use to enter the plaintext message that "Alice" will send, and a button that you can click to start the encryption process.

```html
<label for="message">Plaintext message from Alice (Enter):</label>
<input
  type="text"
  id="message"
  name="message"
  size="50"
  value="The lion roars near dawn" />
<input id="encrypt-button" type="button" value="Encrypt" />
```

This is followed by another two elements for displaying the ciphertext after Alice has encrypted the plaintext with her copy of the secret key, and for displaying the text after Bob has decrypted it with his copy of the secret key.

```html
<div id="results">
  <label for="encrypted">Encrypted (Alice)</label>
  <input
    type="text"
    id="encrypted"
    name="encrypted"
    size="30"
    value=""
    readonly />

  <label for="results">Decrypted (Bob)</label>
  <input
    type="text"
    id="decrypted"
    name="decrypted"
    size="50"
    value=""
    readonly />
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
input {
  display: block;
  margin: 5px 0px 5px 0px;
}
#results {
  margin-top: 20px;
}

#log {
  height: 150px;
  width: 90%;
  white-space: pre-wrap; /* wrap pre blocks */
  overflow-wrap: break-word; /* break on words */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
  margin-top: 20px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The code below shows how we use `deriveKey()`.
We pass in the remote party's X25519 public key, the local party's X25519 private key, and specify that the derived key should be an AES-GCM key.
We also set the derived key to be non-extractable, and suitable for encryption and decryption.

We use this function further down in the code to create shared keys for Bob and Alice.

```js
/*
Derive an AES-GCM key, given:
- our X25519 private key
- their X25519 public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "X25519",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}
```

Next we define the functions that Alice will use to {{glossary("UTF-8")}} encode and then encrypt her plaintext message, and that Bob will use to decrypt and then decode the message.
They both take as arguments the shared AES key, an [initialization vector](/en-US/docs/Web/API/AesGcmParams#iv), and the text to be encrypted or decrypted.

The same initialization vector must be used for encryption and decryption, but it does not need to be secret, so usually it is sent alongside the encrypted message.
In this case, though, since we're not actually sending a message, we just make it directly available.

```js
async function encryptMessage(key, initializationVector, message) {
  try {
    const encoder = new TextEncoder();
    encodedMessage = encoder.encode(message);
    // iv will be needed for decryption
    return await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: initializationVector },
      key,
      encodedMessage,
    );
  } catch (e) {
    console.log(e);
    return `Encoding error`;
  }
}

async function decryptMessage(key, initializationVector, ciphertext) {
  try {
    const decryptedText = await window.crypto.subtle.decrypt(
      // The iv value must be the same as that used for encryption
      { name: "AES-GCM", iv: initializationVector },
      key,
      ciphertext,
    );

    const utf8Decoder = new TextDecoder();
    return utf8Decoder.decode(decryptedText);
  } catch (e) {
    console.log(e);
    return "Decryption error";
  }
}
```

The `agreeSharedSecretKey()` function below is called on loading to generate pairs and shared keys for Alice and Bob.
It also adds a click handler for the "Encrypt" button that will trigger encryption and then decryption of the text defined in the first `<input>`.
Note that all the code is inside a `try...catch` handler, to ensure that we can log the case where key generation fails because the X25519 algorithm is not supported.

```js
async function agreeSharedSecretKey() {
  try {
    // Generate 2 X25519 key pairs: one for Alice and one for Bob
    // In more normal usage, they would generate their key pairs
    // separately and exchange public keys securely
    const aliceKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Alice's key pair: (algorithm: ${JSON.stringify(
        aliceKeyPair.privateKey.algorithm,
      )}, usages: ${aliceKeyPair.privateKey.usages})`,
    );

    const bobKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Bob's key pair: (algorithm: ${JSON.stringify(
        bobKeyPair.privateKey.algorithm,
      )}, usages: ${bobKeyPair.privateKey.usages})`,
    );

    // Alice then generates a secret key using her private key and Bob's public key.
    const aliceSecretKey = await deriveSecretKey(
      aliceKeyPair.privateKey,
      bobKeyPair.publicKey,
    );

    log(
      `aliceSecretKey: ${aliceSecretKey.type} (algorithm: ${JSON.stringify(
        aliceSecretKey.algorithm,
      )}, usages: ${aliceSecretKey.usages}), `,
    );

    // Bob generates the same secret key using his private key and Alice's public key.
    const bobSecretKey = await deriveSecretKey(
      bobKeyPair.privateKey,
      aliceKeyPair.publicKey,
    );

    log(
      `bobSecretKey: ${bobSecretKey.type} (algorithm: ${JSON.stringify(
        bobSecretKey.algorithm,
      )}, usages: ${bobSecretKey.usages}), \n`,
    );

    // Get access for the encrypt button and the three inputs
    const encryptButton = document.querySelector("#encrypt-button");
    const messageInput = document.querySelector("#message");
    const encryptedInput = document.querySelector("#encrypted");
    const decryptedInput = document.querySelector("#decrypted");

    encryptButton.addEventListener("click", async () => {
      log(`Plaintext: ${messageInput.value}`);

      // Define the initialization vector used when encrypting and decrypting.
      // This must be regenerated for every message!
      const initializationVector = window.crypto.getRandomValues(
        new Uint8Array(8),
      );

      // Alice can use her copy of the shared key to encrypt the message.
      const encryptedMessage = await encryptMessage(
        aliceSecretKey,
        initializationVector,
        messageInput.value,
      );

      // We then display part of the encrypted buffer and log the encrypted message
      let buffer = new Uint8Array(encryptedMessage, 0, 5);
      encryptedInput.value = `${buffer}...[${encryptedMessage.byteLength} bytes total]`;

      log(
        `encryptedMessage: ${buffer}...[${encryptedMessage.byteLength} bytes total]`,
      );

      // Bob uses his shared secret key to decrypt the message.
      const decryptedCiphertext = await decryptMessage(
        bobSecretKey,
        initializationVector,
        encryptedMessage,
      );

      decryptedInput.value = decryptedCiphertext;
      log(`decryptedCiphertext: ${decryptedCiphertext}\n`);
    });
  } catch (e) {
    log(e);
  }
}

// Finally we call the method to set the example running.
agreeSharedSecretKey();
```

#### Result

Press the Encrypt button to encrypt the text in the top `<input>` element, displaying the encrypted ciphertext and decrypted ciphertext in the following two elements.
The log area at the bottom provides information about the keys that are generated by the code.

{{EmbedLiveSample("X25519 derived shared key", "100%", "400px")}}

### PBKDF2: derive AES key from password

In this example we ask the user for a password, then use it to derive an AES key using PBKDF2, then use the AES key to encrypt a message.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
}
```

### HKDF: derive AES key from shared secret

In this example, we encrypt a message `plainText` given a shared secret `secret`, which might itself have been derived using an algorithm such as ECDH.
Instead of using the shared secret directly, we use it as key material for the HKDF function, to derive an AES-GCM encryption key, which we then use to encrypt the message.
[See the complete code on GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

```js
/*
  Given some key material and some random salt,
  derive an AES-GCM key using HKDF.
  */
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "HKDF",
      salt: salt,
      info: new TextEncoder().encode("Encryption example"),
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );
}

async function encrypt(secret, plainText) {
  const message = {
    salt: window.crypto.getRandomValues(new Uint8Array(16)),
    iv: window.crypto.getRandomValues(new Uint8Array(12)),
  };

  const key = await getKey(secret, message.salt);

  message.ciphertext = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: message.iv,
    },
    key,
    plainText,
  );

  return message;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HKDF specification](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST guidelines for password-based key derivation](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Advice on choosing an iteration count for PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
