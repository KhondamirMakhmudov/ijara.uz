import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/header";
import { Button } from "@mui/material";
import Title from "@/components/title";
import Card from "@/components/card";
import QuizIcon from "@mui/icons-material/Quiz";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LockIcon from "@mui/icons-material/Lock";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import GroupIcon from "@mui/icons-material/Group";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const MotionImage = motion(Image);

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
              "container flex gap-8 text-black relative justify-between items-center  py-[40px] border-b"
            }
          >
            <div className="col-span-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-[26px] md:text-[42px] font-bold uppercase z-40"
                >
                  <span className="text-[#407BFF]">Reiltorsiz</span> uy topish{" "}
                  <span className="text-[#407BFF]">osonroq!</span>
                </motion.h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-lg mt-[25px]"
                >
                  Ijara.uz orqali e’lon joylang yoki oson toping – hech qanday
                  vositachi foizlarsiz.
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex gap-2 mt-[25px] items-center"
                >
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
                </motion.div>
              </motion.div>
            </div>
            <div className="col-span-6 block ">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                {/* H1, p, buttonlar */}

                <MotionImage
                  src="/icons/house-searching-animate.svg"
                  alt="svg"
                  width={600}
                  height={400}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-4 py-[50px] border-b">
          <div className="col-span-12">
            <Title>Biz haqimizda</Title>
          </div>

          <div className="col-span-4">
            <Image
              src={"/icons/about-us.svg"}
              alt="svg"
              width={500}
              height={20}
            />
          </div>

          <div className="col-span-8 space-y-[10px]">
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
            <ul className="py-[15px]  flex items-center justify-between">
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
            <div className="flex gap-4 items-start mt-[15px]">
              <Card
                title={"Nega biz?"}
                icon={<QuizIcon sx={{ color: "white", fontSize: "28px" }} />}
              >
                <ul className="mt-[15px] space-y-[8px]">
                  <li className="flex items-start gap-1 ">
                    <BusinessCenterIcon sx={{ color: "#407BFF" }} />
                    <p>Biz vositachilikni bekor qilamiz </p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <SmartphoneIcon sx={{ color: "#407BFF" }} />
                    <p>Bevosita mulkdor bilan bog‘lanish</p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <LockIcon sx={{ color: "#407BFF" }} />
                    <p>
                      Foydalanuvchi xavfsizligi — telefon raqamlar yashiriladi,
                      faqat ro‘yxatdan o‘tgach ochiladi
                    </p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <PublicOutlinedIcon sx={{ color: "#407BFF" }} />
                    <p>Butun O‘zbekiston bo‘yicha qamrov</p>
                  </li>
                </ul>
              </Card>

              <Card
                title={"Kimlar uchun?"}
                icon={
                  <PersonPinIcon sx={{ color: "white", fontSize: "28px" }} />
                }
              >
                <ul className="mt-[15px] space-y-[8px]">
                  <li className="flex items-start  gap-1 ">
                    <FamilyRestroomOutlinedIcon sx={{ color: "#407BFF" }} />
                    <p>Ijaraga uy izlayotganlar </p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <GroupIcon sx={{ color: "#407BFF" }} />
                    <p>Uy egalari va ijarachilar </p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <EmojiPeopleIcon sx={{ color: "#407BFF" }} />
                    <p>Uy-joy ko‘chirishni xohlovchilar</p>
                  </li>

                  <li className="flex items-start gap-1 ">
                    <AccountBalanceWalletIcon sx={{ color: "#407BFF" }} />
                    <p>
                      Ortiqcha vositachiliksiz iqtisod qilishni istaydiganlar
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-4 py-[50px]">
          <div className="col-span-12">
            <Title>Afzalliklar</Title>
          </div>
        </section>
      </main>
    </div>
  );
}
