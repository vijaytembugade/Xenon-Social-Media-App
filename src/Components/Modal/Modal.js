import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks";

const Modal = ({ children, setShowModal }) => {
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setShowModal(false));
  return (
    <div className="fixed w-screen right-0 h-screen bottom-0 modal-bg">
      <dialog
        ref={modalRef}
        open
        className="mt-48 max-h-80 overflow-y-auto w-80 md:w-96 open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
      >
        {children}
      </dialog>
    </div>
  );
};

export { Modal };
