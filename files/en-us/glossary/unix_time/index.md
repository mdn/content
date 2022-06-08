---
title: Unix time
slug: Glossary/Unix_time
tags:
  - Glossary
---
The **Unix time* is the amount of time that happens since a specific point in time, called the _epoch_. It doesn't take into account leap seconds.

It is a timestamp used to store a specific time. The epoch is arbitrarily set as January 1st, 1970, at midnight (UTC).

The Unix time can be stored in two ways, depending on the need of the API:

- As an integer, precise to the second.
- As a floating-point value representing the timestamp in milliseconds. The fractional part of the number indicates fractions of a millisecond, with a precision of up to 5 microseconds. Browsers _fuzz_ the value (typically between 60 microseconds and 2 milliseconds. This fuzzing increases security by preventing timing attacks.

## See also

- [Unix time](https://en.wikipedia.org/wiki/Unix_time) on Wikipedia
- [Leep second](https://en.wikipedia.org/wiki/Leap_second) on Wikipedia
