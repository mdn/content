---
title: "Animation: remove event"
short-title: remove
slug: Web/API/Animation/remove_event
page-type: web-api-event
browser-compat: api.Animation.remove_event
---

{{ APIRef("Web Animations") }}

The **`remove`** event of the {{domxref("Animation")}} interface fires when the animation is [automatically removed](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) by the browser.

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

### Removing replaced animations

In this example we have a `<button id="start">` element, and an event listener that runs whenever the mouse moves. The {{domxref("Element.mousemove_event","mousemove")}} event handler sets up an animation that animates the `<button>` to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove forwards-filling animations that are overridden by other animations.

The number of animations created is displayed. A `remove` event listener is used to count and display the number of animations removed as well.

All but one of the animations should eventually be removed.

#### HTML

```html
<button id="start">Click to drag</button>
<br />
<button id="reset">Reset example</button>
<p>
  Click the button to start the animation (disabled by default to protect those
  who suffer migraines when experiencing such animations).
</p>
<p>Animations created: <span id="count-created">0</span></p>
<p>Animations removed: <span id="count-removed">0</span></p>
```

#### CSS

```css
:root,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

button {
  margin: 0.5rem 0;
}
```

#### JavaScript

```js
const button = document.querySelector("#start");
let created = 0;
let removed = 0;

button.addEventListener(
  "click",
  () => {
    document.body.addEventListener("mousemove", (event) => {
      const animation = button.animate(
        { transform: `translate(${event.clientX}px, ${event.clientY}px)` },
        { duration: 500, fill: "forwards" },
      );
      created++;
      showCounts();

      // the remove event fires after the animation is removed
      animation.addEventListener("remove", () => {
        removed++;
        showCounts();
      });
    });
  },
  { once: true },
);

function showCounts() {
  document.getElementById("count-created").textContent = created;
  document.getElementById("count-removed").textContent = removed;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Result

{{embedlivesample("Removing_replaced_animations","",250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}, {{domxref("AnimationPlaybackEvent")}}
- {{domxref("Animation.replaceState")}}, to check whether an animation has been removed
- {{domxref("Animation.persist()")}}, to prevent removal of an animation
