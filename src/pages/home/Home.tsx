import AppHeader from "@/components/common/AppHeader";
import HomeSkeleton from "@/features/membership/components/HomeSkeleton";
import { motion } from "framer-motion";
import { useHome } from "@/features/membership/hooks/useHome";

export default function Home() {
  const { banners, services, isLoading, SERVICE_BG_COLORS, handleServiceClick } = useHome();
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
          <HomeSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <AppHeader />

        <div className="mt-10">
          <div className="grid grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-12">
            {services.map((service, i) => (
              <button
                key={service.service_code}
                onClick={() => handleServiceClick(service)}
                className="group flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className="h-14 w-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm"
                  style={{
                    backgroundColor:
                      SERVICE_BG_COLORS[i % SERVICE_BG_COLORS.length],
                  }}
                >
                  <img
                    src={service.service_icon}
                    alt={service.service_name}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-center text-pretty text-xs font-medium leading-tight text-gray-600 max-w-14">
                  {service.service_name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-base font-bold text-gray-900">
            Temukan promo menarik
          </h2>

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...banners, ...banners].map((banner, i) => (
                <div
                  key={i}
                  className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={banner.banner_image}
                    alt={banner.banner_name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
