import express from "express";
import Book from "../model/book.model.js"

export const handleBookStoreController = async (req, res) => {

    const { BookName, BookTitle, Author, SellingPrice, PublishDate } = req.body;


    try {
        if (!BookName || !BookTitle || !Author || !SellingPrice) {
            return res.status(400).json({ message: "All Feild's are Required", Success: false });
        }

        const newBook = await Book.create({
            BookName,
            BookTitle,
            Author,
            SellingPrice,
            PublishDate,
        });

        return res.status(201).json({ message: "Book created Successfully", Success: true, data: newBook });

        // console.log("bookAdded ", newBook);

    } catch (error) {
        return res.status(400).json({ message: `Error in saving the book - ${error.message}`, Success: false });
    }
};


export const handleBookListController = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res.status(201).json({ message: `Data is featched`, Success: true, TotalCount: bookList.length, BookList: bookList });
    } catch (error) {
        return res.status(400).json({ message: `Data not featched ${error}`, Success: false });
    }
}




export const handleBookDeleteController = async (req, res) => {
    const body = req.body;
    try {
        const deleted = await Book.deleteOne({ _id: body.Id });

        if (deleted.acknowledged) {
            return res.json({
                message: `Book deleted Sucessfully`, Success: true,
            });
        }

    } catch (error) {
        res.status(400).json({ message: `Book is not deleted ${message}`, Success: false });
    }
}

export const handleBookUpdateController = async (req, res) => {
    try {
        const body = req.body;

        const updating = await Book.updateOne({ _id: body?.Id }, { $set: body });
        // console.log("Updating", updating);

        if (updating?.acknowledged) {
            return res.json({
                message: "Book Updated Successfully !",
                Success: true,
            });
        }

    } catch (error) {
        res.status(200).json({ message: "Book not updated", Success: false });
    }
}