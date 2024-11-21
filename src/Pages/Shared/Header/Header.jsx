import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='space-y-3 text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-medium'>{moment().format("dddd")}<span className='text-[#706F6F]'>{moment().format(", MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;