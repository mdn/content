---
title: NaN
slug: Glossary/NaN
page-type: glossary-definition
---

{{GlossarySidebar}}

NaN (Not a Number) is a numeric {{Glossary("Type", "data type")}} that means an undefined value or value that cannot be represented, especially results of floating-point calculations.

For example, NaNs can represent infinity, result of division by zero, missing value, or the square root of a negative (which is imaginary, whereas a floating-point number is real).

Practically speaking, if I divide two variables in a {{glossary("JavaScript")}} program, the result may be NaN, which is predefined in JavaScript as "undefined". Hence this division may break the program. Now, if this computation was a small part of a much larger algorithm, it would be really painful to figure out where the error actually occurs. Fortunately, since the result will be NaN and I know my divisor may turn out to be 0, I can set up testing conditions that prevent any such computations in the first place or notify me of where they happen.

## See also

- [NaN](https://en.wikipedia.org/wiki/NaN) on Wikipedia
- [NaN in JavaScript](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
