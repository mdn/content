---
title: "HTML attribute: size"
short-title: size
slug: Web/HTML/Attributes/size
page-type: html-attribute
browser-compat:
  - html.elements.select.size
  - html.elements.input.size
---

{{HTMLSidebar}}

The **`size`** attribute defines the width of the {{htmlelement('input')}} and the height of the {{htmlelement('select')}} element. For a text `input` element, it specifies the number of characters that the user agent allows the user to see when editing the value. For a `select` element, it specifies the number of options that should be shown to the user. This must be a valid positive integer.

If no `size` is specified, or an invalid value is specified, the input has no size declared, and the form control will be the default width based on the browser. If CSS targets the element with properties impacting the width, CSS takes precedence.

The `size` attribute has no impact on constraint validation. Your text box or menu can have any number of items in it; `size` just affects screen area.

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## Examples

By adding `size` on some input types, the width of the input can be controlled. Adding size on a select changes the height, defining how many options are visible in the closed state.

```css hidden
label {
  display: block;
  margin-block: 1em;
}
```

```html
<label>
  enter a breed of horse:
  <input type="text" value="appaloosa" />
</label>
<label>
  enter a breed of dog:
  <input type="text" value="corgi" size="45" />
</label>
<label>
  enter a breed of cat:
  <input type="text" value="cheshire" size="4" />
</label>

<label>
  choose a kind of cabbage:
  <select name="cabbages">
    <option>broccoli</option>
    <option>brussels sprouts</option>
    <option>cabbage</option>
    <option>cauliflower</option>
    <option>colewort</option>
    <option>collard greens</option>
    <option>kale</option>
    <option>red cabbage</option>
    <option>savoy cabbage</option>
  </select>
</label>

<label>
  choose a kind of bean:
  <select name="beans" size="1">
    <option>green bean</option>
    <option>french bean</option>
    <option>peruvian bean</option>
    <option>lima bean</option>
    <option>soybeans</option>
    <option>peas</option>
    <option>mung beans</option>
  </select>
</label>

<label>
  choose a kind of squash:
  <select name="squashes" size="3">
    <option>summer squash</option>
    <option>zucchini</option>
    <option>winter squash</option>
    <option>pumpkin</option>
    <option>butternut squash</option>
    <option>dickinson pumpkin</option>
    <option>golden cushaw</option>
  </select>
</label>

<label>
  choose a kind of onion:
  <select name="onions" size="8">
    <option>onion</option>
    <option>garlic</option>
    <option>shallot</option>
    <option>scallion</option>
    <option>chives</option>
    <option>leek</option>
  </select>
</label>
```

{{EmbedLiveSample('Examples', '100%', 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
