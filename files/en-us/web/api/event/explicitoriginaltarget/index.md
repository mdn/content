---
title: Event.explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
tags:
  - API
  - DOM
  - Gecko
  - Non-standard
  - Property
  - Reference
browser-compat: api.Event.explicitOriginalTarget
---
{{APIRef("DOM")}}{{Non-standard_Header}}

The explicit original target of the event. (Mozilla-specific)

If the event was [retargeted](/en-US/docs/DOM/event_retargeting) for some reason other than an [anonymous boundary crossing](/en-US/docs/DOM/anonymous_boundary_crossing), this will be set to the target before the retargeting occurs. For example, mouse events are retargeted to their parent node when they happen over text nodes (see {{Bug(185889)}}), and in that case [`currentTarget`](/en-US/docs/Web/API/Event/currentTarget) will show the parent and `explicitOriginalTarget` will show the text node.

`explicitOriginalTarget` differs from [`originalTarget`](/en-US/docs/Web/API/Event/originalTarget) in that it will never contain [anonymous content](/en-US/docs/DOM/anonymous_content).

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

_This is a Mozilla-specific property._ Defined in {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}

This event property is **not defined** in the [W3.org DOM Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/events.html)

## Browser compatibility

{{Compat}}

## See also

- [Comparison of Event Targets](/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)
