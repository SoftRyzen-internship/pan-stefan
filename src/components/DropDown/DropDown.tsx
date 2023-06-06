import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import CloseModal from '@/public/assets/icon/CloseModal.svg';
import DropDownProps from './IDropDown';

function DropDown(props: DropDownProps) {
  const cancelButtonRef = useRef(null);
  const { isOpen, setIsOpen, children } = props;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full justify-center items-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
            >
              <Dialog.Panel className="relative border border-purple-80 h-auto w-[463px] xs:max-sm:p-6 p-10 transform rounded-[20px] bg-lightWite transition-all">
                <button
                  aria-label="Close form"
                  type="button"
                  className="absolute top-2 right-2"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseModal
                    className="p-[6px] hover:opacity-90 focus:opacity-90 rotate-0 hover:rotate-90 focus:rotate-90 transition-all"
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default DropDown;
