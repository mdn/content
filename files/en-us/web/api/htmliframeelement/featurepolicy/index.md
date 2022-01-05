---
title: HTMLIFrameElement.featurePolicy
slug: Web/API/HTMLIFrameElement/featurePolicy
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - HTMLIFrameElement
  - Policy
  - Property
browser-compat: api.HTMLIFrameElement.featurePolicy
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

The **`featurePolicy`** read-only
property of the {{DOMxRef("HTMLIFrameElement")}} interface returns the
{{DOMxRef("FeaturePolicy")}} interface which provides a simple API for introspecting
the feature policies applied to a specific frame.

## Syntax

```js
var policy = HTMLIFrameElement.featurePolicy
```

### Value

A [`FeaturePolicy`](/en-US/docs/Web/API/FeaturePolicy "Note: This interface is called Policy in Firefox.") object
that can be used to inspect the Feature Policy settings applied to the frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
