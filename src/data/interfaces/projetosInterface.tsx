export interface Project {
    title: string;
    image: string;
    category: string;
    details: string;
    technologies: string[];
    link: string;
  }
  
export interface ModalProps {
    project: Project | null;
    onClose: () => void;
  }