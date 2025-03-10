---
title: PasswordCredential
slug: Web/API/PasswordCredential
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PasswordCredential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`PasswordCredential`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about a username/password pair. In supporting browsers an instance of this class may be passed in the `credential` member of the `init` object for global {{domxref("Window/fetch", "fetch()")}}.

> [!NOTE]
> This interface is restricted to top-level contexts and cannot be used from an {{HTMLElement("iframe")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PasswordCredential.PasswordCredential()","PasswordCredential()")}} {{Experimental_Inline}}
  - : Creates a new `PasswordCredential` object.

## Instance properties

_Inherits properties from its ancestor, {{domxref("Credential")}}._

- {{domxref("PasswordCredential.iconURL")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string containing a URL pointing to an image for an icon. This image is intended for display in a credential chooser. The URL must be accessible without authentication.
- {{domxref("PasswordCredential.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A human-readable string that provides public name for display in a credential chooser.
- {{domxref("PasswordCredential.password")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string containing the password of the credential.

## Instance methods

None.

## Examples

```js
const cred = new PasswordCredential({
  id,
  password,
  name,
  iconURL,
});

navigator.credentials.store(cred).then(() => {
  // Do something else.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
