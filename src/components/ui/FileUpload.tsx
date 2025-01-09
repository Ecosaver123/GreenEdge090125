import React from 'react';
import { Upload } from 'lucide-react';
import { ACCEPTED_FILE_TYPES } from '../../utils/file';

interface FileUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
}

export function FileUpload({ onChange, accept, multiple = false }: FileUploadProps) {
  const acceptedTypes = Object.entries(ACCEPTED_FILE_TYPES)
    .map(([type, extensions]) => extensions.join(', '))
    .join(', ');

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Upload className="h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-600 mb-2">
          Drag and drop your files here, or click to select
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Supported formats: PDF, JPG, JPEG, PNG
        </p>
        <input
          type="file"
          onChange={onChange}
          accept={accept || acceptedTypes}
          multiple={multiple}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-emerald-50 file:text-emerald-600
            hover:file:bg-emerald-100
            cursor-pointer"
        />
      </div>
    </div>
  );
}