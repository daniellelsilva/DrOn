import React from 'react';
import { Icon } from '@iconify/react';
import proxyLogoFooter from '../../images/proxyFooter.svg';
import logoFooter from '../../images/logoFooter.svg';
import qrCode from '../../images/qrCode.svg';
import './Footer.scss';

export default function Footer() {
  const socialIcons = [
    {
      name: "ri:facebook-fill"
    },
    {
      name: "ph:instagram-logo"
    },
    {
      name: "ri:linkedin-box-fill"
    },
    {
      name: "ri:whatsapp-line"
    },
    {
      name: "material-symbols:mail-outline"
    },
  ]
  return (
    <footer className='footer'>
      <main className='footer-main'>
        <div className='footer-social'>
          <img className='footer-img' src={proxyLogoFooter} alt="proxymed logo"/>

          <div className='footer-icons'>
            {socialIcons.map((icon) => (
              <div className='footer-icon-div'>
                <Icon className='footer-icon' icon={icon.name} />
              </div>
            ))}
          </div>
        </div>

        <div className='footer-qr'>
          <img src={logoFooter} alt="Dr.On logo" className='footer-dr-logo'/>
          <img src={qrCode} alt="proxymed logo" className='footer-dr-qr'/>
        </div>
      </main>

      <section className='footer-section'>
        <div className='footer-rights'>
          <p>@PROXYMED, ALL RIGHTS RESERVED</p>
        </div>

        <div className='footer-terms'>
          <p>Terms and conditions</p>
          <p>COOKIE POLICY</p>
        </div>

      </section>
    </footer>
  )
}
