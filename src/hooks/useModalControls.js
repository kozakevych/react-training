import { useState } from "react";


export default function useModalControls({ onModalOpen = (item) => {} } = {}) {
    const [open, setOpen] = useState(false);

    const handleOpen = (item) => {
        onModalOpen(item)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return {
        open, handleOpen, handleClose
    }
}