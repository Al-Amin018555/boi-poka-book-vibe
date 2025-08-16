import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToDb";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const books = useLoaderData();

    const book = books.find(book => id === book.bookId);

    const { image, bookName, author, review, totalPages, rating, tags, category, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. Understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array,list,collection
         * 4. check: if the bok is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */
        addToStoredReadList(id)
    }

    const handleAddToWishList = (id) => {

        addToStoredWishList(id);

    }
    return (

        <div className="hero mt-12 mb-[100px] h-[725px]">
            <div className="hero-content gap-12 flex-col p-0 w-full lg:flex-row">
                <div className="bg-[rgba(19,19,19,0.05)] w-1/2 rounded-2xl p-16">
                    <img
                        src={image}
                        className="w-[425px] h-[564px] rounded-lg shadow-2xl"
                    />
                </div>

                <div className="w-1/2">

                    <h1 className="text-[40px] font-[PlayfairDisplay,serif] text-[#131313] truncate font-bold">{bookName}</h1>
                    <p className="font-medium mt-4 text-[20px] text-[rgba(19,19,19,0.8)]">By : {author}</p>

                    <div className="divider"></div>
                    <p className="font-medium text-[20px] text-[rgba(19,19,19,0.8)]">{category}</p>
                    <div className="divider"></div>

                    <p className="text-justify">
                        <span className="font-bold">Review : </span><span className="text-[rgba(19,19,19,0.7)]">{review}</span>
                    </p>
                    <div className="space-x-4 mt-6"><span>Tag </span>
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                    <div className="divider"></div>

                    <div className="flex gap-14">
                        <div className="text-[rgba(19,19,19,0.7)]">
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating:</p>
                        </div>
                        <div className="font-semibold text-[#131313]">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>

                    </div>
                    <div className="mt-8 font-semibold text-[18px] space-x-4">
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn px-6 border-[rgba(119,50,50,0.32)] btn-neutral btn-outline">Mark as Read</button>
                        <button onClick={() => handleAddToWishList(bookId)} className="btn px-6  text-white rounded-lg btn-info">Add to Wish List</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetail;