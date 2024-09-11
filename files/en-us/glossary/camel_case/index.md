---
title: Camel case
slug: Glossary/Camel_case
page-type: glossary-definition
---

{{GlossarySidebar}}

**Camel case** is a way of writing phrases without spaces, where the first letter of each word is capitalized, except for the first letter of the entire compound word, which may be either upper or lower case. The name comes from the similarity of the capital letters to the humps of a camel's back. It's often stylized as "camelCase" to remind the reader of its appearance.

Camel casing is often used as a variable naming convention. The following variables are in camel case: {{domxref("console")}}, {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}}, and {{domxref("HTMLElement")}}.

Note that if the phrase contains acronyms (such as `URI` and `HTML`), camel casing practices vary. Some prefer to keep all of them capitalized, such as `encodeURIComponent` above. This may sometimes lead to ambiguity with multiple consecutive acronyms, such as `XMLHTTPRequest`. Others prefer to only capitalize the first letter, as `XmlHttpRequest`. The actual global variable, {{domxref("XMLHttpRequest")}}, uses a mix of both.

When the first letter of the entire phrase is upper case, it is called _upper camel case_ or _Pascal case_. Otherwise, it is called _lower camel case_.

Camel case is the most popular convention in JavaScript, Java, and various other languages.

## See also

- Related glossary terms:
  - {{Glossary("Snake case")}}
  - {{Glossary("Kebab case")}}
- [typescript-eslint rule: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
