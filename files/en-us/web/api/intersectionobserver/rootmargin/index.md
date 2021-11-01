---
title: IntersectionObserver.rootMargin
slug: Web/API/IntersectionObserver/rootMargin
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - rootMargin
browser-compat: api.IntersectionObserver.rootMargin
---
{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

The {{domxref("IntersectionObserver")}} interface's read-only
**`rootMargin`** property is a string with syntax similar to
that of the CSS {{cssxref("margin")}} property. Each side of the rectangle represented
by `rootMargin` is added to the corresponding side in the
{{domxref("IntersectionObserver.root", "root")}} element's {{Glossary("bounding box")}}
before the intersection test is performed. This lets you, for example, adjust the bounds
outward so that the target element is considered 100% visible even if a certain number
of pixels worth of width or height is clipped away, or treat the target as partially
hidden if an edge is too close to the edge of the root's bounding box.

See {{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API", "The root element
  and root margin")}} for a more in-depth look at the root margin and how it works with
the root's bounding box.

## Syntax

```js
var marginString = IntersectionObserver.rootMargin;
```

### Value

A string, formatted similarly to the CSS {{cssxref("margin")}} property's value, which
contains offsets for one or more sides of the root's bounding box. These offsets are
added to the corresponding values in the root's bounding box before the intersection
between the resulting rectangle and the target element's bounds.

The string returned by this property may not match the one specified when the
{{domxref("IntersectionObserver")}} was instantiated. The browser is permitted to alter
the values

If `rootMargin` isn't specified when the object was instantiated, it
defaults to the string `"0px 0px 0px 0px"`, meaning that the intersection
will be computed between the root element's unmodified bounds rectangle and the target's
bounds.  {{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API", "The root
  element and root margin")}} describes how the `rootMargin` is used in more
detail.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
