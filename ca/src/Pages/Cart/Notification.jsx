import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let activeToastId = null;

export const showNotification = (message) => {
  if (activeToastId !== null) {
    toast.update(activeToastId, {
      render: message,
    });
  } else {
    activeToastId = toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      onClose: () => {
        activeToastId = null;
      },
    });
  }
};
