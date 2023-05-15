import React, { useEffect, useRef } from "react";
import "./styles/modal.css";

interface IProps {
  onClose: () => void;
  children: any; //TODO: Review the right property here
}

const Modal = ({ onClose, children }: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="modal">
      <div className="modal__content" ref={modalRef}>
        <button className="modal__close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
