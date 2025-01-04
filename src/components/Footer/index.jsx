import FooterBg from "/footerbg.webp";
import Logo from "/parmanudefenceLogo.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Divider } from "@mui/material";

const footerData = [
  {
    title: "Quick Links",
    children: [
      "About Us",
      "Magazine",
      "Dehradun History",
      "Best Coaching for NDA Exam",
      "Best SSB Coaching in Dehradun",
      "Indian Army TES Exam",
      "Coaching for AIRFORCE X & Y ENTRY",
      "Best Coaching for NAVY SSR & AA",
      "Best Coaching for IMU CET",
      "Best Coaching for MNS EXAM",
      "Best Coaching for CDS EXAM",
      "Best Coaching for AFCAT EXAM",
      "Best NDA Coaching",
    ],
  },
  {
    title: "Download Sector",
    children: [
      "Admission form",
      "Admission Procedure",
      "Get Parmanu Defence App",
      "Life @ Parmanu Defence",
      "Why Parmanu Defence",
      "Guest Faculty of Month",
      "Gallery",
      "NDA Foundation Course",
      "Student Testimonial",
      "Salient Features",
      "Media",
      "Blog",
    ],
  },
];

const Footer = () => {
  return (
    <Box
      className="py-12 md:py-10 lg:py-20 px-5 md:px-8 lg:px-20 bg-cover bg-center bg-no-repeat text-white "
      sx={{
        backgroundImage: `url(${FooterBg})`,
      }}
    >
      <Box className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
       
        <Box className=" space-y-4">
          <img className="w-[250px] h-auto" src={Logo} alt="Parmanu Defence" />
          <p className="text-sm font-semibold">
            Parmanu Defence is a top ranked defence Institute which provides a
            strong infrastructure and platform to Defence aspirants to compete
            in various defence sector exams laying great emphasis on overall
            personality grooming and academic excellence.
          </p>
          <Box className="flex space-x-4 mt-4">
            <Facebook className="cursor-pointer" />

            <Twitter className="cursor-pointer" />
            <LinkedIn className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
          </Box>
        </Box>

        

        {footerData.map((item, index) => (
          <Box key={index}>
            <h2 className="text-xl text-white font-semibold ">{item.title}</h2>
            <Divider
              sx={{
                backgroundColor: "white",
                width: "20%",
                height: "3px",
                marginBottom: "10px",
              }}
            />

            <ul className="space-y-2">
              {item.children.map((link, index) => (
                <li
                  key={index}
                  className="hover:underline cursor-pointer flex gap-1"
                >
                  <KeyboardArrowRightIcon />
                  {link}
                </li>
              ))}
            </ul>
          </Box>
        ))}

        
        <Box>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
          <ul className="space-y-5">
            <li className="flex items-center">
              <Phone className="mr-2" /> 8445901901
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" />
              7078552552
            </li>
            <li className="flex items-center">
              <Email className="mr-2" /> info@parmanudefence.com
            </li>
            <li className="flex items-center">
              <LocationOn className="mr-2" /> 151 Doon Vihar, Dehradun
            </li>
            <li className="flex items-center">
              <AccessTimeIcon className="mr-2 -rotate-90" /> Monday to Saturday
              : 8.30-6.30 PM Sunday: 9.30 to 2.30 PM
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
