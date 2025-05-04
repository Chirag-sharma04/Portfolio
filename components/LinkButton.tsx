import React, { useState } from "react";
import { Phone, Mail,MapPin } from "lucide-react";

type Props = {
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  const [showContact, setShowContact] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent default navigation
    setShowContact((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <a
        role="button"
        className={`${
          outline
            ? "border border-marrsgreen hover:bg-marrsgreen dark:border-carrigreen dark:hover:bg-carrigreen text-marrsgreen hover:text-cardlight dark:text-carrigreen dark:hover:text-carddark transition"
            : "bg-marrsgreen hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-carrigreen text-bglight dark:text-bgdark"
        } py-2 px-3 rounded lg:text-xl ${className} outline-marrsgreen dark:outline-carrigreen focus-visible:outline-double outline-offset-2`}
        target={`${targetBlank ? "_blank" : "_self"}`}
        onClick={handleClick}
      >
        {children}
      </a>

      {showContact && (
        <div className="absolute z-10 mt-2 p-3 bg-white dark:bg-gray-800 rounded shadow-lg text-sm w-64">
          <div className="flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-200">
            <Phone size={18} /> <span>+91 74658 52146</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <Mail size={18} /> <span>c.sharma4002@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200 mt-2">
            <MapPin size={18} /> <span>Bareilly, Uttar Pradesh, India</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkButton;
