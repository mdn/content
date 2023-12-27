---
title: "Element: checkVisibility() method"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
page-type: web-api-instance-method
browser-compat: api.Element.checkVisibility
---

{{APIRef("DOM")}}

The **`checkVisibility()`** method of the {{domxref("Element")}} interface performs checks to determine whether the element is visible.

The method returns `false` if the element doesn't have an associated box, such as those that have the CSS property [`display: none`](/en-US/docs/Web/CSS/display#none) or [`display: contents`](/en-US/docs/Web/CSS/display#contents).
The method also returns `false` if the element is not being rendered because the element or an an ancestor element sets the property value as [`content-visibility: hidden`](/en-US/docs/Web/CSS/content-visibility#hidden).

The optional parameter enables additional checks to test for other interpretations of what "visible" means.
For example, you can further check whether an element has an opacity of `0`, if the CSS [`visibility`](/en-US/docs/Web/CSS/visibility) means that the element is invisible, or if its rendering is currently being skipped because it has the property [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility#auto).

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object indicating additional checks to run.
    The possible options are:

    - `contentVisibilityAuto`
      - : `true` to check if the element has [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility#auto) and is currently skipping its rendering.
        `false` by default.
    - `opacityProperty`
      - : `true` to check if the element has an opacity of `0`.
        `false` by default.
    - `visibilityProperty`

      - : `true` to check if the element is invisible due to its CSS [`visibility`](/en-US/docs/Web/CSS/visibility) value.
        `false` by default.

        > **Note:** Invisible elements include those that have [`visibility: hidden`](/en-US/docs/Web/CSS/visibility#hidden), and some element types that have [`visibility: collapse`](/en-US/docs/Web/CSS/visibility#collapse).

    - `checkOpacity`
      - : A historic alias for [`opacityProperty`](#opacityProperty).
    - `checkVisibilityCSS`
      - : A historic alias for [`visibilityProperty`](#visibilityProperty).

### Return value

`false` if any of the following conditions are met, otherwise `true`:

- the element doesn't have an associated box
- The element has [`content-visibility: hidden`](/en-US/docs/Web/CSS/visibility#hidden).
- `opacityProperty` (or `checkOpacity`) is `true` and the element has an opacity of `0`.
- `visibilityProperty` (or `checkVisibilityCSS`) is `true` and the element is invisible due to the CSS [`visibility`](/en-US/docs/Web/CSS/visibility) property.
- `contentVisibilityAuto` is `true` and element rendering is being skipped due to [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility#auto)

## Examples

### Test checkVisibility() with varied CSS

The following example allows you to test how the result of `checkVisibility()` might change with different values for `display`, `content-visibility`, `visibility`, and `opacity` CSS properties.

#### HTML

The HTML defines a `<select>` element for the CSS properties that affect the results of `checkVisibility()`.
The first (default selected) values should result in `checkVisibility()` returning `true` when applied to an element, while the other values affect the visibility.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="content">display: content</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

Next we have a `<div>` that is used to output the result of the `checkVisibility()` check when no options are passed in the parameter, and for each separate option value.
At the end we have the element that will be tested (to which we will apply the selected CSS property values).

```html
<div id="visibility_check"></div>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

The CSS just highlights the element to be tested.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

The code below gets each of the `<select>` elements.
The `updateCSS()` method is called on start and whenever the select elements change in order to apply the selected CSS to the target element,

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const visibility_check = document.getElementById("visibility_check");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // Apply selected CSS properties to target element
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // Call checkVisibility() on element using default and each of options
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // Output the results of the tests
  visibility_check.innerHTML = `<p>Result of check on element below (may be hidden):</p>
    <ul>
      <li>default: ${defaultVisibilityCheck}</li>
      <li>opacity: ${opacityVisibilityCheck}</li>
      <li>visibility: ${cssVisibilityCheck}</li>
      <li>contentVisibilityAuto: ${contentVisibilityAutoCheck}</li>
    </ul>`;
}
```

#### Result

The results are shown below.
If you change the selection the results will be applied to the test element (blue outline) and the results of the `checkVisibility()` for each setting should be displayed.
So for example, if you set the `opacity: 0` that test (only) should indicate `false`.
However if you set `display: none` then all tests should return `false.

{{ EmbedLiveSample('Using hidden to manually manage visibility', "100%", "200" ) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
