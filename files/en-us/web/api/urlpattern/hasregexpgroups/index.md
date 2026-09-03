---
title: "URLPattern: hasRegExpGroups property"
short-title: hasRegExpGroups
slug: Web/API/URLPattern/hasRegExpGroups
page-type: web-api-instance-property
browser-compat: api.URLPattern.hasRegExpGroups
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`hasRegExpGroups`** read-only property of the {{domxref("URLPattern")}} interface is a boolean indicating whether or not any of the `URLPattern` components contain [regular expression capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

You can use the `hasRegExpGroups` property to check if a `URLPattern` object is usable with certain web platform APIs which do not allow regular expression capturing groups. For example:

- The `match` directive in the {{HTTPHeader("Use-As-Dictionary")}} HTTP header prohibits regular expression capturing groups, as well as
- the `urlPattern` condition when adding static routes using the {{domxref("InstallEvent.addRoutes()")}} method.

## Value

A boolean.

## Examples

### Using `hasRegExpGroups`

In the following example, a {{domxref("URLPattern")}} object is used with a group delimiter containing named capturing groups called "id" and "title". The `hasRegExpGroups` property returns `true` in this case.

```js
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123-some-article" });
console.log(result.pathname.groups); // {id: '123', title: 'some-article'}
```

It also works with anonymous capturing groups.

```js
const pattern = new URLPattern({ pathname: "/blog/(\\d+)" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

For other non-capturing groups, for example when using wildcard tokes (`*`), `hasRegExpGroups` will return `false`.

```js
const pattern = new URLPattern({ pathname: "/blog/*" });
console.log(pattern.hasRegExpGroups); // false
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
