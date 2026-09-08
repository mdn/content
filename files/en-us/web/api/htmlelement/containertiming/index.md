---
title: "HTMLElement: containerTiming property"
short-title: containerTiming
slug: Web/API/HTMLElement/containerTiming
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLElement.containerTiming
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`containerTiming`** property of the {{domxref("HTMLElement")}} interface marks the element as a container root for observation in the {{domxref("PerformanceContainerTiming")}} API.
The `containerTiming` property reflects the value of the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute.

## Value

A string.

## Examples

### Logging the value of `containerTiming`

In this example, adding the [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) attribute to the {{htmlelement("section")}} element sets it up as a container root.

```html
<section containertiming="hero" id="hero-section">
  <!-- ... -->
</section>
```

You can get the string value of the `containertiming` HTML attribute by calling `el.containerTiming`.

```js
const el = document.getElementById("hero-section");
console.log(el.containerTiming); // "hero"
```

For a more complete example on how to use the Container Timing API, see {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming")}}
- [`containertiming`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertiming) HTML attribute
- {{domxref("HTMLElement.containerTimingIgnore")}}
