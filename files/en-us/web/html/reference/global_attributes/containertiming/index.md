---
title: "`containertiming` HTML global attribute"
short-title: containertiming
slug: Web/HTML/Reference/Global_attributes/containertiming
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.containertiming
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`containertiming`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) marks an element as a _container root_ for observation by {{domxref("PerformanceObserver")}} objects using the `"container"` type.
Its value is a string that identifies the container.
For more details, see the {{domxref("PerformanceContainerTiming")}} interface.

In the DOM, this attribute is reflected as {{domxref("HTMLElement.containerTiming")}}.

## Description

Any newly-painted content inside the container root's subtree contributes to the container's timing, including content painted inside a nested container root; that content also counts toward the ancestor containers' timing.
Descendant subtrees can be excluded from a container's timing using the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute.

## Examples

### Marking a container root

```html
<section containertiming="hero">
  <h1>Welcome</h1>
  <img src="hero.jpg" alt="" />
</section>

<div containertiming="product-list">
  <!-- product cards -->
</div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore)
- {{domxref("PerformanceContainerTiming")}}
- {{domxref("HTMLElement.containerTiming")}}
