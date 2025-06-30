#!/usr/bin/env node

/**
 * W3C API Integration Advanced Example
 * Shows how to fetch real data from W3C API and combine with local reference
 */

const fs = require('fs');

// Simulated W3C API client (replace with actual node-w3capi when installed)
class W3CAPIClient {
  constructor() {
    this.baseURL = 'https://api.w3.org';
  }

  // Simulated API calls - replace with actual w3capi calls
  async specifications() {
    // Example: w3capi.specifications().fetch()
    return {
      fetch: async (callback) => {
        const mockData = [
          { shortname: 'html', title: 'HTML Living Standard', status: 'Living Standard' },
          { shortname: 'css3-selectors', title: 'Selectors Level 3', status: 'Recommendation' },
          { shortname: 'css-flexbox-1', title: 'CSS Flexible Box Layout', status: 'Recommendation' }
        ];
        if (callback) callback(null, mockData);
        return Promise.resolve(mockData);
      }
    };
  }

  async specification(shortname) {
    return {
      fetch: async (callback) => {
        const mockSpec = {
          shortname,
          title: `Mock ${shortname.toUpperCase()} Specification`,
          status: 'Recommendation',
          editors: ['Editor 1', 'Editor 2'],
          workingGroups: ['Mock Working Group']
        };
        if (callback) callback(null, mockSpec);
        return Promise.resolve(mockSpec);
      },
      versions: () => ({
        fetch: async (callback) => {
          const versions = ['2023', '2022', '2021'];
          if (callback) callback(null, versions);
          return Promise.resolve(versions);
        }
      }),
      latest: () => ({
        fetch: async (callback) => {
          const latest = { version: '2023', date: '2023-12-01' };
          if (callback) callback(null, latest);
          return Promise.resolve(latest);
        }
      })
    };
  }

  async groups() {
    return {
      fetch: async (callback) => {
        const mockGroups = [
          { id: 54381, name: 'CSS Working Group', type: 'working group' },
          { id: 46884, name: 'Web Platform Working Group', type: 'working group' },
          { id: 83482, name: 'WebAssembly Working Group', type: 'working group' }
        ];
        if (callback) callback(null, mockGroups);
        return Promise.resolve(mockGroups);
      }
    };
  }
}

// Enhanced Web Reference Manager
class WebReferenceManager {
  constructor(referencePath) {
    this.reference = JSON.parse(fs.readFileSync(referencePath, 'utf8'));
    this.w3cClient = new W3CAPIClient();
  }

  // Get local specification info
  getLocalSpec(specName) {
    return this.reference.specifications[specName] || null;
  }

  // Fetch live W3C data for a specification
  async getLiveSpecData(shortname) {
    try {
      const specData = await this.w3cClient.specification(shortname).fetch();
      const versions = await this.w3cClient.specification(shortname).versions().fetch();
      const latest = await this.w3cClient.specification(shortname).latest().fetch();
      
      return {
        ...specData,
        versions,
        latest,
        lastFetched: new Date().toISOString()
      };
    } catch (error) {
      console.error(`Error fetching W3C data for ${shortname}:`, error.message);
      return this.getLocalSpec(shortname);
    }
  }

  // Combine local and live data
  async getEnhancedSpecInfo(specName) {
    const localData = this.getLocalSpec(specName);
    if (!localData) return null;

    const w3cShortname = localData.w3c_shortname || specName;
    const liveData = await this.getLiveSpecData(w3cShortname);

    return {
      ...localData,
      w3c_live_data: liveData,
      enhanced: true,
      last_updated: new Date().toISOString()
    };
  }

  // Get CSS property info with specification references
  getCSSPropertyInfo(property) {
    const cssProps = this.reference.css?.properties;
    if (!cssProps) return null;

    // Search through all property categories
    for (const [category, properties] of Object.entries(cssProps)) {
      if (properties[property]) {
        return {
          property,
          category,
          ...properties[property],
          specification_refs: this.getPropertySpecRefs(property)
        };
      }
    }
    return null;
  }

  // Get specification references for CSS properties
  getPropertySpecRefs(property) {
    const specRefs = {
      'display': 'css-display-3',
      'position': 'css-position-3',
      'flex-direction': 'css-flexbox-1',
      'grid-template-columns': 'css-grid-1',
      'font-family': 'css-fonts-4',
      'color': 'css-color-4',
      'background-color': 'css-backgrounds-3',
      'transition': 'css-transitions-1',
      'animation': 'css-animations-1'
    };
    return specRefs[property] || 'css-2-1';
  }

  // Get HTML element info with specification references
  getHTMLElementInfo(element) {
    const htmlElements = this.reference.html?.elements;
    if (!htmlElements) return null;

    // Search through all element categories
    for (const [category, elements] of Object.entries(htmlElements)) {
      if (elements[element]) {
        return {
          element,
          category,
          ...elements[element],
          specification: 'html',
          whatwg_url: `https://html.spec.whatwg.org/multipage/semantics.html#the-${element}-element`
        };
      }
    }
    return null;
  }

  // Get JavaScript feature info with ECMAScript version
  getJSFeatureInfo(feature) {
    const jsFeatures = this.reference.javascript;
    if (!jsFeatures) return null;

    // Check ES6 features
    if (jsFeatures.es6_features) {
      for (const [category, features] of Object.entries(jsFeatures.es6_features)) {
        if (features[feature]) {
          return {
            feature,
            category,
            ...features[feature],
            ecmascript_version: 'ES2015',
            tc39_url: 'https://tc39.es/ecma262/'
          };
        }
      }
    }

    return null;
  }

  // Generate compatibility report
  generateCompatibilityReport(features) {
    const report = {
      features: [],
      overall_support: 'unknown',
      recommendations: []
    };

    features.forEach(feature => {
      const featureInfo = this.getCSSPropertyInfo(feature) || 
                         this.getHTMLElementInfo(feature) || 
                         this.getJSFeatureInfo(feature);
      
      if (featureInfo) {
        report.features.push({
          name: feature,
          type: featureInfo.category || 'unknown',
          support: 'modern', // Would be determined by actual compat data
          ...featureInfo
        });
      }
    });

    return report;
  }

  // Export enhanced reference
  async exportEnhancedReference(outputPath) {
    const enhanced = {
      ...this.reference,
      enhanced_data: {
        generated_at: new Date().toISOString(),
        w3c_api_version: '1.2.0',
        mdn_compat_data_version: 'latest'
      }
    };

    // Add live W3C data for key specifications
    const keySpecs = ['html', 'css', 'dom'];
    for (const spec of keySpecs) {
      try {
        enhanced.specifications[spec].w3c_live_data = await this.getLiveSpecData(spec);
      } catch (error) {
        console.warn(`Could not fetch live data for ${spec}:`, error.message);
      }
    }

    fs.writeFileSync(outputPath, JSON.stringify(enhanced, null, 2));
    return enhanced;
  }
}

// Demo usage
async function main() {
  console.log('🚀 Advanced W3C API Integration Demo');
  console.log('=' .repeat(50));

  const manager = new WebReferenceManager('./comprehensive-web-reference.json');

  // Test local data access
  console.log('\n📋 Testing local data access:');
  const htmlSpec = manager.getLocalSpec('html');
  console.log(`HTML Spec: ${htmlSpec?.title} (${htmlSpec?.organization})`);

  // Test CSS property info
  console.log('\n🎨 CSS Property Info:');
  const displayProp = manager.getCSSPropertyInfo('display');
  console.log(`Display property: ${JSON.stringify(displayProp, null, 2)}`);

  // Test HTML element info  
  console.log('\n🏗️ HTML Element Info:');
  const divElement = manager.getHTMLElementInfo('div');
  console.log(`Div element: ${JSON.stringify(divElement, null, 2)}`);

  // Test compatibility report
  console.log('\n📊 Compatibility Report:');
  const features = ['display', 'flex-direction', 'div', 'const'];
  const report = manager.generateCompatibilityReport(features);
  console.log(JSON.stringify(report, null, 2));

  // Test enhanced spec info (with simulated W3C API data)
  console.log('\n🔗 Enhanced Specification Info:');
  try {
    const enhancedHTML = await manager.getEnhancedSpecInfo('html');
    console.log(`Enhanced HTML spec: ${enhancedHTML?.title}`);
    console.log(`W3C Live data: ${enhancedHTML?.w3c_live_data ? 'Available' : 'Not available'}`);
  } catch (error) {
    console.error('Error getting enhanced spec info:', error.message);
  }

  console.log('\n✅ Demo completed successfully!');
  console.log('\n💡 To use with real W3C API:');
  console.log('1. npm install node-w3capi');
  console.log('2. Replace W3CAPIClient with: const w3capi = require("node-w3capi");');
  console.log('3. Update API calls to use real w3capi methods');
}

// Run demo
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { WebReferenceManager, W3CAPIClient };
