import React from 'react'
import Dropzone from '../../components/functional/Dropzone';

type Props = {}

const PerformanceResultsPage = (props: Props) => {
    return (
        <div>
          <div className="container">
            <h1 className="text-center">Drag and Drop Test</h1>
            <Dropzone />
          </div>
        </div>
      );
};

export default PerformanceResultsPage;