---
title: begin
slug: Web/SVG/Attribute/begin
page-type: svg-attribute
spec-urls: https://svgwg.org/specs/animations/#BeginAttribute
---

{{SVGRef}}

The **`begin`** attribute defines when an animation should begin.

The attribute value is a semicolon separated list of values. The interpretation of a list of start times is detailed in the SMIL specification in ["Evaluation of begin and end time lists"](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-EvaluationOfBeginEndTimeLists). Each individual value can be one of the following: `<offset-value>`, `<syncbase-value>`, `<event-value>`, `<repeat-value>`, `<accessKey-value>`, `<wallclock-sync-value>` or the keyword `indefinite`.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## animate, animateMotion, animateTransform, set

For {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("set")}}, `begin` defines when the element should begin, i.e. become active.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;begin-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0s</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `<begin-value-list>` is a semicolon-separated list of values. Each value can be one of the following:

- `<offset-value>`
  - : This value defines a [clock-value](/en-US/docs/Web/SVG/Content_type#clock-value) that represents a point in time relative to the beginning of the SVG document (usually the {{domxref("Window/load_event", "load")}} or {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event). Negative values are valid.
- `<syncbase-value>`

  - : This value defines a _syncbase_ and an optional offset from that _syncbase_. The element's animation start time is defined relative to the begin or active end of another animation.

    A valid syncbase-value consists of an ID reference to another animation element followed by a dot and either `begin` or `end` to identify whether to synchronize with the beginning or active end of the referenced animation element. An optional offset value as defined in `<offset-value>` can be appended.

- `<event-value>`

  - : This value defines an event and an optional offset that determines the time at which the element's animation should begin. The animation start time is defined relative to the time that the specified event is fired.

    A valid event-value consists of an element ID followed by a dot and one of the supported events for that element. All valid events (not necessarily supported by all elements) are defined by the DOM and HTML specifications. Those are:

    - {{domxref("Element/focus_event", "focus")}}
    - {{domxref("Element/blur_event", "blur")}}
    - {{domxref("Element/focusin_event", "focusin")}}
    - {{domxref("Element/focusout_event", "focusout")}}
    - {{domxref("Element/DOMActivate_event", "DOMActivate")}}
    - {{domxref("Element/auxclick_event", "auxclick")}}
    - {{domxref("Element/click_event", "click")}}
    - {{domxref("Element/dblclick_event", "dblclick")}}
    - {{domxref("Element/mousedown_event", "mousedown")}}
    - {{domxref("Element/mouseenter_event", "mouseenter")}}
    - {{domxref("Element/mouseleave_event", "mouseleave")}}
    - {{domxref("Element/mousemove_event", "mousemove")}}
    - {{domxref("Element/mouseout_event", "mouseout")}}
    - {{domxref("Element/mouseover_event", "mouseover")}}
    - {{domxref("Element/mouseup_event", "mouseup")}}
    - {{domxref("Element/wheel_event","wheel")}}
    - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
    - {{domxref("HTMLElement/input_event", "input")}}
    - {{domxref("Element/keydown_event", "keydown")}}
    - {{domxref("Element/keyup_event", "keyup")}}
    - {{domxref("Element/compositionstart_event", "compositionstart")}}
    - {{domxref("Element/compositionupdate_event", "compositionupdate")}}
    - {{domxref("Element/compositionend_event", "compositionend")}}
    - {{domxref("Window/load_event", "load")}}
    - {{domxref("Window/unload_event", "unload")}}
    - {{domxref("HTMLMediaElement/abort_event", "abort")}}
    - {{domxref("Element/error_event", "error")}}
    - {{domxref("HTMLInputElement/select_event", "select")}}
    - {{domxref("Window/resize_event", "resize")}}
    - {{domxref("Element/scroll_event", "scroll")}}
    - {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}
    - {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}
    - {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}}

    An optional offset value as defined in `<offset-value>` can be appended.

- `<repeat-value>`

  - : This value defines a qualified repeat event. The element animation start time is defined relative to the time that the repeat event is raised with the specified iteration value.

    A valid repeat value consists of an element ID followed by a dot and the function `repeat()` with an integer value specifying the number of repetitions as parameter. An optional offset value as defined in `<offset-value>` can be appended.

- `<accessKey-value>`

  - : This value defines an access key that should trigger the animation. The element animation will begin when the user presses the specified key.

    A valid accessKey-value consists of the function `accessKey()` with the character to be input as parameter. An optional offset value as defined in `<offset-value>` can be appended.

- `<wallclock-sync-value>`

  - : This value defines the animation start time as a real-world clock time.

    A valid wallclock-sync-value consists of the function `wallclock()` with a time value as parameter. The time syntax is based upon the syntax defined in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).

- `indefinite`
  - : The begin of the animation will be determined by a `beginElement()` method call or a hyperlink targeted to the element.

## Examples

### Offset example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="100"
      begin="0s"
      dur="8s"
      fill="freeze" />
  </rect>

  <rect x="35" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="2s"
      dur="6s"
      fill="freeze" />
  </rect>

  <rect x="60" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="4s"
      dur="4s"
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

[begin-1-offset.svg](begin-1-offset.svg)

### Syncbase example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      id="first"
      begin="0s;third.end"
      dur="4s" />
  </rect>

  <rect x="60" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="second"
      begin="first.end"
      dur="2s" />
  </rect>

  <rect x="85" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="third"
      begin="second.end"
      dur="2s" />
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

{{EmbedLiveSample('Syncbase_example', '100%', 130)}}

[begin-2-syncbase.svg](begin-2-syncbase.svg)

### Event example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangle -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="startButton.click"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <rect
    id="startButton"
    style="cursor:pointer;"
    x="19.5"
    y="62.5"
    rx="5"
    height="25"
    width="80"
    fill="#EFEFEF"
    stroke="black"
    stroke-width="1" />

  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Click me.
  </text>

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

[begin-3-event.svg](begin-3-event.svg)

### Repeat example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangle -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      id="myLoop"
      begin="0s;myLoop.end"
      dur="4s"
      repeatCount="3" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="green"
      begin="myLoop.begin" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="gold"
      begin="myLoop.repeat(1)" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="red"
      begin="myLoop.repeat(2)" />
  </rect>

  <!-- grid -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">1s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">2s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">3s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">4s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample('Repeat_example', '100%', 130)}}

[begin-4-repeat.svg](begin-4-repeat.svg)

### Accesskey example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- animated rectangles -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="accessKey(s)"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- trigger -->
  <text x="60" y="80" text-anchor="middle" style="pointer-events:none;">
    Hit the "s" key
  </text>

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

[begin-5-accesskey.svg](begin-5-accesskey.svg)

## Specifications

{{Specifications}}
