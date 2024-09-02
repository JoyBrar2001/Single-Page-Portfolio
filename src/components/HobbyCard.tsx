import React from 'react'

const HobbyCard = ({
  title,
  emoji,
  top,
  left,
}: {
  title: string;
  emoji: string;
  top: string;
  left: string;
}) => {
  return (
    <div
      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
      style={{ top, left }}
    >
      <span className="font-medium text-gray-950">
        {title}
      </span>

      <span>
        {emoji}
      </span>
    </div>
  )
}

export default HobbyCard