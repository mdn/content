---
title: MouseEvent.relatedTarget
slug: Web/API/MouseEvent/relatedTarget
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.relatedTarget
---
{{APIRef("DOM Events")}}

The **`MouseEvent.relatedTarget`** read-only property is the
secondary target for the mouse event, if there is one. That is:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Event name</th>
      <th><code>target</code></th>
      <th><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Event("mouseenter")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
    </tr>
    <tr>
      <td>{{Event("mouseleave")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
    </tr>
    <tr>
      <td>{{Event("mouseout")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
    </tr>
    <tr>
      <td>{{Event("mouseover")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
    </tr>
    <tr>
      <td>{{Event("dragenter")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
    </tr>
    <tr>
      <td>{{Event("dragleave")}}</td>
      <td>
        The {{domxref("EventTarget")}} the pointing device exited from
      </td>
      <td>
        The {{domxref("EventTarget")}} the pointing device entered to
      </td>
    </tr>
  </tbody>
</table>

For events with no secondary target, `relatedTarget` returns
`null`.

{{domxref("FocusEvent.relatedTarget")}} is a similar property for focus events.

## Syntax

```js
var target = instanceOfMouseEvent.relatedTarget
```

### Return value

An {{domxref("EventTarget")}} object or `null`.

## Example

Try moving your mouse cursor into and out of the red and blue boxes.

### HTML

```html
<body id="body">
  <div id="outer">
    <div id="red"></div>
    <div id="blue"></div>
  </div>
  <p id="log"></p>
</body>
```

### CSS

```css
#outer {
  width: 250px;
  height: 125px;
  display: flex;
}

#red {
  flex-grow: 1;
  background: red;
}

#blue {
  flex-grow: 1;
  background: blue;
}

#log {
  max-height: 120px;
  overflow-y: scroll;
}
```

### JavaScript

```js
const mouseoutLog = document.getElementById('log'),
      red = document.getElementById('red'),
      blue = document.getElementById('blue');

red.addEventListener('mouseover', overListener);
red.addEventListener('mouseout', outListener);
blue.addEventListener('mouseover', overListener);
blue.addEventListener('mouseout', outListener);

function outListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\nfrom ${event.target.id} into ${related} ${mouseoutLog.innerText}`;
}

function overListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  log.innerText = `\ninto ${event.target.id} from ${related} ${mouseoutLog.innerText}`;
}
```

### Result

{{EmbedLiveSample("Example", 700, 280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
- [Comparison of Event
  Targets](/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)
