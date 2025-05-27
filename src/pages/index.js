import Image from "next/image";
import { motion } from "framer-motion";

import Header from "@/components/header";
import { Button } from "@mui/material";
import Title from "@/components/title";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <main className="">
        <section
        // style={{ backgroundImage: `url(/images/bg-image-1.jpg)` }}
        >
          {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}
          <div
            className={
              "container flex gap-8 text-black relative justify-between items-center  py-[40px] border-b border-b"
            }
          >
            <div className="col-span-6">
              <motion.h1
                initial={{ translateY: "-100px" }}
                animate={{ translateY: 0 }}
                transition={{ duration: 0.7 }}
                className={
                  "text-[26px] md:text-[42px] font-bold uppercase z-40"
                }
              >
                <span className="text-[#407BFF]">Reiltorsiz</span> uy topish{" "}
                <span className="text-[#407BFF]">osonroq!</span>
              </motion.h1>{" "}
              <motion.p
                initial={{ translateX: "-100px" }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.7 }}
                className="text-lg mt-[25px]"
              >
                Ijara.uz orqali e’lon joylang yoki oson toping – hech qanday
                vositachi foizlarsiz.
              </motion.p>
              <div className="flex gap-2 mt-[25px] items-center ">
                <Button
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope, sans-serif",
                    border: "1px solid black",
                    color: "black",
                    fontSize: "17px",
                    padding: "8px 40px",
                  }}
                >
                  Uy qidiring
                </Button>
                <p>yoki</p>
                <Button
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope, sans-serif",
                    border: "1px solid black",
                    color: "black",
                    fontSize: "17px",
                    padding: "8px 40px",
                  }}
                >
                  E’lon joylang
                </Button>
              </div>
            </div>
            <div className="col-span-6 block ">
              <motion.div
                initial={{ translateX: "100px" }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={"/icons/house-searching-animate.svg"}
                  alt="svg"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-4 my-[50px]">
          <div className="col-span-12">
            <Title>Biz haqimizda</Title>
          </div>

          <div className="col-span-6">
            <Image
              src={"/icons/about-us.svg"}
              alt="svg"
              width={500}
              height={20}
            />
          </div>

          <div className="col-span-6 space-y-[10px]">
            <h3 className="text-lg font-medium">
              Ijara.uz — bu ijaraga uy topish va e&apos;lon berish jarayonini
              soddalashtiradigan, adolatli va shaffof platforma.
            </h3>

            <p>
              Ko‘pchilik uy ijarasi bozorida noshaffoflik, haddan ortiq xizmat
              haqi va firibgarliklarga duch keladi. Ayniqsa, 50%gacha bo‘lgan
              reiltor to‘lovlari odamlarni qiynaydi.
            </p>
            <p>Ijara.uz ushbu muammolarga yechim bo‘lish uchun yaratildi:</p>
            <ul>
              <li className="flex items-center gap-1 ">
                <Image
                  src={"/icons/checked.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <p>E’lonlarni to‘g‘ridan-to‘g‘ri ko‘rish</p>
              </li>

              <li className="flex items-center gap-1 ">
                <Image
                  src={"/icons/checked.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <p>Bevosita mulkdor bilan bog‘lanish</p>
              </li>

              <li className="flex items-center gap-1 ">
                <Image
                  src={"/icons/checked.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <p>Hech qanday yashirin to‘lovlarsiz</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
