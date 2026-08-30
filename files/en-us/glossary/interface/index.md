---
title: Interface
slug: Glossary/Interface
page-type: glossary-definition
sidebar: glossarysidebar
---

In web standards terminology, an **interface** describes the set of {{Glossary("property", "properties")}} and {{Glossary("method", "methods")}} that an object exposes. Interfaces are defined using {{Glossary("WebIDL")}}, and specify the shape of the objects provided by Web {{Glossary("API", "APIs")}}.

An interface can inherit from other interfaces, and can include members from {{Glossary("Mixin", "mixins")}}. In browsers, interfaces are exposed to JavaScript as classes, so their properties and methods are typically accessed through instances created by the API. For example, the `HTMLButtonElement` interface is exposed as the `HTMLButtonElement` constructor, whose instances represent {{htmlelement("button")}} elements.

## See also

- {{Glossary("WebIDL")}}
- {{Glossary("Mixin")}}
- [Information contained in a WebIDL file](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)
- [WebIDL](https://webidl.spec.whatwg.org/) specification
