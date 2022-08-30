---
title: end
slug: Web/SVG/Attribute/end
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
spec-urls: https://svgwg.org/specs/animations/#EndAttribute
---
{{SVGRef}}

The **`end`** attribute defines an end value for the animation that can constrain the active duration.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;end-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `<end-value-list>` is a semicolon-separated list of values. Each value can be one of the following:

- `<offset-value>`
  - : This value defines a [clock-value](/en-US/docs/Web/SVG/Content_type#clock-value) that represents a point in time relative to the beginning of the SVG document (usually the {{domxref("SVGElement/load_event", "load")}} or {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event). Negative values are valid.
- `<syncbase-value>`
  - : This value defines a _syncbase_ and an optional offset from that _syncbase_. The element's animation end time is defined relative to the begin or active end of another animation.

    A valid syncbase-value consists of an ID reference to another animation element followed by a dot and either `begin` or `end` to identify whether to synchronize with the beginning or active end of the referenced animation element. An optional offset value as defined in `<offset-value>` can be appended.
- `<event-value>`
  - : This value defines an event and an optional offset that determines the time at which the element's animation should end. The animation end time is defined relative to the time that the specified event is fired.

    A valid event-value consists of an element ID followed by a dot and one of the supported events for that element. All valid events (not necessarily supported by all elements) are defined by the DOM and HTML specifications. Those are: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}, {{domxref("Element/activate_event", "activate")}}, {{domxref("Element/auxclick_event", "auxclick")}}, {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/beforeinput_event", "beforeinput")}}, {{domxref("Element/input_event", "input")}}, {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}, {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}, {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("SVGElement/load_event", "load")}}, {{domxref("SVGElement/unload_event", "unload")}}, {{domxref("SVGElement/abort_event", "abort")}}, {{domxref("Element/error_event", "error")}}, {{domxref("Element/select_event", "select")}}, {{domxref("Window/resize_event", "resize")}}, {{domxref("Element/scroll_event", "scroll")}}, {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}, {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}, and {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}} . An optional offset value as defined in `<offset-value>` can be appended.
- `<repeat-value>`
  - : This value defines a qualified repeat event. The element animation end time is defined relative to the time that the repeat event is raised with the specified iteration value.

    A valid repeat value consists of an element ID followed by a dot and the function `repeat()` with an integer value specifying the number of repetitions as parameter. An optional offset value as defined in `<offset-value>` can be appended.
- `<accessKey-value>`
  - : This value defines an access key that should trigger the end of the animation. The element animation will end when the user presses the specified key.

    A valid accessKey-value consists of the function `accessKey()` with the character to be input as parameter. An optional offset value as defined in `<offset-value>` can be appended.
- `<wallclock-sync-value>`
  - : This value defines the animation end time as a real-world clock time.

    A valid wallclock-sync-value consists of the function `wallclock()` with a time value as parameter. The time syntax is based upon the syntax defined in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `indefinite`
  - : The end of the animation will be determined by an {{domxref("SVGAnimationElement.endElement()")}} method call.

## Examples

### Offset example

```html
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1">

    <!-- animated rectangles -->
    <rect x="10" y="35" height="15" width="0">
        <animate attributeType="XML" attributeName="width" to="100"
                 begin="0s" end="8s"
                 fill="freeze" />
    </rect>

    <rect x="10" y="60" height="15" width="0">
        <animate attributeType="XML" attributeName="width" to="75"
                 begin="0s" end="6s"
                 fill="freeze" />
    </rect>

    <rect x="10" y="85" height="15" width="0">
        <animate attributeType="XML" attributeName="width" to="50"
                 begin="0s" end="4s"
                 fill="freeze" />
    </rect>

    <!-- grid -->
    <text x="10" y="20" text-anchor="middle">0s</text>
    <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
    <text x="35" y="20" text-anchor="middle">2s</text>
    <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
    <text x="60" y="20" text-anchor="middle">4s</text>
    <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
    <text x="85" y="20" text-anchor="middle">6s</text>
    <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
    <text x="110" y="20" text-anchor="middle">8s</text>
    <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

    <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
    <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Offset_example', '100%', 130)}}

### Event example

```html
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink">

    <!-- animated rectangle -->
    <rect x="10" y="35" height="15" width="0">
        <animate attributeType="XML" attributeName="width" from="0" to="100"
                 begin="0s" end="endButton.click" dur="8s"
                 repeatCount="indefinite" fill="freeze" />
    </rect>

    <!-- trigger -->
    <rect id="endButton" style="cursor:pointer;"
          x="19.5" y="62.5" rx="5" height="25" width="80"
          fill="#EFEFEF" stroke="black" stroke-width="1" />

    <text x="60" y="80" text-anchor="middle"
          style="pointer-events:none;">Click me.</text>

    <!-- grid -->
    <text x="10" y="20" text-anchor="middle">0s</text>
    <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
    <text x="35" y="20" text-anchor="middle">2s</text>
    <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
    <text x="60" y="20" text-anchor="middle">4s</text>
    <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
    <text x="85" y="20" text-anchor="middle">6s</text>
    <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
    <text x="110" y="20" text-anchor="middle">8s</text>
    <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

    <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
    <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Event_example', '100%', 130)}}

### Accesskey example

```html
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink">

    <!-- animated rectangles -->
    <rect x="10" y="35" height="15" width="0">
        <animate attributeType="XML" attributeName="width" from="0" to="100"
                 begin="0s" end="accessKey(e)" dur="8s"
                 repeatCount="indefinite" fill="freeze" />
    </rect>

    <!-- trigger -->
    <text x="60" y="80" text-anchor="middle"
          style="pointer-events:none;">Hit the "s" key</text>

    <!-- grid -->
    <text x="10" y="20" text-anchor="middle">0s</text>
    <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
    <text x="35" y="20" text-anchor="middle">2s</text>
    <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
    <text x="60" y="20" text-anchor="middle">4s</text>
    <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
    <text x="85" y="20" text-anchor="middle">6s</text>
    <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
    <text x="110" y="20" text-anchor="middle">8s</text>
    <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

    <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
    <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Accesskey_example', '100%', 130)}}

_This example is embedded in an iFrame. If you want to activate the key events, you have to click on it first._

## Specifications

{{Specifications}}
