---
title: Invalid selector
slug: Web/WebDriver/Errors/InvalidSelector
tags:
  - Error
  - Reference
  - WebDriver
  - invalid selector
---
<p>The <strong>invalid selector</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when an element retrieval command is used with an unknown <a href="/en-US/docs/Web/WebDriver/WebElement">web element</a> selector strategy.</p>

<p>The available selector strategies are <a href="/en-US/docs/Web/WebDriver/WebElement#css-selector">CSS</a>, <a href="/en-US/docs/Web/WebDriver/WebElement#link-text-selector">link text</a>, <a href="/en-US/docs/Web/WebDriver/WebElement#partial-link-text-selector">partial link text</a>, <a href="/en-US/docs/Web/WebDriver/WebElement#tag-name-selector">tag name</a>, and <a href="/en-US/docs/Web/WebDriver/WebElement#tag-name-selector">XPath</a>. Any other selector strategy is rejected with this error.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li><a href="/en-US/docs/Web/WebDriver/WebElement">WebElement</a></li>
 <li>Element retrieval commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElement">Find Element</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElements">Find Elements</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElementFromElement">Find Element From Element</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElementsFromElement">Find Elements From Element</a></li>
  </ul>
 </li>
</ul>
