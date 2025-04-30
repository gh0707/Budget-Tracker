import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./Delete.css";

export default function Delete({ onYesDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete ALL budget cards?"
    );
    if (!confirmDelete) return;

    onYesDelete(); 
    window.alert("All budget cards have been deleted.");
  };

  return (
    <div className="Delete">
      <button onClick={handleDelete}>
        <MdOutlineDelete size={48}/>
      </button>
    </div>
  );
}
