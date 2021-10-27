---
title: DOM improvements in Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
tags:
  - DOM
  - Firefox 3
---
{{FirefoxSidebar}}

Firefox 3 offers a number of improvements to the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) (DOM), especially in regard to support for extensions to the DOM added by other browsers. This article provides a list of those improvements as well as links to more detailed documentation.

- The Internet Explorer [`clientTop`](/en-US/docs/Web/API/Element/clientTop) and [`clientLeft`](/en-US/docs/Web/API/Element/clientLeft) DOM extensions are now supported.
- The [`window.fullScreen`](/en-US/docs/Web/API/Window/fullScreen) property is now always accurate no matter where it is read, even in content. Previously it would return `false` inaccurately ({{ Bug(127013) }}).
- The [`getClientRects`](/en-US/docs/Web/API/Element/getClientRects) and [`getBoundingClientRect`](/en-US/docs/Web/API/Element/getBoundingClientRect) DOM extensions are now supported (see {{ Bug(174397) }}).
- The Internet Explorer [`elementFromPoint`](/en-US/docs/Web/API/Document/elementFromPoint) DOM extension is now supported ({{ Bug(199692) }}).
- The Internet Explorer [`oncut`](/en-US/docs/Web/API/HTMLElement/oncut), [`oncopy`](/en-US/docs/Web/API/HTMLElement/oncopy), and [`onpaste`](/en-US/docs/Web/API/HTMLElement/onpaste) DOM extensions are now supported ({{ Bug(280959) }}).
- Added privileged-code-only getters for `Node.nodePrincipal`, `Node.baseURIObject`, and `document.documentURIObject`. Chrome code must not touch (get or set) these properties on an unwrapped content object (e.g. on a `wrappedJSObject` of an [`XPCNativeWrapper`](/en-US/XPCNativeWrapper)), see {{ Bug(324464) }} for details.
- The Web Applications 1.0 (HTML5) [`getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName) DOM method is now supported.
- The Web Applications 1.0 (HTML5) [`window.postMessage`](/en-US/docs/Web/API/Window/postMessage) DOM method is now supported. This method allows a limited, opt-in form of client-side communication between windows not necessarily on the same domain.
- The `charCode` value of the `keypress` event is changed to an ASCII character if the accelerator key is pressed. Otherwise the `charCode` is the unmodified character (excepting `Shift` state). See [Gecko Keypress Event](/en-US/Gecko_Keypress_Event).

### See also

- [Firefox 3 for developers](/en-US/Firefox_3_for_developers)
- [CSS improvements in Firefox 3](/en-US/docs/CSS_improvements_in_Firefox_3)
- [DOM](/en-US/docs/Web/API/Document_Object_Model)
