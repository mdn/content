---
title: "HTMLElement: containerTiming property"
short-title: containerTiming
slug: Web/API/HTMLElement/containerTiming
page-type: web-api-instance-property
browser-compat: api.HTMLElement.containerTiming
---

{{APIRef("HTML DOM")}}

The **`containerTiming`** property of the {{domxref("HTMLElement")}} interface marks the element as a container root for observation in the [Container Timing API](/en-US/docs/Web/API/PerformanceContainerTiming).

The `containerTiming` property reflects the value of the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute.

## Value

A string.

## Examples

### Marking an element as a container

In this example, adding the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute to the {{htmlelement("section")}} element sets it up as a container root.

```html
<section containertiming="hero" id="hero-section">
  <!-- ... -->
</section>
```

For examples on how to use the Container Timing API to get timing information, see {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming")}}
- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML attribute
- {{domxref("HTMLElement.containerTimingIgnore")}}
