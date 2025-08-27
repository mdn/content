---
title: "Animation: startTime property"
short-title: startTime
slug: Web/API/Animation/startTime
page-type: web-api-instance-property
browser-compat: api.Animation.startTime
---

{{ APIRef("Web Animations") }}

The **`Animation.startTime`** property of the {{domxref("Animation")}} interface is a double-precision floating-point value which indicates the scheduled time when an animation's playback should begin.

An animation's **start time** is the time value of its {{domxref("DocumentTimeline","timeline")}} when its target {{domxref("KeyframeEffect")}} is scheduled to begin playback. An animation's **start time** is initially unresolved (meaning that it's `null` because it has no value).

## Value

A floating-point number representing the current time in milliseconds, or `null` if no time is set. You can read this value to determine what the start time is currently set at, and you can change this value to make the animation start at a different time.

## Examples

### Syncing different animations

In the following example, we can sync all new animated cats by giving them all the same `startTime` as the original running cat. Note that this is only possible with the Web Animation API: it is impossible to sync two separate animations with CSS animations.

```html hidden
<div id="css-cats">
  <h2>Cats animated with<br />CSS Animations</h2>
  <div class="cat with-css"></div>
  <button id="insert-css-cat">Add a Cat</button>
</div>

<div id="waapi-cats">
  <h2>Cats animated with the<br />Web Animation API</h2>
  <div class="cat" id="with-waapi"></div>
  <button id="insert-waapi-cat">Add a Cat</button>
</div>
```

```css
/* All cats have the same dimensions and the same sprite for a background image. */
.cat {
  background: url("/shared-assets/images/examples/web-animations/cat_sprite.png") -600px
    0 no-repeat;
  height: 150px;
  width: 100%;
}

/* The cats animated with CSS have their running animations set with CSS */
.cat.with-css {
  animation: 0.75s steps(13, end) infinite run-cycle;
}

/*
  The keyframes for the CSS running animation.
  This moves the background image sprite around.
*/
@keyframes run-cycle {
  from {
    background-position: -600px 0;
  }
  to {
    background-position: -600px -1950px;
  }
}
```

```css hidden
#css-cats,
#waapi-cats {
  text-align: center;
  vertical-align: top;
  min-width: 300px;
}

body {
  background: #e5e6e9;
  color: #071933;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
}
```

```js
const cssCats = document.getElementById("css-cats");
const waapiCats = document.getElementById("waapi-cats");
const insertCSSCat = document.getElementById("insert-css-cat");
const insertWAAPICat = document.getElementById("insert-waapi-cat");

// The same information as @keyframes run-cycle
const keyframes = [
  { backgroundPosition: "-600px 0" },
  { backgroundPosition: "-600px -1950px" },
];
// The same information as .cat.with-css
const timing = {
  duration: 750,
  iterations: Infinity,
  easing: "steps(13, end)",
};

const catRunning = document
  .getElementById("with-waapi")
  .animate(keyframes, timing);

function createCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

insertCSSCat.addEventListener("click", () => {
  const newCat = createCat();
  newCat.classList.add("with-css");
  cssCats.insertBefore(newCat, insertCSSCat);
});

insertWAAPICat.addEventListener("click", () => {
  const newCat = createCat();
  const newAnimationPlayer = newCat.animate(keyframes, timing);
  // set start time to be the same as the original .cat#with-waapi
  newAnimationPlayer.startTime = catRunning.startTime;
  waapiCats.insertBefore(newCat, insertWAAPICat);
});
```

{{EmbedLiveSample("Syncing different animations", "", 600)}}

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `animation.startTime` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `animation.startTime` will always be a multiple of 0.002, or a multiple of 0.1 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
animation.startTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
animation.startTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.currentTime")}} for the current time of the animation.
