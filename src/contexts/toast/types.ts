export type ToastProps = {
  id: string;
  type: 'error' | 'success' | 'info';
  title: string;
  description: string;
};

export type ToastContextData = {
  addToast: (message: Omit<ToastProps, 'id'>) => void;
  removeToast: (id: string) => void;
};

export type ToastProviderProps = {
  children: React.ReactNode;
};
