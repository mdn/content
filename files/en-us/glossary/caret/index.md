---
title: Caret
slug: Glossary/Caret
page-type: glossary-definition
---

{{GlossarySidebar}}

A **caret** (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.

Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the **insertion point**. The word "caret" differentiates the text insertion point from the mouse cursor.

On the web, a caret is used to represent the insertion point in {{HTMLElement("input")}} and {{HTMLElement("textarea")}} elements, as well as any elements whose [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute is set, thereby allowing the contents of the element to be edited by the user.

## See also

- [Caret navigation](https://en.wikipedia.org/wiki/Caret_navigation) on Wikipedia

### CSS related to the caret

You can set the color of the caret for a given element's editable content by setting the element's CSS {{cssxref("caret-color")}} property to the appropriate {{cssxref("&lt;color&gt;")}} value.

### HTML elements that may present a caret

These elements provide text entry fields or boxes and therefore make use of the caret.

- [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date), [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time), and [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number), [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel), and [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- Any element with its [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set
