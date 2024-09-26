import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedRoutes = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={location.key} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;
