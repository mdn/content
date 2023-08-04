---
title: "CredentialsContainer: store() method"
short-title: store()
slug: Web/API/CredentialsContainer/store
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.store
---

{{APIRef("Credential Management API")}}

The **`store()`** method of the
{{domxref("CredentialsContainer")}} stores a set of credentials for the user inside a
{{domxref("Credential")}} instance, returning this in a {{jsxref("Promise")}}.

> **Note:** This method is restricted to top-level contexts. Calls to it within an
> `<iframe>` element will resolve without effect.

## Syntax

```js-nolint
store(credentials)
```

### Parameters

- `credentials`
  - : A valid {{domxref("Credential")}} instance.

### Return value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Examples

### Storing a password credential at successful authentication

This code would be executed after a user signs up or logs in and the server confirms
the credential is correct.

```js
// Check if the browser supports password credentials (and the Credential Management API)
if ("PasswordCredential" in window) {
  let credential = new PasswordCredential({
    id: "example-username",
    name: "Carina Anand", // In case of a login, the name comes from the server.
    password: "correct horse battery staple",
  });

  navigator.credentials.store(credential).then(
    () => {
      console.info("Credential stored in the user agent's credential manager.");
    },
    (err) => {
      console.error("Error while storing the credential: ", err);
    },
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
