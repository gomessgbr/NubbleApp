import {PropsWithChildren, createContext, useState} from 'react';

import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ToastContext.Provider value={{toast, showToast, hideToast: hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}
