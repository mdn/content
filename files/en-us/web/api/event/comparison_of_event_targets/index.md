---
title: Comparison of Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
page-type: guide
tags:
  - DOM
  - Gecko
  - Guide
---
{{ ApiRef() }}

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
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        The DOM element on the left-hand side of the call that triggered this
        event.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/Event/currentTarget"
            >event.currentTarget</a
          ></code
        >
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        The
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"
          ><code>EventTarget</code></a
        >
        whose
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"
          ><code>EventListeners</code></a
        >
        are currently being processed. As the event capturing and bubbling
        occurs, this value changes.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/MouseEvent/relatedTarget"
            >event.relatedTarget</a
          ></code
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>Identifies a secondary target for the event.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/Event/explicitOriginalTarget"
            >event.explicitOriginalTarget</a
          ></code
        >
      </td>
      <td><a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} If the event was retargeted for
        some reason other than an anonymous boundary crossing, this will be set
        to the target before the retargeting occurs. For example, mouse events
        are retargeted to their parent node when they happen over text nodes
        ({{ Bug("185889") }}), and in that case <code>.target</code> will
        show the parent and <code>.explicitOriginalTarget</code> will show the
        text node.<br />Unlike <code>.originalTarget</code>,
        <code>.explicitOriginalTarget</code> will never contain anonymous
        content.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/Event/originalTarget"
            >event.originalTarget</a
          ></code
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} The original target of the event,
        before any retargetings. See
        <a
          href="/en-US/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting"
          >Anonymous Content#Event_Flow_and_Targeting</a
        >
        for details.
      </td>
    </tr>
    <tr>
      <td>event.composedTarget</td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} The original non-native target of
        the event before composition from Shadow DOM.
      </td>
    </tr>
  </tbody>
</table>

### Use of `explicitOriginalTarget` and `originalTarget`

> **Note:** These properties are only available in Mozilla-based browsers.

### Examples

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Comparison of Event Targets</title>
  <style>
    table {
      border-collapse: collapse;
      height: 150px;
      width: 100%;
    }
    td {
      border: 1px solid #ccc;
      font-weight: bold;
      padding: 5px;
      min-height: 30px;
    }
    .standard {
      background-color: #99ff99;
    }
    .non-standard {
      background-color: #902D37;
    }
    </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <td class="standard">Original target dispatching the event <small>event.target</small></td>
        <td class="standard">Target who's event listener is being processed <small>event.currentTarget</small></td>
        <td class="standard">Identify other element (if any) involved in the event <small>event.relatedTarget</small></td>
        <td class="non-standard">If there was a retargeting of the event for some reason <small> event.explicitOriginalTarget</small> contains the target before retargeting (never contains anonymous targets)</td>
        <td class="non-standard">If there was a retargeting of the event for some reason <small> event.originalTarget</small> contains the target before retargeting (may contain anonymous targets)</td>
      </tr>
    </thead>
    <tr>
      <td id="target"></td>
      <td id="currentTarget"></td>
      <td id="relatedTarget"></td>
      <td id="explicitOriginalTarget"></td>
      <td id="originalTarget"></td>
    </tr>
  </table>
  <p>Clicking on the text will show the difference between explicitOriginalTarget, originalTarget, and target</p>
  <script>
    function handleClicks(e) {
      document.getElementById('target').innerHTML = e.target;
      document.getElementById('currentTarget').innerHTML = e.currentTarget;
      document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
      document.getElementById('explicitOriginalTarget').innerHTML = e.explicitOriginalTarget;
      document.getElementById('originalTarget').innerHTML = e.originalTarget;
    }

    function handleMouseover(e) {
      document.getElementById('target').innerHTML = e.target;
      document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
    }

    document.addEventListener('click', handleClicks, false);
    document.addEventListener('mouseover', handleMouseover, false);
</script>
</body>
</html>
```

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
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
