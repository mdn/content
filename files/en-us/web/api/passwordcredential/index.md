---
title: PasswordCredential
slug: Web/API/PasswordCredential
tags:
  - API
  - Credential Management API
  - Interface
  - PasswordCredential
  - Reference
  - credential management
browser-compat: api.PasswordCredential
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

The interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) provides information about a username/password pair. In supporting browsers an instance of this class may be passed in the `credential` member of the `init` object for global {{domxref('fetch()')}}.

> **Note:** This interface is restricted to top-level contexts and cannot be used from an {{HTMLElement("iframe")}}.

## Constructor

- {{domxref("PasswordCredential.PasswordCredential()","PasswordCredential()")}}{{securecontext_inline}}
  - : Creates a new `PasswordCredential` object.

## Properties

_Inherits properties from its ancestor, {{domxref("Credential")}}._

- {{domxref("PasswordCredential.iconURL")}} {{readonlyinline}}{{securecontext_inline}}
  - : A {{domxref("USVString")}} containing a URL pointing to an image for an icon. This image is intended for display in a credential chooser. The URL must be accessible without authentication.
- {{domxref("PasswordCredential.name")}} {{readonlyinline}}{{securecontext_inline}}
  - : A {{domxref("USVString")}} containing a human-readable public name for display in a credential chooser.
- {{domxref("PasswordCredential.password")}}{{readonlyinline}}{{securecontext_inline}}
  - : A {{domxref("USVString")}} containing the password of the credential.

### Event handlers

None.

## Methods

None.

## Examples

```js
var cred = new PasswordCredential({
  id: id,
  password: password,
  name: name,
  iconURL: iconUrl
});

navigator.credentials.store(cred)
 .then(function() {
 // Do something else.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
