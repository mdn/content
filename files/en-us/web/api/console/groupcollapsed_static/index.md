---
title: "console: groupCollapsed() static method"
short-title: groupCollapsed()
slug: Web/API/console/groupcollapsed_static
page-type: web-api-instance-method
browser-compat: api.console.groupCollapsed_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.groupCollapsed()`** static method creates a new inline group in the console. Unlike {{domxref("console/group_static", "console.group()")}}, however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.

Call {{domxref("console/groupEnd_static", "console.groupEnd()")}} to back out to the parent group.

See [Using groups in the console](/en-US/docs/Web/API/console#using_groups_in_the_console) in the {{domxref("console")}} documentation for details and examples.

## Syntax

```js-nolint
groupCollapsed()
groupCollapsed(label)
```

### Parameters

- `label` {{Optional_Inline}}
  - : Label for the group.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/group_static", "console.group()")}}
- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
- [Microsoft Edge's documentation for `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#groupcollapsed)
- [Node.JS documentation for `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chrome's documentation for `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
