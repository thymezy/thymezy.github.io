import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Card = ({ item, selected, onSelect, onSettings, showSettings = false, compact = false, fields = [] }) => {
  const itemFields = fields.map(field => ({
    key: field.model,
    value: typeof item === 'object' ? item[field.model] : item
  })).filter(({ value }) => value !== undefined);
  
  return (
    <div 
      className={clsx(
        'border rounded-lg cursor-pointer transition-colors',
        compact ? 'p-2 mb-1' : 'p-4 mb-2',
        selected ? 'bg-blue-50 border-blue-500' : 'border-gray-200 hover:border-blue-300'
      )}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{typeof item === 'object' ? item.name : item}</h3>
        {showSettings && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onSettings(item);
            }}
            className="p-1 rounded hover:bg-gray-100"
          >
            <Cog6ToothIcon className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>
      {!compact && itemFields.length > 0 && (
        <div className="text-sm mt-1 space-y-1">
          {itemFields.map(({ key, value }) => (
            <span 
              key={key}
              className={clsx(
                'inline-block mr-2 px-2 py-0.5 rounded text-white',
                key === 'language' && 'bg-purple-500',
                key === 'style' && 'bg-green-500',
                key === 'ref_type' && 'bg-blue-500'
              )}
            >
              {value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;