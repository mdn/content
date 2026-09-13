---
title: "HTMLElement: containerTimingIgnore property"
short-title: containerTimingIgnore
slug: Web/API/HTMLElement/containerTimingIgnore
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLElement.containerTimingIgnore
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`containerTimingIgnore`** property of the {{domxref("HTMLElement")}} interface excludes the element and its descendants from contributing to the timing of any ancestor container root in the {{domxref("PerformanceContainerTiming")}} API.
The `containerTimingIgnore` property reflects the value of the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute.

## Value

A boolean value.

## Examples

### Logging the value of `containerTimingIgnore`

In this example, adding the [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) attribute to a {{htmlelement("div")}} element excludes it from its ancestor container's timing.

```html
<section containertiming="hero">
  <div containertimingignore id="ignored">
    <!-- ... -->
  </div>
</section>
```

```js
const el = document.getElementById("ignored");
console.log(el.containerTimingIgnore); // true
```

For a more complete example on how to use the Container Timing API, see {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming")}}
- [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) HTML attribute
- {{domxref("HTMLElement.containerTiming")}}
