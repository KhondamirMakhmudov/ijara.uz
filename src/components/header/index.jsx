"use client";

import { Button } from "@mui/material";
import Brand from "../brand";
import { useRouter } from "next/router";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Link from "next/link";
const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "#about-us", label: "Biz haqimizda" },
  // { href: "https://iqmath.uz/", label: "courses" },
  { href: "#faq", label: "Вопросы и ответы" },
  // { href: "/about-olympics", label: "Об олимпиаде" },
];

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center py-[24px] border-b">
      <Brand />

      <nav className="hidden lg:flex justify-center gap-4 items-center">
        {navLinks.map(({ href, label }) =>
          href.startsWith("http") ? (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-3 rounded-md  font-medium uppercase text-[17px]  transition ${
                router.pathname === href ? "text-[#5D87FF]" : "text-[#8A8A8E]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ) : (
            <a
              key={href}
              href={href}
              className={`py-2 px-3 rounded-md  font-medium  text-[17px] transition ${
                router.pathname === href ? "text-[#5D87FF]" : "text-[#8A8A8E]"
              }`}
            >
              {label}
            </a>
          )
        )}
      </nav>

      <div>
        <Button sx={{ textTransform: "initial" }}>
          <Link href={"/login"}>
            <LoginOutlinedIcon sx={{ marginRight: "8px" }} />
            Ro&apos;yxatdan o&apos;tish
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
