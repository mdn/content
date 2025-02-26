---
title: "FeaturePolicy: allowsFeature() method"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FeaturePolicy.allowsFeature
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`allowsFeature()`** method of
the {{DOMxRef("FeaturePolicy")}} interface enables introspection of individual
directives of the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) it is run on. It returns a {{JSxRef("Boolean")}}
that is `true` if and only if the specified feature is allowed in the
specified context (or the default context if no context is specified).

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameters

- `feature`
  - : The specific feature name to check its availability.
- `origin` {{Optional_inline}}
  - : The specific origin name to check its availability. If not specified, the default origin will be used.

### Return value

A {{JSxRef("Boolean")}} that is `true` if and only if the feature is
allowed.

## Example

The following example queries whether or not the document is allowed to use camera API
by the Permissions Policy. Please note that Camera API might be restricted by the
Permissions API, if the user did not grant the corresponding permission yet.

```js
// First, get the Feature Policy object
const featurePolicy = document.featurePolicy;

// Then query feature for specific
const allowed = featurePolicy.allowsFeature("camera");

if (allowed) {
  console.log("FP allows camera.");
} else {
  console.log("FP does not allows camera.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
