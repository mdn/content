---
title: Comparison of Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
page-type: guide
---

{{APIRef("DOM")}}

It's easy to get confused about which event target to examine when writing an event handler. This article should clarify the use of the target properties.

There are five targets to consider:

<table class="no-markdown">
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
      <td>Identifies a secondary target for the event.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/explicitOriginalTarget">event.explicitOriginalTarget</a></code>
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{Non-standard_Inline}} If the event was retargeted for some reason other than an anonymous boundary crossing, this will be set to the target before the retargeting occurs. For example, mouse events are retargeted to their parent node when they happen over text nodes ([Firefox bug 185889](https://bugzil.la/185889)), and in that case <code>.target</code> will show the parent and <code>.explicitOriginalTarget</code> will show the text node.<br />
        Unlike <code>.originalTarget</code>, <code>.explicitOriginalTarget</code> will never contain anonymous content.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/API/Event/originalTarget">event.originalTarget</a></code>
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{Non-standard_Inline}} The original target of the event, before any retargetings.
      </td>
    </tr>
    <tr>
      <td><code>event.composedTarget</code></td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{Non-standard_Inline}} The original non-native target of the event before composition from Shadow DOM.
      </td>
    </tr>
  </tbody>
</table>

### Use of `explicitOriginalTarget` and `originalTarget`

> **Note:** These properties are only available in Mozilla-based browsers.

### Example

```css hidden
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  width: 50%;
  border: 1px solid #ccc;
  padding: 0.5rem;
}

p {
  line-height: 1.5rem;
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
    Clicking on the text will show the difference between
    explicitOriginalTarget, originalTarget, and target
  </span>
</p>
```

```js
function handleEvent(e) {
  document.getElementById("target").innerHTML = e.target;
  document.getElementById("currentTarget").innerHTML = e.currentTarget;
  document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
  document.getElementById("explicitOriginalTarget").innerHTML =
    e.explicitOriginalTarget;
  document.getElementById("originalTarget").innerHTML = e.originalTarget;
}

document.getElementById("text").addEventListener("click", handleEvent);
document.getElementById("text").addEventListener("mouseover", handleEvent);
```

{{ EmbedLiveSample("Example", "100%", 300) }}

### Use of `target` and `relatedTarget`

The `relatedTarget` property for the `mouseover` event holds the node that the mouse was previously over. For the `mouseout` event, it holds the node that the mouse moved to.

| Event type  | [event.target](/en-US/docs/Web/API/Event/target)  | [event.relatedTarget](/en-US/docs/Web/API/MouseEvent/relatedTarget) |
| ----------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| `mouseover` | the EventTarget which the pointing device entered | the EventTarget which the pointing device exited                    |
| `mouseout`  | the EventTarget which the pointing device exited  | the EventTarget which the pointing device entered                   |

#### Example

```xml
<hbox id="outer">
  <hbox id="inner"
        onmouseover="console.log('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="console.log('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
