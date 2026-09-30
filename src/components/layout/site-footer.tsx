import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";                 // Simple Icons brand logo

const COMPANY_EMAIL = process.env.COMPANY_EMAIL;
export const SiteFooter = () => {
  return (
    <footer className="border-t bg-white">
      <div className="page-container grid gap-8 py-12 sm:grid-cols-2 md:py-16">
        <div className="space-y-3">
            <p className="font-khand text-xl font-bold">About Los Tres Gudinos</p>
            <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">Los Tres Gudinos has more than 15 years of experience in the Houston construction industry and works to deliver top-notch service to you.</p>
        </div>

        <div className="space-y-3 sm:justify-self-end">
            <p className="font-khand text-xl font-bold">Contact</p>
            <a href="tel:8329886550" className="flex items-center gap-2 text-sm hover:underline"><FaPhone className="size-4"/> (832) 988-6550</a>
            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 text-sm break-all hover:underline"><MdEmail className="size-4 shrink-0"/> {COMPANY_EMAIL}</a>
            <a href="https://facebook.com/profile.php?id=100063528612566" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline"><SiFacebook className="size-4"/> Facebook</a>
        </div>
      </div>

      <div className="border-t">
        <p className="page-container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Los Tres Gudinos. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
