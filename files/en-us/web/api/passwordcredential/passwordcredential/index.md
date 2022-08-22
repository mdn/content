---
title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Credential Management API
  - PasswordCredential
  - Reference
  - credential management
  - Experimental
browser-compat: api.PasswordCredential.PasswordCredential
---
{{APIRef("Credential Management API")}}{{SeeCompatTable}}

The **`PasswordCredential()`**
constructor creates a new {{domxref("PasswordCredential")}} object. In
supporting browsers, an instance of this class may be passed the `credential`
from the `init` object for global {{domxref('fetch()')}}.

## Syntax

```js
new PasswordCredential(passwordCredentialData)
new PasswordCredential(htmlFormElement)
```

### Parameters

Either of the following:

- `passwordCredentialData`

  - : An object with the following properties:

    - `iconURL` {{optional_inline}}
      - : The URL of a user's avatar image.
    - `id`
      - : The ID of the user signing in.
    - `name` {{optional_inline}}
      - : The name of the user signing in.
    - `password`
      - : The password of the user signing in.

- `htmlFormElement`
  - : A reference to an {{domxref("HTMLFormElement")}} with appropriate input fields. The
    form should, at the very least, contain an id and password. It could also require a
    CSRF token.

## Examples

This example shows how to set up an {{domxref("HTMLFormElement")}} to capture data
which we'll use to create a {{domxref("PasswordCredential")}} object.

Starting with the form element.

```html
<form id="form" method="post">
  <input type="text" name="id" autocomplete="username" />
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Then, a reference to this form element, using it to create
a {{domxref("PasswordCredential")}} object, and storing it in the browser's password
system.

```js
const form = document.querySelector('#form');
const creds = new PasswordCredential(form);
// Store the credentials.
navigator.credentials.store(creds)
  .then((creds) => {
  // Do something with the credentials if you need to.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
