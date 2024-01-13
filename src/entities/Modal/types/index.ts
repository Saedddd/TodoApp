export interface ModalProps {
    modalOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
}