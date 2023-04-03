import React from 'react';
import { Icon } from '@iconify/react';
import proxyLogoFooter from '../../images/proxyFooter.svg';
import logoFooter from '../../images/logoFooter.svg';
import qrCode from '../../images/qrCode.svg';
import './Footer.scss';

export default function Footer() {
  const socialIcons = [
    {
      name: "ri:facebook-fill",
      link: 'https://www.facebook.com/doutoronapp',
    },
    {
      name: "ph:instagram-logo",
      link: 'https://www.instagram.com/doutoron.app/',
    },
    {
      name: "ri:linkedin-box-fill",
      link: 'https://www.linkedin.com/company/dr-on/',
    },
    {
      name: "ri:whatsapp-line",
      link: 'https://wa.me/5549991345099',
    },
    {
      name: "material-symbols:mail-outline",
      link: 'contato@doutoron.app',
    },
  ]
  return (
    <footer className='footer'>
      <section className='footer-main'>
        <div className='footer-social'>
          <img className='footer-img' src={proxyLogoFooter} alt="proxymed logo"/>

          <div className='footer-icons'>
            {socialIcons.map((icon, index) => (
              <div key={index} className='footer-icon-div'>
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className='footer-icon' icon={icon.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className='footer-qr'>
          <img src={logoFooter} alt="Dr.On logo" className='footer-dr-logo'/>
          <img src={qrCode} alt="proxymed logo" className='footer-dr-qr'/>
        </div>
      </section>

      <section className='footer-section'>
        <div className='footer-rights'>
          <p>@PROXYMED, ALL RIGHTS RESERVED</p>
        </div>

        <div className='footer-terms'>
          {/* <p>Terms and conditions</p>
          <p>COOKIE POLICY</p> */}
        </div>

      </section>
    </footer>
  )
}
