import React from "react";

const ResumeModal = ({ setIsOpen }) => {
  const resumeFile = "/public/Ridoy(Resume).pdf";
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-2xl p-10 relative">
        {/* Resume Preview */}
        <div className="mb-4">
          <embed
            src={resumeFile}
            width="100%"
            height="400px"
            type="application/pdf"
          />
        </div>

        <div className="flex gap-10">
          {/* Download Button */}
          <button
            className="bg-accent-color font-medium hover:bg-[#119f94] transition-all duration-200 text-white px-6 py-2 rounded-lg w-full"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumeFile;
              link.download = "My_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
          </button>
          {/* Close Button */}
          <button
            className=" bg-red-700 font-medium hover:bg-red-800 transition-all duration-200 text-white px-6 py-2 rounded-lg w-full"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
