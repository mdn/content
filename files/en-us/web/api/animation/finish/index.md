---
title: Animation.finish()
slug: Web/API/Animation/finish
tags:
  - API
  - Animation
  - Finish
  - Interface
  - Method
  - Reference
  - Web Animations
  - waapi
  - web animations api
browser-compat: api.Animation.finish
---
{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`finish()`** method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} Interface sets the current playback time to the end of the animation corresponding to the current playback direction.

That is, if the animation is playing forward, it sets the playback time to the length of the animation sequence, and if the animation is playing in reverse (having had its {{domxref("Animation.reverse", "reverse()")}} method called), it sets the playback time to 0.

## Syntax

```js
Animation.finish();
```

### Parameters

None.

### Return value

None.

### Exceptions

- `InvalidState`
  - : The player's playback rate is 0 or the animation's playback rate is greater than 0 and the end time of the animation is infinity.

## Examples

The following example shows how to use the `finish()` method and catch an `InvalidState` error.

```js
interfaceElement.addEventListener("mousedown", function() {
  try {
    player.finish();
  } catch(e if e instanceof InvalidState) {
    console.log("finish() called on paused or finished animation.");
  } catch(e);
    logMyErrors(e); //pass exception object to error handler
  }
});
```

The following example finishes all the animations on a single element, regardless of their direction of playback.

```js
elem.getAnimations().forEach(
  function(animation){
    return animation.finish();
  }
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.play()")}} to play an animation forward.
- {{domxref("Animation.reverse()")}} to play an animation backward.
