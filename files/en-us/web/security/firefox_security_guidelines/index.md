---
title: Firefox security guidelines
slug: Web/Security/Firefox_Security_Guidelines
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

## Purpose

This document outlines a set of security guidelines that will generally apply to all client applications, such as Firefox and Thunderbird.

## Secure Coding Principles

Ensure that the application follows the [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles):

1. Minimize attack surface area
2. Establish secure defaults
3. Principle of Least privilege
4. Principle of Defense in depth
5. Fail securely
6. Don't trust services
7. Keep security simple
8. Fix security issues correctly

## Input Validation

1. Does the application accept user input?

   1. Verify a sampling of input locations to ensure that reasonable maximums are in place when accepting user data
   2. Verify a sampling of input locations to ensure that the application allows only a defined set of acceptable characters
   3. Ensure that allowlisting is used instead of denylisting

2. Does the application accept user input that is displayed in any way?

   1. Verify a sampling of input and output locations to ensure user supplied content is properly encoded in the response

## Chrome JS - Dangerous Functions

Are any of the following functions used?

If so ensure they are safe and that no better alternatives are available.

| Name                     | Risk Level | Problem                                                            | Solution                                          |
| ------------------------ | ---------- | ------------------------------------------------------------------ | ------------------------------------------------- |
| eval                     | Very High  | Invokes JavaScript parser - dangerous if used with untrusted input | Avoid eval if at all possible.                    |
| setTimeout(string, time) | Very High  | Acts like eval                                                     | Use setTimeout(function, time, param1, param2, …) |

## C++ - Dangerous Functions

Are any of the following functions used?

If so ensure they are safe and that no better alternatives are available.

| Name                                                  | Risk Level | Problem                                            | Solution                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Very High  | No bounds checking                                 | Do not use gets. Use fgets instead.                                                                                                                                                                                                                                             |
| strcpy                                                | Very High  | No bounds checking                                 | strcpy is safe only if the source string is a constant and the destination is large enough to hold it. Otherwise, use strncpy.                                                                                                                                                  |
| sprintf                                               | Very High  | No bounds checking, format string attacks          | sprintf is very hard to use safely. Use snprintf instead.                                                                                                                                                                                                                       |
| scanf, sscanf                                         | High       | Possibly no bounds checking, format string attacks | Make sure all %-directives match the corresponding argument types. Do not use '%s' directives with no bounds checking. Use '%xs' where x is the buffer size of the corresponding argument. Do not use untrusted, un-validated data in the format string.                        |
| strcat                                                | High       | No bounds checking                                 | If input sizes are not well-known and fixed, use strncat instead.                                                                                                                                                                                                               |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | High       | format string attacks                              | Do not use untrusted, un-validated data in the format string. If the format string can be influenced by Web content or user input, validate it for the proper number and type of %-directives before calling these functions. Make sure destination size arguments are correct. |
| strncpy, fgets, strncat                               | Low        | May not null-terminate                             | Always explicitly null-terminate the destination buffer. Make sure the size argument is correct. Be sure to leave room in the destination buffer to add the null character!                                                                                                     |

## URLs

1. Does the application make use of untrusted data to construct URLs?

   - Ensure any such data is adequately sanitized and encoded prior to use.
   - Ensure any data obtained from these URLs is checked before use or storage.

2. Does the application follow redirects?

   - Ensure security checks are performed on redirects as well as the original request URI.

## Security Controls

1. Does the application implement suitable permission checks?

   - Ensure the correct APIs are used where available (e.g. shouldLoad, etc.)
   - Ensure the application fails securely.

## Remote System Access

1. Does the application access any remote systems?

- Ensure that TLS is used unless there's a _very_ good reason not to.
- Ensure that no user information is transmitted without the user's consent.

## Information Storage

1. File storage

   1. Ensure the application checks that any files created are under allowed paths
   2. Are filenames generated from untrusted data?

      - Ensure the data is suitably encoded

   3. Check files are of an acceptable type
   4. Check files cannot exceed reasonable size limits

2. Database storage

   1. Ensure any untrusted information sent to the database is adequately sanitized
   2. Where possible, make use of type safe parameterization to prevent injection attacks

3. Sensitive information

   1. Ensure any security sensitive or personal information is adequately protected (see Encryption section)
   2. Particular care must be taken around credentials (passwords, etc.) - If you're working with information of this type and you're unsure of what to do, it's always worth asking

4. Logging

   1. Don't forget the above rules apply to logs as well as your usual application data

## Encryption

1. Does the application use any form of encryption?
2. Are the algorithms used recognized standards?

## Denial of Service

1. Ensure the application protects against exhaustion of:

   1. System memory
   2. Storage

## Security Warnings

1. Does the application present the user with any security warnings?
2. Are they clearly understandable and appropriate?
3. Can untrusted data change the meaning of messages to the user?

   - Can user input change the meaning of messages?
   - Can user input force system messages off the visible screen?
   - Can user input include special characters that can change the meaning of messages (e.g. Unicode right-to-left override U+202E)

4. Can an attacker use the timing of dialogs to fool the user into clicking on something they didn't intend to?

## Information Disclosure

1. Does the application disclose information that could compromise the user?
2. Does the application disclose any information that it does not need to?
3. Does the application disclose anything that may surprise or upset the user?

## Front End

1. Are safe mechanisms used to create XUL and HTML UI elements?

   - e.g. use createTextNode instead of innerHTML or similar

2. Does the application create its own docshells (tabs, iframes)?

   - Ensure you are explicit about the type of these, e.g. iframe.setAttribute("type", "content")

## References

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Security tips for Mozilla and extension developers](https://www.squarefree.com/securitytips/mozilla-developers.html)
