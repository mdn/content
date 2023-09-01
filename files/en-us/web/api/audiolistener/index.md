---
title: AudioListener
slug: Web/API/AudioListener
page-type: web-api-interface
browser-compat: api.AudioListener
---

{{ APIRef("Web Audio API") }}

The `AudioListener` interface represents the position and orientation of the unique person listening to the audio scene, and is used in [audio spatialization](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics). All {{domxref("PannerNode")}}s spatialize in relation to the `AudioListener` stored in the {{domxref("BaseAudioContext.listener")}} attribute.

It is important to note that there is only one listener per context and that it isn't an {{domxref("AudioNode")}}.

![We see the position, up and front vectors of an AudioListener, with the up and front vectors at 90° from the other.](webaudiolistenerreduced.png)

## Instance properties

> **Note:** The position, forward, and up value are set and retrieved using different syntaxes. Retrieval is done by accessing, for example, `AudioListener.positionX`, while setting the same property is done with `AudioListener.positionX.value`. This is why these values are not marked read only, which is how they appear in the specification's IDL.

- {{domxref("AudioListener.positionX")}}
  - : Represents the horizontal position of the listener in a right-hand cartesian coordinate system. The default is 0.
- {{domxref("AudioListener.positionY")}}
  - : Represents the vertical position of the listener in a right-hand cartesian coordinate system. The default is 0.
- {{domxref("AudioListener.positionZ")}}
  - : Represents the longitudinal (back and forth) position of the listener in a right-hand cartesian coordinate system. The default is 0.
- {{domxref("AudioListener.forwardX")}}
  - : Represents the horizontal position of the listener's forward direction in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.
- {{domxref("AudioListener.forwardY")}}
  - : Represents the vertical position of the listener's forward direction in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.
- {{domxref("AudioListener.forwardZ")}}
  - : Represents the longitudinal (back and forth) position of the listener's forward direction in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is -1.
- {{domxref("AudioListener.upX")}}
  - : Represents the horizontal position of the top of the listener's head in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.
- {{domxref("AudioListener.upY")}}
  - : Represents the vertical position of the top of the listener's head in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 1.
- {{domxref("AudioListener.upZ")}}
  - : Represents the longitudinal (back and forth) position of the top of the listener's head in the same cartesian coordinate system as the position (`positionX`, `positionY`, and `positionZ`) values. The forward and up values are linearly independent of each other. The default is 0.

## Instance methods

- {{domxref("AudioListener.setOrientation()")}} {{deprecated_inline}}
  - : Sets the orientation of the listener.
- {{domxref("AudioListener.setPosition()")}} {{deprecated_inline}}
  - : Sets the position of the listener.

> **Note:** Although these methods are deprecated they are currently the only way to set the orientation and position in Firefox.

## Deprecated features

The `setOrientation()` and `setPosition()` methods have been replaced by setting their property value equivalents. For example `setPosition(x, y, z)` can be achieved by setting `positionX.value`, `positionY.value`, and `positionZ.value` respectively.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
