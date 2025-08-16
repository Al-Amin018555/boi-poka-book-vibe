import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, image, bookName, category, author, tags, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 p-6 shadow-sm">
                <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body space-y-4 p-0">

                    <div className="space-x-3">
                        {
                            tags.map((tag, index) => <div key={index} className="badge px-4 py-[7px] badge-soft badge-success mt-6 text-[#23BE0A] font-medium rounded-[30px]">{tag}</div>)
                        }
                    </div>

                    <h2 className="card-title text-2xl font-bold font-[PlayfairDisplay,serif]">
                        {bookName}
                    </h2>
                    <p className="font-medium text-[rgba(19, 19, 19, 0.8)]">By : {author}</p>

                    <div className="border-b-2 border-dashed border-gray-300 m-0"></div>

                    <div className="card-actions justify-start">

                        <p className="text-[rgba(19, 19, 19, 0.8)] font-medium">{category}</p>

                        <div className="flex gap-2 text-[16px] items-center">
                            <p>{rating}</p>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-10" className="rating-hidden bg-green-400" aria-label="clear" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-400" aria-label="1 star" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-400" aria-label="3 star" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-400" aria-label="4 star" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-400" aria-label="5 star" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;