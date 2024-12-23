import React from 'react';
import { Input } from 'antd';

const CustomInput = ({ type, label }) => {
  // Kiểm tra loại input và chọn kiểu phù hợp
  const inputType = type === 'password' ? 'password' : 'text'; // Mặc định là text nếu không phải password

  return (
    <div className="mb-4">
      <Input
        type={inputType}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={label}
      />
    </div>
  );
};

export default CustomInput;