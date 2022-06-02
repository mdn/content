---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
page-type: web-api-instance-property
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

## Value

A string.

## Examples

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
