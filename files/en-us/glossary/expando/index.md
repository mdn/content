---
title: Expando
slug: Glossary/Expando
tags:
  - CodingScripting
  - JavaScript
  - Reference
  - expando
---
<p>Expando properties are properties added to {{glossary("DOM")}} nodes with {{glossary("JavaScript")}}, where those properties are not part of the {{glossary("object","object's")}} DOM specification:</p>

<pre class="brush: js">window.document.foo = 5; // foo is an expando</pre>

<p>The term may also be applied to properties added to objects without respecting the object's original intent, such as non-numeric named properties added to an {{glossary("Array")}}.</p>
