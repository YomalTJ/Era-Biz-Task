import React from "react";

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-4 bg-gray-100 rounded-full text-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#5995fd] focus:border-[#5995fd] transition"
      />
    </div>
  );
};

export default FormInput;
