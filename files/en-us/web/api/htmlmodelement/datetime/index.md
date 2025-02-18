---
title: "HTMLModElement: dateTime property"
short-title: dateTime
slug: Web/API/HTMLModElement/dateTime
page-type: web-api-instance-property
browser-compat: api.HTMLModElement.dateTime
---

{{ APIRef("HTML DOM") }}

The **`dateTime`** property of the {{domxref("HTMLModElement")}} interface is a string containing a machine-readable date with an optional time value. It reflects the [`datetime`](/en-US/docs/Web/HTML/Element/time#datetime) HTML attribute of the {{HTMLElement("del")}} and {{HTMLElement("ins")}} elements.

## Value

A string. For valid string formats, see the [`datetime` valid values](/en-US/docs/Web/HTML/Element/time#valid_datetime_values).

## Examples

Given the following HTML:

```html
<p>The paragraph <del datetime="2021-11-01">has been</del> changed</p>
```

We can get the value of the `dateTime` attribute of the `<del>` element:

```js
const deletedText = document.querySelector("del");
console.log(deletedText.dateTime); // "2021-11-01"
```

We can also set the `dateTime` property. Here, we create an `<ins>` element, then set the `dateTime` property of the `<ins>` element to the current date in `YYYY-MM-DD` format then insert it after the deleted text:

```js
const insertedText = document.createElement("ins");
const now = new Date();
insertedText.dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
insertedText.appendChild(document.createTextNode("was"));
deletedText.insertAdjacentElement("afterend", insertedText);
```

If our script ran on January 9, 2025, our HTML would be as follows:

```html
<p>
  The paragraph <del datetime="2021-11-01">has been</del
  ><ins datetime="2025-1-9">was</ins> changed
</p>
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
- [Local date and time strings](/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)
- {{jsxref("Date")}}
- {{domxref("Element.insertAdjacentElement()")}}
