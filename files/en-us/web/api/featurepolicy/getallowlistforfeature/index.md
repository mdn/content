---
title: "FeaturePolicy: getAllowlistForFeature() method"
short-title: getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FeaturePolicy.getAllowlistForFeature
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`getAllowlistForFeature()`**
method of the {{DOMxRef("FeaturePolicy")}} interface enables querying of the allowlist for a specific feature for the current Permissions Policy.

## Syntax

```js-nolint
const allowlist = FeaturePolicy.getAllowlistForFeature(feature)
```

### Parameter

#### Feature name

A specific feature name must be specified.

### Return value

An array of strings containing the serialized list of allowed origins for the feature. If a wildcard (`*`) is used, the array will contain `*`.

## Errors

The function will raise a warning if the specified Permissions Policy directive name is not
known. However, it will also return empty array, indicating that no origin is allowed to
use the feature.

## Example

The following example prints all the origins that are allowed to use Camera API by the
Permissions Policy. Please note that Camera API might also be restricted by the [Permissions API](/en-US/docs/Web/API/Permissions_API), if the user did not grant the corresponding permission.

```js
// First, get the FeaturePolicy object
const featurePolicy = document.featurePolicy;

// Query for specific feature
const allowlist = featurePolicy.getAllowlistForFeature("camera");

for (const origin of allowlist) {
  console.log(origin);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
