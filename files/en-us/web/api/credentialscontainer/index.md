---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
page-type: web-api-interface
browser-compat: api.CredentialsContainer
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`CredentialsContainer`** interface of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) exposes methods to request credentials and notify the user agent when events such as successful sign in or sign out happen. This interface is accessible from {{domxref('Navigator.credentials')}}.

## Instance properties

None.

## Instance methods

- {{domxref("CredentialsContainer.create()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a new {{domxref("Credential")}} instance based on the provided options, or `null` if no `Credential` object can be created. In exceptional circumstances, the {{jsxref("Promise")}} may reject.
- {{domxref("CredentialsContainer.get()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with the {{domxref("Credential")}} instance that matches the provided parameters.
- {{domxref("CredentialsContainer.preventSilentAccess()")}}
  - : Sets a flag that specifies whether automatic log in is allowed for future visits to the current origin, then returns an empty {{jsxref("Promise")}}. For example, you might call this, after a user signs out of a website to ensure that they aren't automatically signed in on the next site visit. Earlier versions of the spec called this method `requireUserMediation()`. See [Browser compatibility](#browser_compatibility) for support details.
- {{domxref("CredentialsContainer.store()")}}
  - : Stores a set of credentials for a user, inside a provided {{domxref("Credential")}} instance and returns that instance in a {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
