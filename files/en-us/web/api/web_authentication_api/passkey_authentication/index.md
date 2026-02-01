---
title: Passkey authentication
slug: Web/API/Web_Authentication_API/Passkey_authentication
page-type: guide
---

{{DefaultAPISidebar("Web Authentication API")}}

## Passkey authentication with autofill

**Discoverable credentials** are retrieved from an authenticator — _discovered_ by the browser — to offer as login options when the user is logging in to a relying party web app. In contrast, non-discoverable credentials are provided by the relying party server for the browser to offer as login options.

Discoverable credential IDs and associated metadata such as [user names](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) and [display names](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) are stored in a client-side authenticator such as a browser password manager, authenticator app, or hardware solution such as a YubiKey. Having this information available in the authenticator means that the user can log in conveniently without having to supply credentials, and the relying party does not have to provide a [`credentialId`](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) when asserting it (although it can do if desired; if the credential is asserted by the RP then the non-discoverable workflow is followed).

A discoverable credential is created via a [`create()`](/en-US/docs/Web/API/CredentialsContainer/create) call with a specified [`residentKey`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey). The `credentialId`, user metadata, and public key for the new credential is stored by the authenticator as discussed above, but also returned to the web app and stored on the RP server.

In order to authenticate, the RP server calls [`get()`](/en-US/docs/Web/API/CredentialsContainer/get) with **conditional mediation** specified, that is [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) set to `conditional`, an empty [`allowCredentials`](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) list (meaning only discoverable credentials can be shown), and a challenge.

Conditional mediation results in discoverable credentials found in the authenticator being presented to the user in a non-modal UI along with an indication of the origin requesting credentials, rather than a modal dialog. In practice, this means autofilling available credentials in your login forms. The metadata stored in discoverable credentials can be displayed to help users choose a credential when logging in. To display discoverable credentials in your login forms, you also need to include [`autocomplete="webauthn"`](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) on your form fields.

To reiterate, the relying party doesn't tell the authenticator what credentials to offer to the user — instead, the authenticator supplies the list it has available. Once the user selects a credential, the authenticator uses it to sign the challenge with the associated private key, and the browser returns the signed challenge and its `credentialId` to the RP server.

The subsequent authentication process on the RP server is the same as for non-discoverable credentials.

> [!NOTE]
> You can check whether conditional mediation is available on a specific user agent by calling the {{domxref("PublicKeyCredential.isConditionalMediationAvailable()")}} method.

[Passkeys](https://passkeys.dev/) are a significant use case for discoverable credentials; see [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) and [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) for implementation details. See also [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) for more general information on discoverable credentials.

When conditional mediation is used for authentication, the prevent silent access flag (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is treated as being `true` regardless of its actual value: the conditional behavior always involves user mediation of some sort if applicable credentials are discovered.

> [!NOTE]
> If no credentials are discovered, the non-modal dialog will not be visible, and the user agent can prompt the user to take action in a way that depends on the type of credential (for example, to insert a device containing credentials).

## Conditional creation

You can also use conditional mediation when creating a new passkey. This allows the browser to offer to create a passkey automatically when the user is filling out a sign-up form, often saving them a click.

To do this, call {{domxref("CredentialsContainer.create()", "create()")}} with the `mediation` option set to `"conditional"`.

```js
const publicKeyCredentialCreationOptions = {
  // ... existing options ...
  authenticatorSelection: {
    residentKey: "preferred",
    requireResidentKey: false,
    userVerification: "preferred",
  },
};

const credential = await navigator.credentials.create({
  publicKey: publicKeyCredentialCreationOptions,
  mediation: "conditional", // <--- This enables the autofill UI for creation
});
```
