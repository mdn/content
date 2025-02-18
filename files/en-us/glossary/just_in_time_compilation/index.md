---
title: Just-In-Time Compilation (JIT)
slug: Glossary/Just_In_Time_Compilation
page-type: glossary-definition
---

{{GlossarySidebar}}

**JIT** (_Just-In-Time Compilation_) is a {{glossary("compile", "compilation")}} process in which code is translated from an intermediate representation or a higher-level language (e.g., {{glossary("JavaScript")}} or Java bytecode) into machine code _at runtime_, rather than prior to execution. This approach combines the benefits of both interpretation and ahead-of-time (AOT) compilation.

JIT compilers typically continuously analyze the code as it is executed, identifying parts of the code that are executed frequently (hot spots). If the speedup gains outweigh the compilation overhead, then the JIT compilers will compile those parts into machine code. The compiled code is then executed directly by the processor, which can result in significant performance improvements.

JIT is commonly used in modern {{glossary("browser", "web browsers")}} to optimize the performance of JavaScript code.

## See also

- [Just-In-Time Compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) on Wikipedia
- Related glossary terms:
  - {{glossary("compile")}}
