const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left lg:px-8">
        <p className="font-geist text-lg font-semibold text-white">
          Nexora <span className="text-[#c0c1ff]">AI</span>
        </p>

        <p className="text-sm text-slate-500">
          © 2024 Nexora AI Inc. All rights reserved. Designed for the Future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;