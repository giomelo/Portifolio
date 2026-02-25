import { motion } from "framer-motion";
import { useEffect } from "react";

import './LoadingAnimated.css';

import imageLoader from '../../assets/img/image-loading.png'; 

const LoadingAnimated = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-home"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.4, ease: "easeOut" }}
    >
      <div className="loading-image-container">
        <img
          src={imageLoader}
          alt="Loading"
          className="image-rotate"
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimated;