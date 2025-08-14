const Book = ({ book }) => {
    const { image, bookName, author, tags } = book;
    return (
        <div className="card bg-base-100 p-6 shadow-sm">
            <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                <img
                    src={image}
                    className="h-[166px]"
                    alt={bookName} />
            </figure>
            <div className="card-body space-y-4 p-0">

                <div className="space-x-3">
                    <div className="badge px-4 py-[7px] badge-soft badge-success mt-6 text-[#23BE0A] font-medium rounded-[30px]">{tags[0]}</div>
                    <div className="badge px-4 py-[7px] badge-soft badge-success mt-6 text-[#23BE0A] font-medium rounded-[30px]">{tags[1]}</div>
                </div>

                <h2 className="card-title text-2xl font-bold font-[PlayfairDisplay,serif]">
                    {bookName}
                </h2>
                <p className="font-medium text-[rgba(19, 19, 19, 0.8)]">By : {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;