---
title: 'Animation: cancel event'
slug: Web/API/Animation/cancel_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
browser-compat: api.Animation.cancel_event
---
{{ APIRef("Web Animations") }}

The **`cancel`** event of the {{domxref("Animation")}} interface is fired when the {{domxref("Animation.cancel()")}} method is called or when the animation enters the `"idle"` play state from another state, such as when the animation is removed from an element before it finishes playing.

> **Note:** Creating a new animation that is initially idle does not trigger a `cancel` event on the new animation.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('cancel', (event) => { })
oncancel = (event) => { }
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

If this animation is canceled, remove its element.

```js
animation.oncancel = (event) => { animation.effect.target.remove(); };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
