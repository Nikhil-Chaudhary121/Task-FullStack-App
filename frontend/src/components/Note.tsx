import React from "react";

// Define Note ty

export interface INote {
    id: number;
    title: string;
    content: string;
    user:string;
    createdAt: string;
  }
// Props type
interface NoteProps {
  note: INote;
}

const NoteCard: React.FC<NoteProps> = ({ note }) => {
  return (
    <div
      key={note.id}
      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <h3 className="font-medium text-gray-800 text-lg">{note.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{note.content}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-xs">{note.createdAt}</p>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            View
          </button>
          <button className="text-gray-600 hover:text-gray-800 text-sm">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
