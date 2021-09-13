---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
tags:
  - API
  - DOM
  - Event
  - Gecko
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.eventPhase
---
{{ApiRef("DOM")}}

The **`eventPhase`** read-only property of the
{{domxref("Event")}} interface indicates which phase of the event flow is currently
being evaluated.

## Syntax

```js
let phase = event.eventPhase;
```

### Value

Returns an integer value which specifies the current evaluation phase of the event
flow. Possible values are listed in {{anch("Event phase constants")}}.

## Constants

### Event phase constants

These values describe which phase the event flow is currently being evaluated.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Event.NONE</code></td>
      <td><code>0</code></td>
      <td>No event is being processed at this time.</td>
    </tr>
    <tr>
      <td><code>Event.CAPTURING_PHASE</code></td>
      <td><code>1</code></td>
      <td>
        The event is being propagated through the target's ancestor objects.
        This process starts with the {{domxref("Window")}}, then
        {{domxref("Document")}}, then the
        {{domxref("HTMLHtmlElement")}}, and so on through the elements
        until the target's parent is reached.
        {{domxref("EventListener", "Event listeners", "", 1)}}
        registered for capture mode when
        {{domxref("EventTarget.addEventListener()")}} was called
        are triggered during this phase.
      </td>
    </tr>
    <tr>
      <td><code>Event.AT_TARGET</code></td>
      <td><code>2</code></td>
      <td>
        The event has arrived at
        {{domxref("EventTarget", "the event's target", "",
        1)}}.
        Event listeners registered for this phase are called at this time. If
        {{domxref("Event.bubbles")}} is <code>false</code>, processing
        the event is finished after this phase is complete.
      </td>
    </tr>
    <tr>
      <td><code>Event.BUBBLING_PHASE</code></td>
      <td><code>3</code></td>
      <td>
        The event is propagating back up through the target's ancestors in
        reverse order, starting with the parent, and eventually reaching the
        containing {{domxref("Window")}}. This is known as
        <em>bubbling</em>, and occurs only if
        {{domxref("Event.bubbles")}} is <code>true</code>.
        {{domxref("EventListener",
        "Event listeners", "", 1)}}
        registered for this phase are triggered during this process.
      </td>
    </tr>
  </tbody>
</table>

For more details, see [section 3.1, Event
dispatch and DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.

## Example

### HTML

```html
<h4>Event Propagation Chain</h4>
<ul>
  <li>Click 'd1'</li>
  <li>Analyze event propagation chain</li>
  <li>Click next div and repeat the experience</li>
  <li>Change Capturing mode</li>
  <li>Repeat the experience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Use Capturing</label>
  <div id="d1">d1
    <div id="d2">d2
      <div id="d3">d3
        <div id="d4">d4</div>
      </div>
    </div>
  </div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color:white;
  font-size:80%;
}
```

### JavaScript

```js
let clear = false,
    divInfo = null,
    divs = null,
    useCapture = false;

window.onload = function () {
  divInfo = document.getElementById('divInfo')
  divs = document.getElementsByTagName('div')
  chCapture = document.getElementById('chCapture')
  chCapture.onclick = function () {
    RemoveListeners()
    AddListeners()
  }
  Clear()
  AddListeners()
}

function RemoveListeners() {
  for (let i = 0; i < divs.length; i++) {
    let d = divs[i]
    if (d.id != "divInfo") {
      d.removeEventListener("click", OnDivClick, true)
      d.removeEventListener("click", OnDivClick, false)
    }
  }
}

function AddListeners() {
  for (let i = 0; i < divs.length; i++) {
    let d = divs[i]
    if (d.id != "divInfo") {
        if (chCapture.checked) {
            d.addEventListener("click", OnDivClick, true)
        }
        else {
            d.addEventListener("click", OnDivClick, false)
            d.onmousemove = function () { clear = true }
        }
    }
  }
}

function OnDivClick(e) {
  if (clear) {
    Clear()
    clear = false
  }
  if (e.eventPhase == 2)
    e.currentTarget.style.backgroundColor = 'red';
    const level =
        e.eventPhase == 0 ? "none" :
        e.eventPhase == 1 ? "capturing" :
        e.eventPhase == 2 ? "target" :
        e.eventPhase == 3 ? "bubbling" : "error";
    const p = document.createElement('p')
    p.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
    divInfo.appendChild(p);
}

function Clear() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id != "divInfo") {
      divs[i].style.backgroundColor = (i & 1) ? "#f6eedb" : "#cceeff"
    }
  }
  divInfo.textContent = '';
}
```

### Result

{{ EmbedLiveSample('Example', '', '700') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
