
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


export default function Modal({ isOpen = false, onClose = () => {}, children, className = "" }) {
  const dialogRef = useRef(null);

 
  const portalRoot = typeof document !== "undefined" ? document.getElementById("modal-root") ?? document.body : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
    
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch (e) {
          
          dialog.setAttribute("open", "");
        }
      }
    } else {
      if (dialog.open) dialog.close();
    }


    const handleCancel = (ev) => {
      ev.preventDefault();
      onClose();
      dialog.close();
    };

    
    const handleClick = (ev) => {
      
      if (ev.target === dialog) {
        onClose();
        dialog.close();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("click", handleClick);

   
    const handleClose = () => {
      onClose();
    };
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleClick);
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen, onClose]);

  if (!portalRoot) return null;

  const dialogClasses = `rounded-lg p-0 border-0 max-w-3xl w-full`;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={dialogClasses}
      aria-modal="true"
      role="dialog"
      
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className={`bg-white/5 backdrop-blur-sm p-6 ${className}`}>
        {children}
      </div>
    </dialog>,
    portalRoot
  );
}
