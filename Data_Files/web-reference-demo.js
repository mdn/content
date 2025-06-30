#!/usr/bin/env node

/**
 * W3C API Integration Example
 * Demonstrates how to use the comprehensive web reference with W3C API data
 */

const fs = require('fs');
const path = require('path');

// Load the comprehensive web reference
const webReference = JSON.parse(fs.readFileSync('./comprehensive-web-reference.json', 'utf8'));

console.log('🌐 Comprehensive Web Reference with W3C API Integration');
console.log('=' .repeat(60));

// Display metadata
console.log('\n📋 Metadata:');
console.log(`Version: ${webReference.metadata.version}`);
console.log(`Last Updated: ${webReference.metadata.last_updated}`);
console.log(`Sources: ${webReference.metadata.sources.join(', ')}`);

// Display W3C API integration info
console.log('\n🔗 W3C API Integration:');
const w3cApi = webReference.w3c_api_integration;
console.log(`Endpoint: ${w3cApi.api_endpoints ? 'Available' : 'Not configured'}`);
console.log(`Installation: ${w3cApi.installation.server_side}`);

// Display specification info
console.log('\n📚 Specifications:');
Object.entries(webReference.specifications).forEach(([key, spec]) => {
  console.log(`  ${key.toUpperCase()}: ${spec.title} (${spec.organization})`);
});

// Display CSS modules
console.log('\n🎨 CSS Modules:');
if (webReference.css.w3c_modules) {
  Object.entries(webReference.css.w3c_modules).forEach(([module, info]) => {
    console.log(`  ${module}: ${Object.keys(info).join(', ')}`);
  });
}

// Display ECMAScript versions
console.log('\n⚡ ECMAScript Versions:');
if (webReference.javascript.ecmascript_versions) {
  Object.entries(webReference.javascript.ecmascript_versions).forEach(([version, info]) => {
    console.log(`  ${version} (${info.year}): ${info.browser_support}`);
  });
}

// Example W3C API usage
console.log('\n🔧 W3C API Usage Examples:');
if (w3cApi.usage_examples) {
  Object.entries(w3cApi.usage_examples).forEach(([description, code]) => {
    console.log(`  ${description}:`);
    console.log(`    ${code}`);
  });
}

// Display accessibility guidelines
console.log('\n♿ Accessibility Standards:');
if (webReference.accessibility) {
  Object.entries(webReference.accessibility.wcag_guidelines).forEach(([version, info]) => {
    console.log(`  ${version.toUpperCase()}: ${info.status} - ${info.url}`);
  });
}

// Display modern patterns
console.log('\n🚀 Modern Patterns:');
if (webReference.common_patterns.modern_css_patterns) {
  Object.keys(webReference.common_patterns.modern_css_patterns).forEach(pattern => {
    console.log(`  - ${pattern.replace(/_/g, ' ')}`);
  });
}

console.log('\n✅ Reference loaded successfully!');
console.log('💡 Use this data to build comprehensive web development tools.');

// Example: Function to get specification info
function getSpecificationInfo(specName) {
  const spec = webReference.specifications[specName];
  if (spec) {
    return {
      title: spec.title,
      url: spec.url,
      organization: spec.organization,
      status: spec.status,
      workingGroups: spec.working_groups || spec.workingGroups
    };
  }
  return null;
}

// Example: Function to check browser compatibility
function checkBrowserSupport(feature) {
  const support = webReference.browser_compatibility.support_matrix;
  return Object.keys(support).map(browser => ({
    browser,
    engine: support[browser].engine,
    prefix: support[browser].prefix,
    deprecated: support[browser].deprecated || false
  }));
}

// Example: Function to get W3C API endpoints
function getW3CEndpoints(category) {
  const endpoints = webReference.w3c_api_integration.api_endpoints;
  return endpoints[category] || null;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    webReference,
    getSpecificationInfo,
    checkBrowserSupport,
    getW3CEndpoints
  };
}
