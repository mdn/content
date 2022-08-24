---
title: 'Feature-Policy: publickey-credentials-get'
slug: Web/HTTP/Headers/Feature-Policy/publickey-credentials-get
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - publickey-credentials-get
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.publickey-credentials-get
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `publickey-credentials-get` directive controls whether the current document is allowed to access the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) to retrieve public-key credentials; i.e., via {{DOMxRef("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}.

When this policy is enabled, any attempt to query public key credentials will result in an error.

## Syntax

```http
Feature-Policy: publickey-credentials-get <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default allowlist is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}} interface
