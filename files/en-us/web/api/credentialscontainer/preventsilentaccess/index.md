---
title: CredentialsContainer.preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
page-type: web-api-instance-method
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Method
  - NeedsExample
  - Reference
  - credential management
browser-compat: api.CredentialsContainer.preventSilentAccess
---
{{APIRef("Credential Management API")}}

The **`preventSilentAccess()`** method
of the {{domxref("CredentialsContainer")}} interface sets a flag that specifies
whether automatic log in is allowed for future visits to the current origin, then
returns an empty [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). For
example, you might call this, after a user signs out of a website to ensure that
they aren't automatically signed in on the next site visit. Mediation varies by origin,
and is an added check point of browser stored credentials, informing a user of an
account login status. This method is typically called after a user signs out of a
website, ensuring this user's login information is not automatically passed on the next
site visit.

Earlier versions of the spec called this method `requireUserMediation()`.
The [Browser compatibility](/en-US/docs/Web/API/CredentialsContainer#browser_compatibility) section has support details.

## Syntax

```js
preventSilentAccess()
```

### Parameters

None.

### Return value

An empty {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
