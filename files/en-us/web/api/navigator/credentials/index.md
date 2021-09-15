---
title: Navigator.credentials
slug: Web/API/Navigator/credentials
tags:
  - API
  - CredentialsContainer
  - Property
  - Reference
  - credentials
browser-compat: api.Navigator.credentials
---
{{securecontext_header}}{{APIRef("")}}

The **`credentials`** property of the {{domxref("Navigator")}}
interface returns the {{domxref("CredentialsContainer")}} interface, which exposes
methods to request credentials. The {{domxref("CredentialsContainer")}} interface also
notifies the user agent when an interesting event occurs, such as a successful sign-in
or sign-out. This interface can be used for feature detection.

## Syntax

```js
var credentialsContainer = navigator.credentials
```

### Value

The {{domxref("CredentialsContainer")}} interface.

## Example

```js
if ('credentials' in navigator) {
  navigator.credentials.get({password: true})
  .then(function(creds) {
    //Do something with the credentials.
  });
} else {
  //Handle sign-in the way you did before.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
