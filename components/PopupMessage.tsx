import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-x-0 bottom-0  shadow-xl z-20  "
          onClose={closeModal}
        >
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 bg-opacity-80 px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-x-0 bottom-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl  dark:bg-gray-700 rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg flex font-medium leading-6 "
                >
                  <img
                    style={{ verticalAlign: "middle" }}
                    src="icon/share-ios.png"
                    className="w-7 h-6 mr-2 dark:bg-gray-300 rounded-md"
                  />{" "}
                  Cài đặt nhanh ứng dụng
                </Dialog.Title>
                <p className="mt-2 flex text-base">
                  Tìm biểu tượng như trên nằm tại thanh công cụ (chỉ trên
                  Safari), sau đó chọn "Thêm vào MH chính" để cài đặt ứng dụng
                  này.
                </p>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
