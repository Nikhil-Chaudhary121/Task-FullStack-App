import { Request, Response } from "express";
import Note from "../model/note.model";

// POST /notes
export const createNote = async (req: Request, res: Response) => {
  try {
    const {  content } = req.body;
    const note = new Note({  content, user: req.user });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to create note", error });
  }
};

// GET /notes
export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes", error });
  }
};

// PUT /notes/:id
export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, { content }, { new: true });
    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Failed to update note", error });
  }
};

// DELETE /notes/:id
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findOneAndDelete({ _id: id, user: req.user });
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note", error });
  }
};
