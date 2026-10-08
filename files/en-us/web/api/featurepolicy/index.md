---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
page-type: web-api-interface
status:
  - experimental
  - non-standard
browser-compat: api.FeaturePolicy
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}{{non-standard_header}}

The `FeaturePolicy` interface represents the set of [Permissions Policies](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) applied to the current execution context.

## Instance methods

- {{DOMxRef("FeaturePolicy.allowsFeature")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Returns a Boolean that indicates whether or not a particular feature is enabled in the specified context.
- {{DOMxRef("FeaturePolicy.features")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Returns a list of names of all features supported by the User Agent. Features whose names appear on the list might not be allowed by the Permissions Policy of the current execution context and/or might be restricted by user-granted permissions.
- {{DOMxRef("FeaturePolicy.allowedFeatures")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Returns a list of names of all features supported by the User Agent and allowed by the Permissions Policy. Note that features appearing on this list might still be behind a user permission.
- {{DOMxRef("FeaturePolicy.getAllowlistForFeature")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Returns the allow for the specified feature.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}}
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
