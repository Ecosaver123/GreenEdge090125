import { useState } from 'react';
import { validateBillEntry } from '../types/validation';
import type { ManualBillEntry } from '../types/manual-bill';

interface ValidationErrors {
  month?: string;
  year?: string;
  consumption?: string;
  amount?: string;
}

export function useBillEntryValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateEntry = (entry: Partial<ManualBillEntry>): boolean => {
    const newErrors: ValidationErrors = {};

    if (!entry.month || !validateBillEntry.month(entry.month)) {
      newErrors.month = 'Please select a valid month';
    }

    if (!entry.year || !validateBillEntry.year(entry.year)) {
      newErrors.year = 'Please enter a valid year between 2000-2099';
    }

    if (!entry.consumption || !validateBillEntry.consumption(entry.consumption)) {
      newErrors.consumption = 'Please enter a valid positive number';
    }

    if (!entry.amount || !validateBillEntry.amount(entry.amount)) {
      newErrors.amount = 'Please enter a valid positive amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => setErrors({});

  return {
    errors,
    validateEntry,
    clearErrors
  };
}