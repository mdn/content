---
title: FederatedCredential
slug: Web/API/FederatedCredential
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FederatedCredential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`FederatedCredential`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about credentials from a federated identity provider. A federated identity provider is an entity that a website trusts to correctly authenticate a user, and that provides an API for that purpose. [OpenID Connect](https://openid.net/developers/specs/) is an example of a federated identity provider framework.

> [!NOTE]
> The [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) provides a more complete solution for handling identity federation in the browser, and uses the {{domxref("IdentityCredential")}} type.

In browsers that support it, an instance of this interface may be passed in the `credential` member of the `init` object for global {{domxref("Window/fetch", "fetch()")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}} {{Experimental_Inline}}
  - : Creates a new `FederatedCredential` object.

## Instance properties

_Inherits properties from its ancestor, {{domxref("Credential")}}._

- {{domxref("FederatedCredential.provider")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string containing a credential's federated identity provider.
- {{domxref("FederatedCredential.protocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string containing a credential's federated identity protocol.

## Instance methods

None.

## Examples

```js
const cred = new FederatedCredential({
  id,
  name,
  provider: "https://account.google.com",
  iconURL,
});

// Store it
navigator.credentials.store(cred).then(() => {
  // Do something else.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
