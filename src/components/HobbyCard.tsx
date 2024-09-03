"use client";

import React, { RefObject } from "react";
import { motion } from "framer-motion";

const HobbyCard = ({
  title,
  emoji,
  top,
  left,
  constraintRef,
}: {
  title: string;
  emoji: string;
  top: string;
  left: string;
  constraintRef: RefObject<HTMLDivElement>,
}) => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
      style={{ top, left }}
      drag
      dragConstraints={constraintRef}
    >
      <span className="font-medium text-gray-950">
        {title}
      </span>

      <span>
        {emoji}
      </span>
    </motion.div>
  )
}

export default HobbyCard