import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { Footer as UIFooter } from '@/components/ui/footer';

export default function Footer() {
  return (
    <UIFooter
      logo={<Instagram className="h-10 w-10" />}
      brandName="Viktor Mózsa"
      socialLinks={[
        {
          icon: <Instagram className="h-5 w-5" />,
          href: "https://www.instagram.com/theviktorm/",
          label: "Instagram",
        },
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "https://x.com/moneybag_viktor",
          label: "Twitter",
        },
      ]}
      mainLinks={[
        { href: "/", label: "Home" },
        { href: "/masterclasses", label: "Masterclasses" },
        { href: "/newsletter", label: "Newsletter" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ]}
      copyright={{
        text: "© 2025 Viktor Mózsa",
        license: "All rights reserved",
      }}
    />
  );
}