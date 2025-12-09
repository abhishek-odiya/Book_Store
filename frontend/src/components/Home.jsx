import React, { useState } from 'react'
import { bookBaseUrl } from '../../axiosInstance';
import { useEffect } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import toast from 'react-hot-toast';




const Home = () => {

    const [bookForm, setBookForm] = useState({
        Id: "",
        BookName: "",
        BookTitle: "",
        Author: "",
        SellingPrice: "",
        PublishDate: "",
    });



    const handlFormChange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {

            if (!isUpdating) {
                if (!bookForm.BookName || !bookForm.BookTitle || !bookForm.Author || !bookForm.SellingPrice) {
                    toast.error("All field's are required");
                    return;
                }

                const data = await bookBaseUrl.post("/addbook", bookForm);
                // console.log(data);

                getAllBookList();

                if (data?.data?.Success) {
                    toast.success(data.data.message);
                    setBookForm({
                        Id: "",
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                    });
                } else {
                    toast.success("Book added successfully!");
                }

            }
            else {

                const data = await bookBaseUrl.put("/updatebook", bookForm);
                // console.log(data);
                getAllBookList();

                if (data?.data?.Success) {
                    toast.success(data.data.message);

                    setBookForm({
                        Id: "",
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                    });
                }

                setIsUpdating(false);
            }
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }


    // to get the data on table 

    const [bookList, setBookList] = useState([]);

    const getAllBookList = async () => {
        try {
            const { data } = await bookBaseUrl.get("booklists");
            setBookList(data?.BookList);
            // console.log(`BookList`, data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBookList();
    }, [])



    // To Delete the Books

    const handleDelete = async (id) => {
        try {
            const { data } = await bookBaseUrl.post("deletebook", {
                Id: id,
            });
            getAllBookList();

            if (data?.Success) {
                toast.success(data?.message);
            }

        } catch (error) {
            console.log(error);
        }
    }



    const [isUpdating, setIsUpdating] = useState(false);

    // To Update the data
    const handleUpdate = async (data) => {
        setBookForm({
            Id: data?._id,
            BookName: data?.BookName,
            BookTitle: data?.BookTitle,
            Author: data?.Author,
            SellingPrice: data?.SellingPrice,
            PublishDate: data?.PublishDate,
        });
        setIsUpdating(true);
    }


    return <>
        <div className="w-full mt-28 px-6">


            {/* Input page "Have input Row"*/}
            <div className="grid grid-cols-5 gap-6 text-center font-semibold text-lg mb-4">
                <div>Book Name</div>
                <div>Book Title</div>
                <div>Author</div>
                <div>Selling Price</div>
                <div>Publish Date</div>
            </div>

            <div className="grid grid-cols-5 gap-6 text-center">

                <input
                    type="text"
                    className="border p-2 rounded-lg shadow-sm"
                    placeholder="Enter book name"
                    name="BookName"
                    value={bookForm.BookName}
                    onChange={handlFormChange}
                />

                <input
                    type="text"
                    className="border p-2 rounded-lg shadow-sm"
                    placeholder="Enter book title"
                    name="BookTitle"
                    value={bookForm.BookTitle}
                    onChange={handlFormChange}
                />

                <input
                    type="text"
                    className="border p-2 rounded-lg shadow-sm"
                    placeholder="Enter author name"
                    name="Author"
                    value={bookForm.Author}
                    onChange={handlFormChange}
                />

                <input
                    type="number"
                    className="border p-2 rounded-lg shadow-sm"
                    placeholder="Enter price"
                    name="SellingPrice"
                    value={bookForm.SellingPrice}
                    onChange={handlFormChange}
                />

                <input
                    type="date"
                    className="border p-2 rounded-lg shadow-sm"
                    name="PublishDate"
                    value={bookForm.PublishDate}
                    onChange={handlFormChange}
                />


            </div>




            {/* SUBMIT button */}
            <div className="w-full flex justify-end mt-6 px-6">
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition" onClick={handleSubmit}>
                    {isUpdating ? "Update" : "Submit"}
                </button>
            </div>





            {/* List To show the data */}
            <div className="w-full px-6 mt-10">
                {bookList && bookList.length > 0 ? (
                    <table className="w-full border-collapse shadow-md rounded-xl overflow-hidden">
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Book Name</th>
                                <th className="p-3">Book Title</th>
                                <th className="p-3">Author</th>
                                <th className="p-3">Selling Price</th>
                                <th className="p-3">Publish Date</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookList?.map((book, index) => {
                                return (
                                    <tr className="border-b hover:bg-gray-50" key={index}>
                                        <td className="p-3">{book?.BookName}</td>
                                        <td className="p-3">{book?.BookTitle}</td>
                                        <td className="p-3">{book?.Author}</td>
                                        <td className="p-3">{book?.SellingPrice}</td>
                                        <td className="p-3">{book?.PublishDate}</td>
                                        <td className="p-3 flex space-x-3">
                                            <button
                                                className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition"
                                                onClick={() => handleUpdate(book)}
                                            >
                                                <MdEdit size={18} />
                                            </button>
                                            <button
                                                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
                                                onClick={() => handleDelete(book._id)}
                                            >
                                                <MdDelete size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="mt-4 text-center text-gray-500 italic flex flex-col items-center justify-center py-10">
                        <IoBookSharp size={48} className="mb-3 text-gray-400" />
                        <p>No books available. Start by adding your first book!</p>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default Home