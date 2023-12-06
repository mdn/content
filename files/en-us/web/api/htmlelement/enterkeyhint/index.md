---
title: "HTMLElement: enterKeyHint property"
short-title: enterKeyHint
slug: Web/API/HTMLElement/enterKeyHint
page-type: web-api-instance-property
browser-compat: api.HTMLElement.enterKeyHint
---

{{APIRef("HTML DOM")}}

The **`enterKeyHint`** property is an enumerated property defining
what action label (or icon) to present for the enter key on virtual keyboards.
It reflects the [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
HTML global attribute and is an enumerated property, only accepting the following values
as a string:

- `'enter'` typically indicating inserting a new line.
- `'done'` typically meaning there is nothing more to input and the input method editor (IME) will be closed.
- `'go'` typically meaning to take the user to the target of the text they typed.
- `'next'` typically taking the user to the next field that will accept text.
- `'previous'` typically taking the user to the previous field that will accept text.
- `'search'` typically taking the user to the results of searching for the text they have typed.
- `'send'` typically delivering the text to its target.

If no `enterKeyHint` value has been specified or if it was set to a different value than the allowed ones, it will return an empty string.

## Examples

Give a virtual keyboard a hint how to label the enter key (might render as <kbd>Send</kbd> and <kbd>Search</kbd>, depending on the OS or the user's language).

```js
const send = document.getElementById("sendInput");
const search = document.getElementById("searchInput");

send.enterKeyHint = "send";
search.enterKeyHint = "search";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) HTML global attribute
