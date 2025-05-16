import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentConfig } from '../../store/slices/contentSlice';

const TimeHorizonConfig = () => {
  const dispatch = useDispatch();
  const { currentConfig } = useSelector(state => state.content);

  return (
    <>
      {Object.entries(currentConfig).map(([horizon, config]) => (
        <div key={horizon} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
            {horizon.replace(/_/g, ' ')}
          </label>
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <input
                type="range"
                min="1"
                max="365"
                value={config.value}
                onChange={(e) => {
                  dispatch(setCurrentConfig({
                    ...currentConfig,
                    [horizon]: { ...config, value: parseInt(e.target.value) }
                  }));
                }}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium w-8">{config.value}</span>
              <select
                value={config.unit}
                onChange={(e) => {
                  dispatch(setCurrentConfig({
                    ...currentConfig,
                    [horizon]: { ...config, unit: e.target.value }
                  }));
                }}
                className="border rounded px-2 py-1"
              >
                {['day', 'week', 'month', 'quarter', 'year'].map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeHorizonConfig;