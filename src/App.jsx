import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Split from 'react-split';
import Modal from './components/generic/Modal';
import TimeHorizonConfig from './components/domain/TimeHorizonConfig';
import SelectionPanel from './components/domain/SelectionPanel';
import AnalysisPanel from './components/domain/AnalysisPanel';
import { getUISchema } from './utils/schema';
import { fetchIndex } from './utils/api';
import { setItems } from './store/slices/selectionSlice';
import { init_state_from_data } from './utils/transformation';

function App() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [uiSchema, setUiSchema] = React.useState(null);

  useEffect(() => {
    const schema = getUISchema();
    setUiSchema(schema);
  }, []);

  useEffect(() => {
    const initializeState = async () => {
      const { authors, assets } = await init_state_from_data(fetchIndex);
      dispatch(setItems({ name: 'author', items: authors }));
      dispatch(setItems({ name: 'asset', items: assets }));
    };

    initializeState();
  }, [dispatch]);

  const options = uiSchema?.components?.[1]?.components?.[0]?.options || [];

  return (
    <div className="h-screen bg-white">
      <Split 
        className="flex h-full"
        sizes={[25, 75]}
        minSize={200}
        gutterSize={10}
        snapOffset={30}
      >
        <SelectionPanel
          uiSchema={uiSchema}
          onOpenModal={() => setShowModal(true)}
        />
        <AnalysisPanel
          options={options}
          title={uiSchema?.components?.[1]?.components?.[0]?.header}
        />
      </Split>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Configure Time Horizons"
      >
        <TimeHorizonConfig />
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;