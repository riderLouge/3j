// Dialog.js
import React, { useState } from "react";
import styled from "styled-components";

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 2rem;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  resize: vertical;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FileInput = styled.input`
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled(Button)`
  background-color: #ccc;
  margin-right: 8px;

  &:hover {
    background-color: #999;
  }
`;

const Dialog = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");
  const [includes, setIncludes] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  const [view, setView] = useState("password"); // "password" or "content"

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    // Your logic for validating the password
    if (password === "test") {
      setView("content");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleIncludesChange = (e) => {
    setIncludes(e.target.value);
  };

  const handleItineraryChange = (e) => {
    setItinerary(e.target.value);
  };

  const handleUploadDocumentChange = (e) => {
    setUploadDocument(e.target.value);
  };

  const handleSave = () => {
    // Your logic for saving data and handling image upload
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Note:", note);
    console.log("Includes:", includes);
    console.log("Itinerary:", itinerary);
    console.log("Upload Document:", uploadDocument);

    // Close the dialog
    onClose();
  };

  if (!open) return null;

  return (
    <DialogContainer>
      {view === "password" && (
        <>
          <InputLabel>
            Enter Password:
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputLabel>
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </>
      )}

      {view === "content" && (
        <>
          <InputLabel>
            Upload Image:
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </InputLabel>

          <InputLabel>
            Title:
            <Input type="text" value={title} onChange={handleTitleChange} />
          </InputLabel>

          <InputLabel>
            Start Date:
            <Input
              type="text"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </InputLabel>

          <InputLabel>
            End Date:
            <Input type="text" value={endDate} onChange={handleEndDateChange} />
          </InputLabel>

          <InputLabel>
            Note:
            <TextArea value={note} onChange={handleNoteChange} />
          </InputLabel>

          <InputLabel>
            Includes:
            <TextArea value={includes} onChange={handleIncludesChange} />
          </InputLabel>

          <InputLabel>
            Itinerary:
            <TextArea value={itinerary} onChange={handleItineraryChange} />
          </InputLabel>

          <InputLabel>
            Upload Document:
            <FileInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleUploadDocumentChange}
            />
          </InputLabel>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseButton onClick={onClose}>Close</CloseButton>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </>
      )}
    </DialogContainer>
  );
};

export default Dialog;
