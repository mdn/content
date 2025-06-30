#!/usr/bin/env node

/**
 * Web Platform Data Usage Examples
 * Demonstrates how to use the comprehensive web platform JSON data
 */

// Example of how to use the comprehensive web platform data
const webPlatformDataExamples = {
  
  // 1. Find all CSS properties that support animation
  findAnimatableProperties: (data) => {
    return data.webPlatformData.css.properties.filter(prop => 
      prop.animationType && prop.animationType !== 'discrete' && prop.animationType !== 'not animatable'
    );
  },

  // 2. Get all experimental HTML elements
  getExperimentalHTMLElements: (data) => {
    return data.webPlatformData.html.elements.filter(element => 
      element.experimental === true
    );
  },

  // 3. Find deprecated JavaScript features
  getDeprecatedJSFeatures: (data) => {
    const deprecated = [];
    Object.values(data.webPlatformData.javascript).forEach(category => {
      if (Array.isArray(category)) {
        deprecated.push(...category.filter(item => item.deprecated === true));
      }
    });
    return deprecated;
  },

  // 4. Get all HTTP 4xx status codes
  getClientErrorCodes: (data) => {
    return data.webPlatformData.http.statusCodes.filter(status => 
      status.category === '4xx'
    );
  },

  // 5. Find all SVG elements that support animation
  getAnimatableSVGElements: (data) => {
    return data.webPlatformData.svg.elements.filter(element => 
      element.categories.includes('Animation element') || 
      element.name.toLowerCase().includes('animate')
    );
  },

  // 6. Get all ARIA roles for interactive elements
  getInteractiveARIARoles: (data) => {
    return data.webPlatformData.aria.roles.filter(role => 
      role.name.includes('button') || 
      role.name.includes('link') || 
      role.name.includes('input') ||
      role.name.includes('menu')
    );
  },

  // 7. Find all MathML elements for layout
  getMathMLLayoutElements: (data) => {
    return data.webPlatformData.mathml.elements.filter(element => 
      element.categories.includes('MathML layout elements') ||
      element.name.includes('mrow') ||
      element.name.includes('mtable')
    );
  },

  // 8. Get all XSLT elements for control flow
  getXSLTControlElements: (data) => {
    return data.webPlatformData.xslt.elements.filter(element => 
      element.name.includes('if') || 
      element.name.includes('choose') || 
      element.name.includes('for-each')
    );
  },

  // 9. Find WebDriver commands for element interaction
  getElementInteractionCommands: (data) => {
    return data.webPlatformData.webdriver.commands.filter(command => 
      command.name.includes('element') || 
      command.name.includes('click') || 
      command.name.includes('send')
    );
  },

  // 10. Get all W3C specifications by status
  getSpecsByStatus: (data, status) => {
    return data.webPlatformData.w3c.specifications.filter(spec => 
      spec.status.toLowerCase() === status.toLowerCase()
    );
  },

  // 11. Cross-reference: Find all features from a specific specification
  getFeaturesBySpec: (data, specUrl) => {
    return data.webPlatformData.indices.bySpecification[specUrl] || [];
  },

  // 12. Get browser support summary for a feature type
  getBrowserSupportByType: (data, featureType) => {
    const features = data.webPlatformData.indices.byType[featureType] || [];
    const supportSummary = {};
    
    features.forEach(feature => {
      // This would need to cross-reference with the actual feature data
      // to get browser support information
    });
    
    return features;
  },

  // 13. Generate a technology overview report
  generateTechnologyReport: (data) => {
    const report = {
      summary: {
        totalEntries: data.webPlatformData.metadata.totalEntries,
        generatedAt: data.webPlatformData.metadata.generatedAt,
        version: data.webPlatformData.metadata.version
      },
      categories: {},
      statusBreakdown: {},
      deprecatedFeatures: [],
      experimentalFeatures: []
    };

    // Count entries by category
    Object.keys(data.webPlatformData).forEach(category => {
      if (category !== 'metadata' && category !== 'indices') {
        const categoryData = data.webPlatformData[category];
        if (typeof categoryData === 'object') {
          let count = 0;
          Object.values(categoryData).forEach(subcat => {
            if (Array.isArray(subcat)) {
              count += subcat.length;
            }
          });
          report.categories[category] = count;
        }
      }
    });

    // Analyze status distribution
    Object.entries(data.webPlatformData.indices.byStatus).forEach(([status, items]) => {
      report.statusBreakdown[status] = items.length;
    });

    return report;
  },

  // 14. Find related technologies
  findRelatedTechnologies: (data, technologyName) => {
    const related = [];
    const searchTerm = technologyName.toLowerCase();
    
    // Search across all categories for mentions
    Object.entries(data.webPlatformData).forEach(([category, categoryData]) => {
      if (category === 'metadata' || category === 'indices') return;
      
      Object.values(categoryData).forEach(items => {
        if (Array.isArray(items)) {
          items.forEach(item => {
            if (item.description && item.description.toLowerCase().includes(searchTerm)) {
              related.push({
                name: item.name,
                type: item.type,
                category,
                relevance: 'description_match'
              });
            }
          });
        }
      });
    });

    return related;
  },

  // 15. Export filtered data subset
  exportSubset: (data, filters) => {
    const subset = {
      metadata: {
        ...data.webPlatformData.metadata,
        subset: true,
        filters: filters,
        originalTotalEntries: data.webPlatformData.metadata.totalEntries
      }
    };

    // Apply filters to each category
    Object.entries(data.webPlatformData).forEach(([category, categoryData]) => {
      if (category === 'metadata' || category === 'indices') return;
      
      subset[category] = {};
      
      Object.entries(categoryData).forEach(([subcat, items]) => {
        if (Array.isArray(items)) {
          subset[category][subcat] = items.filter(item => {
            return filters.every(filter => {
              if (filter.property && filter.value) {
                return item[filter.property] === filter.value;
              }
              if (filter.search) {
                return item.name.toLowerCase().includes(filter.search.toLowerCase()) ||
                       (item.description && item.description.toLowerCase().includes(filter.search.toLowerCase()));
              }
              return true;
            });
          });
        }
      });
    });

    return subset;
  }
};

// Example usage scenarios
const usageScenarios = {
  
  // Scenario 1: Build a CSS property reference
  buildCSSReference: `
    // Load the comprehensive data
    const data = loadWebPlatformData();
    
    // Get all CSS properties with their formal definitions
    const cssProps = data.webPlatformData.css.properties.map(prop => ({
      name: prop.name,
      syntax: prop.syntax,
      inherited: prop.inherited,
      animationType: prop.animationType,
      initialValue: prop.initial,
      mdnUrl: prop.mdn
    }));
    
    // Group by categories
    const propsByCategory = cssProps.reduce((acc, prop) => {
      prop.groups.forEach(group => {
        if (!acc[group]) acc[group] = [];
        acc[group].push(prop);
      });
      return acc;
    }, {});
  `,

  // Scenario 2: Create accessibility audit tool
  buildA11yAuditTool: `
    // Get all ARIA roles and properties
    const ariaRoles = data.webPlatformData.aria.roles;
    const ariaProps = data.webPlatformData.aria.properties;
    
    // Create validation rules
    const a11yRules = {
      requiredRoles: ariaRoles.filter(role => !role.abstract),
      globalProperties: ariaProps.filter(prop => prop.global),
      roleSpecificProps: ariaRoles.map(role => ({
        role: role.name,
        allowedProps: ariaProps.filter(prop => 
          prop.roles && prop.roles.includes(role.name)
        )
      }))
    };
  `,

  // Scenario 3: HTTP API documentation generator
  buildHTTPDocs: `
    // Get all HTTP methods, headers, and status codes
    const httpMethods = data.webPlatformData.http.methods;
    const httpHeaders = data.webPlatformData.http.headers;
    const statusCodes = data.webPlatformData.http.statusCodes;
    
    // Create API documentation structure
    const apiDocs = {
      methods: httpMethods.map(method => ({
        method: method.name,
        safe: method.safe,
        idempotent: method.idempotent,
        cacheable: method.cacheable,
        description: method.description
      })),
      commonHeaders: httpHeaders.filter(header => 
        !header.deprecated && header.status === 'standard'
      ),
      statusCodesByCategory: statusCodes.reduce((acc, status) => {
        if (!acc[status.category]) acc[status.category] = [];
        acc[status.category].push(status);
        return acc;
      }, {})
    };
  `,

  // Scenario 4: SVG element reference builder
  buildSVGReference: `
    // Get SVG elements with their attributes and interfaces
    const svgElements = data.webPlatformData.svg.elements;
    const svgAttributes = data.webPlatformData.svg.attributes;
    
    // Create comprehensive SVG reference
    const svgReference = svgElements.map(element => ({
      element: element.name,
      category: element.categories[0],
      attributes: svgAttributes.filter(attr => 
        attr.elements.includes(element.name.replace(/[<>]/g, ''))
      ),
      domInterface: element.interfaces[0],
      usageExample: generateSVGExample(element)
    }));
  `
};

// Export examples for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    webPlatformDataExamples,
    usageScenarios
  };
}

console.log('Web Platform Data Usage Examples loaded!');
console.log('Available examples:', Object.keys(webPlatformDataExamples));
console.log('Usage scenarios:', Object.keys(usageScenarios));
