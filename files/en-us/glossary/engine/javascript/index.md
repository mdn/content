---
title: JavaScript engine
slug: Glossary/Engine/JavaScript
page-type: glossary-definition
---

{{GlossarySidebar}}

**JavaScript engines** are interpreters that parse and execute {{glossary("JavaScript")}} code. Modern JavaScript engines use just-in-time (JIT) compilation to convert JavaScript code into machine code that can be executed by a computer's processor. A JavaScript engine is typically developed and used in web {{glossary("browser", "browsers")}} to run client-side code but can also be used in server-side environments like {{glossary("Node.js")}}.

In a browser, the JavaScript engine operates together with the rendering engine via the {{glossary("DOM", "Document Object Model")}} and {{glossary("WebIDL", "Web IDL")}} bindings. Some JavaScript engines also execute {{glossary("WebAssembly")}} code in the same sandbox as regular JavaScript code.

Do not confuse JavaScript engines with {{glossary("engine/rendering", "rendering engines")}}, which are also crucial parts of browsers.

Common JavaScript engines include:

- [V8](https://v8.dev/)
- [SpiderMonkey](https://spidermonkey.dev/)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## See also

- [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine) on Wikipedia
- [JavaScript implementations](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_implementations)
- Related glossary terms:
  - {{glossary("Engine")}}
  - {{glossary("JavaScript")}}
  - {{glossary("WebAssembly")}}
  - {{glossary("Browser")}}
  - {{glossary("Node.js")}}
