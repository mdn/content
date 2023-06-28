---
title: "location: reload() method"
short-title: reload()
slug: Web/API/Location/reload
page-type: web-api-instance-method
browser-compat: api.Location.reload
---

{{ APIRef("HTML DOM") }}

The **`location.reload()`** method reloads the current URL, like the Refresh button.

The reload may be blocked and a `SECURITY_ERROR` {{domxref("DOMException")}}
thrown. This happens if the {{Glossary("origin")}} of the script calling
`location.reload()` differs from the origin of the page that owns the
{{domxref("Location")}} object. See [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) for more
information.

## Syntax

```js-nolint
reload()
```

### Parameters

- `forceGet` {{non-standard_inline}}
  - : Pass `true` to force a reload bypassing the cache. Defaults to `false`. Only supported in Firefox.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and
  {{domxref("Location.replace()")}}.
