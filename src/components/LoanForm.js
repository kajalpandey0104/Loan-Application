import React from "react";
import Form from "@rjsf/core";
import { customizeValidator } from "@rjsf/validator-ajv8";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import schema from "../schema/loanSchema.json"; 

// ✅ AJV Validator Configuration
const ajv = new Ajv({ allErrors: true, strict: false });
addErrors(ajv);
const validator = customizeValidator({ ajv });

function LoanForm() {
  // ✅ Submit Function to Show Output
  const handleSubmit = ({ formData }) => {
    console.log("🚀 Submitted Data:", formData);
    alert(`✅ Loan Application Submitted!\nBusiness: ${formData.businessDetails.businessName}\nGSTIN: ${formData.businessDetails.gstin}`);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Loan Application Form</h2>
      <Form schema={schema} validator={validator} onSubmit={handleSubmit} />
    </div>
  );
}

export default LoanForm;
