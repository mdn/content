---
title: FeaturePolicy.allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
page-type: web-api-instance-method
tags:
  - API
  - Directive
  - Feature Policy
  - Feature-Policy
  - FeaturePolicy
  - Reference
  - Experimental
browser-compat: api.FeaturePolicy.allowedFeatures
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`allowedFeatures()`** method of
the {{DOMxRef("FeaturePolicy")}} interface returns a list of directive names of all
features allowed by the feature policy.enables introspection of individual directives
of the Feature Policy it is run on. As such, `allowedFeatures()` method
returns a subset of directives returned by {{DOMxRef("FeaturePolicy.features",
    "features()")}}.

## Syntax

```js
const allowed = FeaturePolicy.allowedFeatures()
```

### Parameters

None.

### Return value

An array of strings representing the Feature Policy directive names that are allowed by
the Feature Policy this method is called on.

## Example

The following example logs all the allowed directives for the current document. Please
note that these features might be restricted by the Permissions API, if the user did not
grant the corresponding permission yet.

```js
// First, get the Feature Policy object
const featurePolicy = document.featurePolicy

// Then query feature for specific
const allowed = featurePolicy.allowedFeatures()

for (const directive of allowed){
  console.log(directive)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
