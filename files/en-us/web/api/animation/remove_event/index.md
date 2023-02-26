---
title: "Animation: remove event"
slug: Web/API/Animation/remove_event
page-type: web-api-event
browser-compat: api.Animation.remove_event
---

{{ APIRef("Web Animations") }}

The **`remove`** event of the {{domxref("Animation")}} interface fires when the animation is removed (i.e., put into an `active` replace state).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener('remove', (event) => { })
onremove = (event) => { }
```

## Event type

An {{domxref("AnimationPlaybackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : The current time of the animation that generated the event.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : The time value of the timeline of the animation that generated the event.

## Examples

### Removing indefinite animations

#### Javascript

```js
const divElem = document.querySelector("div");

document.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    startAnimation();
  }
});

document.addEventListener("click", startAnimation);

function startAnimation() {
  document.body.addEventListener("mousemove", (evt) => {
    let anim = divElem.animate(
      { transform: `translate(${evt.clientX}px, ${evt.clientY}px)` },
      { duration: 500, fill: "forwards" }
    );

    // If you explicitly want the animations to be retained, then you can invoke persist()
    // But don't do this unless you really need to — having a huge list of animations
    // persisted can cause a memory leak
    //anim.persist()

    // onremove allows you to run an event handler that fires when the animation
    // was removed (i.e. put into an active replace state)
    anim.onremove = function () {
      console.log("Animation removed");
    };

    // replaceState allows you to query an element to see what its replace state is
    // It will be active by default, or persisted if persist() was invoked
    console.log(anim.replaceState);
  });
}
```

#### HTML

```html
<p>
  Click, tap, or press the space bar to start the animation (disabled by default
  to protect those who suffer migraines when experiencing such animations).
</p>
<div></div>
```

#### CSS

```css
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
}

div {
  width: 150px;
  height: 100px;
  background-color: red;
  border: 10px solid black;
  border-radius: 10px;
}

p {
  position: absolute;
  width: 300px;
  right: 10px;
  bottom: 10px;
}
```

{{embedlivesample("Removing_indefinite_animations")}}

Here we have a `<div>` element, and an event listener that fires the event handler code whenever the mouse moves. The event handler sets up an animation that animates the `<div>` element to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove overriding forward filling animations.

A console message is logged each time an animation it removed, invoked when the `remove` event is fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}, {{domxref("AnimationPlaybackEvent")}}
