import React, { useState } from 'react'
import Dropzone from '../../components/functional/Dropzone';
import PDFViewer from '../../components/presentational/PDFViewer';

type Props = {}

const PerformanceResultsPage = (props: Props) => {
    const [pdfFile, setPdfFile] = useState<string | undefined>(undefined);

    return (
        <div style={{  paddingTop: '60px' }}>
            <div className="container">
                <h1 className="text-center">Drag and Drop Test</h1>
                <Dropzone setPdfFile={setPdfFile} />
            </div>
            <div>
                {pdfFile && (
                    <PDFViewer pdfFile={pdfFile} />
                )}
            </div>
        </div>
    );
};

export default PerformanceResultsPage;