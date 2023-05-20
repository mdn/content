---
title: Credential
slug: Web/API/Credential
page-type: web-api-interface
browser-compat: api.Credential
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`Credential`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about an entity (usually a user) normally as a prerequisite to a trust decision.

`Credential` objects may be of four different types:

- {{domxref("FederatedCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("PasswordCredential")}}
- {{domxref("PublicKeyCredential")}}

## Instance properties

- {{domxref("Credential.id")}} {{ReadOnlyInline}}
  - : Returns a string containing the credential's identifier. This might be any one of a GUID, username, or email address.
- {{domxref("Credential.type")}} {{ReadOnlyInline}}
  - : Returns a string containing the credential's type. Valid values are `password`, `federated` and `public-key`. (For {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}} and {{domxref("PublicKeyCredential")}})

### Event handlers

None.

## Instance methods

None.

## Examples

```js
let pwdCredential = new PasswordCredential({
  id: "example-username", // Username/ID
  name: "Carina Anand", // Display name
  password: "correct horse battery staple", // Password
});

console.assert(pwdCredential.type === "password");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
