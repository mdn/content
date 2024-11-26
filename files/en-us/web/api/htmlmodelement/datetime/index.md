---
title: "HTMLModElement: dateTime property"
short-title: dateTime
slug: Web/API/HTMLModElement/dateTime
page-type: web-api-instance-property
browser-compat: api.HTMLModElement.dateTime
---

{{ APIRef("HTML DOM") }}

The
**`dateTime`** property of the {{domxref("HTMLModElement")}} interface is a string containing a machine-readable date with an optional
time value. It reflects the [`datetime`](/en-US/docs/Web/HTML/Element/time#datetime) HTML attribute of the {{HTMLElement("del")}} and {{HTMLElement("ins")}} elements.

## Value

A string. For valid string formats, see the [`datetime` valid values](/en-US/docs/Web/HTML/Element/time#valid_datetime_values).

## Examples

```html
<p>The paragraph <del datetime="2021-11-01">has been</del> changed</p>
```

```js
const deletion = document.querySelector("del");
console.log(deletion.dateTime); // "2021-11-01"
```

Here, we create an element, set the `dateTime` to the current date, add content, then insert it after the deleted text:

```js
const  = document.createElement("ins");
const now = new Date();
el2.dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
el2.innerHTML = " was"
el1.insertAdjacentElement("afterend", el2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("del")}}
- {{HTMLElement("ins")}}
- {{domxref("HTMLModElement")}}
- {{domxref("HTMLModElement.cite")}}
- {{domxref("HTMLTimeElement.dateTime")}}
- [Date strings](/en-US/docs/Web/HTML/Date_and_time_formats#date_strings)
- [Local date and time strings](/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings).
- {{domxref("Date()")}}
- {{domxref("Element.insertAdjacentElement()")}}
