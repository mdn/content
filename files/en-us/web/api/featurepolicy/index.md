---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
page-type: web-api-interface
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - FeaturePolicy
  - Interface
  - Permissions
  - Privileges
  - Reference
  - access
  - delegation
browser-compat: api.FeaturePolicy
---
{{APIRef("Feature Policy")}}

The `FeaturePolicy` interface of the [Feature Policy API](/en-US/docs/Web/HTTP/Feature_Policy) represents the set of policies applied to the current execution context.

## FeaturePolicy Methods

- {{DOMxRef("FeaturePolicy.allowsFeature")}}
  - : Returns a Boolean that indicates whether or not a particular feature is enabled in the specified context.
- {{DOMxRef("FeaturePolicy.features")}}
  - : Returns a list of names of all features supported by the User Agent. Feature whose name appears on the list might not be allowed by the Feature Policy of the current execution context and/or might not be accessible because of user's permissions.
- {{DOMxRef("FeaturePolicy.allowedFeatures")}}
  - : Returns a list of names of all features supported by the User Agent and allowed by the Feature Policy. Note that features appearing on this list might still be behind a user permission.
- {{DOMxRef("FeaturePolicy.getAllowlistForFeature")}}
  - : Returns the Allow list for the specified feature.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}}
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
