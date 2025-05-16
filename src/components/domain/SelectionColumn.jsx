import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '../generic/List';
import { setSelected } from '../../store/slices/selectionSlice';

const SelectionColumn = ({ 
  name,
  header,
  showSettings,
  onSettings,
  fields,
  compact = false
}) => {
  const dispatch = useDispatch();
  const { items, selected } = useSelector(state => state.selection[name]);

  const handleSelect = (id) => {
    dispatch(setSelected({ name, id }));
  };

  return (
    <div className="min-w-[200px] p-4">
      {header && (
        <h2 className="font-semibold mb-4 capitalize">{header}</h2>
      )}
      <List
        items={items}
        selected={selected}
        onSelect={handleSelect}
        onSettings={onSettings}
        showSettings={showSettings}
        compact={compact}
        fields={fields}
      />
    </div>
  );
};

export default SelectionColumn;