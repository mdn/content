---
title: TrustedTypePolicyFactory.emptyScript
slug: Web/API/TrustedTypePolicyFactory/emptyScript
tags:
  - API
  - Property
  - Reference
  - emptyScript
  - TrustedTypePolicyFactory
browser-compat: api.TrustedTypePolicyFactory.emptyScript
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`emptyScript`** read-only property of the {{domxref("TrustedTypePolicyFactory")}} interface returns a {{domxref("TrustedScript")}} object containing an empty string.

This object can be used when the application requires an empty string to be inserted into an injection sink which is expecting a `TrustedScript` object.

## Syntax

    var emptyScript = TrustedTypePolicyFactory.emptyScript;

### Value

A {{domxref("TrustedScript")}} object.

## Examples

The [specification](https://w3c.github.io/webappsec-trusted-types/dist/spec/#dom-trustedtypepolicyfactory-emptyscript) explains that the `emptyScript` object can be used to detect support for dynamic code compilation.

Native Trusted Types implementations can support `eval(TrustedScript)`, therefore in the below example a native implementation will return false for `eval(trustedTypes.emptyScript)`. A polyfill will return a truthy object.

```js
const supportsTS = !eval(trustedTypes.emptyScript);
eval(supportsTS ? myTrustedScriptObj : myTrustedScriptObj.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
