import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";                 // Simple Icons brand logo

export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="flex items-center justify-between w-full p-5 bg-white">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Los Tres Gudinos. All rights reserved.
        </p>

        <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2"><FaPhone className="size-5"/> 832-988-6550</p>
            <p className="flex items-center gap-2"><MdEmail className="size-5"/> eduardogudino37@gmail.com</p>
        </div>

        <div className="flex flex-col gap-4 w-75">
            <span><b>About Los Tres Gudinos</b></span>
            <p className="text-sm">Los Tres Gudinos has more than 15 years of experience in the Houston construction industry and works to deliver top-notch service to you.</p>
            <SiFacebook className="size-7"/>
        </div>
      </div>
    </footer>
  );
};
