---
title: "HTMLElement: containerTimingIgnore property"
short-title: containerTimingIgnore
slug: Web/API/HTMLElement/containerTimingIgnore
page-type: web-api-instance-property
browser-compat: api.HTMLElement.containerTimingIgnore
---

{{APIRef("HTML DOM")}}

The **`containerTimingIgnore`** property of the {{domxref("HTMLElement")}} interface excludes the element and its descendants from contributing to the timing of any ancestor container root in the [Container Timing API](/en-US/docs/Web/API/PerformanceContainerTiming).

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

We can then read the property and log its value:

```js
const el = document.getElementById("ignored");
console.log(el.containerTimingIgnore); // true
```

For examples of how to use the Container Timing API to get timing information, see {{domxref("PerformanceContainerTiming")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceContainerTiming")}}
- [`containertimingignore`](/en-US/docs/Web/HTML/Reference/Global_attributes/containertimingignore) HTML attribute
- {{domxref("HTMLElement.containerTiming")}}
