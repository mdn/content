---
title: appearance
slug: Web/CSS/appearance
page-type: css-property
browser-compat: css.properties.appearance
---

{{CSSRef}}

The **`appearance`** CSS property is used to display UI elements with platform-specific styling, based on the operating system's theme.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Before standardization, this property allowed elements to be shown as widgets, such as buttons or check boxes. It was considered a misfeature and authors are encouraged to use only standard keywords now.

> **Note:** If you wish to use this property on websites, you should test it very carefully. Although it is supported in most modern browsers, its implementation varies. In older browsers, even the keyword `none` does not have the same effect on all form elements across different browsers, and some do not support it at all. The differences are smaller in the newest browsers.

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;
```

### Values

For the following keywords, the user agent selects the appropriate styling based on the element.
Some examples are provided, but the list is not exhaustive.

- `none`

  - : Hides certain features of widgets, such as arrow displayed in select element, indicating that list can be expanded.

- `auto`

  - : Acts as `none` on elements with no special styling.

- `<compat-special>`

  - : One of `menulist-button` or `textfield`.
    Both of these values are equivalent to `auto` on elements with no special styling.

- `<compat-auto>`

  - : Possible values are `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button`, and `textarea`.
    Keywords which are the equivalent of `auto` for maintaining compatibility with older browsers.

#### Non-standard values

The following values may be operational on historical browser versions using **`-moz-appearance`** or **`-webkit-appearance`** prefix, but not on the standard **`appearance`** property:

<details>
<summary>Non-standard values</summary>

| Value                                  | Safari | Firefox | Chrome | Edge |
| -------------------------------------- | ------ | ------- | ------ | ---- |
| `attachment`                           | Y      |         |        |      |
| `borderless-attachment`                | Y      |         |        |      |
| `button-bevel`                         | Y      | Y       | Y      | Y    |
| `caps-lock-indicator`                  | Y      |         |        | Y    |
| `caret`                                | Y      | Y       | Y      | Y    |
| `checkbox-container`                   |        | Y       |        |      |
| `checkbox-label`                       |        | Y       |        |      |
| `checkmenuitem`                        |        | Y       |        |      |
| `color-well`                           | Y      |         |        |      |
| `continuous-capacity-level-indicator`  | Y      |         |        |      |
| `default-button`                       | Y      |         |        | Y    |
| `discrete-capacity-level-indicator`    | Y      |         |        |      |
| `inner-spin-button`                    | Y      | Y       | Y      |      |
| `image-controls-button`                | Y      |         |        |      |
| `list-button`                          | Y      |         |        |      |
| `listitem`                             | Y      | Y       | Y      | Y    |
| `media-enter-fullscreen-button`        | Y      |         | Y      |      |
| `media-exit-fullscreen-button`         | Y      |         | Y      |      |
| `media-fullscreen-volume-slider`       | Y      |         |        |      |
| `media-fullscreen-volume-slider-thumb` | Y      |         |        |      |
| `media-mute-button`                    | Y      |         |        | Y    |
| `media-play-button`                    | Y      |         |        | Y    |
| `media-overlay-play-button`            | Y      |         | Y      |      |
| `media-return-to-realtime-button`      | Y      |         |        |      |
| `media-rewind-button`                  | Y      |         |        |      |
| `media-seek-back-button`               | Y      |         | Y      |      |
| `media-seek-forward-button`            | Y      |         | Y      |      |
| `media-toggle-closed-captions-button`  | Y      |         | Y      |      |
| `media-slider`                         | Y      |         | Y      | Y    |
| `media-sliderthumb`                    | Y      |         | Y      | Y    |
| `media-volume-slider-container`        | Y      |         | Y      |      |
| `media-volume-slider-mute-button`      | Y      |         |        |      |
| `media-volume-slider`                  | Y      |         | Y      |      |
| `media-volume-sliderthumb`             | Y      |         | Y      |      |
| `media-controls-background`            | Y      |         | Y      |      |
| `media-controls-dark-bar-background`   | Y      |         |        |      |
| `media-controls-fullscreen-background` | Y      |         | Y      |      |
| `media-controls-light-bar-background`  | Y      |         |        |      |
| `media-current-time-display`           | Y      |         | Y      |      |
| `media-time-remaining-display`         | Y      |         | Y      |      |
| `menulist-text`                        | Y      | Y       | Y      | Y    |
| `menulist-textfield`                   | Y      | Y       | Y      | Y    |
| `meterbar`                             |        | Y       |        |      |
| `number-input`                         |        | Y       |        |      |
| `progress-bar-value`                   | Y      |         | Y      |      |
| `progressbar`                          |        | Y       |        |      |
| `progressbar-vertical`                 |        | Y       |        |      |
| `range`                                |        | Y       |        |      |
| `range-thumb`                          |        | Y       |        |      |
| `rating-level-indicator`               | Y      |         |        |      |
| `relevancy-level-indicator`            | Y      |         |        |      |
| `scale-horizontal`                     |        | Y       |        |      |
| `scalethumbend`                        |        | Y       |        |      |
| `scalethumb-horizontal`                |        | Y       |        |      |
| `scalethumbstart`                      |        | Y       |        |      |
| `scalethumbtick`                       |        | Y       |        |      |
| `scalethumb-vertical`                  |        | Y       |        |      |
| `scale-vertical`                       |        | Y       |        |      |
| `scrollbarthumb-horizontal`            |        | Y       |        |      |
| `scrollbarthumb-vertical`              |        | Y       |        |      |
| `scrollbartrack-horizontal`            |        | Y       |        |      |
| `scrollbartrack-vertical`              |        | Y       |        |      |
| `searchfield-decoration`               | Y      |         |        | Y    |
| `searchfield-results-decoration`       | Y      | Y       | Y      | Y    |
| `searchfield-results-button`           | Y      |         |        | Y    |
| `searchfield-cancel-button`            | Y      | Y       | Y      | Y    |
| `snapshotted-plugin-overlay`           | Y      |         |        |      |
| `sheet`                                |        |         |        |      |
| `slider-vertical`                      |        |         | Y      | Y    |
| `sliderthumb-horizontal`               |        |         | Y      | Y    |
| `sliderthumb-vertical`                 |        |         | Y      | Y    |
| `textfield-multiline`                  |        | Y       |        |      |
| `-apple-pay-button`                    | Y      |         |        |      |

</details>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Apply custom styling

The following example shows how to remove the default styling from a checkbox and select element, and apply custom styling.
The appearance of the checkbox is changed to a circle, and the select element shows how to remove the arrow indicating that the list can be expanded.

#### HTML

```html
<input type="checkbox" />
<input type="checkbox" checked />

<select>
  <option>default</option>
  <option>option 2</option>
</select>
<select class="none">
  <option>appearance: none</option>
  <option>option 2</option>
</select>
```

#### CSS

```css
input {
  appearance: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked {
  border-radius: 50%;
  background: green;
}

select {
  border: 1px solid black;
  font-size: 1em;
}

select.none {
  appearance: none;
}
```

#### Result

{{EmbedLiveSample("Apply_custom_styling", 1050, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
