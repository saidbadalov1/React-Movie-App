import { socialLinks } from '../../../constants/constants';

const Footer = () => {
  return (
    <div className='container mx-auto px-5 py-12'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex gap-10'>
          {socialLinks?.map((social) => (
            <a
              target='_blank'
              rel='noreferrer'
              key={social.id}
              href={social.url}
            >
              <social.Icon />
            </a>
          ))}
        </div>
        <div className='text_lg flex gap-4 mt-6 font-bold sm:flex-row flex-col sm:text-left text-center'>
          <h4>Conditions of Use</h4>
          <h4>Privacy & Policy</h4>
          <h4>Press Room</h4>
        </div>
        <div className='text-base font-bold mt-3'>
          <span>© 2023 MovieBox by Said Badalov</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
