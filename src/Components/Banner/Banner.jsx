import bannerImg from '../../assets/dating-playbook.png';
const Banner = () => {
    return (
        <div className="hero my-10 bg-[rgba(19,19,19,0.05)] rounded-3xl lg:h-[550px]">
            <div className="flex items-center justify-between gap-20 flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm"
                />
                <div>
                    <h1 className="text-[56px] text-[#131313] font-[PlayfairDisplay,serif] font-bold">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn text-white bg-[#23BE0A] rounded-lg p-7 font-bold text-[20px] mt-10">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;