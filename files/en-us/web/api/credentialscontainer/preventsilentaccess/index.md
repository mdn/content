---
title: "CredentialsContainer: preventSilentAccess() method"
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.preventSilentAccess
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`preventSilentAccess()`** method of the {{domxref("CredentialsContainer")}} interface sets a flag that specifies whether automatic log in is allowed for future visits to the current origin, then returns a {{jsxref("Promise")}} that resolves to `undefined`.
For example, you might call this, after a user signs out of a website to ensure that they aren't automatically signed in on the next site visit.
Mediation varies by origin, and is an added check point of browser stored credentials, informing a user of an account login status. This method is typically called after a user signs out of a website, ensuring this user's login information is not automatically passed on the next site visit.

Earlier versions of the spec called this method `requireUserMediation()`.
The [Browser compatibility](/en-US/docs/Web/API/CredentialsContainer#browser_compatibility) section has support details.

## Syntax

```js-nolint
preventSilentAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
