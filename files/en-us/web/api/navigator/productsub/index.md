---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
tags:
  - API
  - Deprecated
  - HTML DOM
  - Navigator
  - Property
  - Read-only
browser-compat: api.Navigator.productSub
---
{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

The **`Navigator.productSub`** read-only property returns the
build number of the current browser.

## Syntax

```js
prodSub = navigator.productSub
```

- `prodSub` is a string.

## Example

```js
<script>
function prodsub() {
  var dt = document.getElementById("d").childNodes[0];
  dt.data = navigator.productSub;
}
</script>

<button onclick="prodsub();">productSub</button>
// returns: 20010725
```

## Notes

On IE, this property returns undefined.

On Apple Safari and Google Chrome this property always returns `20030107`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
