import Form from '../ui/Form';
import FormField from '../ui/FormField';
import SubmitButton from '../ui/SubmitButton';

export default function MortgageForm({ 
  formData, 
  setFormData, 
  onCalculate 
}) {

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Form onSubmit={onCalculate}>
      <FormField label="Property Price (£)">
        <input
          type="text"
          placeholder="e.g. 250,000"
          value={formData.propertyPrice}
          onChange={e => handleChange('propertyPrice', e.target.value)}
        />
      </FormField>

      <FormField label="Deposit Amount (£)">
        <input
          type="text"
          placeholder="e.g. 50,000"
          value={formData.deposit}
          onChange={e => handleChange('deposit', e.target.value)}
        />
      </FormField>

      <FormField label="Mortgage Term (years)">
        <input
          type="text"
          placeholder="e.g. 25"
          value={formData.termYears}
          onChange={e => handleChange('termYears', e.target.value)}
        />
      </FormField>

      <FormField label="Interest Rate (%)">
        <input
          type="text"
          placeholder="e.g. 3.5"
          value={formData.interestRate}
          onChange={e => handleChange('interestRate', e.target.value)}
        />
      </FormField>

      <FormField label="Mortgage Type">
        <select
          value={formData.mortgageType}
          onChange={e => handleChange('mortgageType', e.target.value)}
        >
          <option value="fixed">Fixed Rate</option>
          <option value="adjustable">Adjustable Rate</option>
          <option value="interest-only">Interest-Only</option>
        </select>
      </FormField>

      <SubmitButton>Calculate Repayments</SubmitButton>
    </Form>
  );
}
