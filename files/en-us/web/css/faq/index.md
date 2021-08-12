---
title: Questions about CSS
slug: Web/CSS/FAQ
tags:
  - Beginner
  - CSS
  - Draft
  - Guide
  - Junk
  - NeedsContent
  - NeedsHelp
---
<div>{{CSSRef}}{{Draft}}</div>

<p>Cascading Style Sheets (CSS) is a rule-based language allowing developers to define styles to apply to HTML elements (or other markup structures).</p>

<ol>
 <li>CSS gives more control over the appearance of a Web page to the page creator than to the browser designer or the viewer. With CSS, the sources of style definition for a given document element are in this order of precedence:</li>
 <li>The STYLE attribute on an individual element tag</li>
 <li>The STYLE element that defines a specific style sheet containing style declarations or a LINK element that links to a separate document containing the STYLE element. In a Web page, the STYLE element is placed between the TITLE statement and the BODY statement.</li>
 <li>An imported style sheet, using the CSS @import notation to automatically import and merge an external style sheet with the current style sheet</li>
 <li>Style attributes specified by the viewer to the browser</li>
 <li>The default style sheet assumed by the browser</li>
</ol>

<p>In general, the Web page creator's style sheet takes precedence, but it's recommended that browsers provide ways for the viewer to override the style attributes in some respects. Since it's likely that different browsers will choose to implement CSS1 somewhat differently, the Web page creator must test the page with different browsers.</p>
