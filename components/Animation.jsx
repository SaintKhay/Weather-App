import { useInView } from "react-intersection-observer";
import "./Animation.css";

export default function AnimatedSection({ children, animation = "fade" }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`animated-section ${animation} ${inView ? "show" : ""}`}
    >
      {children}
    </section>
  );
}
