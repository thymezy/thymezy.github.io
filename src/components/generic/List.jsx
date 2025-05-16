import React from 'react';
import Card from './Card';

const List = ({ items, selected, onSelect, onSettings, showSettings, compact, header, fields }) => {
  return (
    <div className="min-w-[200px] p-4">
      {header && (
        <h2 className="font-semibold mb-4 capitalize">{header}</h2>
      )}
      {items.map(item => (
        <Card
          key={typeof item === 'string' ? item : item.id}
          item={item}
          selected={selected.includes(typeof item === 'string' ? item : item.id)}
          onSelect={() => onSelect(typeof item === 'string' ? item : item.id)}
          onSettings={onSettings}
          showSettings={showSettings}
          compact={compact}
          fields={fields}
        />
      ))}
    </div>
  );
};

export default List;