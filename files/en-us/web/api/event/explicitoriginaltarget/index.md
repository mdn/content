---
title: "Event: explicitOriginalTarget property"
short-title: explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Event.explicitOriginalTarget
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{AvailableInWorkers}}

The read-only **`explicitOriginalTarget`** property of the {{domxref("Event")}} interface returns the non-anonymous original target of the event.

If the event was retargeted for some reason other than an anonymous boundary crossing, this will be set to the target before the retargeting occurs.

For example, mouse events are retargeted to their parent node when they happen over text nodes (see [Firefox bug 185889](https://bugzil.la/185889)), and in that case [`currentTarget`](/en-US/docs/Web/API/Event/currentTarget) will show the parent while this property will show the text node.

This property also differs from [`originalTarget`](/en-US/docs/Web/API/Event/originalTarget) in that it will never contain anonymous content.

## Value

Returns the {{domxref("EventTarget")}} object, or null if there isn't one.

## Example

This property can be used with `<command>` to get the event details of the original object calling the command.

```js
function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // returns 'menuitem'
}
```

```xml
<xul:command id="my-cmd-anAction" oncommand="myCommand(event);"/>

<xul:menulist>
  <xul:menupopup>
    <xul:menuitem label="Get my element name!" command="my-cmd-anAction"/>
  </xul:menupopup>
</menulist>
```

## Specifications

_This is a Mozilla-specific property and is not part of any current specification. It is not on track to become a standard._

## Browser compatibility

{{Compat}}
