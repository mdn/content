---
title: "HTMLModelElement: stagemode property"
short-title: stageMode
slug: Web/API/HTMLModelElement/stageMode
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.stageMode
---

{{APIRef("HTML DOM")}}

The **`HTMLModelElement.stageMode`** property reflects the
[`stagemode`](/en-US/docs/Web/HTML/Reference/Elements/model#stagemode) HTML attribute,
which indicates the current stage mode for the model element.

### Value

stageMode can be set to the following values:

- `none`: Take no action; equivalent to the value not being set.

- `orbit`: Enter Orbit mode, interpret horizontal user gestures as a rotation
  of the vertical axis and vertical gestures as rotation in the local pitch plane.

## Orbit mode

While the specific behavior of an orbit mode may vary between user agents, it has the following characteristics:

- The `entityTransform` becomes read-only, and reflects a scale and translation that fully accommodates the model contents within the visible bounding box of the model's viewport.

- [Pointer events](/en-US/docs/Web/API/Pointer_events) on the model's viewport reflect a pivoting behavior, similar to an "Orbit camera" as provided in may computer graphics applications.

### Impact on `entityTransform`

Setting the `stagemode` to `orbit` immediately has these consequences for the model element's `entityTransform`:

- Transform is <strong>`orbit-fit`</strong>:
  The scale and position reflected by the model's `entityTransform` is forced to be centered on its `boundingBoxCenter` and to accommodate the full size of the model's `boundingBoxExtents`. This differs to - and is likely smaller than - the model's default, [object fit](/en-US/docs/Web/HTML/Element/model#object_fit) transformation.

- Transform is <strong>read-only</strong>:
  While `entityTransform` is set to a read-only mode where any programmatic attempt to set it directly is ignored, throwing an error.
- Transform <strong>remains updated</strong>:
  Updates to the effective transform _are_ reflected in the parameter, so that information related the model's current orientation can be used to drive other aspects of the page's behavior.

## Examples

This example demonstrates how to set a model's stage mode to orbit.

```html
<model stagemode="orbit">
  <source src="teapot.usdz" type="model/vnd.usdz+zip" />
</model>
```

You can [try out or remix this example in real time on Glitch](https://Model-play-promise.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web model technologies](/en-US/docs/Web/Model)
- Learning: [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay guide for model and Web Audio APIs](/en-US/docs/Web/Model/Autoplay_guide)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
