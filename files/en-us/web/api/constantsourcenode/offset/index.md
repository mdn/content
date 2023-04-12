---
title: "ConstantSourceNode: offset property"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
page-type: web-api-instance-property
browser-compat: api.ConstantSourceNode.offset
---

{{ APIRef("Web Audio API") }}

The read-only `offset` property of the {{ domxref("ConstantSourceNode") }}
interface returns a {{domxref("AudioParam")}} object indicating the numeric [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) value which is always returned
by the source when asked for the next sample.

> **Note:** While the `AudioParam` named `offset` is read-only, the
> `value` property within is not. So you can change the value of
> `offset` by setting the value of
> `ConstantSourceNode.offset.value`:
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## Value

An {{ domxref("AudioParam") }} object indicating the [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) value returned for every
sample by this node. The default value is 1.0.

To access the `offset` parameter's current value, access the parameter's
`value` property, as shown in the syntax box above.

## Examples

This example shows how to set up a `ConstantSourceNode` so its
`offset` is used as the input to a pair of {{domxref("GainNode")}}s; this
snippet is derived from the complete example you can find in [Controlling multiple parameters with ConstantSourceNode](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

First, the gain nodes are created and configured, and a slider control's value is set
to match the gain on the two nodes. Then we create a new
{{domxref("ConstantSourceNode")}} and make it the source for the two gain nodes'
{{domxref("GainNode.gain")}} values. Each of those values is also an
{{domxref("AudioParam")}}.

Let's say we have an event handler (for {{domxref("Element/click_event", "click")}} events, in this case) which
needs to respond by altering the value of the two gain nodes. With the linkage above in
place, that can be done using this simple event handler:

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

All this function has to do is fetch the current value of the slider control we're
using to control the paired nodes' gains, then store that value into the
`ConstantSourceNode`'s `offset` parameter. That's done by changing
the contents of its {{domxref("AudioParam.value")}} property. The two gain nodes quickly
adopt the new volume level.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("ConstantSourceNode")}}
- {{domxref("AudioNode")}}
- {{domxref("AudioParam")}}
