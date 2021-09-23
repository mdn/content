---
title: FederatedCredential
slug: Web/API/FederatedCredential
tags:
  - API
  - Credential Management API
  - FederatedCredential
  - Interface
  - Reference
  - credential management
browser-compat: api.FederatedCredential
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}

The **`FederatedCredential`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about credentials from a federated identity provider. A federated identity provider is an entity that a website trusts to correctly authenticate a user, and that provides an API for that purpose. [OpenID Connect](http://openid.net/developers/specs/) is an example of a federated identity provider framework.

In browsers that support it, an instance of this interface may be passed in the `credential` member of the `init` object for global {{domxref('fetch()')}}.

## Constructor

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}}
  - : Creates a new `FederatedCredential` object.

## Properties

_Inherits properties from its ancestor, {{domxref("Credential")}}._

- {{domxref("FederatedCredential.provider")}} {{readonlyInline}}
  - : Returns a {{domxref("USVString")}} containing a credential's federated identity provider.
- {{domxref("FederatedCredential.protocol")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing a credential's federated identity protocol.

### Event handlers

None.

## Methods

None.

## Examples

```js
var cred = new FederatedCredential({
  id: id,
  name: name,
  provider: 'https://account.google.com',
  iconURL: iconUrl
});

// Store it
navigator.credentials.store(cred)
  .then(function() {
  // Do something else.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
