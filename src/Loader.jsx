import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="
        fixed inset-0 z-50
        bg-[#0b0b0f]
        flex items-center justify-center
      "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-6 w-64">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            w-16 h-16 rounded-xl
            bg-gradient-to-br from-purple-500 to-pink-500
            flex items-center justify-center
            text-black font-extrabold text-2xl
            shadow-[0_0_40px_rgba(168,85,247,0.6)]
          "
        >
          SP
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
