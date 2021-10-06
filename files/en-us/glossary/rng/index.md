---
title: Random Number Generator
slug: Glossary/RNG
tags:
  - CodingScripting
  - Glossary
---
A **PRNG** (pseudorandom number generator) is an algorithm that outputs numbers in a complex, seemingly unpredictable pattern. Truly random numbers (say, from a radioactive source) are utterly unpredictable, whereas all algorithms are predictable, and a PRNG returns the same numbers when passed the same starting parameters or *seed*.

PRNGs can be used for a variety of applications, such as games.

A cryptographically secure PRNG is a PRNG with certain extra properties making it suitable for use in cryptography. These include:

- that it's computationally unfeasible for an attacker (without knowledge of the seed) to predict its output
- that if an attacker can work out its current state, this should not enable the attacker to work out previously emitted numbers.

Most PRNGs are not cryptographically secure.

## See also

- {{Interwiki("wikipedia", "Pseudorandom number generator")}} on Wikipedia
- {{jsxref("Math.random()")}}, a built-in JavaScript PRNG function. Note that this is not a cryptographically secure PRNG.
- {{domxref("Crypto.getRandomValues()")}}: this is intended to provide cryptographically secure numbers.
