"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Image as ImageIcon,
  ImagePlus,
  Palette,
  Landmark,Warehouse,
  Mic,MicOff ,ALargeSmall,CaseSensitive,Share2,Waypoints
  ,
  Lock,TrendingDown ,TrendingUp ,
  Unlock,
} from "lucide-react";


const assets = [
  {
    id: 1,
    icon: <Share2 size={64} className="text-blue-300" />,
    hoverIcon: <Waypoints size={64} />,
    title: "Framework",
    color: "#2C3A58",
    iconColor: "text-blue-300",
    area: "framework",
  },
  {
    id: 2,
    icon: <MicOff size={64} className="text-yellow-900" />,
    hoverIcon: <Mic size={64} />,
    title: "Voice & Tone",
    color: "#F5C531",
    iconColor: "text-yellow-900",
    area: "voice",
  },
  {
    id: 3,
    icon: <Landmark size={64} className="text-cyan-900" />,
    hoverIcon: <Warehouse size={64} />,
    title: "Logo",
    color: "#00C2E5",
    iconColor: "text-cyan-900",
    area: "logo",
  },
  {
    id: 4,
    icon: <ALargeSmall size={64} className="text-red-900" />,
    hoverIcon: <CaseSensitive size={64} />,
    title: "Typography",
    color: "#fa551e",
    iconColor: "text-red-900",
    area: "typography",
  },
  {
    id: 5,
    icon: <TrendingDown  size={64} className="text-purple-900" />,
    hoverIcon: <TrendingUp size={64} />,
    title: "Motion",
    color: "#C9A2E1",
    iconColor: "text-purple-900",
    area: "motion",
  },
  {
    id: 6,
    icon: <Lock size={64} className="text-green-900" />,
    hoverIcon: <Unlock size={64} />,
    title: "Iconography",
    color: "#9BD438",
    iconColor: "text-green-900",
    area: "iconography",
  },
  {
    id: 7,
    icon: <Palette size={64} className="text-orange-900" />,
    hoverIcon: <Palette size={64} />,
    title: "Color",
    color: "#ff8c19",
    iconColor: "text-orange-900",
    area: "color",
  },
  {
    id: 8,
    icon: <ImageIcon size={64} className="text-pink-400" />,
    hoverIcon: <ImagePlus size={64} />,
    title: "Imagery",
    color: "#972C6C",
    iconColor: "text-pink-400",
    area: "imagery",
  },
];

export default function AssetGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleClick = (area: string) => {
    const target = document.getElementById(area);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);



  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-24 px-8 md:px-20 bg-white min-h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-6 grid-rows-6 gap-4 grid-areas"
      >
        {assets.map((asset) => (
          <motion.div
            key={asset.id}
            variants={item}
            onMouseEnter={() => setHoveredId(asset.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleClick(asset.area)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000000",
              transition: { type: "spring", stiffness: 300 },
            }}
            className={`relative flex items-center justify-center rounded-lg cursor-pointer overflow-hidden ${asset.area}  h-full`}
            style={{ backgroundColor: asset.color }}
          >
            {/* Title */}
            <motion.h2
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`text-2xl font-semibold absolute top-4 left-4 z-10 ${
                hoveredId ? "text-white" : `${asset.iconColor}`
              }`}
            >
              {asset.title}
            </motion.h2>

            {/* Dynamic Icon */}
            <motion.div
              whileHover={{
                y: -5,
                rotate: 10,
                scale: 1.2,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              className="absolute bottom-4 right-4 z-10"
            >
              {hoveredId === asset.id ? asset.hoverIcon : asset.icon}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Grid areas */}
      <style jsx global>{`
        .grid-areas {
          display: grid;
          grid-template-areas:
            "framework framework voice voice voice logo"
            "framework framework voice voice voice logo"
            "iconography iconography color color color logo"
            "iconography iconography color color color typography"
            "imagery imagery imagery imagery motion typography"
            "imagery imagery imagery imagery motion typography";
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(6, 150px);
        }
        .framework {
          grid-area: framework;
        }
        .voice {
          grid-area: voice;
        }
        .logo {
          grid-area: logo;
        }
        .typography {
          grid-area: typography;
        }
        .motion {
          grid-area: motion;
        }
        .iconography {
          grid-area: iconography;
        }
        .color {
          grid-area: color;
        }
        .imagery {
          grid-area: imagery;
        }
      `}</style>

    </section>
  );
}
