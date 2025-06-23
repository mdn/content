---
title: Advance measure
slug: Glossary/Advance_measure
page-type: glossary-definition
---

{{GlossarySidebar}}

The **advance measure** is the total space the glyph takes, either horizontally or vertically, depending on the current writing direction. It is equal to the distance traveled by the cursor, placed directly in front of and then shifted behind the character.

This term is used in the definition of several CSS {{cssxref("&lt;length&gt;")}} units.
The _advance measure_ of unit `ch` is either the width or height of character "0" in the given typeface, depending on whether the horizontal or vertical axis is currently used. A similar _advance measure_ of unit `ic` is the width or height of the "水" character.

## See also

- {{cssxref("&lt;length&gt;")}}
- [Learn: CSS values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [TextMetrics API](/en-US/docs/Web/API/TextMetrics)
