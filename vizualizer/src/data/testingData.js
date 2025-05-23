export const testingTypes = [
    {
      name: 'Unit Testing',
      purpose: 'Verify the smallest pieces of code (functions, methods, etc.) work correctly in isolation.',
      tools: 'Jest, Mocha, Jasmine, Vitest',
      openSource: 'Jest: Widely used in the JS ecosystem, excellent for unit tests',
      owner: 'Developer',
      processStep: 'Development Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Code correctness, minimal errors',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass all unit tests without failures',
      devOpsSec: 'DevOps: Ensures code correctness before deployment',
      additionalNotes: 'Critical for code quality and early bug detection',
      color: '#059669'
    },
    {
      name: 'Static Code Analysis',
      purpose: 'Analyze code for potential errors, code smells, and ensure adherence to coding standards.',
      tools: 'SonarQube, ESLint, Checkmarx',
      openSource: 'ESLint: Open-source static code analysis tool for JavaScript/TypeScript',
      owner: 'Developer',
      processStep: 'Development Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Code quality, adherence to standards',
      priority: 'Must Have',
      qualityGatesOnCICD: 'No critical issues, code adheres to standards',
      devOpsSec: 'DevOps/Sec: Ensures code quality and security compliance',
      additionalNotes: 'Automated code quality enforcement',
      color: '#059669'
    },
    {
      name: 'Integration Testing',
      purpose: 'Ensure that multiple components or systems work together as expected.',
      tools: 'Jest, Mocha, Supertest, Vitest, Postman',
      openSource: 'Mocha: Flexible, often used for API integration tests',
      owner: 'Developer',
      processStep: 'Development Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Integration points pass, no breakages',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass all integration tests without failures',
      devOpsSec: 'DevOps: Ensures all components integrate properly',
      additionalNotes: 'Critical for system integration validation',
      color: '#059669'
    },
    {
      name: 'Mocking/Spying',
      purpose: 'Simulate and control interactions with components or services during tests.',
      tools: 'Jest, Sinon, Vitest, Jasmine',
      openSource: 'Sinon: Open-source library for mocks, spies, and stubs',
      owner: 'Developer',
      processStep: 'Development Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Ensure mocks and spies are correctly implemented',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'No critical failures in mocks or spies',
      devOpsSec: 'DevOps: Verifies that mock services work in isolation',
      additionalNotes: 'Enables isolated testing of components',
      color: '#6b7280'
    },
    {
      name: 'Behavior-Driven Development (BDD)',
      purpose: 'Encourage collaboration between developers, testers, and business analysts by using natural language scenarios.',
      tools: 'Cucumber, Behave, Robot Framework, Jasmine (with custom syntax)',
      openSource: 'Cucumber: Supports Gherkin syntax, highly readable, widely used in BDD',
      owner: 'PO/Developer',
      processStep: 'Development Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Pull Request',
      qualityGates: 'Fulfillment of business requirements',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'Pass business rule checks and BDD scenarios',
      devOpsSec: 'DevOps: Ensures alignment with business requirements through testing',
      additionalNotes: 'Bridges communication between technical and business teams',
      color: '#6b7280'
    },
    {
      name: 'API Testing',
      purpose: 'Test APIs for functionality, reliability, and security.',
      tools: 'Postman, Supertest, RestAssured, Karate',
      openSource: 'Postman: Best for testing APIs, flexible, and easy to use',
      owner: 'QA/Developer',
      processStep: 'Development & Pre-Release Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'API endpoints work as expected',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass all API tests with no critical issues',
      devOpsSec: 'DevOps/Sec: Verifies secure API endpoints',
      additionalNotes: 'Essential for API-driven applications',
      color: '#059669'
    },
    {
      name: 'End-to-End Testing (E2E)',
      purpose: 'Simulate user behavior to test the entire application flow from start to finish.',
      tools: 'Cypress, Selenium, Playwright, Robot Framework',
      openSource: 'Cypress: End-to-end testing with great debugging and fast execution',
      owner: 'QA',
      processStep: 'QA & Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Pull Request to Main',
      qualityGates: 'Full system functionality, no critical failures',
      priority: 'Must Have',
      qualityGatesOnCICD: 'All E2E tests must pass without major failures',
      devOpsSec: 'DevOps: Ensures full system deployment readiness',
      additionalNotes: 'Validates complete user workflows',
      color: '#059669'
    },
    {
      name: 'Functional Testing',
      purpose: 'Test specific features or functions of the system to ensure they work as expected.',
      tools: 'Selenium, Cypress, Playwright, Puppeteer, Robot Framework',
      openSource: 'Selenium: Supports web-based automation, widely used',
      owner: 'QA',
      processStep: 'QA Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Pull Request to Main',
      qualityGates: 'Feature works as defined, no defects',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass all functional tests, no regression errors',
      devOpsSec: 'DevOps: Ensures feature functionality before release',
      additionalNotes: 'Verifies business requirements implementation',
      color: '#059669'
    },
    {
      name: 'Smoke Testing',
      purpose: 'Conduct basic tests to ensure the critical functions of an application work and the system is stable.',
      tools: 'Selenium, Cypress, Robot Framework',
      openSource: 'Selenium: Open-source smoke testing tool for web apps',
      owner: 'QA',
      processStep: 'QA Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Merge to Release Branch',
      qualityGates: 'Basic features pass, minimal functionality',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Must pass all smoke tests to ensure application stability',
      devOpsSec: 'DevOps: Basic system validation',
      additionalNotes: 'Quick validation of critical system functions',
      color: '#059669'
    },
    {
      name: 'Regression Testing',
      purpose: 'Ensure that new code changes do not negatively affect existing features or functionality.',
      tools: 'Selenium, Cypress, Robot Framework, TestComplete',
      openSource: 'Selenium: Open-source tool for regression testing of web applications',
      owner: 'QA',
      processStep: 'Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Release Branch',
      qualityGates: 'Existing features remain unaffected',
      priority: 'Must Have',
      qualityGatesOnCICD: 'No critical regression failures, maintain legacy functionality',
      devOpsSec: 'DevOps: Ensures that new changes do not break the system',
      additionalNotes: 'Protects against breaking changes in existing functionality',
      color: '#059669'
    },
    {
      name: 'Acceptance Testing',
      purpose: 'Ensure that the software meets the business requirements and is acceptable to stakeholders.',
      tools: 'Robot Framework, FitNesse, Cucumber',
      openSource: 'Robot Framework: Highly suited for acceptance testing with keyword-based design',
      owner: 'PO/QA',
      processStep: 'Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Pull Request to Main',
      qualityGates: 'All acceptance criteria met, business requirements fulfilled',
      priority: 'Must Have',
      qualityGatesOnCICD: 'All acceptance tests pass and business requirements are fulfilled',
      devOpsSec: 'DevOps: Business validation before release',
      additionalNotes: 'Final validation against business requirements',
      color: '#059669'
    },
    {
      name: 'Performance Testing',
      purpose: 'Assess how well a system performs under load, including response time, reliability, and scalability.',
      tools: 'Apache JMeter, k6, Gatling',
      openSource: 'k6: Open-source performance testing tool',
      owner: 'QA/DevOps',
      processStep: 'Pre-Release & Post-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Merge to Release Branch',
      qualityGates: 'Performance metrics meet defined thresholds',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'System performs well under load without performance degradation',
      devOpsSec: 'DevOps: Performance monitoring and optimization',
      additionalNotes: 'Critical for scalable applications',
      color: '#6b7280'
    },
    {
      name: 'Load Testing',
      purpose: 'Test how the system performs under expected load conditions, such as the number of concurrent users.',
      tools: 'Apache JMeter, LoadRunner, Artillery',
      openSource: 'Artillery: A modern, open-source load testing tool',
      owner: 'QA/DevOps',
      processStep: 'Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Merge to Release Branch',
      qualityGates: 'System handles expected load without issues',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'Load tests pass within performance criteria',
      devOpsSec: 'DevOps: Load capacity validation',
      additionalNotes: 'Validates system capacity under normal load',
      color: '#6b7280'
    },
    {
      name: 'Stress Testing',
      purpose: 'Assess how the system handles extreme or peak conditions beyond normal operational capacity.',
      tools: 'Apache JMeter, k6, LoadRunner',
      openSource: 'k6: Also useful for stress testing under heavy load',
      owner: 'QA/DevOps',
      processStep: 'Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Merge to Release Branch',
      qualityGates: 'System can handle extreme loads without crashing',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'Pass stress tests with no major failures',
      devOpsSec: 'DevOps: System resilience validation',
      additionalNotes: 'Tests system behavior under extreme conditions',
      color: '#6b7280'
    },
    {
      name: 'Security Testing',
      purpose: 'Identify vulnerabilities and weaknesses in a system to ensure it is secure against attacks.',
      tools: 'OWASP ZAP, Burp Suite, Qualys, Nikto',
      openSource: 'OWASP ZAP: Open-source tool for security vulnerability scanning',
      owner: 'Security Team',
      processStep: 'Pre-Release & Post-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Pull Request to Main',
      qualityGates: 'No vulnerabilities found, meets security standards',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass security tests with no vulnerabilities',
      devOpsSec: 'DevOps/Sec: Verifies the security of the application',
      additionalNotes: 'Critical for protecting against security threats',
      color: '#059669'
    },
    {
      name: 'Usability Testing',
      purpose: 'Evaluate how easy and user-friendly an application is to use by end-users.',
      tools: 'Lookback, UserTesting, Hotjar',
      openSource: 'Open Usability Testing Tools: Tools for feedback collection from users',
      owner: 'PO/QA',
      processStep: 'Post-Release Phase',
      gitFlow: 'Hotfix/Release',
      cicdProcess: 'CD Pipeline',
      cicdTrigger: 'Merge to Hotfix/Release Branch',
      qualityGates: 'Positive feedback, user-friendliness met',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'No critical usability issues, meets user experience standards',
      devOpsSec: 'DevOps: User experience monitoring',
      additionalNotes: 'Ensures positive user experience',
      color: '#6b7280'
    },
    {
      name: 'Accessibility Testing',
      purpose: 'Ensure the application is accessible to users with disabilities (e.g., screen readers, keyboard navigation).',
      tools: 'Axe, Lighthouse, WAVE',
      openSource: 'Lighthouse: Open-source tool for auditing web apps for accessibility',
      owner: 'QA/PO',
      processStep: 'Pre-Release & Post-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Pull Request to Main',
      qualityGates: 'Meets accessibility standards',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Pass accessibility tests with no issues',
      devOpsSec: 'DevOps/Sec: Ensures accessibility is tested before deployment',
      additionalNotes: 'Legal requirement and inclusive design practice',
      color: '#059669'
    },
    {
      name: 'Mobile Testing',
      purpose: 'Test mobile applications across multiple devices and platforms.',
      tools: 'Appium, Espresso, Detox, XCUITest',
      openSource: 'Appium: Open-source tool for testing mobile apps',
      owner: 'QA/Developer',
      processStep: 'Development & Pre-Release Phase',
      gitFlow: 'Feature',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Mobile features work across devices',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'No critical mobile issues across devices',
      devOpsSec: 'DevOps: Cross-platform validation',
      additionalNotes: 'Essential for mobile applications',
      color: '#6b7280'
    },
    {
      name: 'Data Testing (ETL)',
      purpose: 'Test the extraction, transformation, and loading (ETL) process in data pipelines.',
      tools: 'Apache Spark, Talend, dbt, Pytest (for ETL testing)',
      openSource: 'Pytest: Open-source testing framework that supports data testing',
      owner: 'QA/Developer',
      processStep: 'Pre-Release Phase',
      gitFlow: 'Release',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Feature Branch',
      qualityGates: 'Data processes work without errors',
      priority: 'Nice to Have',
      qualityGatesOnCICD: 'No data corruption or failure during processes',
      devOpsSec: 'DevOps: Data integrity validation',
      additionalNotes: 'Critical for data-driven applications',
      color: '#6b7280'
    },
    {
      name: 'Fix Testing',
      purpose: 'Test bug fixes and small changes after initial development.',
      tools: 'Any relevant tool depending on the nature of the fix (e.g., Jest, Mocha, Selenium, etc.)',
      openSource: 'Mocha: Flexible tool for testing bug fixes and small changes',
      owner: 'Developer/QA',
      processStep: 'Fix Phase',
      gitFlow: 'Fix',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Fix Branch',
      qualityGates: 'Bug fix is verified, no regressions',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Bug fix passes all related tests',
      devOpsSec: 'DevOps: Fix validation and deployment',
      additionalNotes: 'Ensures fixes work without side effects',
      color: '#059669'
    },
    {
      name: 'Hotfix Testing',
      purpose: 'Test critical fixes applied directly to production code to ensure minimal disruption.',
      tools: 'Any relevant tool depending on the nature of the hotfix (e.g., Selenium, Postman)',
      openSource: 'Postman: Best for API testing during critical fixes',
      owner: 'Developer/QA',
      processStep: 'Post-Release Phase',
      gitFlow: 'Hotfix',
      cicdProcess: 'CI Pipeline',
      cicdTrigger: 'Push to Hotfix Branch',
      qualityGates: 'Hotfix does not break the system',
      priority: 'Must Have',
      qualityGatesOnCICD: 'Hotfix passes critical tests',
      devOpsSec: 'DevOps/Sec: Ensures hotfix is correctly deployed without issues',
      additionalNotes: 'Emergency fixes requiring immediate validation',
      color: '#059669'
    }
  ];