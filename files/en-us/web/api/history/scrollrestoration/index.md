---
title: History.scrollRestoration
slug: Web/API/History/scrollRestoration
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Property
  - Reference
browser-compat: api.History.scrollRestoration
---
{{APIRef("History API")}}

The **`scrollRestoration`** property of {{DOMxRef("History")}}
interface allows web applications to explicitly set default scroll restoration behavior
on history navigation.

## Syntax

```js
const scrollRestore = history.scrollRestoration
```

### Values

- `auto`
  - : The location on the page to which the user has scrolled will be restored.
- `manual`
  - : The location on the page is not restored. The user will have to scroll to the
    location manually.

## Examples

### Query the current scroll restoration behavior.

```js
const scrollRestoration = history.scrollRestoration
if (scrollRestoration === 'manual') {
  console.log('The location on the page is not restored, user will need to scroll manually.');
}
```

### Prevent automatic page location restoration

```js
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
