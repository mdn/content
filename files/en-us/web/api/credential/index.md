---
title: Credential
slug: Web/API/Credential
tags:
  - API
  - Credential Management API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - credential management
browser-compat: api.Credential
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`Credential`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about an entity (usually a user) as a prerequisite to a trust decision.

`Credential` objects may be of 3 different types:

- {{domxref("PasswordCredential")}}
- {{domxref("PublicKeyCredential")}}
- {{domxref("FederatedCredential")}}

## Properties

- {{domxref("Credential.id")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the credential's identifier. This might be any one of a GUID, username, or email address.
- {{domxref("Credential.type")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the credential's type. Valid values are `password`, `federated` and `public-key`. (For {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}} and {{domxref("PublicKeyCredential")}})

### Event handlers

None.

## Methods

None.

## Examples

```js
let pwdCredential = new PasswordCredential({
  id: "example-username", // Username/ID
  name: "John Doe", // Display name
  password: "correct horse battery staple" // Password
});

console.assert(pwdCredential.type === "password");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
