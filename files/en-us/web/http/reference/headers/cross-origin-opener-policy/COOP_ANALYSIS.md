# Analysis: Missing Information in MDN COOP Documentation

## Overview
This document analyzes gaps between the MDN documentation for `Cross-Origin-Opener-Policy` and the official WHATWG HTML specification (section 7.1.3).

## Key Missing Information

### 1. Cross-Origin-Opener-Policy-Report-Only Header (CRITICAL MISSING)

**Status**: Completely absent from MDN documentation

**What's Missing**:
- The `Cross-Origin-Opener-Policy-Report-Only` header is not mentioned at all
- No explanation of how Report-Only differs from the enforcement header
- No documentation on when to use Report-Only vs enforcement
- No examples showing Report-Only usage

**From Specification** (Section 7.1.3.1):
- The spec defines two headers:
  1. `Cross-Origin-Opener-Policy` (enforcement header)
  2. `Cross-Origin-Opener-Policy-Report-Only` (reporting-only header)
- Report-Only allows testing policies without enforcing them
- Both headers can be present simultaneously
- Report-Only is evaluated separately and only generates reports

**Real-World Usage** (from codebase):
```typescript
// Example from olive/express-middleware/utils/COOP-header.ts
if (process.env.ENFORCE_COOP === 'true') {
  res.append('Cross-Origin-Opener-Policy', headerValue)
} else {
  res.append('Cross-Origin-Opener-Policy-Report-Only', headerValue)
}
```

**Recommendation**: Add a dedicated section explaining:
- What Report-Only is and when to use it
- How it differs from the enforcement header
- How both headers can be used together
- Examples of Report-Only usage

---

### 2. The `report-to` Parameter (MISSING)

**Status**: Not documented in the COOP header documentation

**What's Missing**:
- No mention that COOP headers support a `report-to` parameter
- No syntax documentation for `report-to="endpoint-name"`
- No explanation of how reporting endpoints work
- No connection to the `Reporting-Endpoints` header

**From Specification** (Section 7.1.3.3):
- COOP headers can include a `report-to` parameter
- Syntax: `Cross-Origin-Opener-Policy: same-origin; report-to="endpoint-name"`
- The endpoint must be defined in the `Reporting-Endpoints` header
- Reports are sent when browsing context group switches occur

**Real-World Usage** (from codebase):
```typescript
// From olive/express-middleware/utils/COOP-header.ts
const headerValue = 'same-origin; report-to="datadog-csp-endpoint"'
```

**Recommendation**: Add documentation covering:
- Syntax: `directive-value; report-to="endpoint-name"`
- How to define endpoints in `Reporting-Endpoints` header
- What gets reported and when
- Relationship to Reporting API

---

### 3. Reporting Functionality (MISSING)

**Status**: No discussion of reporting mechanism

**What's Missing**:
- No explanation of when reports are generated
- No documentation on report format
- No information about what events trigger reports
- No connection to the Reporting API specification

**From Specification** (Section 7.1.3.3):
- Reports are generated when browsing context group switches occur
- Reports follow the Reporting API format
- Reports include information about the navigation/opening that triggered the switch
- Reports are sent to the endpoint specified in `report-to`

**Recommendation**: Add a section on:
- When reports are generated (browsing context group switches)
- Report format and structure
- How to set up reporting endpoints
- Examples of report payloads

---

### 4. Interaction Between COOP and COOP-Report-Only (MISSING)

**Status**: Not documented

**What's Missing**:
- No explanation of what happens when both headers are present
- No guidance on precedence or interaction
- No examples of using both together

**From Specification**:
- Both headers can be present simultaneously
- They are evaluated independently
- Enforcement header controls actual behavior
- Report-Only header only generates reports

**Recommendation**: Add explanation of:
- How both headers work together
- Evaluation order and precedence
- Use cases for using both simultaneously

---

### 5. Browsing Context Group Switch Details (PARTIALLY MISSING)

**Status**: Some information present, but could be more detailed

**What's Present**:
- Basic explanation of browsing context groups
- Tables showing when documents open in same/new BCG

**What Could Be Enhanced**:
- More explicit explanation of what "browsing context group switch" means
- When switches trigger reports (if reporting is configured)
- Impact of BCG switches on process isolation
- Relationship to cross-origin isolation

**From Specification** (Section 7.1.3.2):
- Detailed algorithm for browsing context group switches
- Conditions that trigger switches
- Impact on window references and process isolation

**Recommendation**: Enhance existing sections with:
- Clearer definition of "browsing context group switch"
- When switches occur and why they matter
- Connection to reporting (when configured)

---

### 6. Header Syntax Details (PARTIALLY MISSING)

**Status**: Basic syntax shown, but incomplete

**What's Present**:
- Basic directive values shown
- Examples of each directive

**What's Missing**:
- Syntax for `report-to` parameter
- Explanation that multiple parameters can be combined
- Formal syntax specification

**Current MDN Syntax Section**:
```http
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

**Should Include**:
```http
Cross-Origin-Opener-Policy: same-origin; report-to="endpoint-name"
Cross-Origin-Opener-Policy-Report-Only: same-origin; report-to="endpoint-name"
```

**Recommendation**: Update syntax section to show:
- Complete syntax including `report-to` parameter
- Both header names
- Examples with reporting enabled

---

## Summary of Recommendations

### High Priority (Critical Missing Features)
1. **Add `Cross-Origin-Opener-Policy-Report-Only` section** - This is a major gap
2. **Document `report-to` parameter** - Used in real-world implementations
3. **Add reporting functionality documentation** - Complete the picture of COOP capabilities

### Medium Priority (Enhancements)
4. **Explain interaction between COOP and COOP-Report-Only** - Help developers understand both headers
5. **Enhance browsing context group switch documentation** - More detail on when/why switches occur

### Low Priority (Polish)
6. **Update syntax section** - Include complete syntax with reporting parameters

---

## References

- [WHATWG HTML Spec - Cross-Origin Opener Policies](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-opener-policies)
- [Reporting API Specification](https://w3c.github.io/reporting/)
- Real-world implementation: `olive/express-middleware/utils/COOP-header.ts`

