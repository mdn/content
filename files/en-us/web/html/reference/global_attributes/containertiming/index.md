---
title: "`containertiming` HTML global attribute"
short-title: containertiming
slug: Web/HTML/Reference/Global_attributes/containertiming
page-type: html-attribute
browser-compat: html.global_attributes.containertiming
sidebar: htmlsidebar
---

The **`containertiming`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) marks an element as a _container root_, for which {{domxref("PerformanceContainerTiming")}} entries can be observed by {{domxref("PerformanceObserver")}} objects using the `"container"` type.

Its value is a string that identifies the container.
Any paints to new areas inside the container root's subtree contribute to the container's timing (content painted inside the container root itself is excluded, as are repaints to already painted areas).
Timing entries are only reported until the user scrolls or interacts with the page.
Descendant subtrees can be excluded from a container's timing using the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute.
For more details, see the {{domxref("PerformanceContainerTiming")}} interface.

In the DOM, this attribute is reflected as {{domxref("HTMLElement.containerTiming")}}.

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
