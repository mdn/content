---
title: PublicKeyCredentialCreationOptions.extensions
slug: Web/API/PublicKeyCredentialCreationOptions/extensions
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.extensions
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`extensions`**, an optional property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary, is an object providing the
client extensions and their input values.

Extensions are values requesting additional processing by the client and by the
authenticator. For instance, extensions may be used for:

- backward compatibility with the legacy FIDO JS API,
- knowing the user verification process,
- etc.

> **Note:** An analogous option exists for the fetching operation
> ({{domxref("CredentialsContainer.get","navigators.credentials.get()")}}), see
> {{domxref("PublicKeyCredentialRequestOptions.extensions")}}.

## Syntax

```js
extensions = publicKeyCredentialCreationOptions.extensions
```

### Value

An object with various keys and values.

Here is the current (as of March 2019) list of potential extensions which may be used
during the registration operation.

> **Warning:** As of June 2020, only `appId` (used during
> creation with {{domxref("PublicKeyCredentialRequestOptions.extensions")}}) is
> supported by [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=818303) and
> [Edge](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/windows-integration/web-authentication#api-surface).
> Firefox does not seem to [support any
> extension](https://bugzilla.mozilla.org/show_bug.cgi?id=1370728). Also Chrome doesn't plan to support any other extension in [future](https://bugs.chromium.org/p/chromium/issues/detail?id=1097972)

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Extension identifier</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>authnSel</code></td>
      <td>Array of {{domxref("BufferSource")}}</td>
      <td>
        Authenticator selection. Restricts the list of authenticator models
        which may be used. If no matching authenticator is available, the
        credential is still generated with another available authenticator.
      </td>
    </tr>
    <tr>
      <td><code>exts</code></td>
      <td>Boolean</td>
      <td>
        Supported extensions. If <code>true</code>, the client outputs an array
        of strings containing the extensions which are supported by the
        authenticator.
      </td>
    </tr>
    <tr>
      <td><code>uvi</code></td>
      <td>Boolean</td>
      <td>
        User verification index. If <code>true</code>, the client outputs an
        {{jsxref("ArrayBuffer")}} which contains a value uniquely
        identifying a user verification data record. In other words, this may be
        used server side to check if the current operation is based on the same
        biometric data that the previous authentication.
      </td>
    </tr>
    <tr>
      <td><code>loc</code></td>
      <td>Boolean</td>
      <td>
        Location. If <code>true</code>, the client outputs a
        {{domxref("GeolocationCoordinates")}} object representing the
        geolocation of the authenticator.
      </td>
    </tr>
    <tr>
      <td><code>uvm</code></td>
      <td>Boolean</td>
      <td>
        User verification method. If <code>true</code>, the client outputs an
        array of arrays with 3 values containing information about how the user
        was verified (e.g. fingerprint, pin, pattern), how the key is protected,
        how the matcher (tool used for the authentication operation) is
        protected.
      </td>
    </tr>
    <tr>
      <td><code>biometricPerfBounds</code></td>
      <td>
        Object with two numerical properties: <code>FAR</code> and
        <code>FRR</code>
      </td>
      <td>
        Biometric authenticator performance bounds. The client must not use any
        authenticator with false acceptance rate (FAR) and false rejection rate
        (FRR) below the inputs. The client outputs <code>true</code> if this was
        taken into account.
      </td>
    </tr>
  </tbody>
</table>

> **Note:** Extensions are optional and different browsers may recognize
> different extensions. All extensions are optional for the client to process them: if a
> browser does not know a given extension, that will not cause any failure, the
> extension will not be processed.

## Examples

```js
var publicKey = {
  extensions:{
    uvi: true,
    loc: false,
    uvm: false,
    exts: true
  },
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // myBuffer will contain the result of any of the processing of the extensions
    var myBuffer = newCredentialInfo.getClientExtensionResults();

    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}
- [The list of all of
  the extensions defined in the specification](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- {{domxref("PublicKeyCredentialRequestOptions.extensions")}}, the analogous option
  property used when fetching a credential
