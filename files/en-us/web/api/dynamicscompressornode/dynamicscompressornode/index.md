---
title: "DynamicsCompressorNode: DynamicsCompressorNode() constructor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
page-type: web-api-constructor
browser-compat: api.DynamicsCompressorNode.DynamicsCompressorNode
---

{{APIRef("Web Audio API")}}

The **`DynamicsCompressorNode()`**
constructor creates a new {{domxref("DynamicsCompressorNode")}} object which provides
a compression effect, which lowers the volume of the loudest parts of the
signal, in order to help prevent clipping and distortion. That can occur when
multiple sounds are played and multiplexed together at once.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameters

- `context`
  - : A reference to an {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Options are as follows:

    - `attack`
      - : The amount of time (in seconds) to reduce the gain by 10dB.
        Its default value is 0.003. This parameter is k-rate. Its nominal range is \[0, 1].
    - `knee`
      - : A decibel value representing the range above the threshold
        where the curve smoothly transitions to the "ratio" portion. Its default value is
        30\. This parameter is k-rate. Its nominal range is \[0, 40].
    - `ratio`
      - : The amount of dB change in input for a 1 dB change in
        output. Its default value is 12. This parameter is k-rate. Its nominal range is
        \[1, 20].
    - `release`
      - : The amount of time (in seconds) to increase the gain by 10dB. Its
        default value is 0.250. This parameter is k-rate. Its nominal range is \[0, 1].
    - `threshold`
      - : The decibel value above which the compression will start taking
        effect. Its default value is -24. This parameter is k-rate. Its nominal range is
        \[-100, 0].

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
