---
title: FeaturePolicy.getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
page-type: web-api-instance-method
tags:
  - API
  - Feature Policy
  - Permissions-Policy
  - Reference
  - Experimental
browser-compat: api.FeaturePolicy.getAllowlistForFeature
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`getAllowlistForFeature()`**
method of the {{DOMxRef("FeaturePolicy")}} interface allows query of the allow list for a
specific feature for the current Permissions Policy.

## Syntax

```js-nolint
const allowlist = FeaturePolicy.getAllowlistForFeature(feature)
```

### Parameter

#### Feature name

A specific feature name must be specified.

### Return value

An [Allow list](/en-US/docs/Web/HTTP/Permissions_Policy/#allowlists) for the
specified feature.

## Errors

The function will raise a warning if the specified Permissions Policy directive name is not
known. However, it will also return empty array, indicating that no origin is allowed to
use the feature.

## Example

The following example prints all the origins that are allowed to use Camera API by the
Permissions Policy. Please note that Camera API might be restricted by the Permissions API,
if the user did not grant the corresponding permission yet.

```js
// First, get the Permissions Policy object
const featurePolicy = document.featurePolicy

// Then query feature for specific
const allowlist = featurePolicy.getAllowlistForFeature("camera")

for (const origin of allowlist) {
  console.log(origin)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
