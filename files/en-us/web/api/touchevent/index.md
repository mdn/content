---
title: TouchEvent
slug: Web/API/TouchEvent
page-type: web-api-interface
browser-compat: api.TouchEvent
---

{{APIRef("Touch Events")}}

The **`TouchEvent`** interface represents an {{domxref("UIEvent")}} which is sent when the state of contacts with a touch-sensitive surface changes. This surface can be a touch screen or trackpad, for example. The event can describe one or more points of contact with the screen and includes support for detecting movement, addition and removal of contact points, and so forth.

Touches are represented by the {{domxref("Touch")}} object; each touch is described by a position, size and shape, amount of pressure, and target element. Lists of touches are represented by {{domxref("TouchList")}} objects.

{{InheritanceDiagram}}

## Constructor

- {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : Creates a `TouchEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the alt key was down when the touch event was fired.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects representing individual points of contact whose states changed between the previous touch event and this one.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the control key was down when the touch event was fired.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the meta key was down when the touch event was fired.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the shift key was down when the touch event was fired.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects that are both currently in contact with the touch surface **and** were also started on the same element that is the target of the event.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : A {{domxref("TouchList")}} of all the {{domxref("Touch")}} objects representing all current points of contact with the surface, regardless of target or changed status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the event. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`.

## Touch event types

There are several types of event that can be fired to indicate that touch-related changes have occurred. You can determine which of these has happened by looking at the event's {{domxref("event.type", "TouchEvent.type")}} property.

- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Sent when the user places a touch point on the touch surface.
    The event's target will be the {{domxref("element")}} in which the touch occurred.
- {{domxref("Element/touchend_event", "touchend")}}

  - : Sent when the user removes a touch point from the surface;
    that is, when they lift a finger or stylus from the surface.
    This is also sent
    if the touch point moves off the edge of the surface;
    for example, if the user's finger slides off the edge of the screen.

    The event's target is the same {{domxref("element")}}
    that received the `touchstart` event
    corresponding to the touch point,
    even if the touch point has moved outside that element.

    The touch point (or points)
    that were removed from the surface
    can be found in the {{domxref("TouchList")}}
    specified by the `changedTouches` attribute.

- {{domxref("Element/touchmove_event", "touchmove")}}

  - : Sent when the user moves a touch point along the surface.
    The event's target is the same {{domxref("element")}}
    that received the `touchstart` event corresponding to the touch point,
    even if the touch point has moved outside that element.

    This event is also sent
    if the values of the radius, rotation angle, or force attributes of a touch point change.

    > [!NOTE]
    > The rate at which `touchmove` events is sent is browser-specific, and may also vary depending on the capability of the user's hardware. You must not rely on a specific granularity of these events.

- {{domxref("Element/touchcancel_event", "touchcancel")}}

  - : Sent when a touch point has been disrupted in some way.
    There are several possible reasons why this might happen
    (and the exact reasons will vary from device to device, as well as browser to browser):

    - An event of some kind occurred that canceled the touch; this might happen if a modal alert pops up during the interaction.
    - The touch point has left the document window and moved into the browser's UI area, a plug-in, or other external content.
    - The user has placed more touch points on the screen than can be supported, in which case the earliest {{domxref("Touch")}} in the {{domxref("TouchList")}} gets canceled.

### Using with addEventListener() and preventDefault()

It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call {{domxref("Event.preventDefault","preventDefault()")}} to keep the mouse event from being sent as well.

The exception to this is Chrome, starting with version 56 (desktop, Chrome for Android, and Android webview), where the default value for the `passive` option for {{domxref("Element/touchstart_event", "touchstart")}} and {{domxref("Element/touchmove_event", "touchmove")}} is `true` and calls to {{domxref("Event.preventDefault","preventDefault()")}} will have no effect. To override this behavior, you need to set the `passive` option to `false`, after which calling {{domxref("Event.preventDefault","preventDefault()")}} will work as specified. The change to treat listeners as `passive` by default prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/) site.

## Example

See the [example on the main Touch events article](/en-US/docs/Web/API/Touch_events#example).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
