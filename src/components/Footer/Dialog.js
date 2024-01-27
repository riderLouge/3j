// Dialog.js
import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fireStoreAccess } from "../../firebase";
import { fireStorageAccess } from "../../firebase";
import { v4 } from "uuid";
import { addDoc, collection, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { uploadBytes ,ref, getDownloadURL} from "firebase/storage";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

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

const StyledDatePickerInput = styled.input`
  border: 1px solid ${({ theme }) => theme.borderColor || 'rgb(204, 204, 204)'};
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 10px;
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

const Image = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
`;

const Dialog = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [note, setNote] = useState("");
  const [includes, setIncludes] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  const [view, setView] = useState("password"); // "password" or "content"
  const [allData, setAllData] = useState([]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    // Your logic for validating the password
    if (password === "test") {
      setView("addOrDeleteView");
      setPassword("");
    } else {
      alert("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const onCloseDialog = () =>{
      setView("password");
      setPassword("");
      onClose();
  }

  const handleAddButton = () =>{
    setView("content");
  }

  const handleDeleteButton = () =>{
    setView("delete");
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const image  = ref(fireStorageAccess,`Imgs/${v4()}`);
    uploadBytes(image,e.target.files[0]).then(data=>{
      getDownloadURL(data.ref).then(urlData=>{ 
        setImage(urlData);
      });
    });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
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
    const document  = ref(fireStorageAccess,`Docs/${v4()}`);
    uploadBytes(document,e.target.files[0]).then(data=>{
      getDownloadURL(data.ref).then(urlData=>{ 
        setUploadDocument(urlData);
      });
    });
  };

  const handleSave = async () => {
  try {
    // Your logic for saving data and handling image upload
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Note:", note);
    console.log("Includes:", includes);
    console.log("Itinerary:", itinerary);
    console.log("Upload Document:", uploadDocument);

    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    if (image == null || !image.trim() ) {
      alert('image is required.');
      return;
    }

    if (!title.trim() ) {
      alert('Title is required.');
      return;
    }

    if (startDate == null ) {
      alert('Start Date must be valid dates.');
      return;
    }

    if (endDate == null) {
      alert('End Date must be valid dates.');
      return;
    }

    // Validation for End Date being after Start Date
    if (endDateObject <= startDateObject) {
      alert('End Date must be after Start Date.');
      return;
    }

    if (note == null || !note.trim() ) {
      alert('Note is required.');
      return;
    }

    if (includes == null || !includes.trim() ) {
      alert('Includes is required.');
      return;
    }

    if (itinerary == null || !itinerary.trim() ) {
      alert('Itinerary is required.');
      return;
    }

    if (uploadDocument == null || !uploadDocument.trim() ) {
      alert('Upload document is required.');
      return;
    }

    // Save data to Firestore

  const tourRef = collection(fireStoreAccess,'Tours');

  await addDoc(tourRef,{title:title,imageUrl:image,startDate:startDate,endDate:endDate,
    note:note,includes:includes,itinerary:itinerary,uploadDocumentUrl:uploadDocument});
  setView("password");
  onClose();
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

useEffect(() => { 
  onSnapshot(collection(fireStoreAccess, "Tours"), (snapshot) => { 
    setAllData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }); 
}, []);


  const onDeleteIconClick = async (tripId) =>{
    try {
      // Access the specific document in the "trips" collection
      const tripRef = doc(fireStoreAccess, 'Tours', tripId);

      // Delete the document
      await deleteDoc(tripRef);

      // Update the state to reflect the deletion
      setAllData((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }

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
           <div style={{display:"flex",justifyContent:"end"}}>
          <Button style={{marginRight:"10px"}} onClick={handlePasswordSubmit}>Submit</Button>
          <CloseButton onClick={onCloseDialog}>Close</CloseButton>
          </div>
        </>
      )}

       {view === "addOrDeleteView" && (
        <>
          <div style={{display:"flex",justifyContent:"center",fontWeight:"bold",paddingBottom:"20px"}}>
          <InputLabel>Add / Delete Data</InputLabel>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <Button  onClick={handleAddButton}>Add</Button>
          <Button  onClick={handleDeleteButton}>Delete</Button>
          <CloseButton onClick={onCloseDialog}>Close</CloseButton>
          </div>
        </>
      )}

      {view === "delete" && (
        <>
          <InputLabel style={{display:"flex",fontWeight:"bold",paddingBottom:"20px"}}>Delete Data</InputLabel>
          <div style={{paddingBottom:"20px"}}>
            {allData.map((data, index) => (
                    // Generate a div for each item in the array
                    <div key={index} id={data.id} style={{ display: 'flex', alignItems: 'center', justifyContent:"space-between",paddingBottom:"10px" }}>
                    <div style={{display:"flex",alignItems: "center"}}>
                    <Image src={data?.imageUrl} />
                    <div style={{marginLeft:"15px",marginRight:"15px"}}>{data.title}</div>
                    </div>
                   <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onDeleteIconClick(data.id)}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center",background:"white",padding:"0"}}
                  >
                    <DeleteRoundedIcon style={{color:"red"}}/>
                  </Button>
                    </div>
                  ))}
          </div>
          <div style={{display:"flex",justifyContent:"end"}}>
          <CloseButton onClick={onCloseDialog}>Close</CloseButton>
          </div>
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
          <div style={{display:"flex"}}>
          <div style={{paddingRight:"10px"}}>
          <InputLabel>
            Start Date:
          </InputLabel>
           
             <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select start date"
              customInput={<StyledDatePickerInput />}
              />
              
            </div>
          

          <div>
          <InputLabel>
            End Date:
          </InputLabel>
          
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a end date"
              customInput={<StyledDatePickerInput />}
              />
              </div>
            
          </div>

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
            <CloseButton onClick={onCloseDialog}>Close</CloseButton>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </>
      )}
    </DialogContainer>
  );
};

export default Dialog;
