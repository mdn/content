---
title: Pointer events
slug: Web/API/Pointer_events
tags:
  - API
  - Interface
  - Landing
  - Overview
  - Pointer Events
  - Web
  - events
---
{{DefaultAPISidebar("Pointer Events")}}

Much of today's web content assumes the user's pointing device will be a mouse. However, since many devices support other types of pointing input devices, such as pen/stylus and touch surfaces, extensions to the existing pointing device event models are needed. _[Pointer events](#pointer_event)_ address that need.

> **Note:** Pointer events are _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).

The _[pointer](#pointer)_ is a hardware-agnostic device that can target a specific set of screen coordinates. Having a single event model for pointers can simplify creating Web sites and applications and provide a good user experience regardless of the user's hardware. However, for scenarios when device-specific handling is desired, pointer events defines a {{domxref("PointerEvent.pointerType","pointerType property")}} to inspect the device type which produced the event.

The events needed to handle generic pointer input are analogous to {{domxref("MouseEvent","mouse events")}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Consequently, pointer event types are intentionally similar to mouse event types.

Additionally, a pointer event contains the usual properties present in mouse events (client coordinates, target element, button states, etc.) in addition to new properties for other forms of input: pressure, contact geometry, tilt, etc. In fact, the {{domxref("PointerEvent")}} interface inherits all of the {{domxref("MouseEvent")}} properties, thus facilitating the migration of content from mouse events to pointer events.

## Terminology

### active buttons state

The condition when a _[pointer](#pointer)_ has a non-zero value for the `buttons` property. For example, in the case of a pen, when the pen has physical contact with the digitizer, or at least one button is depressed while hovering.

### active pointer

Any _[pointer](#pointer)_ input device that can produce events. A pointer is considered active if it can still produce further events. For example, a pen that is a down state is considered active because it can produce additional events when the pen is lifted or moved.

### digitizer

A sensing device with a surface that can detect contact. Most commonly, the sensing device is a touch-enabled screen that can sense input from an input device such as a pen, stylus, or finger. Some sensing devices can detect the close proximity of the input device, and the state is expressed as a hover following the mouse.

### hit test

The process the browser uses to determine a target element for a pointer event. Typically, this is determined by considering the pointer's location and also the visual layout of elements in a document on screen media.

### pointer

A hardware-agnostic representation of input devices that can target a specific coordinate (or set of coordinates) on a screen. Examples of _pointer_ input devices are mouse, pen/stylus, and touch contacts.

### pointer capture

Pointer capture allows the events for a pointer to be retargeted to a particular element other than the normal hit test result of the pointer's location.

### pointer event

A DOM {{domxref("PointerEvent","event")}} fired for a _[pointer](#pointer)_.

## Interfaces

The primary interface is the {{domxref("PointerEvent")}} interface which has a {{domxref("PointerEvent.PointerEvent","constructor")}} plus several event types and associated global event handlers.

The standard also includes some extensions to the {{domxref("Element")}} and {{domxref("Navigator")}} interfaces.

The following sub-sections contain short descriptions of each interface and property.

### PointerEvent interface

The {{domxref("PointerEvent")}} interface extends the {{domxref("MouseEvent")}} interface and has the following properties. (All of the following properties are {{readonlyInline}}.)

- {{ domxref('PointerEvent.pointerId','pointerId')}}
  - : A unique identifier for the pointer causing the event.
- {{ domxref('PointerEvent.width','width')}}
  - : The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
- {{ domxref('PointerEvent.height','height')}}
  - : the height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
- {{ domxref('PointerEvent.pressure','pressure')}}
  - : the normalized pressure of the pointer input in the range of `0` to `1`, where `0` and `1` represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
- {{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}}
  - : The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range `-1` to `1`, where `0` is the neutral position of the control.
- {{ domxref('PointerEvent.tiltX','tiltX')}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
- {{ domxref('PointerEvent.tiltY','tiltY')}}
  - : the plane angle (in degrees, in the range of `-90` to `90`) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
- {{ domxref('PointerEvent.twist','twist')}}
  - : The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range `0` to `359`.
- {{ domxref('PointerEvent.pointerType','pointerType')}}
  - : Indicates the device type that caused the event (mouse, pen, touch, etc.)
- {{ domxref('PointerEvent.isPrimary','isPrimary')}}
  - : Indicates if the pointer represents the primary pointer of this pointer type.

### Event types and Global Event Handlers

Pointer events have ten event types, seven of which have similar semantics to their mouse event counterparts (`down`, `up`, `move`, `over`, `out`, `enter`, and `leave`).

Below is a short description of each event type and its associated {{domxref("GlobalEventHandlers","Global Event Handler")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Event</th>
      <th scope="col">On Event Handler</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{event('pointerover')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerover','onpointerover')}}
      </td>
      <td>
        Fired when a pointer is moved into an element's
        <a href="#hit_test">hit test</a> boundaries.
      </td>
    </tr>
    <tr>
      <td>{{event('pointerenter')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerenter','onpointerenter')}}
      </td>
      <td>
        Fired when a pointer is moved into the
        <a href="#hit_test">hit test</a> boundaries of an element or one of its
        descendants, including as a result of a pointerdown event from a device
        that does not support hover (see <code>pointerdown</code>).
      </td>
    </tr>
    <tr>
      <td>{{event('pointerdown')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerdown','onpointerdown')}}
      </td>
      <td>Fired when a pointer becomes <em>active buttons state</em>.</td>
    </tr>
    <tr>
      <td>{{event('pointermove')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointermove','onpointermove')}}
      </td>
      <td>
        Fired when a pointer changes coordinates. This event is also used if the
        change in pointer state can not be reported by other events.
      </td>
    </tr>
    <tr>
      <td>{{event('pointerup')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerup','onpointerup')}}
      </td>
      <td>Fired when a pointer is no longer <em>active buttons state</em>.</td>
    </tr>
    <tr>
      <td>{{event('pointercancel')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointercancel','onpointercancel')}}
      </td>
      <td>
        A browser fires this event if it concludes the pointer will no longer be
        able to generate events (for example the related device is deactivated).
      </td>
    </tr>
    <tr>
      <td>{{event('pointerout')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerout','onpointerout')}}
      </td>
      <td>
        Fired for several reasons including: pointer is moved out of the
        <a href="#hit_test">hit test</a> boundaries of an element; firing the
        pointerup event for a device that does not support hover (see
        pointerup); after firing the <code>pointercancel</code> event (see
        <code>pointercancel</code>); when a pen stylus leaves the hover range
        detectable by the digitizer.
      </td>
    </tr>
    <tr>
      <td>{{event('pointerleave')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerleave','onpointerleave')}}
      </td>
      <td>
        Fired when a pointer is moved out of the
        <a href="#hit_test">hit test</a> boundaries of an element. For pen
        devices, this event is fired when the stylus leaves the hover range
        detectable by the digitizer.
      </td>
    </tr>
    <tr>
      <td>{{event('gotpointercapture')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.ongotpointercapture','ongotpointercapture')}}
      </td>
      <td>Fired when an element receives pointer capture.</td>
    </tr>
    <tr>
      <td>{{event('lostpointercapture')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onlostpointercapture','onlostpointercapture')}}
      </td>
      <td>Fired after pointer capture is released for a pointer.</td>
    </tr>
  </tbody>
</table>

### Element extensions

There are three extensions to the {{domxref("Element")}} interface:

- {{domxref("Element.setPointerCapture()","setPointerCapture()")}}
  - : Designates a specific element as the _capture target_ of future pointer events.
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : This method releases (stops) _pointer capture_ that was previously set for a specific pointer event.

### Navigator extension

The {{domxref("Navigator.maxTouchPoints")}} property is used to determine the maximum number of simultaneous touch points that are supported at any single point in time.

## Examples

This section contains examples of basic usage of using the pointer events interfaces.

### Registering event handlers

This example registers a handler for every event type for the given element.

```html
<html>
  <script>
    function over_handler(event) { }
    function enter_handler(event) { }
    function down_handler(event) { }
    function move_handler(event) { }
    function up_handler(event) { }
    function cancel_handler(event) { }
    function out_handler(event) { }
    function leave_handler(event) { }
    function gotcapture_handler(event) { }
    function lostcapture_handler(event) { }

    function init() {
      var el=document.getElementById("target");
      // Register pointer event handlers
      el.onpointerover = over_handler;
      el.onpointerenter = enter_handler;
      el.onpointerdown = down_handler;
      el.onpointermove = move_handler;
      el.onpointerup = up_handler;
      el.onpointercancel = cancel_handler;
      el.onpointerout = out_handler;
      el.onpointerleave = leave_handler;
      el.gotpointercapture = gotcapture_handler;
      el.lostpointercapture = lostcapture_handler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

### Event properties

This example illustrates accessing all of a touch event's properties.

```html
<html>
  <script>
    var id = -1;

    function process_id(event) {
      // Process this event based on the event's identifier
    }
    function process_mouse(event) {
      // Process the mouse pointer event
    }
    function process_pen(event) {
      // Process the pen pointer event
    }
    function process_touch(event) {
      // Process the touch pointer event
    }
    function process_tilt(tiltX, tiltY) {
      // Tilt data handler
    }
    function process_pressure(pressure) {
      // Pressure handler
    }
    function process_non_primary(event) {
      // Non primary handler
    }

    function down_handler(ev) {
      // Calculate the touch point's contact area
      var area = ev.width * ev.height;

      // Compare cached id with this event's id and process accordingly
      if (id == ev.identifier) process_id(ev);

      // Call the appropriate pointer type handler
      switch (ev.pointerType) {
        case "mouse":
          process_mouse(ev);
          break;
        case "pen":
          process_pen(ev);
          break;
        case "touch":
          process_touch(ev);
          break;
        default:
          console.log("pointerType " + ev.pointerType + " is Not supported");
      }

      // Call the tilt handler
      if (ev.tiltX != 0 && ev.tiltY != 0) process_tilt(ev.tiltX, ev.tiltY);

      // Call the pressure handler
      process_pressure(ev.pressure);

      // If this event is not primary, call the non primary handler
      if (!ev.isPrimary) process_non_primary(ev);
    }

    function init() {
      var el=document.getElementById("target");
      // Register pointerdown handler
      el.onpointerdown = down_handler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

## Determining the Primary Pointer

In some scenarios there may be multiple pointers (for example a device with both a touchscreen and a mouse) or a pointer supports multiple contact points (for example a touchscreen that supports multiple finger touches). The application can use the {{domxref("PointerEvent.isPrimary","isPrimary")}} property to identify a master pointer among the set of _active pointers_ for each pointer type. If an application only wants to support a primary pointer, it can ignore all pointer events that are not primary.

For mouse there is only one pointer, so it will always be the primary pointer. For touch input, a pointer is considered primary if the user touched the screen when there were no other active touches. For pen and stylus input, a pointer is considered primary if the user's pen initially contacted the screen when there were no other active pens contacting the screen.

## Determining button states

Some pointer devices, such as mouse and pen, support multiple buttons and the button presses can be _chorded_ i.e. depressing an additional button while another button on the pointer device is already depressed.

To determine the state of button presses, pointer events uses the {{domxref("MouseEvent.button","button")}} and {{domxref("MouseEvent.buttons","buttons")}} properties of the {{domxref("MouseEvent")}} interface (that {{domxref("PointerEvent")}} inherits from).

The following table provides the values of `button` and `buttons` for the various device button states.

| Device Button State                                                                  | button | buttons |
| ------------------------------------------------------------------------------------ | ------ | ------- |
| Neither buttons nor touch/pen contact changed since last event                       | `-1`   | —       |
| Mouse move with no buttons pressed, Pen moved while hovering with no buttons pressed | —      | `0`     |
| Left Mouse, Touch Contact, Pen contact                                               | `0`    | `1`     |
| Middle Mouse                                                                         | `1`    | `4`     |
| Right Mouse, Pen barrel button                                                       | `2`    | `2`     |
| X1 (back) Mouse                                                                      | `3`    | `8`     |
| X2 (forward) Mouse                                                                   | `4`    | `16`    |
| Pen eraser button                                                                    | `5`    | `32`    |

> **Note:** The `button` property indicates a change in the state of the button. However, as in the case of touch, when multiple events occur with one event, all of them have the same value.

## Capturing the pointer

Pointer capture allows events for a particular {{domxref("PointerEvent","pointer event")}} to be re-targeted to a particular element instead of the normal [hit test](#hit_test) at a pointer's location. This can be used to ensure that an element continues to receive pointer events even if the pointer device's contact moves off the element (for example by scrolling).

The following example shows pointer capture being set on an element.

```html
<html>
<script>
  function downHandler(ev) {
    let el = document.getElementById("target");
    // Element 'target' will receive/capture further events
    el.setPointerCapture(ev.pointerId);
  }

  function init() {
    let el = document.getElementById("target");
    el.onpointerdown = downHandler;
  }
</script>
<body onload="init();">
  <div id="target"> Touch me ... </div>
</body>
</html>
```

The following example shows a pointer capture being released (when a {{event("pointercancel")}} event occurs. The browser does this automatically when a {{event("pointerup")}} or {{event("pointercancel")}} event occurs.

```html
<html>
  <script>
    function downHandler(ev) {
      let el = document.getElementById("target");
      // Element "target" will receive/capture further events
      el.setPointerCapture(ev.pointerId);
    }

    function cancelHandler(ev) {
      let el = document.getElementById("target");
      // Release the pointer capture
      el.releasePointerCapture(ev.pointerId);
    }

    function init() {
      let el = document.getElementById("target");
      // Register pointerdown and pointercancel handlers
      el.onpointerdown = downHandler;
      el.onpointercancel = cancelHandler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

## touch-action CSS property

The {{cssxref("touch-action")}} CSS property is used to specify whether or not the browser should apply its default (_native_) touch behavior (such as zooming or panning) to a region. This property may be applied to all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups.

A value of `auto` means the browser is free to apply its default touch behavior (to the specified region) and the value of `none` disables the browser's default touch behavior for the region. The values `pan-x` and `pan-y`, mean that touches that begin on the specified region are only for horizontal and vertical scrolling, respectively. The value `manipulation` means the browser may consider touches that begin on the element are only for scrolling and zooming.

In the following example, the browser's default touch behavior is disabled for the `div` element.

```html
<html>
  <body>
    <div style="touch-action:none;">Can't touch this ... </div>
  </body>
</html>
```

In the following example, default touch behavior is disabled for some `button` elements.

```css
button#tiny {
  touch-action: none;
}
```

In the following example, when the `target` element is touched, it will only pan in the horizontal direction.

```css
#target {
  touch-action: pan-x;
}
```

## Compatibility with mouse events

Although the pointer event interfaces enable applications to create enhanced user experiences on pointer enabled devices, the reality is the vast majority of today's web content is designed to only work with mouse input. Consequently, even if a browser supports pointer events, the browser must still process mouse events so content that assumes mouse-only input will work as is without direct modification. Ideally, a pointer enabled application does not need to explicitly handle mouse input. However, because the browser must process mouse events, there may be some compatibility issues that need to be handled. This section contains information about pointer event and mouse event interaction and the ramifications for application developers.

The browser _may map generic pointer input to mouse events for compatibility with mouse-based content_. This mapping of events is called _compatibility mouse events_. Authors can prevent the production of certain compatibility mouse events by canceling the pointerdown event but note that:

- Mouse events can only be prevented when the pointer is down.
- Hovering pointers (e.g. a mouse with no buttons pressed) cannot have their mouse events prevented.
- The `mouseover`, `mouseout`, `mouseenter`, and `mouseleave` events are never prevented (even if the pointer is down).

## Best practices

Here are some _best practices_ to consider when using pointer events:

- Minimize the amount of work performed in event handlers.
- Add the event handlers to a specific target element (rather than the entire document or nodes higher up in the document tree).
- The target element (node) should be large enough to accommodate the largest contact surface area (typically a finger touch). If the target area is too small, touching it could result in firing other events for adjacent elements.

## Specifications

| Specification                                          |
| ------------------------------------------------------ |
| [Pointer Events](https://w3c.github.io/pointerevents/) |

## Browser compatibility

{{Compat("api.PointerEvent")}}

Some new values have been defined for the {{cssxref("touch-action", "CSS touch-action")}} property as part of the {{SpecName('Pointer Events 3')}} specification but currently those new values have limited implementation support.

## Demos and examples

- [Touch/pointer tests and demos (by Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## Community

- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail list](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC channel](irc://irc.w3.org:6667/)

## Related topics and resources

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
