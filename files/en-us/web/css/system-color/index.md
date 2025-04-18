---
title: <system-color>
slug: Web/CSS/system-color
page-type: css-type
browser-compat: css.types.color.system-color
---

{{CSSRef}}

The **`<system-color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) usually reflects the default color choices used for the different parts of a web page.

However, user agents can provide an accessibility feature called _forced colors mode_, in which colors are restricted into a user- and user agent-defined palette, overriding the author's choice of colors in certain properties. In forced colors mode, `<system-color>` exposes the chosen colors, so that the rest of the page can integrate with them. An example of forced colors mode is [high contrast mode on Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

In forced colors mode, authors should use colors from the `<system-color>` type for all properties that are _not_ in the set of properties whose colors are overridden. This ensures that the page consistently uses the same color palette across all properties.

Authors can detect forced colors mode using the [`forced-colors`](/en-US/docs/Web/CSS/@media/forced-colors) media feature.

A `<system-color>` value can be used anywhere a [`<color>`](/en-US/docs/Web/CSS/color_value) can be used.

## Syntax

Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

- `AccentColor`
  - : Background of accented user interface controls.
- `AccentColorText`
  - : Text of accented user interface controls.
- `ActiveText`
  - : Text of active links.
- `ButtonBorder`
  - : Base border color of controls.
- `ButtonFace`
  - : Background color of controls.
- `ButtonText`
  - : Text color of controls.
- `Canvas`
  - : Background of application content or documents.
- `CanvasText`
  - : Text color in application content or documents.
- `Field`
  - : Background of input fields.
- `FieldText`
  - : Text in input fields.
- `GrayText`
  - : Text color for disabled items (for example, a disabled control).
- `Highlight`
  - : Background of selected items.
- `HighlightText`
  - : Text color of selected items.
- `LinkText`
  - : Text of non-active, non-visited links.
- `Mark`
  - : Background of text that has been specially marked (such as by the HTML `mark` element).
- `MarkText`
  - : Text that has been specially marked (such as by the HTML `mark` element).
- `SelectedItem`
  - : Background of selected items, for example, a selected checkbox.
- `SelectedItemText`
  - : Text of selected items.
- `VisitedText`
  - : Text of visited links.

### Deprecated system color keywords

The following keywords were defined in earlier versions of the CSS Color Module. They are now deprecated for use on public web pages.

- `ActiveBorder` {{Deprecated_Inline}}
  - : Active window border. Same as `ButtonBorder`.
- `ActiveCaption` {{Deprecated_Inline}}
  - : Active window caption. Should be used with `CaptionText` as foreground color. Same as `Canvas`.
- `AppWorkspace` {{Deprecated_Inline}}
  - : Background color of multiple document interface. Same as `Canvas`.
- `Background` {{Deprecated_Inline}}
  - : Desktop background. Same as `Canvas`.
- `ButtonHighlight` {{Deprecated_Inline}}
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border. Same as `ButtonFace`.
- `ButtonShadow` {{Deprecated_Inline}}
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border. Same as `ButtonFace`.
- `CaptionText` {{Deprecated_Inline}}
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color. Same as `CanvasText`.
- `InactiveBorder` {{Deprecated_Inline}}
  - : Inactive window border. Same as `ButtonBorder`.
- `InactiveCaption` {{Deprecated_Inline}}
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color. Same as `Canvas`.
- `InactiveCaptionText` {{Deprecated_Inline}}
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color. Same as `GrayText`.
- `InfoBackground` {{Deprecated_Inline}}
  - : Background color for tooltip controls. Should be used with the `InfoText` foreground color. Same as `Canvas`.
- `InfoText` {{Deprecated_Inline}}
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color. Same as `CanvasText`.
- `Menu` {{Deprecated_Inline}}
  - : Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color. Same as `Canvas`.
- `MenuText` {{Deprecated_Inline}}
  - : Text in menus. Should be used with the `Menu` background color. Same as `CanvasText`.
- `Scrollbar` {{Deprecated_Inline}}
  - : Background color of scroll bars. Same as `Canvas`.
- `ThreeDDarkShadow` {{Deprecated_Inline}}
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Same as `ButtonBorder`.
- `ThreeDFace` {{Deprecated_Inline}}
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color. Same as `ButtonFace`.
- `ThreeDHighlight` {{Deprecated_Inline}}
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Same as `ButtonBorder`.
- `ThreeDLightShadow` {{Deprecated_Inline}}
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Same as `ButtonBorder`.
- `ThreeDShadow` {{Deprecated_Inline}}
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Same as `ButtonBorder`.
- `Window` {{Deprecated_Inline}}
  - : Window background. Should be used with the `WindowText` foreground color. Same as `Canvas`.
- `WindowFrame` {{Deprecated_Inline}}
  - : Window frame. Same as `ButtonBorder`.
- `WindowText` {{Deprecated_Inline}}
  - : Text in windows. Should be used with the `Window` background color. Same as `CanvasText`.

## Examples

### Using system colors

In this example we have a button that normally gets its contrast using the {{cssxref("box-shadow")}} property. In forced colors mode, `box-shadow` is forced to `none`, so the example uses the `forced-colors` media feature to ensure there is a border of the appropriate color (`ButtonBorder` in this case).

#### HTML

```html
<button class="button">Press me!</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow
    is forced to 'none' in forced-colors mode */
    border: 2px ButtonBorder solid;
  }
}
```

#### Result

{{EmbedLiveSample("Using system colors")}}

### Value

You'll find below a table showing this browser's system colors. Depending on your settings, the colors may change. You can also check the result in different browsers or operating systems to check the differences.

<table>
  <thead>
    <tr>
      <th>System color</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#accentcolor"><code>AccentColor</code></a></td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><a href="#activetext"><code>ActiveText</code></a></td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><a href="#buttonborder"><code>ButtonBorder</code></a></td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><a href="#buttonface"><code>ButtonFace</code></a></td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><a href="#buttontext"><code>ButtonText</code></a></td>
      <td style="background-color: ButtonText;"></td>
    </tr>
    <tr>
      <td><a href="#canvas"><code>Canvas</code></a></td>
      <td style="background-color: Canvas;"></td>
    </tr>
    <tr>
      <td><a href="#canvastext"><code>CanvasText</code></a></td>
      <td style="background-color: CanvasText;"></td>
    </tr>
    <tr>
      <td><a href="#field"><code>Field</code></a></td>
      <td style="background-color: Field;"></td>
    </tr>
    <tr>
      <td><a href="#fieldtext"><code>FieldText</code></a></td>
      <td style="background-color: FieldText;"></td>
    </tr>
    <tr>
      <td><a href="#graytext"><code>GrayText</code></a></td>
      <td style="background-color: GrayText;"></td>
    </tr>
    <tr>
      <td><a href="#highlight"><code>Highlight</code></a></td>
      <td style="background-color: Highlight;"></td>
    </tr>
    <tr>
      <td><a href="#highlighttext"><code>HighlightText</code></a></td>
      <td style="background-color: HighlightText;"></td>
    </tr>
    <tr>
      <td><a href="#linktext"><code>LinkText</code></a></td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><a href="#mark"><code>Mark</code></a></td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><a href="#marktext"><code>MarkText</code></a></td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><a href="#selecteditem"><code>SelectedItem</code></a></td>
      <td style="background-color: SelectedItem;"></td>
    </tr>
    <tr>
      <td><a href="#selecteditemtext"><code>SelectedItemText</code></a></td>
      <td style="background-color: SelectedItemText;"></td>
    </tr>
    <tr>
      <td><a href="#visitedtext"><code>VisitedText</code></a></td>
      <td style="background-color: VisitedText;"></td>
    </tr>
    <tr>
      <td><a href="#activeborder"><code>ActiveBorder</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: AppWorkspace; color: CanvasText;"></td>
    </tr>
    <tr>
      <td><a href="#activecaption"><code>ActiveCaption</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><a href="#appworkspace"><code>AppWorkspace</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><a href="#background"><code>Background</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><a href="#buttonhighlight"><code>ButtonHighlight</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><a href="#buttonshadow"><code>ButtonShadow</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><a href="#captiontext"><code>CaptionText</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><a href="#inactiveborder"><code>InactiveBorder</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><a href="#inactivecaption"><code>InactiveCaption</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><a href="#inactivecaptiontext"><code>InactiveCaptionText</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><a href="#infobackground"><code>InfoBackground</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><a href="#infotext"><code>InfoText</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><a href="#menu"><code>Menu</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><a href="#menutext"><code>MenuText</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><a href="#scrollbar"><code>Scrollbar</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><a href="#threeddarkshadow"><code>ThreeDDarkShadow</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><a href="#threedface"><code>ThreeDFace</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><a href="#threedhighlight"><code>ThreeDHighlight</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><a href="#threedlightshadow"><code>ThreeDLightShadow</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><a href="#threedshadow"><code>ThreeDShadow</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><a href="#window"><code>Window</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: Window;"></td>
    </tr>
    <tr>
      <td><a href="#windowframe"><code>WindowFrame</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: WindowFrame;"></td>
    </tr>
    <tr>
      <td><a href="#windowtext"><code>WindowText</code>{{Deprecated_Inline}}</a></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value): the data type these keywords belong to
