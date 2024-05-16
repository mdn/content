---
title: Comparison of Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
page-type: guide
---

{{APIRef("DOM")}}

It's easy to get confused about which event target to examine when writing an event handler. This article should clarify the use of the target properties.

There are six targets to consider:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Defined in</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/target">event.target</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a>
      </td>
      <td>
        The DOM element on the left-hand side of the call that triggered this event.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/currentTarget">event.currentTarget</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a>
      </td>
      <td>
        The <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"><code>EventTarget</code></a> whose <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"><code>EventListeners</code></a> are currently being processed. As the event capturing and bubbling occurs, this value changes.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/MouseEvent/relatedTarget">event.relatedTarget</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent">DOM MouseEvent Interface</a>
      </td>
      <td>Identifies a secondary target for the mouse event.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/explicitOriginalTarget">event.explicitOriginalTarget</a></code>
        {{Non-standard_Inline}}
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
         If the event was retargeted for some reason other than an anonymous boundary crossing, this will be set to the target before the retargeting occurs. For example, mouse events are retargeted to their parent node when they happen over text nodes, and in that case <code>.target</code> will show the parent and <code>.explicitOriginalTarget</code> will show the text node.<br />
        Unlike <code>.originalTarget</code>, <code>.explicitOriginalTarget</code> will never contain anonymous content.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/originalTarget">event.originalTarget</a></code>
        {{Non-standard_Inline}}
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        The original target of the event, before any retargetings.
      </td>
    </tr>
    <tr>
      <td><code>event.composedTarget</code> {{Non-standard_Inline}}</td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
         The original non-native target of the event before composition from Shadow DOM.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Difference between event targets

> **Note:** `explicitOriginalTarget` and `originalTarget` properties are only available in Mozilla-based browsers.

```css hidden
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  width: 50%;
}

th,
td,
p {
  border: 1px solid gray;
  padding: 0.5rem;
}

span {
  background-color: lime;
}
```

```html
<table>
  <thead>
    <tr>
      <th>Event target</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><code>event.target</code></td>
      <td><samp id="target"></samp></td>
    </tr>

    <tr>
      <td><code>event.currentTarget</code></td>
      <td><samp id="currentTarget"></samp></td>
    </tr>

    <tr>
      <td><code>event.relatedTarget</code></td>
      <td><samp id="relatedTarget"></samp></td>
    </tr>

    <tr>
      <td><code>event.explicitOriginalTarget</code></td>
      <td><samp id="explicitOriginalTarget"></samp></td>
    </tr>

    <tr>
      <td><code>event.originalTarget</code></td>
      <td><samp id="originalTarget"></samp></td>
    </tr>
  </tbody>
</table>

<p id="text">
  <span>
    Hovering and clicking on the text will show the difference between event
    targets
  </span>
</p>
```

```js
function handleEvent(event) {
  document.getElementById("target").innerHTML = event.target;
  document.getElementById("currentTarget").innerHTML = event.currentTarget;
  document.getElementById("relatedTarget").innerHTML = event.relatedTarget;
  document.getElementById("explicitOriginalTarget").innerHTML =
    event.explicitOriginalTarget;
  document.getElementById("originalTarget").innerHTML = event.originalTarget;
}

document.getElementById("text").addEventListener("click", handleEvent);
document.getElementById("text").addEventListener("mouseover", handleEvent);
```

{{ EmbedLiveSample("Difference between event targets", "100%", 300) }}

### Use of `target` and `relatedTarget`

The `relatedTarget` property for the `mouseover` event holds the node that the mouse was previously over. For the `mouseout` event, it holds the node that the mouse moved to.

<table>
  <thead>
    <tr>
      <th>Event type</th>
      <th>Value of <code>event.target</code></th>
      <th>Value of <code>event.relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>mouseover</code></td>
      <td>The EventTarget which the pointing device entered</td>
      <td>The EventTarget which the pointing device exited</td>
    </tr>
    <tr>
      <td><code>mouseout</code></td>
      <td>The EventTarget which the pointing device exited</td>
      <td>The EventTarget which the pointing device entered</td>
    </tr>
  </tbody>
</table>

```css hidden
.container {
  display: flex;
  align-items: flex-start;
}

#outer {
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  padding: 10px;
}

#inner {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  background-color: lime;
}

#console {
  flex-grow: 1;
  overflow-y: scroll;
  height: 200px;
  border: 1px solid gray;
  margin: 0 10px;
  padding: 10px;
}
```

```html
<div class="container">
  <div id="outer">
    <div id="inner"></div>
  </div>

  <pre id="console"></pre>
</div>

<p>Hovering on the lime box will log mouseover and mouseout event targets</p>
```

```js
const console = document.getElementById("console");

function handleMouseover(event) {
  console.append(
    `mouseover: ${event.relatedTarget.id} -> ${event.target.id} \n`,
  );
  console.scroll(0, console.scrollHeight);
}

function handleMouseout(event) {
  console.append(
    `mouseout:  ${event.target.id} -> ${event.relatedTarget.id} \n`,
  );
  console.scroll(0, console.scrollHeight);
}

document.getElementById("inner").addEventListener("mouseover", handleMouseover);
document.getElementById("inner").addEventListener("mouseout", handleMouseout);
```

{{ EmbedLiveSample("Use of `target` and `relatedTarget`", "100%", 300) }}
