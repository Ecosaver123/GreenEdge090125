export const ACCEPTED_FILE_TYPES = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png']
} as const;

export function isValidFileType(file: File): boolean {
  return Object.keys(ACCEPTED_FILE_TYPES).includes(file.type);
}

export function getFileTypeError(file: File): string {
  if (!isValidFileType(file)) {
    return 'Please upload a PDF or image file (JPG, JPEG, PNG)';
  }
  return '';
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}