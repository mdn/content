---
title: appearance
slug: Web/CSS/appearance
page-type: css-property
browser-compat: css.properties.appearance
---

{{CSSRef}}

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Before standardization this property allowed simple elements to be shown as widgets, such as buttons or check boxes. It was considered a misfeature and authors are encouraged to use only standard keywords now.

> **Note:** If you wish to use this property on websites, you should test it very carefully. Although it is supported in most modern browsers, its implementation varies. In older browsers, even the keyword `none` does not have the same effect on all form elements across different browsers, and some do not support it at all. The differences are smaller in the newest browsers.

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* "Compat-auto" values, which have the same effect as 'auto' */
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Partial list of available values in Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Partial list of available values in WebKit/Blink (as well as Gecko and Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;
```

### Values

#### Standard keywords

<table class="standard-table">
  <tbody>
    <tr>
      <th>Value</th>
      <th>Browser</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>Hides certain features of widgets, such as arrow displayed in select element, indicating that list can be expanded.</td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome Edge</td>
      <td>
        The user agent selects the appropriate special styling based on the
        element. Acts as <code>none</code> on elements with no special styling.
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        The following values are treated as equivalent to <code>auto</code>:
      </td>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>The element used to be drawn like a button.</td>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        The element used to be drawn like a checkbox, including only the actual
        "checkbox" portion.
      </td>
    </tr>
    <tr>
      <td><code>listbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>menulist</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>meter</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>progress-bar</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>push-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        The element used to be drawn like a radio button, including only the actual
        "radio button" portion.
      </td>
    </tr>
    <tr>
      <td><code>searchfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slider-horizontal</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>square-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textarea</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Non-standard keywords

The following values may be operational on historical browser versions using **`-moz-appearance`** or **`-webkit-appearance`** prefix, but not on the standard **`appearance`** property.

| Value                                  | Browser                    | Description                                                                                                                                                                        |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                                                                                                    |
| `borderless-attachment`                | Safari                     |                                                                                                                                                                                    |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                                                                                                    |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `checkbox-container`                   | Firefox                    | The element is drawn like a container for a checkbox, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a checkbox. |
| `checkbox-label`                       | Firefox                    |                                                                                                                                                                                    |
| `checkmenuitem`                        | Firefox                    |                                                                                                                                                                                    |
| `color-well`                           | Safari                     | `input type=color`                                                                                                                                                                 |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                                                                                                    |
| `default-button`                       | Safari Edge                |                                                                                                                                                                                    |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                                                                                                    |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                                                                                                    |
| `image-controls-button`                | Safari                     |                                                                                                                                                                                    |
| `list-button`                          | Safari                     | datalist                                                                                                                                                                           |
| `listitem`                             | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `media-enter-fullscreen-button`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-exit-fullscreen-button`         | Chrome Safari              |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider`       | Safari                     |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider-thumb` | Safari                     |                                                                                                                                                                                    |
| `media-mute-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-play-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-overlay-play-button`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-return-to-realtime-button`      | Safari                     |                                                                                                                                                                                    |
| `media-rewind-button`                  | Safari                     |                                                                                                                                                                                    |
| `media-seek-back-button`               | Safari Edge                |                                                                                                                                                                                    |
| `media-seek-forward-button`            | Safari Edge                |                                                                                                                                                                                    |
| `media-toggle-closed-captions-button`  | Chrome Safari              |                                                                                                                                                                                    |
| `media-slider`                         | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-sliderthumb`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-volume-slider-container`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-slider-mute-button`      | Safari                     |                                                                                                                                                                                    |
| `media-volume-slider`                  | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-sliderthumb`             | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-background`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-dark-bar-background`   | Safari                     |                                                                                                                                                                                    |
| `media-controls-fullscreen-background` | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-light-bar-background`  | Safari                     |                                                                                                                                                                                    |
| `media-current-time-display`           | Chrome Safari              |                                                                                                                                                                                    |
| `media-time-remaining-display`         | Chrome Safari              |                                                                                                                                                                                    |
| `menulist-text`                        | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `menulist-textfield`                   | Firefox Chrome Safari Edge | The element is styled as the text field for a menulist. (Not implemented for the Windows platform)                                                                                 |
| `meterbar`                             | Firefox                    | Use `meter` instead.                                                                                                                                                               |
| `number-input`                         | Firefox                    |                                                                                                                                                                                    |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                                                                                                    |
| `progressbar`                          | Firefox                    | The element is styled like a progress bar. Use `progress-bar` instead                                                                                                              |
| `progressbar-vertical`                 | Firefox                    |                                                                                                                                                                                    |
| `range`                                | Firefox                    |                                                                                                                                                                                    |
| `range-thumb`                          | Firefox                    |                                                                                                                                                                                    |
| `rating-level-indicator`               | Safari                     |                                                                                                                                                                                    |
| `relevancy-level-indicator`            | Safari                     |                                                                                                                                                                                    |
| `scale-horizontal`                     | Firefox                    |                                                                                                                                                                                    |
| `scalethumbend`                        | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-horizontal`                | Firefox                    |                                                                                                                                                                                    |
| `scalethumbstart`                      | Firefox                    |                                                                                                                                                                                    |
| `scalethumbtick`                       | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-vertical`                  | Firefox                    |                                                                                                                                                                                    |
| `scale-vertical`                       | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `searchfield-decoration`               | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-results-decoration`       | Chrome Safari Edge         | (Works on Chrome 51 on Windows 7)                                                                                                                                                  |
| `searchfield-results-button`           | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                                                                                                    |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                                                                                                    |
| `sheet`                                | None                       |                                                                                                                                                                                    |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                                                                                                    |
| `textfield-multiline`                  | Firefox                    | Use `textarea` instead.                                                                                                                                                            |
| `-apple-pay-button`                    | Safari                     | **iOS and macOS only**. Available on the web starting in iOS 10.1 and macOS 10.12.1                                                                                                |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Make an element look like a menulist button

```css
.exampleone {
  -webkit-appearance: menulist-button;
  -moz-appearance: menulist-button;
  appearance: menulist-button;
}
```

### Apply custom styling

#### HTML

```html
<select class="none">
  <option>appearance: none</option>
</select>
<select class="auto">
  <option>appearance: auto</option>
</select>
```

#### CSS

```css
.none {
  appearance: none;
}
.auto {
  appearance: auto;
}
```

#### Result

{{EmbedLiveSample("Apply_custom_styling", 1050, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Definition of `appearance` in CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/#appearance-switching)
