---
title: FeaturePolicy.features()
slug: Web/API/FeaturePolicy/features
page-type: web-api-instance-method
browser-compat: api.FeaturePolicy.features
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`features()`** method of the
{{DOMxRef("FeaturePolicy")}} interface returns a list of names of all features
supported by the User Agent. Feature whose name appears on the list might not be
allowed by the Feature Policy of the current execution context and/or might not be
accessible because of user's permissions.

## Syntax

```js
const supportedFeatures = FeaturePolicy.features()
```

### Parameters

None.

### Return value

A list of strings that represent names of all Feature Policy directives supported by
the User Agent.

## Example

The following example logs all the supported directives in the console.

```js
// Get the Feature Policy object
const featurePolicy = document.featurePolicy

// Retrieve the list of all supported Feature Policy directives
const supportedDirectives = featurePolicy.features()

// Print out each directive into the console
for (const directive of supportedDirectives){
  console.log(directive)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
