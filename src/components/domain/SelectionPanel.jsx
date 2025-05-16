import React from 'react';
import { useSelector } from 'react-redux';
import SelectionColumn from './SelectionColumn';
import clsx from 'clsx';

const SelectionPanel = ({ uiSchema, onOpenModal }) => {
  const authorListConfig = uiSchema?.components?.[0]?.components?.[0]?.components?.[0];
  const columns = uiSchema?.layout?.areas?.[0]?.columns || [];
  const { selectedAuthors } = useSelector(state => state.content);

  return (
    <div className="h-full flex flex-col bg-white border-r">
      <div className="flex-1 overflow-x-auto">
        <div className="inline-flex min-w-full">
          <SelectionColumn
            name="author"
            header={columns[0]?.name}
            showSettings={authorListConfig?.item?.actions?.length > 0}
            onSettings={onOpenModal}
            fields={authorListConfig?.item?.fields}
          />
          <SelectionColumn
            name="asset"
            header={columns[1]?.name}
            compact={true}
            fields={[{ model: 'name', role: 'title' }]}
          />
        </div>
      </div>
      <div className="p-4 border-t">
        <button
          onClick={() => {}} // This will be handled later when we implement the proceed functionality
          disabled={selectedAuthors.length === 0}
          className={clsx(
            'w-full py-2 px-4 rounded-lg font-medium',
            selectedAuthors.length === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          )}
        >
          Proceed ({selectedAuthors.length})
        </button>
      </div>
    </div>
  );
};

export default SelectionPanel;