import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import CloseModal from '../../../public/CloseModal.svg';

function DropDown() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={() => setOpen(true)}
        >
          Open
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
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
                <Dialog.Panel className="relative border border-purple-80 h-auto w-[463px] py-10 transform rounded-[20px] bg-lightWite transition-all">
                  <div className="">
                    <button
                      aria-label="Close form"
                      type="button"
                      className="absolute top-2 right-2"
                      onClick={() => setOpen(false)}
                    >
                      <CloseModal
                        className="p-[6px] hover:opacity-90 rotate-0 hover:rotate-90 transition-all"
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default DropDown;
