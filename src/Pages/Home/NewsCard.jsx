import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {

    const { _id, title, author, image_url, details } = news

    return (
        <div className='mb-[30px]'>
            <div className='bg-[#F3F3F3] p-5 flex justify-between rounded-md'>
                <div className='flex gap-4'>
                    <img className='w-[45px] h-[45px] rounded-full' src={author.img} alt="" />
                    <div>
                        <p className='font-semibold'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <a className='text-2xl' href=""><FaRegBookmark></FaRegBookmark></a>
                    <a className='text-2xl' href=""><IoShareSocialOutline></IoShareSocialOutline></a>
                </div>
            </div>
            <div className='p-5'>
                <p className='font-bold text-xl'>{title}</p>
                <img className='mt-5 mb-8' src={image_url} alt="" />
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`news/${_id}`} className='text-[#FF8C47] font-semibold'>Read More...</Link></p> :
                        <p>{details}</p>
                }
                <hr className='mt-5' />

                {/* rating */}
                <div>
                    
                </div>

            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;