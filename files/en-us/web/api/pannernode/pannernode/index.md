---
title: PannerNode()
slug: Web/API/PannerNode/PannerNode
page-type: web-api-constructor
tags:
  - API
  - Audio
  - Constructor
  - PannerNode
  - Reference
  - Web Audio API
browser-compat: api.PannerNode.PannerNode
---
{{APIRef("Web Audio API")}}

The **`PannerNode()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new {{domxref("PannerNode")}} object instance.

## Syntax

```js
new PannerNode(context)
new PannerNode(context, options)
```

### Parameters

- `context`
  - : A {{domxref("BaseAudioContext")}} representing the audio context you want the node to be associated with.
- `options` {{optional_inline}}

  - : A [`PannerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PannerOptions) dictionary object defining the properties you want the `PannerNode` to have:

    - `panningModel`
      - : The {{domxref("PannerNode.panningModel")}} you want the {{domxref("PannerNode")}} to have (the default is `equalpower`.)
    - `distanceModel`
      - : The {{domxref("PannerNode.distanceModel")}} you want the {{domxref("PannerNode")}} to have (the default is `inverse`.)
    - `positionX`
      - : The {{domxref("PannerNode.positionX")}} you want the {{domxref("PannerNode")}} to have (the default is `0`.)
    - `positionY`
      - : The {{domxref("PannerNode.positionY")}} you want the {{domxref("PannerNode")}} to have (the default is `0`.)
    - `positionZ`
      - : The {{domxref("PannerNode.positionZ")}} you want the {{domxref("PannerNode")}} to have (the default is `0`.)
    - `orientationX`
      - : The {{domxref("PannerNode.orientationX")}} you want the {{domxref("PannerNode")}} to have (the default is `1`.)
    - `orientationY`
      - : The {{domxref("PannerNode.orientationY")}} you want the {{domxref("PannerNode")}} to have (the default is `0`.)
    - `orientationZ`
      - : The {{domxref("PannerNode.orientationZ")}} you want the {{domxref("PannerNode")}} to have (the default is `0`.)
    - `refDistance`
      - : The {{domxref("PannerNode.refDistance")}} you want the {{domxref("PannerNode")}} to have. The default is `1`, and negative values are not allowed.
    - `maxDistance`
      - : The {{domxref("PannerNode.maxDistance")}} you want the {{domxref("PannerNode")}} to have. The default is `10000`, and non-positive values are not allowed.
    - `rollOffFactor`
      - : The {{domxref("PannerNode.rollOffFactor")}} you want the {{domxref("PannerNode")}} to have. The default is `1`, and negative values are not allowed.
    - `coneInnerAngle`
      - : The {{domxref("PannerNode.coneInnerAngle")}} you want the {{domxref("PannerNode")}} to have (the default is `360`.)
    - `coneOuterAngle`
      - : The {{domxref("PannerNode.coneOuterAngle")}} you want the {{domxref("PannerNode")}} to have (the default is `360`.)
    - `coneOuterGain`
      - : The {{domxref("PannerNode.coneOuterGain")}} you want the {{domxref("PannerNode")}} to have. The default is `0`, and its value can be in the range 0–1.
    - `channelCount`
      - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node. (See
        {{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
        definition depend on the value of `channelCountMode`.
    - `channelCountMode`
      - : Represents an enumerated value describing the way channels must be matched between
        the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
        information including default values.)
    - `channelInterpretation`
      - : Represents an enumerated value describing the meaning of the channels. This
        interpretation will define how audio [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) will happen.
        The possible values are `"speakers"` or `"discrete"`. (See
        {{domxref("AudioNode.channelCountMode")}} for more information including default
        values.)

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `refDistance`, `maxDistance`, or `rolloffFactor` properties have been given a value that is outside the accepted range.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `coneOuterGain` property has been given a value outside the accepted range (0–1).

## Examples

```js
const ctx = new AudioContext();

const options = {
  positionX : 1,
  maxDistance: 5000
}

const myPanner = new PannerNode(ctx, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
