---
title: "PasswordCredential: PasswordCredential() constructor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.PasswordCredential.PasswordCredential
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PasswordCredential()`**
constructor creates a new {{domxref("PasswordCredential")}} object. In
supporting browsers, an instance of this class may be passed the `credential`
from the `init` object for global {{domxref("Window/fetch", "fetch()")}}.

## Syntax

```js-nolint
new PasswordCredential(data)
new PasswordCredential(form)
```

### Parameters

Either of the following:

- `data`

  - : An object with the following properties:

    - `iconURL` {{optional_inline}}
      - : A string representing the URL of an icon or avatar to be associated with the credential.
    - `id`
      - : A string representing a unique ID for the credential.
    - `name` {{optional_inline}}
      - : A string representing the credential username.
    - `origin`
      - : A string representing the credential's origin. {{domxref("PasswordCredential")}} objects are origin-bound, which means that they will only be usable on the specified origin they were intended to be used on.
    - `password`
      - : A string representing the credential password.

- `form`
  - : A reference to an {{domxref("HTMLFormElement")}} with appropriate input fields. The
    form should, at the very least, contain an id and password. It could also require a
    CSRF token.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if one of the `id`, `origin` or `password` option is empty.

## Examples

This example shows how to set up an {{domxref("HTMLFormElement")}} to capture data
which we'll use to create a {{domxref("PasswordCredential")}} object.

Starting with the form element.

```html
<form id="form" method="post">
  <label for="id">Username:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Password:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Then, a reference to this form element, using it to create
a {{domxref("PasswordCredential")}} object, and storing it in the browser's password
system.

```js
const form = document.querySelector("#form");
const creds = new PasswordCredential(form);
// Store the credentials.
navigator.credentials.store(creds).then((creds) => {
  // Do something with the credentials if you need to.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
