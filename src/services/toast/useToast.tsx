import {ToastService} from './toastTypes';
// import {useToastContext} from './useToastContrext';
import {useToastZustand} from './useToastZustand';

export function useToast(): ToastService {
  // return useToastContext();
  return useToastZustand();
}
