---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.eventPhase
---
{{ApiRef("DOM")}}

The **`eventPhase`** read-only property of the
{{domxref("Event")}} interface indicates which phase of the event flow is currently
being evaluated.

## Value

Returns an integer value which specifies the current evaluation phase of the event
flow. Possible values are:

- `Event.NONE (0)`
  - : The event is not being processed at this time.
- `Event.CAPTURING_PHASE (1)`
  - : The event is being propagated through the target's ancestor objects.
    This process starts with the {{domxref("Window")}}, then {{domxref("Document")}},
    then the {{domxref("HTMLHtmlElement")}}, and so on through the elements
    until the target's parent is reached.
    {{domxref("EventListener", "Event listeners", "", 1)}}
    registered for capture mode when {{domxref("EventTarget.addEventListener()")}} was
    called are triggered during this phase.
- `Event.AT_TARGET (2)`
  - : The event has arrived at
        {{domxref("EventTarget", "the event's target", "",
        1)}}.
        Event listeners registered for this phase are called at this time. If
        {{domxref("Event.bubbles")}} is `false`, processing
        the event is finished after this phase is complete.
- `Event.BUBBLING_PHASE (3)`
  - : The event is propagating back up through the target's ancestors in reverse order,
    starting with the parent, and eventually reaching the containing {{domxref("Window")}}.
    This is known as _bubbling_, and occurs only if {{domxref("Event.bubbles")}} is
    `true`. {{domxref("EventListener", "Event listeners", "", 1)}} registered for this phase are triggered during this process.

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
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false;
let divInfo = null;
let divs = null;
let chCapture = null;

window.onload = () => {
  divInfo = document.getElementById('divInfo');
  divs = document.getElementsByTagName('div');
  chCapture = document.getElementById('chCapture');
  chCapture.onclick = () => {
    removeListeners();
    addListeners();
    clearDivs();
  };
  clearDivs();
  addListeners();
}

function removeListeners() {
  for (const div of divs) {
    if (div.id !== 'divInfo') {
      div.removeEventListener('click', onDivClick, true);
      div.removeEventListener('click', onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id !== 'divInfo') {
      if (chCapture.checked) {
        div.addEventListener('click', onDivClick, true);
      } else {
        div.addEventListener('click', onDivClick, false);
        div.onmousemove = () => { clear = true };
      }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase === 2) {
    e.currentTarget.style.backgroundColor = 'red';
  }
  const level = ['none', 'capturing', 'target', 'bubbling'][e.eventPhase] ?? 'error';
  const para = document.createElement('p');
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id !== 'divInfo') {
      divs[i].style.backgroundColor = (i & 1) ? '#f6eedb' : '#cceeff';
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
