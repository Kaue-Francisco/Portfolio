export interface Project {
    title: string;
    image: string;
    category: string;
    details: string;
  }
  
export interface ModalProps {
    project: Project | null;
    onClose: () => void;
  }