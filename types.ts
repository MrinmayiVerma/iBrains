export interface User {
  name: string;
  email: string;
}

export enum UploadCategory {
  EEG = 'EEG',
  CLINICAL = 'CLINICAL'
}

export interface UploadSectionData {
  id: UploadCategory;
  title: string;
  fullName: string;
  description: string;
  colorClass: string;
}

export interface FileState {
  [key: string]: File | null;
}

export interface ThemeProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}