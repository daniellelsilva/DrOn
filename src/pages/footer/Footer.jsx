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
          <img src={proxyLogoFooter} alt="proxymed logo"/>

          <div className='footer-icons'>
            {socialIcons.map((icon) => (
              <div className='footer-icon-div'>
                <Icon className='footer-icon' icon={icon.name} />
              </div>
            ))}
          </div>
        </div>

        <div className='footer-qr'>
          logo e qrcode
        </div>
      </main>

      <section className='footer-section'>
        <div className='footer-rights'>
          direitos reservados
        </div>

        <div className='footer-terms'>
          termos
        </div>

      </section>
    </footer>
  )
}
