---
title: "HTMLModelElement: play() method"
short-title: play()
slug: Web/API/HTMLModelElement/play
page-type: web-api-instance-method
browser-compat: api.HTMLModelElement.play
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLModelElement")}}
**`play()`** method attempts to begin playback of the model.
It returns a {{jsxref("Promise")}} which is resolved when playback has been
successfully started.

Failure to begin playback for any reason, such as
permission issues, result in the promise being rejected.

## Syntax

```js-nolint
model.play();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that is resolved when playback has been started, or is
rejected if for any reason playback cannot be started.

## Examples

This example demonstrates how to confirm that playback has begun and how to gracefully
handle blocked automatic playback:

```js
let modelElem = document.getElementById("model");
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", handlePlayButton, false);
playModelAnimation();

async function playModelAnimation() {
  try {
    await modelElem.play();
    playButton.classList.add("playing");
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (modelElem.paused) {
    playModelAnimation();
  } else {
    modelElem.pause();
    playButton.classList.remove("playing");
  }
}
```

In this example, playback of model is toggled off and on by the
[`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
`playModelAnimation()` function. It tries to play the model, and if successful sets
the class name of the `playButton` element to `"playing"`. If
playback fails to start, the `playButton` element's class is cleared,
restoring its default appearance. This ensures that the play button matches the actual
state of playback by watching for the resolution or rejection of the
{{jsxref("Promise")}} returned by `play()`.

When this example is executed, it begins by collecting references to the
{{HTMLElement("model")}} element as well as the {{HTMLElement("button")}} used to toggle
playback on and off. It then sets up an event handler for the {{domxref("Element/click_event", "click")}} event
on the play toggle button and attempts to automatically begin playback by calling
`playModelAnimation()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also
