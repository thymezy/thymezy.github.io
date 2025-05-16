import React from 'react';
import clsx from 'clsx';

const MultiSelector = ({ options, selected, onChange, title }) => {
  return (
    <div className="p-4 border-b">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => {
              if (selected.includes(option)) {
                onChange(selected.filter(item => item !== option));
              } else {
                onChange([...selected, option]);
              }
            }}
            className={clsx(
              'px-3 py-1 rounded transition-colors',
              selected.includes(option)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultiSelector;