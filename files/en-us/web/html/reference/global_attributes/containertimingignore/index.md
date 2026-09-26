---
title: "`containertimingignore` HTML global attribute"
short-title: containertimingignore
slug: Web/HTML/Reference/Global_attributes/containertimingignore
page-type: html-attribute
browser-compat: html.global_attributes.containertimingignore
sidebar: htmlsidebar
---

The **`containertimingignore`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is a boolean attribute that excludes an element and its descendants from contributing to the timing of any ancestor element marked with [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming).
For more details, see the {{domxref("PerformanceContainerTiming")}} interface.

In the DOM, this attribute is reflected as {{domxref("HTMLElement.containerTimingIgnore")}}.

## Examples

### Excluding a subtree from a container's timing

In this example, the {{htmlelement("div")}} and its contents are excluded from the `"hero"` container's timing, while the image still contributes to it.

```html
<section containertiming="hero">
  <img src="hero.jpg" alt="" />
  <div containertimingignore>
    <!-- content painted here does not count toward the "hero" container's timing -->
  </div>
</section>
```

For examples of how to use the Container Timing API to get timing information, see {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming)
- {{domxref("PerformanceContainerTiming")}}
- {{domxref("HTMLElement.containerTimingIgnore")}}
