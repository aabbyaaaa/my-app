import { IconBrandFacebook, IconBrandTwitter, IconBrandLine, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-red text-slate-800 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-center text-center md:text-left">
          <div className="flex justify-center lg:justify-start items-center">
            <a href="https://dgs.com.tw/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <img src="https://dgs.com.tw/img/header/logo.svg" alt="DGS Logo" className="h-12 w-auto" />
            </a>
          </div>

          <div className="flex justify-center md:justify-start">
            <p className="opacity-75">
              <a href="tel:02-2684-1142" className="hover:underline">02-2684-1142</a>
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <p className="opacity-75">
              <a href="mailto:doggerco@ms42.hinet.net" className="hover:underline">doggerco@ms42.hinet.net</a>
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <ul className="flex items-center gap-3">
              <li>
                <a href="https://www.facebook.com/doggerco/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center">
                  <IconBrandFacebook size={18} />
                </a>
              </li>
              <li>
                <a href="https://lin.ee/VvNtwft" target="_blank" rel="noopener noreferrer" aria-label="LINE" className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-[#06C755] hover:text-white transition-colors flex items-center justify-center">
                  <IconBrandLine size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <p className="opacity-75">&copy; Copyright c Dogger Science.All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

