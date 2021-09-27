---
title: console.groupCollapsed()
slug: Web/API/console/groupCollapsed
tags:
  - API
  - DOM
  - DOM Reference
  - Debugging
  - Method
  - Reference
  - Web Development
  - web console
browser-compat: api.console.groupCollapsed
---
{{APIRef("Console API")}}

The **`console.groupCollapsed()`** method creates a new inline group in the Web Console. Unlike {{domxref("console.group()")}},
however, the new group is created collapsed. The user will need to use the disclosure
button next to it to expand it, revealing the entries created in the group.

Call {{domxref("console.groupEnd()")}} to back out to the parent group.

See [Using groups in
the console](/en-US/docs/Web/API/console#using_groups_in_the_console) in the {{domxref("console")}} documentation for details and
examples.

{{AvailableInWorkers}}

## Syntax

```js
console.groupCollapsed([label]);
```

## Parameters

- `label`
  - : Label for the group. Optional.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
