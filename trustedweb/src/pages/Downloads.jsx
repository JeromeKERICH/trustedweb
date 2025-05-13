// src/components/downloads/Download.jsx
import { useState } from "react";
import DownloadTable from "../components/downloads/DownloadTable";
import DownloadForm from "../components/downloads/DownloadForm";


export default function Download() {
  const [selectedDownload, setSelectedDownload] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleSaved = () => {
    setSelectedDownload(null);
    setRefreshFlag((prev) => !prev); // force refresh table
  };

  return (
    <div className="p-4 space-y-4">
      {!selectedDownload && (
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setSelectedDownload({})}
        >
          + New Download
        </button>
      )}

      <DownloadTable
        key={refreshFlag} // re-mount to refresh after save
        onEdit={(download) => setSelectedDownload(download)}
      />

      {selectedDownload && (
        <DownloadForm
          selectedDownload={
            selectedDownload.id ? selectedDownload : null
          }
          onSaved={handleSaved}
          onCancel={() => setSelectedDownload(null)}
        />
      )}
    </div>
  );
}
