---
title: PublicKeyCredentialRequestOptions.extensions
slug: Web/API/PublicKeyCredentialRequestOptions/extensions
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.extensions
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`extensions`**, an optional property of the
{{domxref("PublicKeyCredentialRequestOptions")}} dictionary, is an object providing the
client extensions and their input values.

Extensions are values requesting additional processing by the client and by the
authenticator. For instance, extensions may be used for:

- backward compatibility with the legacy FIDO JS API,
- knowing the user verification process,
- etc.

> **Note:** An analogous option exists for the creation operation
> ({{domxref("CredentialsContainer.create","navigators.credentials.create()")}}), see
> {{domxref("PublicKeyCredentialCreationOptions.extensions")}}.

## Syntax

```js
extensions = publicKeyCredentialRequestOptions.extensions
```

### Value

An object with various keys and values.

Here is the current (as of March 2019) list of potential extensions which may be used
during the registration operation.

> **Warning:** As of June 2020, only `appid` is supported by [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=818303) and
> [Edge](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/windows-integration/web-authentication#api-surface).
> Firefox does not seem to [support any
> extension](https://bugzilla.mozilla.org/show_bug.cgi?id=1370728). Also Chrome doesn't plan to support any other extension in [future](https://bugs.chromium.org/p/chromium/issues/detail?id=1097972)

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Extension identifier</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>appid</code></td>
      <td>{{domxref("USVString")}}</td>
      <td>
        FIDO appID. An appID which was used with legacy FIDO JS APIs to identify
        the current relying party.
      </td>
    </tr>
    <tr>
      <td><code>txAuthSimple</code></td>
      <td>{{domxref("USVString")}}</td>
      <td>
        Simple transaction authorization. This text is displayed on a prompt of
        the authenticator before verifying the user or testing their presence.
        The client outputs a {{domxref("USVString")}} which is the text
        as it was displayed (line breaks may have been added).
      </td>
    </tr>
    <tr>
      <td><code>txAuthGeneric</code></td>
      <td>
        <p>An object with two properties:</p>
        <ul>
          <li><code>contentType</code> ({{domxref("USVString")}})</li>
          <li><code>content</code> ({{jsxref("ArrayBuffer")}})</li>
        </ul>
      </td>
      <td>
        Generic transaction authorization. This is used to display an image or
        some non-textual content on the authenticator before verifying the user
        or testing their presence. The <code>contentType</code> gives the
        <a href="/en-US/docs/Glossary/MIME_type">MIME type</a> of the resource
        to be displayed while <code>content</code> gives its actual content. The
        client outputs the hash of the content which was displayed (hashing with
        the same algorithm which is used for the signature).
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
  </tbody>
</table>

> **Note:** Extensions are optional and different browsers may recognize
> different extensions. All extensions are optional for the client to process them: if a
> browser does not know a given extension, that will not cause any failure, the
> extension will not be processed.

## Examples

```js
var options = {
  extensions: {
    uvm: true,
    loc: false,
    txAuthSimple: "Could you please verify yourself?"
  },
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
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
- {{domxref("PublicKeyCredentialCreationOptions.extensions")}}, the analogous option
  property used when creating a credential
