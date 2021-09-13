---
title: GlobalEventHandlers.onanimationstart
slug: Web/API/GlobalEventHandlers/onanimationstart
tags:
  - API
  - Animations
  - CSS Animations
  - CSS3 Animations
  - Document
  - Event Handler
  - GlobalEventHandlers
  - HTMLElement
  - Reference
  - Window
  - onanimationstart
  - onwebkitanimationstart
browser-compat: api.GlobalEventHandlers.onanimationstart
---
{{APIRef("CSS3 Animations")}}

An event handler for the {{event("animationstart")}} event. This event is sent when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) starts to play.

## Syntax

```js
var animStartHandler = target.onanimationstart;
target.onanimationstart = Function
```

### Value

A {{jsxref("Function")}} to be called when an {{event("animationstart")}} event occurs
indicating that a CSS animation has begun on the _`target`_, where the
target object is an HTML element ({{domxref("HTMLElement")}}), document
({{domxref("Document")}}), or window ({{domxref("Window")}}). The function receives as
input a single parameter: an {{domxref("AnimationEvent")}} object describing the event
which occurred.

## Example

```html hidden
<div class="main">
  <div id="box">
    <div id="text">Box</div>
  </div>
</div>

<div class="button" id="play">
  Play Animation
</div>

<pre id="log"></pre>
```

### CSS content

```css hidden
:root {
  --boxwidth:50px;
}

.main {
  width: 300px;
  height:300px;
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
a look at the styles for the box that we're animating. First is the box itself. We set
its size, position, color, and layout. Note that there's nothing there about animation.
That's because we don't want the box to start animating right away. We'll add the
{{cssxref("animation")}} style later to start animating the box.

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
}
```

The animation sequence is described next. First, the `"slideAnimation"`
class, which establishes the {{cssxref("animation")}} that will cause the box to move
over the course of five seconds, one time, using the `"slideBox"` keyframe
set. The keyframes are defined next; they describe an animation which causes the box to
migrate from the top-left corner of the container to the bottom-right corner.

```css
.slideAnimation {
  animation: 5s ease-in-out 0s 1 slideBox;
}

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

Since the CSS describes the animation but doesn't connect it to the box, we'll need
some JavaScript code to do that.  We'll get to that shortly.

### JavaScript content

Before we get to the animation code, we define a function which logs information to a
box on the user's screen. We'll use this to show information about the events we
receive. Note the use of {{domxref("AnimationEvent.animationName")}} and
{{domxref("AnimationEvent.elapsedTime")}} to get information about the event which occurred.

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

Then we set up the event handlers for the {{event("animationstart")}} and
{{event("animationend")}} events:

```js
let box = document.getElementById("box");

box.onanimationstart = function(event) {
  log("Animation started", event);
}

box.onanimationend = function(event) {
  log("Animation stopped", event);
};
```

Finally, we set up a handler for a click on the button that runs the animation:

```js
document.getElementById("play").addEventListener("click", function(event) {
  document.getElementById("box").className = "slideAnimation";
  event.target.style.display = "none";
}, false);
```

This sets the class of the box we want to animate to the class that contains the
{{cssxref("animation")}} description, then hides the play button because this example
will only run the animation once. For information about why, and how to support running
an animation more than once, see
{{SectionOnPage("/en-US/docs/Web/CSS/CSS_Animations/Tips", "Run an animation again")}}.

### Result

Assembled together, you get this:

{{ EmbedLiveSample('Example', 500, 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("animationstart")}} event this event handler is triggered by.
- {{domxref("AnimationEvent")}}
