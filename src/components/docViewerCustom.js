// Page1.js
import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


const DocViewerCustom = () => {
  const [selectedDocs, setSelectedDocs] = React.useState([]);

  return (
    <div>
      <h1>Document Viewer</h1>
      <input
        type="file"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
};

export default DocViewerCustom;
