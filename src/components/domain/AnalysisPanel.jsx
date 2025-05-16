import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelector from '../generic/MultiSelector';
import { setSelectedTypes } from '../../store/slices/contentSlice';

const AnalysisPanel = ({ options, title }) => {
  const dispatch = useDispatch();
  const { selectedTypes } = useSelector(state => state.content);

  const handleChange = (newTypes) => {
    dispatch(setSelectedTypes(newTypes));
  };

  return (
    <div className="h-full overflow-y-auto">
      <MultiSelector
        options={options}
        selected={selectedTypes}
        onChange={handleChange}
        title={title}
      />
      <div className="p-4">
        <div className="text-center text-gray-500 mt-8">
          Select analysis types above to view content
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;