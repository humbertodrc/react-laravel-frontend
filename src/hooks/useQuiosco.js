import { useContext } from 'react';
import QuioscoContext from '../Context/QuioscoProvider';

const useQuiosco = () => {
  return useContext(QuioscoContext);
}

export default useQuiosco;