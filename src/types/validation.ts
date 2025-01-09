export const validateBillEntry = {
  month: (value: string) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months.includes(value);
  },
  
  year: (value: number) => {
    return value >= 2000 && value <= 2099;
  },
  
  consumption: (value: number) => {
    return value > 0 && !isNaN(value) && Number.isFinite(value);
  },
  
  amount: (value: number) => {
    return value > 0 && !isNaN(value) && Number.isFinite(value);
  }
};