import React, { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import type { Bill } from '../../../types/bill';
import { FileUpload } from '../../ui/FileUpload';
import { isValidFileType, getFileTypeError, formatFileSize } from '../../../utils/file';
import { analyzeBillImage } from '../../../services/api/bill-analyzer';
import { useProfile } from '../../../store/ProfileContext';

interface BillUploadSectionProps {
  bills: Bill[];
  onBillsChange: (bills: Bill[]) => void;
}

export function BillUploadSection({ bills, onBillsChange }: BillUploadSectionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const { addBillEntry } = useProfile();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (isValidFileType(selectedFile)) {
        if (selectedFile.size > 5 * 1024 * 1024) {
          setError('File size should not exceed 5MB');
          setFile(null);
          return;
        }
        setFile(selectedFile);
      } else {
        setError(getFileTypeError(selectedFile));
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setIsAnalyzing(true);
    setError('');

    try {
      const analysisResults = await analyzeBillImage(file);
      
      // Add the analyzed data to the bill entries
      analysisResults.forEach(result => {
        addBillEntry({
          id: Date.now().toString(),
          month: result.month,
          year: result.year,
          consumption: result.consumption,
          amount: result.amount
        });
      });

      const newBill: Bill = {
        id: Date.now().toString(),
        fileName: file.name,
        fileSize: formatFileSize(file.size),
        fileType: file.type,
        uploadDate: new Date().toISOString(),
        analysis: analysisResults
      };

      onBillsChange([...bills, newBill]);
      setFile(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process the file';
      setError(errorMessage);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <FileUpload onChange={handleFileChange} />

      {error && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          disabled={!file || isAnalyzing}
          className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Upload & Process'
          )}
        </button>
      </div>

      {bills.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Uploaded Bills</h3>
          <div className="space-y-4">
            {bills.map(bill => (
              <div key={bill.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{bill.fileName}</p>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <span>{new Date(bill.uploadDate).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{bill.fileSize}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onBillsChange(bills.filter(b => b.id !== bill.id))}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}