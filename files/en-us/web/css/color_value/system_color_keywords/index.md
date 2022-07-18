---
title: System color keywords
slug: Web/CSS/color_value/system_color_keywords
tags:
  - Reference
  - color
---
{{CSSRef}}

In _forced colors mode_ (detectable with the [forced-colors](/en-US/docs/Web/CSS/@media/forced-colors) media query), most colors are restricted into a user- and browser-defined palette. These **system colors** are exposed by the following keywords, which can be used to ensure that the rest of the page integrates well with the restricted palette. These values may also be used in other contexts, but are not widely supported by browsers.

The keywords in the following list are defined by the CSS Color Module Level 4 specification.

> **Note:** Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

## Syntax

- `ActiveText`
  - : Text of active links
- `ButtonBorder`
  - : Base border color of controls
- `ButtonFace`
  - : Background color of controls
- `ButtonText`
  - : Foreground color of controls
- `Canvas`
  - : Background of application content or documents
- `CanvasText`
  - : Foreground color in application content or documents
- `Field`
  - : Background of input fields
- `FieldText`
  - : Text in input fields
- `GrayText`
  - : Foreground color for disabled items (e.g. a disabled control)
- `Highlight`
  - : Background of selected items
- `HighlightText`
  - : Foreground color of selected items
- `LinkText`
  - : Text of non-active, non-visited links
- `Mark`
  - : Background of text that has been specially marked (such as by the HTML `mark` element)
- `MarkText`
  - : Text that has been specially marked (such as by the HTML `mark` element)
- `VisitedText`
  - : Text of visited links

## Deprecated system color keywords

The following keywords were defined in earlier versions of the CSS Color Module. They are now deprecated for use on public web pages.

- `ActiveBorder` {{deprecated_inline}}
  - : Active window border.
- `ActiveCaption` {{deprecated_inline}}
  - : Active window caption. Should be used with `CaptionText` as foreground color.
- `AppWorkspace` {{deprecated_inline}}
  - : Background color of multiple document interface.
- `Background` {{deprecated_inline}}
  - : Desktop background.
- `ButtonHighlight` {{deprecated_inline}}
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- `ButtonShadow` {{deprecated_inline}}
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- `CaptionText` {{deprecated_inline}}
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color.
- `InactiveBorder` {{deprecated_inline}}
  - : Inactive window border.
- `InactiveCaption` {{deprecated_inline}}
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color.
- `InactiveCaptionText` {{deprecated_inline}}
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color.
- `InfoBackground` {{deprecated_inline}}
  - : Background color for tooltip controls. Should be used with the `InfoText` foreground color.
- `InfoText` {{deprecated_inline}}
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color.
- `Menu` {{deprecated_inline}}
  - : Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color.
- `MenuText` {{deprecated_inline}}
  - : Text in menus. Should be used with the `Menu` background color.
- `Scrollbar` {{deprecated_inline}}
  - : Background color of scroll bars.
- `ThreeDDarkShadow` {{deprecated_inline}}
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- `ThreeDFace` {{deprecated_inline}}
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color.
- `ThreeDHighlight` {{deprecated_inline}}
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- `ThreeDLightShadow` {{deprecated_inline}}
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- `ThreeDShadow` {{deprecated_inline}}
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- `Window` {{deprecated_inline}}
  - : Window background. Should be used with the `WindowText` foreground color.
- `WindowFrame` {{deprecated_inline}}
  - : Window frame.
- `WindowText` {{deprecated_inline}}
  - : Text in windows. Should be used with the `Window` background color.

## Firefox non-standard system color extensions

Firefox also supports some non-standard extensions to the system color keyword set.

- `-moz-ButtonDefault` {{non-standard_inline}}
  - : The border color that goes around buttons that represent the default action for a dialog box.
- `-moz-ButtonHoverFace` {{non-standard_inline}}
  - : The background color of a button that the mouse pointer is over (which would be `ThreeDFace` or `ButtonFace` when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverText` foreground color.
- `-moz-ButtonHoverText` {{non-standard_inline}}
  - : The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverFace background` color.
- `-moz-CellHighlight` {{non-standard_inline}}
  - : Background color for selected item in a tree widget. Should be used with the `-moz-CellHighlightText` foreground color. See also `-moz-html-CellHighlight`.
- `-moz-CellHighlightText` {{non-standard_inline}}
  - : Text color for a selected item in a tree. Should be used with the `-moz-CellHighlight background` color. See also `-moz-html-CellHighlightText`.
- `-moz-Combobox` {{non-standard_inline}}
  - : Background color for combo-boxes. Should be used with the `-moz-ComboboxText` foreground color. In versions prior to 1.9.2, use `-moz-Field` instead.
- `-moz-ComboboxText` {{non-standard_inline}}
  - : Text color for combo-boxes. Should be used with the `-moz-Combobox` background color. In versions prior to 1.9.2, use `-moz-FieldText` instead.
- `-moz-Dialog` {{non-standard_inline}}
  - : Background color for dialog boxes. Should be used with the `-moz-DialogText` foreground color.
- `-moz-DialogText` {{non-standard_inline}}
  - : Text color for dialog boxes. Should be used with the `-moz-Dialog` background color.
- `-moz-dragtargetzone` {{non-standard_inline}}, `-moz-EvenTreeRow` {{non-standard_inline}}
  - : Background color for even-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-OddTreeRow`.
- `-moz-html-CellHighlight` {{non-standard_inline}}
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`.
- `-moz-html-CellHighlightText` {{non-standard_inline}}
  - : Text color for highlighted items in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlight` background color. Prior to Gecko 1.9, use `-moz-CellHighlightText`.
- `-moz-mac-accentdarkestshadow` {{non-standard_inline}}, `-moz-mac-accentdarkshadow` {{non-standard_inline}}, `-moz-mac-accentface` {{non-standard_inline}}, `-moz-mac-accentlightesthighlight` {{non-standard_inline}}, `-moz-mac-accentlightshadow` {{non-standard_inline}}, `-moz-mac-accentregularhighlight` {{non-standard_inline}}, `-moz-mac-accentregularshadow` {{non-standard_inline}}
  - : Accent colors.
- `-moz-mac-chrome-active` {{non-standard_inline}}, `-moz-mac-chrome-inactive` {{non-standard_inline}}
  - : Colors for inactive and active browser chrome.
- `-moz-mac-focusring` {{non-standard_inline}}, `-moz-mac-menuselect` {{non-standard_inline}}, `-moz-mac-menushadow` {{non-standard_inline}}, `-moz-mac-menutextselect` {{non-standard_inline}}, `-moz-MenuHover` {{non-standard_inline}}
  - : Background color for hovered menu items. Often similar to `Highlight`. Should be used with the `-moz-MenuHoverText` or `-moz-MenuBarHoverText` foreground color.
- `-moz-MenuHoverText` {{non-standard_inline}}
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color.
- `-moz-MenuBarText` {{non-standard_inline}}
  - : Text color in menu bars. Often similar to `MenuText`. Should be used on top of `Menu` background.
- `-moz-MenuBarHoverText`  {{non-standard_inline}}
  - : Color for hovered text in menu bars. Often similar to `-moz-MenuHoverText`. Should be used on top of `-moz-MenuHover` background.
- `-moz-nativehyperlinktext` {{non-standard_inline}}
  - : Default platform hyperlink color.
- `-moz-OddTreeRow` {{non-standard_inline}}
  - : Background color for odd-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-EvenTreeRow`.
- `-moz-win-communicationstext` {{non-standard_inline}}
  - : Should be used for text in objects with `{{cssxref("appearance")}}: -moz-win-communications-toolbox;`.
- `-moz-win-mediatext` {{non-standard_inline}}
  - : Should be used for text in objects with `{{cssxref("appearance")}}: -moz-win-media-toolbox`.
- `-moz-win-accentcolor` {{non-standard_inline}}
  - : Used to access the Windows 10 custom accent color that you can set on the start menu, taskbar, title bars, etc.
- `-moz-win-accentcolortext` {{non-standard_inline}}
  - : Used to access the color of text placed over the Windows 10 custom accent color in the start menu, taskbar, title bars, etc.

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value) data type these keywords belong to.
