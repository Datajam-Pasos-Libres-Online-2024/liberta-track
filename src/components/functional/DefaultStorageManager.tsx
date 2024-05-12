import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import PDFViewer from '../presentational/PDFViewer';

const processFile = async ({ file }) => {
  const fileExtension = file.name.split('.').pop();

  return file
    .arrayBuffer()
    .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
    .then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((a) => a.toString(16).padStart(2, '0'))
        .join('');
      return { file, key: `${hashHex}.${fileExtension}` };
    });
};

const DefaultStorageManager = () => {
  // Estado para almacenar el Blob del archivo
  const [pdfFile, setPdfFile] = useState("");

  // Función para manejar el archivo cargado
  const handleFileChange = () => {
    console.log("xd")
  };

  return (
    <div>
      <StorageManager
        acceptedFileTypes={[
          'image/*',
          'video/*',
          'application/pdf'  // Asegúrate de incluir 'application/pdf' si solo trabajas con PDFs
        ]}
        accessLevel='private'
        maxFileCount={1}
        displayText={{
          dropFilesText: 'Arrastrar y soltar archivos aquí para subir',
          browseFilesText: 'Escoger archivo',
        }}
        processFile={processFile}
        onUploadStart={handleFileChange}
      />
      {pdfFile && (
        <PDFViewer pdfFile={pdfFile} />
      )}
    </div>
  );
};

export default DefaultStorageManager