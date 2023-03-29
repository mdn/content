---
title: CSSPositionValue
slug: Web/API/CSSPositionValue
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.CSSPositionValue
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

The **`CSSPositionValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) represents values for properties that take a position, for example {{cssxref('object-position')}}.

## Constructor

- {{domxref("CSSPositionValue.CSSPositionValue", "CSSPositionValue()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Creates a new `CSSPositionValue` object.

## Instance properties

- {{domxref('CSSPositionValue.x')}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Returns the item's position along the web page's horizontal axis.
- {{domxref('CSSPositionValue.y')}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Returns the item's position along the vertical axis.

## Instance methods

None.

## Examples

The following example positions a container `<div>` 5 pixels from the top and 10 pixels from the left of the page.

```js
const replacedEl = document.getElementById("image");
const position = new CSSPositionValue(CSS.px(35), CSS.px(40));

replacedEl.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
console.log(replacedEl.computedStyleMap().get("object-position"));
```

We set the {{cssxref('object-position')}} property, then check the values returned.

```css hidden
#image {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  background-color: #dededf;
  object-fit: none;
}
```

```html hidden
<p>
  Check the developer tools to see the log in the console and to inspect the
  style attribute on the image.
</p>
<img id="image" src="mdn.svg" alt="MDN Logo" />
```

{{EmbedLiveSample("Examples", 300, 300)}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
