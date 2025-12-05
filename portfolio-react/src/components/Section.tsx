import { type ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Section.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id={id}
      ref={elementRef as React.RefObject<HTMLElement>}
      className={isVisible ? 'visible' : ''}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
