---
title: FederatedCredentialInit
slug: Web/API/FederatedCredentialInit
page-type: web-api-interface
spec-urls: https://w3c.github.io/webappsec-credential-management/#dom-federatedcredential-federatedcredential
---

{{APIRef("Credential Management API")}}

The **`FederatedCredentialInit`** dictionary represents the object passed to {{domxref("CredentialsContainer.create()")}} as the value of the `federated` option: that is, when creating a {{domxref("FederatedCredential")}} object representing a credential associated with a federated identify provider.

> [!NOTE]
> The [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) supersedes the {{domxref("FederatedCredential")}} interface in favor of the {{domxref("IdentityCredential")}} interface.
>
> The `FederatedCredentialInit` dictionary is not used when working with the `IdentityCredential` interface.

## Instance properties

- `iconURL` {{optional_inline}}
  - : A string representing the URL of an icon or avatar to be associated with the credential.
- `id`
  - : A string representing a unique ID for the credential.
- `name` {{optional_inline}}
  - : A string representing the credential username.
- `origin`
  - : A string representing the credential's origin. {{domxref("FederatedCredential")}} objects are origin-bound, which means that they will only be usable on the specified origin they were intended to be used on.
- `protocol` {{optional_inline}}
  - : A string representing the protocol of the credentials' federated identity provider (for example, `"openidconnect"`).
- `provider`
  - : A string representing the credentials' federated identity provider (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).

## Examples

### Creating a federated identity credential

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    federated: credInit,
  });
  console.log(cred.name);
  console.log(cred.provider);
});
```

## Specifications

{{Specifications}}
