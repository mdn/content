---
title: MSSiteModeEvent
slug: Web/API/MSSiteModeEvent
page-type: web-api-interface
---
{{APIRef("UI Events")}}{{Non-standard_header()}}

**`MSSiteModeEvent`** provides event properties that are specific to pinned site events.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

### DOM Information

_Inheritance Hierarchy_

[Event](/en-US/docs/Web/API/Event)

MSSiteModeEvent

### Methods

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>initEvent</code></td>
      <td>
        Initializes a new generic event that the createEvent method created.
        <em
          >*Note that as of Microsoft Edge, the
          <code>createEvent()/initEvent()</code> constructor pattern for
          synthetic events is deprecated.</em
        >
      </td>
    </tr>
    <tr>
      <td><code>preventDefault</code></td>
      <td>Cancels the default action of an event.</td>
    </tr>
    <tr>
      <td><code>stopImmediatePropagation</code></td>
      <td>Prevents any further propagation of an event.</td>
    </tr>
    <tr>
      <td><code>stopPropagation</code></td>
      <td>Prevents propagation of an event beyond the current target.</td>
    </tr>
  </tbody>
</table>

### Properties

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Property</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>actionURL</code></td>
      <td>
        Gets the URL of a Jump List item that is removed.
        <em
          >*This property is not supported for Windows Store apps using
          JavaScript.</em
        >
      </td>
    </tr>
    <tr>
      <td><code>bubbles</code></td>
      <td>
        Gets a value that indicates whether an event propagates up from the
        event target.
      </td>
    </tr>
    <tr>
      <td><code>buttonID</code></td>
      <td>
        Gets the Thumbnail Toolbar button ID that is clicked.
        <em
          >*This property is not supported for Windows Store apps using
          JavaScript.</em
        >
      </td>
    </tr>
    <tr>
      <td><code>cancelable</code></td>
      <td>
        Gets a value that indicates whether you can cancel an event's default
        action.
      </td>
    </tr>
    <tr>
      <td><code>cancelBubble</code></td>
      <td>
        Gets or sets a value that indicates whether an event should be stopped
        from propagating up from the current target.
      </td>
    </tr>
    <tr>
      <td><code>currentTarget</code></td>
      <td>Gets the event target that is currently being processed.</td>
    </tr>
    <tr>
      <td><code>defaultPrevented</code></td>
      <td>
        Gets a value that indicates whether the default action should be
        canceled.
      </td>
    </tr>
    <tr>
      <td><code>eventPhase</code></td>
      <td>Gets the event phase that is being evaluated.</td>
    </tr>
    <tr>
      <td><code>isTrusted</code></td>
      <td>
        Gets a value that indicates whether a trusted event source created an
        event.
      </td>
    </tr>
    <tr>
      <td><code>srcElement</code></td>
      <td>
        Gets the element that the event was originally dispatched to. Compare to
        <em>target</em>.
      </td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>Gets the element that is the target of the event.</td>
    </tr>
    <tr>
      <td><code>timeStamp</code></td>
      <td>Gets the time, in milliseconds, when an event occurred.</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>Gets the name of an event.</td>
    </tr>
  </tbody>
</table>

Although this event inherits from the [Event](/en-US/docs/Web/API/Event) object, it cannot be created by using [`createEvent`](/en-US/docs/Web/API/Document/createEvent).

## Example

```
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new(): MSSiteModeEvent;
}
```

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
