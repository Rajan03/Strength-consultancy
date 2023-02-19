import {createPortal} from "react-dom";

type ModalProps = {
    children: JSX.Element

    isOpen: boolean
    onClose?: () => void
    withCloseButton?: boolean

    className?: string
}
export default function Modal(props: ModalProps): JSX.Element {

    const {children, isOpen, onClose, className, withCloseButton} = props;

    let JSX = <></>
    if (!isOpen) return JSX;


    JSX = (
        <div className={`fixed top-0 left-0 w-full h-full z-60 flex flex-col justify-center items-center
            bg-neutral-900 bg-opacity-50 ${className}`}>
            <div className={'flex flex-col justify-start items-center gap-y-10 bg-neutral-50 p-5 ' +
                'max-w-full lg:max-w-[60%] rounded-lg'}>
                <div className={'flex flex-col justify-start items-center gap-y-5'}>
                    {children}
                </div>

                {withCloseButton && (
                    <button className={'text-lg font-medium text-neutral-500'} onClick={onClose}>
                        Close
                    </button>)}
            </div>
        </div>
    )

    const modalRoot = document.getElementById('modal-root') as Element;
    return createPortal(JSX, modalRoot);
}
