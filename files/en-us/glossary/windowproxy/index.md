---
title: WindowProxy
slug: Glossary/WindowProxy
page-type: glossary-definition
---

{{GlossarySidebar}}

A **`WindowProxy`** object is a wrapper for a [`Window`](/en-US/docs/Web/API/Window) object. A `WindowProxy` object exists in every [browsing context](/en-US/docs/Glossary/Browsing_context). All operations performed on a `WindowProxy` object will also be applied to the underlying `Window` object it currently wraps. Therefore, interacting with a `WindowProxy` object is almost identical to directly interacting with a `Window` object. When a browsing context is navigated, the `Window` object its `WindowProxy` wraps is changed.

## See also

- HTML specification: [WindowProxy section](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow question: [WindowProxy and Window objects?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
