import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
    
    return <div>{open && <p>THE MODAL IS OPEN</p>}</div>;
}

export default Modal;