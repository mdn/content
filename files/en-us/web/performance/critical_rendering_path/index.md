---
title: Critical rendering path
slug: Web/Performance/Critical_rendering_path
tags:
  - Glossary
  - Performance
  - Reference
---

The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance.
The critical rendering path includes the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) (CSSOM), render tree and layout.

The document object model is created as the HTML is parsed. The HTML may request JavaScript, which may, in turn, alter the DOM. The HTML includes or makes requests for styles, which in turn builds the CSS object model. The browser engine combines the two to create the Render Tree. Layout determines the size and location of everything on the page. Once layout is determined, pixels are painted to the screen.

Optimizing the critical rendering path improves the time to first render. Understanding and optimizing the critical rendering path is important to ensure reflows and repaints can happen at 60 frames per second, to ensure performant user interactions, and to avoid [jank](/en-US/docs/Glossary/Jank).

## Understanding CRP

Web performance includes the server requests and responses, loading, scripting, rendering, layout, and the painting of the pixels to the screen.

A request for a web page or app starts with an HTML request. The server returns the HTML - response headers and data. The browser then begins parsing the HTML, converting the received bytes to the DOM tree. The browser initiates requests every time it finds links to external resources, be they stylesheets, scripts, or embedded image references. Some requests are blocking, which means the parsing of the rest of the HTML is halted until the imported asset is handled. The browser continues to parse the HTML making requests and building the DOM, until it gets to the end, at which point it constructs the CSS object model. With the DOM and CSSOM complete, the browser builds the render tree, computing the styles for all the visible content. After the render tree is complete, layout occurs, defining the location and size of all the render tree elements. Once complete, the page is rendered, or 'painted' on the screen.

### Document Object Model

DOM construction is incremental. The HTML response turns into tokens which turns into nodes which turn into the DOM Tree. A single DOM node starts with a startTag token and ends with an endTag token. Nodes contain all relevant information about the HTML element. The information is described using tokens. Nodes are connected into a DOM tree based on token hierarchy. If another set of startTag and endTag tokens come between a set of startTag and endTags, you have a node inside a node, which is how we define the hierarchy of the DOM tree.

The greater the number of nodes, the longer the following events in the critical rendering path will take. Measure! A few extra nodes won't make a big difference, but keep in mind that adding many extra nodes will impact performance.

### CSS Object Model

The DOM contains all the content of the page. The CSSOM contains all the information on how to style the DOM. CSSOM is similar to the DOM, but different. While the DOM construction is incremental, CSSOM is not. CSS is render blocking: the browser blocks page rendering until it receives and processes all of the CSS. CSS is render blocking because rules can be overwritten, so the content can't be rendered until the CSSOM is complete.

CSS has its own set of rules for identifying valid tokens. Remember the C in CSS stands for 'Cascade'. CSS rules cascade down. As the parser converts tokens to nodes, descendant nodes will inherit some of the styles of the parent. The incremental processing features don't apply to CSS like they do with HTML, because subsequent rules may override previous ones. The CSS object model gets built as the CSS is parsed, but can't be used to build the render tree until it is completely parsed because styles that are going to be overwritten with later parsing should not be rendered to the screen.

In terms of selector performance, less specific selectors are faster than more specific ones. For example, `.foo {}` is faster than `.bar .foo {}` because when the browser finds `.foo`, in the second scenario, it has to walk up the DOM to check if `.foo` has an ancestor `.bar`. The more specific tag requires more work from the browser, but this penalty is not likely worth optimizing around.

If you measure the time it takes to parse CSS, you'll be amazed at how fast browsers truly are. The more specific rule is more expensive because it has to traverse more nodes in the DOM tree - but that extra expense is generally minimal. Measure first. Optimize as needed. Specificity is likely not your lowest hanging fruit. When it comes to CSS, selector performance optimization improvements will only be in microseconds. There are other [ways to optimize CSS](/en-US/docs/Learn/Performance/CSS), such as minification, and separating deferred CSS into non-blocking requests by using media queries.

### Render Tree

The render tree captures both the content and the styles: the DOM and CSSOM trees are combined into the render tree. To construct the render tree, the browser checks every node, starting from root of the DOM tree, and determines which CSS rules are attached.

The render tree only captures visible content. The head section (generally) doesn't contain any visible information, and is therefore not included in the render tree. If there's a `display: none;` set on an element, neither it, nor any of its descendants, are in the render tree.

### Layout

Once the render tree is built, layout becomes possible. Layout is dependent on the size of screen. The layout step determines where and how the elements are positioned on the page, determining the width and height of each element, and where they are in relation to each other.

What is the width of an element? Block level elements, by definition, have a default width of 100% of the width of their parent. An element with a width of 50%, will be half of the width of its parent. Unless otherwise defined, the body has a width of 100%, meaning it will be 100% of the width of the viewport. This width of the device impacts layout.

The viewport meta tag defines the width of the layout viewport, impacting the layout. Without it, the browser uses the default viewport width, which on by-default full screen browsers is generally 960px. On by-default full screen browsers, like your phone's browser, by setting `<meta name="viewport" content="width=device-width">`, the width will be the width of the device instead of the default viewport width. The device-width changes when a user rotates their phone between landscape and portrait mode. Layout happens every time a device is rotated or browser is otherwise resized.

Layout performance is impacted by the DOM — the greater the number of nodes, the longer layout takes. Layout can become a bottleneck, leading to jank if required during scrolling or other animations. While a 20ms delay on load or orientation change may be fine, it will lead to jank on animation or scroll. Any time the render tree is modified, such as by added nodes, altered content, or updated box model styles on a node, layout occurs.

To reduce the frequency and duration of layout events, batch updates and avoid animating box model properties.

### Paint

The last step is painting the pixels to the screen. Once the render tree is created and layout occurs, the pixels can be painted to the screen. On load, the entire screen is painted. After that, only impacted areas of the screen will be repainted, as browsers are optimized to repaint the minimum area required. Paint time depends on what kind of updates are being applied to the render tree. While painting is a very fast process, and therefore likely not the most impactful place to focus on in improving performance, it is important to remember to allow for both layout and re-paint times when measuring how long an animation frame may take. The styles applied to each node increase the paint time, but removing style that increases the paint by 0.001ms may not give you the biggest bang for your optimization buck. Remember to measure first. Then you can determine whether it should be an optimization priority.

## Optimizing for CRP

Improve page load speed by prioritizing which resources get loaded, controlling the order in which they are loaded, and reducing the file sizes of those resources. Performance tips include 1) minimizing the number of critical resources by deferring non-critical ones' download, marking them as async, or eliminating them altogether, 2) optimizing the number of requests required along with the file size of each request, and 3) optimizing the order in which critical resources are loaded by prioritizing the downloading of critical assets, thereby shortening the critical path length.
