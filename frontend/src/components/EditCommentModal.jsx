import { useEffect, useRef } from "react";

const EditCommentModal = ({isOpen, onClose, children}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog ref={dialogRef} onCancel={handleCancel}>
      <div>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
};

export default EditCommentModal;
