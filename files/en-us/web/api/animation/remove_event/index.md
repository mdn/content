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
const button = document.querySelector("button");

document.addEventListener("click", startAnimation);

function startAnimation() {
  document.body.addEventListener("mousemove", (evt) => {
    let anim = button.animate(
      { transform: `translate(${evt.clientX}px, ${evt.clientY}px)` },
      { duration: 500, fill: "forwards" }
    );
    // onremove allows you to run an event handler that fires when the animation
    // was removed
    anim.onremove = function () {
      console.log("Animation removed");
    };
  });
}
```

#### HTML

```html
<button>Click to drag</button>
<p>
  Click the button to start the animation (disabled by default to protect those
  who suffer migraines when experiencing such animations).
</p>
```

#### CSS

```css
:root,
body {
  margin: 0;
  padding: 0;
  height: 100%;
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
