---
title: "FeaturePolicy: features() method"
short-title: features()
slug: Web/API/FeaturePolicy/features
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FeaturePolicy.features
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`features()`** method of the
{{DOMxRef("FeaturePolicy")}} interface returns a list of names of all features
supported by the User Agent. Feature whose name appears on the list might not be
allowed by the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) of the current execution context and/or might not be
accessible because of user's permissions.

## Syntax

```js-nolint
features()
```

### Parameters

None.

### Return value

A list of strings that represent names of all Permissions Policy directives supported by
the user agent.

## Example

The following example logs all the supported directives in the console.

```js
// Get the FeaturePolicy object
const featurePolicy = document.featurePolicy;

// Retrieve the list of all supported Permissions Policy directives
const supportedDirectives = featurePolicy.features();

// Print out each directive into the console
for (const directive of supportedDirectives) {
  console.log(directive);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
