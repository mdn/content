---
title: GlobalEventHandlers.onanimationcancel
slug: Web/API/GlobalEventHandlers/onanimationcancel
tags:
  - API
  - Animation
  - CSS Animations
  - Document
  - Element
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - Web Animations
  - Window
  - onanimationcancel
  - web animations api
browser-compat: api.GlobalEventHandlers.onanimationcancel
---
{{APIRef("CSS3 Animations")}}

The **`onanimationcancel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("animationcancel")}} events.

An `animationcancel` event is sent when a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations) unexpectedly aborts, that
is, any time it stops running without sending an {{event("animationend")}} event. This
can happen, for example, when the {{cssxref("animation-name")}} is changed such that the
animation is removed, or when the animating node is hidden—either directly or because
any of its containing nodes are hidden—using CSS.

## Syntax

```js
var animCancelHandler = target.onanimationcancel;

target.onanimationcancel = {{jsxref("Function")}}
```

### Value

A {{jsxref("Function")}} to be called when an {{event("animationcancel")}} event occurs
indicating that a CSS animation has begun on the _`target`_, where the
target object is an HTML element ({{domxref("HTMLElement")}}), document
({{domxref("Document")}}), or window ({{domxref("Window")}}). The function receives as
input a single parameter: an {{domxref("AnimationEvent")}} object describing the event
which occurred.

## Example

### HTML

```html
<div class="main">
  <div id="box" onanimationcancel="handleCancelEvent(event);">
    <div id="text">Box</div>
  </div>
</div>

<div class="button" id="toggleBox">
  Hide the Box
</div>

<pre id="log"></pre>
```

### CSS

```css hidden
:root {
  --boxwidth: 50px;
}

.main {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font: 14px "Open Sans", "Arial", sans-serif;
}

#text {
  width: 46px;
  padding: 10px;
  position: relative;
  text-align: center;
  align-self: center;
  color: white;
  font: bold 1.4em "Lucida Grande", "Open Sans", sans-serif;
}
```

Leaving out some bits of the CSS that don't matter for the discussion here, let's take
a look at the styles for the box that we're animating. First is the box itself, with all
its properties, including {{cssxref("animation")}}, defined. We go ahead and describe
the animation in-place here because the animation is intended to begin as soon as the
page loads, rather than based on an event.

```css
#box {
  width: var(--boxwidth);
  height: var(--boxwidth);
  left: 0;
  top: 0;
  border: 1px solid #7788FF;
  margin: 0;
  position: relative;
  background-color: #2233FF;
  display: flex;
  justify-content: center;
  animation: 5s ease-in-out 0s infinite alternate both slideBox;
}
```

The animation's keyframes are described next, plotting a course from the top-left
corner of the content box to the bottom-right corner.

```css
@keyframes slideBox {
  from {
    left:0;
    top:0;
  }
  to {
    left:calc(100% - var(--boxwidth));
    top:calc(100% - var(--boxwidth))
  }
}
```

Since the animation is described as taking place an infinite number of times,
alternating direction each time, the box will glide back and forth between the two
corners until stopped or the page is closed.

### JavaScript

Before we get to the animation code, we define a function which logs information to a
box on the user's screen. We'll use this to show information about the events we
receive. Note the use of {{domxref("AnimationEvent.animationName")}} and
{{domxref("AnimationEvent.elapsedTime")}} to get information about the event which
occurred.

```js
function log(msg, event) {
  let logBox = document.getElementById("log");

  logBox.innerHTML += msg;

  if (event) {
    logBox.innerHTML += " <code>"+ event.animationName +
        "</code> at time " + event.elapsedTime.toFixed(2) +
        " seconds.";
  }

  logBox.innerHTML += "\n";
};
```

Then we set up the `handleCancelEvent()` function, which is called in
response to the {{event("animationcancel")}} event, as set up in the HTML above. All we
do here is log information to the console, but you might find other use cases, such as
starting a new animation or effect, or terminating some dependent operation.

```js
function handleCancelEvent(event) {
  log("Animation canceled", event);
};
```

Then we add a method to handle toggle {{cssxref("display")}} between
` "``flex" ` and ` "``none" ` and establish it
as the handler for a {{event("click")}} event on the "Hide/Show" the Box button:

```js
document.getElementById('toggleBox').addEventListener('click', function() {
  if (box.style.display == "none") {
    box.style.display = "flex";
    document.getElementById("toggleBox").innerHTML = "Hide the box";
  } else {
    box.style.display = "none";
    document.getElementById("toggleBox").innerHTML = "Show the box";
  }
});
```

Toggling the box to `display: none` has the effect of aborting its
animation. In browsers that support {{event("animationcancel")}}, the event is fired and
this handler is called.

### Result

Assembled together, you get this:

{{ EmbedLiveSample('Example', 500, 400) }}

If your browser supports `animationcancel`, hiding the box using the button
will cause a message to be displayed about the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("animationcancel")}} event this event handler is triggered by.
- {{domxref("AnimationEvent")}}
