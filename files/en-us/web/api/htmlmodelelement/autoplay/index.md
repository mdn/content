---
title: "HTMLModelElement: autoplay property"
short-title: autoplay
slug: Web/API/HTMLModelElement/autoplay
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.autoplay
---

{{APIRef("HTML DOM")}}

The **`HTMLModelElement.autoplay`** property reflects the [`autoplay`](/en-US/docs/Web/HTML/Reference/Elements/model#autoplay) HTML attribute, indicating whether playback should automatically begin as soon as the model resource is ready and renderable.

## Value

A boolean value which is `true` if the model element will begin playback as soon as the resource is ready.

## Examples

```html
<model id="model">
  <source src="teapot_animated.usdz" type="model/vnd.usdz+zip" />
</model>
```

```js
// false is the default value
document.querySelector("#model").autoplay = false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModelElement")}}: Interface used to define the `HTMLModelElement.autoplay` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
