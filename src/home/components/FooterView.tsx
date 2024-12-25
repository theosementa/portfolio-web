import { observer } from "mobx-react-lite";
import { NetworkPath } from "../../core/network/NetworkPath";
import { SocialMediaStore } from "../../core/network/social-media/SocialMediaStore";

export const FooterView = observer(() => {
  const socialMedias = SocialMediaStore.shared.socialMedias;

  return (
    <div className="flex flex-col bg-background-100 p-12 gap-8 items-center justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-12">
        {
          socialMedias.map((socialMedia) => (
            <div className="group relative inline-block">
              <img
                src={NetworkPath.baseUrl + socialMedia.logo}
                alt={socialMedia.name}
                className="h-8 w-8 cursor-pointer"
                onClick={() => window.open(socialMedia.link)}
              />

              <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-background-200 py-1 px-2 rounded shadow-lg whitespace-nowrap">
                  <p className="font-sans font-semibold text-white text-sm">{socialMedia.name}</p>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background-200" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <p className="font-sans font-medium text-white text-center">© 2024 Sementa Théo. All rights reserved.</p>
    </div>
  )
})