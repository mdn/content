---
title: Comparison of CSS Selectors and XPath
slug: Web/XML/XPath/Guides/Comparison_with_CSS_selectors
page-type: guide
sidebar: xmlsidebar
---

This article seeks to document the difference between CSS Selectors and XPath for web developers to be able to better choose the right tool for the right job.

| [XPath feature](/en-US/docs/Web/XML/XPath)                                                                                                                                                                             | [CSS equivalent](/en-US/docs/Web/CSS/CSS_selectors)                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/en-US/docs/Web/XML/XPath/Reference/Axes#ancestor), [`parent`](/en-US/docs/Web/XML/XPath/Reference/Axes#parent) or [`preceding-sibling`](/en-US/docs/Web/XML/XPath/Reference/Axes#preceding-sibling) axis | {{CSSxRef(":has",":has()")}} selector                                                                                                                        |
| [`attribute`](/en-US/docs/Web/XML/XPath/Reference/Axes#attribute) axis                                                                                                                                                 | [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)                                                                                               |
| [`child`](/en-US/docs/Web/XML/XPath/Reference/Axes#child) axis                                                                                                                                                         | [Child combinator](/en-US/docs/Web/CSS/Child_combinator)                                                                                                     |
| [`descendant`](/en-US/docs/Web/XML/XPath/Reference/Axes#descendant) axis                                                                                                                                               | [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator)                                                                                           |
| [`following-sibling`](/en-US/docs/Web/XML/XPath/Reference/Axes#following-sibling) axis                                                                                                                                 | [Subsequent-sibling combinator](/en-US/docs/Web/CSS/Subsequent-sibling_combinator) or [Next-sibling combinator](/en-US/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/en-US/docs/Web/XML/XPath/Reference/Axes#self) axis                                                                                                                                                           | {{CSSxRef(":scope")}} or {{CSSxRef(":host")}} selector                                                                                                       |
