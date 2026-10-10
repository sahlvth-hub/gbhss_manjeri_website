import React from 'react';
import officialLogo from '../assets/images/gbhss-logo.png';

interface SchoolEmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
  alt?: string;
}

export const SchoolEmblem: React.FC<SchoolEmblemProps> = ({
  className = '',
  size = 64,
  alt = 'Govt. Boys Higher Secondary School Manjeri Official Seal',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 select-none inline-flex items-center justify-center ${className}`}
    >
      <img
        src={officialLogo}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain rounded-full drop-shadow-sm select-none"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
};
