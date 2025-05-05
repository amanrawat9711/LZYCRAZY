import React, { useRef, useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Camera } from 'lucide-react';

const facing = [
  "North",
  "North-East",
  "East",
  "South-East",
  "South",
  "South-West",
  "West",
  "North-West",
];

const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];


const Olx = () => {
  const [type, setType] = useState("");
  const [bhk, setBhk] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [superBuiltUp, setSuperBuiltUp] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [listedBy, setListedBy] = useState("");
  const [parking, setParking] = useState("");
  const [facingside, setFacingSide] = useState("");
  const [projectName, setProjectName] = useState("");
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maintainance, setMaintainance] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState(Array(20).fill(null));
  const [activetab, setactivetab] = useState("list");
  const [selectedState, setSelectedState] = useState("");
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const [error, setError] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const isValid =
      type !== "" &&
      bhk !== "" &&
      bathrooms !== "" &&
      superBuiltUp !== "" &&
      carpetArea !== "" &&
      furnishing !== "" &&
      projectStatus !== "" &&
      listedBy !== "" &&
      parking !== "" &&
      facingside !== "" &&
      projectName !== "" &&
      adTitle !== "" &&
      description !== "" &&
      price !== "" &&
      images.some(img => img !== null) &&
      (activetab === 'list' ? selectedState !== "" : true) &&
      name !== "" &&
      image !== null;

    setIsFormValid(isValid);
  }, [type, bhk, bathrooms, superBuiltUp, carpetArea, furnishing, projectStatus, listedBy, parking, image, facingside, projectName, adTitle, description, price, images, activetab, selectedState, name]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const currentLocation = {
    state: "Delhi",
    city: "Delhi",
    neighbourhood: "Nasirpur Dwarka",
  };

  const handlesubmit = () => {
    if (!selectedState) {
      setError(true);
    } else {
      setError(false);
      alert("selected state" + selectedState);
    }
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const emptyIndexes = images
      .map((img, idx) => (img === null ? idx : null))
      .filter((idx) => idx !== null);

    if (files.length + images.filter(img => img !== null).length > 20) {
      alert("You can upload up to 20 images.");
      return;
    }

    const newImageObjects = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const updatedImages = [...images];
    let newImageIndex = 0;
    for (let i = 0; i < updatedImages.length && newImageIndex < newImageObjects.length; i++) {
        if (updatedImages[i] === null) {
            updatedImages[i] = newImageObjects[newImageIndex];
            newImageIndex++;
        }
    }

    setImages(updatedImages);
  };


  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };

  const validateForm = () => {
    if (
      !type ||
      !bhk ||
      !bathrooms ||
      !superBuiltUp ||
      !carpetArea ||
      !furnishing ||
      !projectStatus ||
      !listedBy ||
      !parking ||
      !facingside ||
      !projectName ||
      !adTitle ||
      !description ||
      !price ||
      images.every(img => img === null) ||
      (activetab === 'list' && !selectedState) ||
      (activetab === 'current' && (!currentLocation.state || !currentLocation.city || !currentLocation.neighbourhood)) ||
      !name ||
      !image
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setType("");
    setBhk("");
    setBathrooms("");
    setSuperBuiltUp("");
    setCarpetArea("");
    setFurnishing("");
    setProjectStatus("");
    setListedBy("");
    setParking("");
    setFacingSide("");
    setProjectName("");
    setAdTitle("");
    setDescription("");
    setMaintainance("");
    setPrice("");
    setImages(Array(20).fill(null));
    setactivetab("list");
    setSelectedState("");
    setError(false);
    setName('');
    setImage(null);
  };

  const handlePostNow = () => {
    if (validateForm()) {
      console.log("Form submitted successfully!");
      console.log("Type:", type);
      console.log("BHK:", bhk);
      console.log("Bathrooms:", bathrooms);
      console.log("Super Builtup Area:", superBuiltUp);
      console.log("Carpet Area:", carpetArea);
      console.log("Furnishing:", furnishing);
      console.log("Project Status:", projectStatus);
      console.log("Listed By:", listedBy);
      console.log("Parking:", parking);
      console.log("Facing Side:", facingside);
      console.log("Project Name:", projectName);
      console.log("Ad Title:", adTitle);
      console.log("Description:", description);
      console.log("Maintenance:", maintainance);
      console.log("Price:", price);
      console.log("Images:", images.filter(img => img !== null));
      console.log("Location Tab:", activetab);
      if (activetab === 'list') {
        console.log("Selected State:", selectedState);
      } else {
        console.log("Current Location:", currentLocation);
      }
      console.log("Name:", name);
      console.log("Profile Image:", image);

      resetForm();
    }
  };


  return (
    <>
      <div className="h-17 shadow-lg flex items-center">
        <IoArrowBackSharp className="text-2xl m-5" />
      </div>

      <div className="mt-7 min-h-screen m-auto flex items-center justify-center flex-col mb-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-center ">POST YOUR AD</h1>

        <div className="border border-zinc-400 w-full max-w-4xl">
          <div className="m-3">
            <h1 className="text-xl font-extrabold border-zinc-400">
              SELECTED CATEGORY
            </h1>
            <p className="text-xs mt-5 flex flex-wrap gap-3 sm:gap-6 items-center">
              Properties / For Sale: Houses & Apartments{" "}
              <span className="cursor-pointer text-blue-800 text-sm font-extrabold underline hover:-translate-y-1/6">
                Change
              </span>
            </p>
          </div>
          <hr className="mt-5 border-zinc-400 " />
         <div className="m-5">
      <h1 className="text-lg font-bold">INCLUDE SOME DETAILS</h1>

      <p className="font-semibold mt-1">Type *</p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={() => setType("Flats/Appartments")}
          className={`cursor-pointer border-zinc-400 border px-2 text-sm py-1 rounded-sm font-medium hover:bg-blue-200 ${type === 'Flats/Appartments' ? 'bg-blue-100' : ''}`}
        >
          Flats/Appartments
        </button>
        <button
          onClick={() => setType("Independent / Builder Floors")}
          className={`cursor-pointer border-zinc-400 border text-sm px-2 py-1 rounded-sm font-medium hover:bg-blue-200 ${type === 'Independent / Builder Floors' ? 'bg-blue-100' : ''}`}
        >
          Independent / Builder Floors
        </button>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
        <button
          onClick={() => setType("Farm House")}
          className={`cursor-pointer border-zinc-400 border text-sm px-2 py-1 rounded-sm font-medium hover:bg-blue-200 ${type === 'Farm House' ? 'bg-blue-100' : ''}`}
        >
          Farm House
        </button>
        <button
          onClick={() => setType("House & Villa")}
          className={`cursor-pointer border-zinc-400 border text-sm px-2 py-1 rounded-sm font-medium hover:bg-blue-200 ${type === 'House & Villa' ? 'bg-blue-100' : ''}`}
        >
          House & Villa
        </button>
      </div>

      <h1 className="text-base font-medium mt-6">BHK *</h1>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          onClick={() => setBhk("1")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bhk === '1' ? 'bg-blue-100' : ''}`}
        >
          1
        </button>
        <button
          onClick={() => setBhk("2")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bhk === '2' ? 'bg-blue-100' : ''}`}
        >
          2
        </button>
        <button
          onClick={() => setBhk("3")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bhk === '3' ? 'bg-blue-100' : ''}`}
        >
          3
        </button>
        <button
          onClick={() => setBhk("4")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bhk === '4' ? 'bg-blue-100' : ''}`}
        >
          4
        </button>
        <button
          onClick={() => setBhk("4+")}
          className={`cursor-pointer text-lg border px-4 sm:px-5 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bhk === '4+' ? 'bg-blue-100' : ''}`}
        >
          4+
        </button>
      </div>

      <h1 className="text-base font-medium mt-6">Bathrooms *</h1>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          onClick={() => setBathrooms("1")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bathrooms === '1' ? 'bg-blue-100' : ''}`}
        >
          1
        </button>
        <button
          onClick={() => setBathrooms("2")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bathrooms === '2' ? 'bg-blue-100' : ''}`}
        >
          2
        </button>
        <button
          onClick={() => setBathrooms("3")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bathrooms === '3' ? 'bg-blue-100' : ''}`}
        >
          3
        </button>
        <button
          onClick={() => setBathrooms("4")}
          className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bathrooms === '4' ? 'bg-blue-100' : ''}`}
        >
          4
        </button>
        <button
          onClick={() => setBathrooms("4+")}
          className={`cursor-pointer text-lg border px-4 sm:px-5 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${bathrooms === '4+' ? 'bg-blue-100' : ''}`}
        >
          4+
        </button>
      </div>

      <h1 className="text-base font-medium mt-6">Furnishing *</h1>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          onClick={() => setFurnishing("Furnished")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${furnishing === 'Furnished' ? 'bg-blue-100' : ''}`}
        >
          Furnished
        </button>
        <button
          onClick={() => setFurnishing("Semi-Furnished")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${furnishing === 'Semi-Furnished' ? 'bg-blue-100' : ''}`}
        >
          Semi-Furnished
        </button>
        <button
          onClick={() => setFurnishing("Unfurnished")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${furnishing === 'Unfurnished' ? 'bg-blue-100' : ''}`}
        >
          Unfurnished
        </button>
      </div>

      <h1 className="text-base font-medium mt-6">Project Status *</h1>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          onClick={() => setProjectStatus("New Launch")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${projectStatus === 'New Launch' ? 'bg-blue-100' : ''}`}
        >
          New Launch
        </button>
        <button
          onClick={() => setProjectStatus("Ready to Move")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${projectStatus === 'Ready to Move' ? 'bg-blue-100' : ''}`}
        >
          Ready to Move
        </button>
        <button
          onClick={() => setProjectStatus("Under Construction")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${projectStatus === 'Under Construction' ? 'bg-blue-100' : ''}`}
        >
          Under Construction
        </button>
      </div>

      <h1 className="text-base font-medium mt-6">Listed By *</h1>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          onClick={() => setListedBy("Builder")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${listedBy === 'Builder' ? 'bg-blue-100' : ''}`}
        >
          Builder
        </button>
        <button
          onClick={() => setListedBy("Dealer")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${listedBy === 'Dealer' ? 'bg-blue-100' : ''}`}
        >
          Dealer
        </button>
        <button
          onClick={() => setListedBy("Owner")}
          className={`cursor-pointer font-medium text-base border px-2 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${listedBy === 'Owner' ? 'bg-blue-100' : ''}`}
        >
          Owner
        </button>
      </div>

      <div className="flex flex-col mt-6">
        <h2 className="font-medium text-sm mt-4">Super Builtup area sqft *</h2>
        <input
          className="w-full sm:w-130 border rounded-sm h-11 px-2"
          type="number"
          value={superBuiltUp}
          onChange={(e) => setSuperBuiltUp(e.target.value)}
          required
        />
        <h2 className="font-medium mt-4 text-sm">Carpet Area sqft *</h2>
        <input
          className="w-full sm:w-130 rounded-sm border h-11 px-2"
          type="number"
          value={carpetArea}
          onChange={(e) => setCarpetArea(e.target.value)}
          required
        />
        <h2 className="font-medium mt-4 text-sm">Maintenance (Monthly)</h2>
          <input
          type="number"
          className="w-full sm:w-130 rounded-sm border h-11 px-2"
          onChange={(e)=>setMaintainance(e.target.value)}
          value={maintainance}
        />
        <h1 className="text-base font-medium mt-6">Car Parking *</h1>
        <div className="mt-1 flex flex-wrap gap-2">
          <button
            onClick={() => setParking("1")}
            className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${parking === '1' ? 'bg-blue-100' : ''}`}
          >
            1
          </button>
          <button
            onClick={() => setParking("2")}
            className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${parking === '2' ? 'bg-blue-100' : ''}`}
        >
            2
          </button>
          <button
            onClick={() => setParking("3")}
            className={`cursor-pointer text-lg border px-4 sm:px-6 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${parking === '3' ? 'bg-blue-100' : ''}`}
          >
            3
          </button>
          <button
            onClick={() => setParking("3+")}
            className={`cursor-pointer text-lg border px-4 sm:px-5 rounded-sm border-zinc-400 py-1 hover:bg-blue-200 ${parking === '3+' ? 'bg-blue-100' : ''}`}
          >
            3+
          </button>
        </div>

        <h2 className="font-medium mt-4 text-sm">Facing *</h2>
        <select
          className="cursor-pointer w-full sm:w-130 rounded-sm border h-11 px-2"
          value={facingside}
          onChange={(e) => setFacingSide(e.target.value)}
          required
        >
           <option>Select Facing</option>
          {facing.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <h2 className="font-medium mt-4 text-sm">Project Name *</h2>
        <input
          className="w-full sm:w-130 rounded-sm border h-11 px-2"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
          maxLength={70}

        />
          <div className="w-full sm:w-130 text-xs text-gray-500 text-right mt-1">
            {projectName.length} / 70
          </div>
        <h2 className="font-medium mt-4 text-sm">Ad Title *</h2>
        <input
          className="w-full sm:w-130 rounded-sm border h-11 px-2"
          type="text"
          value={adTitle}
          onChange={(e) => setAdTitle(e.target.value)}
          required
          maxLength={70}
        />
        <div className="w-full sm:w-130 text-xs text-gray-500 text-right mt-1">
            {adTitle.length} / 70
          </div>
        <p className="text-xs text-zinc-500">
          Mention the key features of your item (e.g. brand, model, age, type)
        </p>

        <h2 className="font-medium mt-4 text-sm">Description *</h2>
        <textarea
          className="w-full sm:w-130 rounded-sm border h-24 px-2 py-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          maxLength={4096}
        />
        <div className="w-full sm:w-130 text-xs text-gray-500 text-right mt-1">
            {description.length} / 4096
          </div>
        <p className="text-xs text-zinc-500">
          Include condition, features and reason for selling
        </p>
      </div>
    </div>
         <hr className="mt-5 border-zinc-400 " />
         <div className="m-5">
      <h1 className="font-bold text-xl">SET A PRICE</h1>
      <div className="mt-3">
        <p className="text-sm text-zinc-600">Price*</p>
        <div className="relative w-full sm:w-130">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          <input
            className="pl-8 pr-3 w-full rounded-sm border h-11 focus:outline-none"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
<hr className="mt-5 border-zinc-400 " />
<div className="m-5">
      <h1 className="font-bold text-xl mt-6">UPLOAD UP TO 20 PHOTOS</h1>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 mt-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-full h-28 border border-gray-300 flex items-center justify-center text-center rounded-md cursor-pointer ${
              index === 0 ? "border-black" : ""
            }`}
            onClick={index === 0 ? handleAddPhotoClick : undefined}
          >
            {img ? (
              <img
                src={img.preview}
                alt={`preview-${index}`}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="text-gray-400 text-sm">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {index === 0 ? "Add Photo" : ""}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {images.every((img) => img === null) && (
        <p className="text-red-600 mt-2">This field is mandatory</p>
      )}
    </div>
<hr className="mt-5 border-zinc-400 " />
<div className="m-5">
      <h1 className="font-bold text-xl">CONFIRM YOUR LOCATION</h1>
      <div className="flex mt-5 gap-5 sm:gap-10 mb-4">
        <button
          className={`cursor-pointer w-auto sm:w-55 mr-0 sm:mr-6 pb-1 ${
            activetab === "list"
              ? "border-b-4 border-blue-700 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setactivetab("list")}
        >
          LIST
        </button>
        <button
          className={` cursor-pointer w-auto sm:w-55 mr-0 sm:mr-6 pb-1 ${
            activetab === "current"
              ? "border-b-4 border-blue-700 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setactivetab("current")}
        >
          CURRENT LOCATION
        </button>
      </div>
      {activetab === 'list' &&(
        <div className="mt-6">
       <h2 className="font-medium mt-4 text-base ">State*</h2>

                <select
                  className={`cursor-pointer w-full sm:w-130 rounded-sm border h-11 px-2 ${error ? 'border-red-500' : ''}`}
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setError(false);
                  }}
                  required
                >
                    <option value="">Select a state</option>
                    {state.map((item,index)=>(
                    <option key={index} value={item}>
              {item}
            </option>
                ))}
                </select>
                 {error && <p className="text-red-500 text-sm mt-1">Please select a state.</p>}

        </div>
      )}
      {activetab === 'current' && (
        <div className="w-full sm:w-lg space-y-4">
            <p className="flex justify-between">State <span className="font-bold">{currentLocation.state}</span></p>
            <hr className="text-zinc-400" />
            <p className="flex justify-between">City <span className="font-bold">{currentLocation.city}</span></p>
            <hr className="text-zinc-400" />

            <p className="flex justify-between">Neighbourhood <span className="font-bold">{currentLocation.neighbourhood}</span></p>

        </div>
      )}
    </div>
<hr className="mt-5 border-zinc-400 " />
<div className="m-5">
      <h1 className="font-bold text-xl mb-6">REVIEW YOUR DETAILS</h1>

      <div className="flex flex-col sm:flex-row items-start gap-4 max-w-md">
        <div className="relative self-center sm:self-auto">
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl">👤</span>
            )}
          </div>
          <label className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-1 rounded-full cursor-pointer">
            <Camera size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="flex-1 w-full">
          <label className="block mb-1 font-medium text-sm">Name *</label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 focus:outline-none"
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="w-full text-sm text-gray-500 text-right mt-1">
            {name.length} / 30
          </div>
        </div>
      </div>
    </div>
<hr className="mt-5 border-zinc-400 " />
<div className="m-5">
<button
        className={` font-medium text-base border px-3 rounded-sm py-1.5 ${isFormValid ? 'border-zinc-400 hover:bg-blue-200 cursor-pointer' :  ' border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        onClick={handlePostNow}
        disabled={!isFormValid}
      >
        POST NOW
      </button>
</div>


        </div>
      </div>
    </>
  );
};

export default Olx;