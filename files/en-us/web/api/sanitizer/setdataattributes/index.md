---
title: "Sanitizer: setDataAttributes() method"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
page-type: web-api-instance-method
browser-compat: api.Sanitizer.setDataAttributes
---

{{APIRef("HTML Sanitizer API")}}

The **`setDataAttributes()`** method of the {{domxref("Sanitizer")}} interface sets whether all [`data-*` attributes](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) will be allowed by the sanitizer, or if they must be individually specified.

If this is set `true`, then data attributes are automatically allowed and you should not add them individually using {{domxref('Sanitizer.allowAttribute()')}} (or {{domxref('Sanitizer.allowElement()')}} for local attributes).

Note that this method is useful for [allow configurations](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_configurations) which have a lot of `data-*` attributes that you want to allow.
The method returns `false` when used with remove configurations, which can allow all `data-*` attributes simply by omitting them.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameters

- `allow`
  - : `true` if all `data-*` attributes are allowed, and `false` if they must be explicitly specified.

### Return value

`true` if the operation changed the configuration, and `false` if the configuration already set [`dataAttributes`](/en-US/docs/Web/API/SanitizerConfig#dataattributes) to the specified value or `dataAttributes` cannot be set `true` because this sanitizer has a remove configuration.

## Examples

### Basic usage

The code below shows the basic usage of the `setDataAttributes()` method.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow all data-* attributes
sanitizer.setDataAttributes(true);

// data-* attributes are allowed by adding them
// to the attributes array
sanitizer.setDataAttributes(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
