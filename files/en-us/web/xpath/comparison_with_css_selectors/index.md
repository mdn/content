---
title: Comparison of CSS Selectors and XPath
slug: Web/XPath/Comparison_with_CSS_selectors
tags:
  - CSS
  - Draft
  - NeedsContent
  - Reference
  - Selectors
  - XPath
---
{{XSLTRef}}

This article seeks to document the difference between CSS Selectors and XPath for web developers to be able to better choose the right tool for the right job.

| [XPath feature](/en-US/docs/Web/XPath)                                                                                                                                       | [CSS equivalent](/en-US/docs/Web/CSS/CSS_Selectors)                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/en-US/docs/Web/XPath/Axes/ancestor), [`parent`](/en-US/docs/Web/XPath/Axes/parent) or [`preceding-sibling`](/en-US/docs/Web/XPath/Axes/preceding-sibling) axis | {{CSSxRef(":has",":has()")}} selector {{experimental_inline}}                                                                                 |
| [`attribute`](/en-US/docs/Web/XPath/Axes/attribute) axis                                                                                                                     | [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)                                                                                                 |
| [`child`](/en-US/docs/Web/XPath/Axes/child) axis                                                                                                                             | [Child combinator](/en-US/docs/Web/CSS/Child_combinator)                                                                                                       |
| [`descendant`](/en-US/docs/Web/XPath/Axes/descendant) axis                                                                                                                   | [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator)                                                                                             |
| [`following-sibling`](/en-US/docs/Web/XPath/Axes/following-sibling) axis                                                                                                     | [General sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator) or [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) |
| [`self`](/en-US/docs/Web/XPath/Axes/self) axis                                                                                                                               | {{CSSxRef(":scope")}} or {{CSSxRef(":host")}} selector                                                                                          |

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Web/XSLT">XSLT</a></strong></li>
    <li><strong><a href="/en-US/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li><strong><a href="/en-US/docs/Web/XPath">XPath</a></strong></li>
    <li class="toggle">
      <details open>
        <summary>Guides</summary>
        <ol>
          <li><a href="/en-US/docs/Web/XPath/Comparison_with_CSS_selectors">Comparison of CSS Selectors and XPath</a>
          </li>
          <li><a href="/en-US/docs/Web/XPath/Snippets">XPath snippets</a></li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/en-US/docs/Web/XPath/Axes">XPath Axes</a></summary>
        {{ListSubpagesForSidebar("/en-US/docs/Web/XPath/Axes")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/en-US/docs/Web/XPath/Functions">XPath Functions</a></summary>
        {{ListSubpagesForSidebar("/en-US/docs/Web/XPath/Functions")}}
      </details>
    </li>
  </ol>
</section>
