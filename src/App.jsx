import React, { useState } from "react";
import "./App.css";

const testingMethods = [
  {
    name: "Unit Testing",
    image: "/software-testing-pwa/images/unit-testing.svg",
    description: {
      purpose: "Tests individual components or functions in isolation",
      scope: "Smallest testable parts of software (functions, methods, classes)",
      benefits: [
        "Early bug detection",
        "Validates individual component behavior",
        "Provides code documentation",
        "Simplifies debugging"
      ],
      timing: "During development, before integration"
    }
  },
  {
    name: "Integration Testing",
    image: "/software-testing-pwa/images/integration-testing.svg",
    description: {
      purpose: "Verifies that different parts work together correctly",
      scope: "Interfaces between components, data flow between modules",
      benefits: [
        "Catches interface defects",
        "Validates component communication",
        "Ensures data integrity",
        "Identifies system-level issues"
      ],
      timing: "After unit testing, before system testing"
    }
  },
  {
    name: "System Testing",
    image: "/software-testing-pwa/images/system-testing.svg",
    description: {
      purpose: "Evaluates complete system functionality",
      scope: "End-to-end system behavior and requirements",
      benefits: [
        "Validates overall system performance",
        "Tests system security and compatibility",
        "Verifies business requirements",
        "Ensures system reliability"
      ],
      timing: "After integration testing, before acceptance testing"
    }
  },
  {
    name: "Acceptance Testing",
    image: "/software-testing-pwa/images/acceptance-testing.svg",
    description: {
      purpose: "Validates software meets business requirements",
      scope: "Real-world scenarios and user workflows",
      benefits: [
        "Ensures user satisfaction",
        "Validates business processes",
        "Confirms system readiness",
        "Identifies usability issues"
      ],
      timing: "Final testing phase before deployment"
    }
  },
  {
    name: "Regression Testing",
    image: "/software-testing-pwa/images/regression-testing.svg",
    description: {
      purpose: "Ensures new changes don't break existing features",
      scope: "Previously tested functionality",
      benefits: [
        "Maintains system stability",
        "Prevents unintended side-effects",
        "Ensures consistent behavior",
        "Protects existing features"
      ],
      timing: "After any code changes or updates"
    }
  },
  {
    name: "Smoke Testing",
    image: "/software-testing-pwa/images/smoke-testing.svg",
    description: {
      purpose: "Quick check of critical functionalities",
      scope: "Core features and basic operations",
      benefits: [
        "Fast validation of new builds",
        "Early detection of major issues",
        "Saves testing time and resources",
        "Prevents detailed testing of broken builds"
      ],
      timing: "After each new build, before detailed testing"
    }
  }
];

function App() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const renderDescription = (desc) => (
    <div className="description">
      <div className="desc-section">
        <h3>Purpose</h3>
        <p>{desc.purpose}</p>
      </div>
      <div className="desc-section">
        <h3>Scope</h3>
        <p>{desc.scope}</p>
      </div>
      <div className="desc-section">
        <h3>Key Benefits</h3>
        <ul>
          {desc.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="desc-section">
        <h3>When to Use</h3>
        <p>{desc.timing}</p>
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>Software Testing Methods</h1>
      <div className="grid">
        {testingMethods.map((method, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedMethod(method)}
          >
            <img src={method.image} alt={method.name} />
            <h2>{method.name}</h2>
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="modal" onClick={() => setSelectedMethod(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedMethod(null)}
            >
              ×
            </button>
            <h2>{selectedMethod.name}</h2>
            <img src={selectedMethod.image} alt={selectedMethod.name} />
            {renderDescription(selectedMethod.description)}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
