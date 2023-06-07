import { ReactNode, SetStateAction } from 'react';

interface DropDownProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: SetStateAction<any>;
}

export default DropDownProps;
