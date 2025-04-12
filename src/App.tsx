import "./App.css";
import LinkToSocial from "./components/LinkToSocial.tsx";
import BottomLinks from "./components/BottomLinks.tsx";

function App() {
  return (
    <>
      <div className="relative flex flex-col items-center pb-5">
        <div className="-mt-4">
          <div className="w-48 h-48 overflow-hidden rounded-full p-2 border-2 border-black">
            <img
              src="/PicOfMe.jpg"
              alt="Pic of me"
              className="w-full h-full object-cover object-top scale-110 rotate-[-3deg]"
            />
          </div>
        </div>
        <div className="font-h2 text-4xl pt-5">Franco Dominguez</div>
      </div>
      <LinkToSocial
        title="Instagram"
        links={["https://www.instagram.com/franco_antonio_dominguez/"]}
        icon="instagram.png"
        gradientColors={["#feda75", "#fa7e1f", "#d62976", "#9530bf", "#4f5bd5"]}
      />
      <LinkToSocial
        title="Discord"
        links={["https://discord.com/users/222404358292111360"]}
        icon="discord.png"
        gradientColors={["#7289da", "#1cb955", "#7289da", "#424549", "#202225"]}
      />
      <LinkToSocial
        title="GitHub"
        links={["https://github.com/FrancoDominguez"]}
        icon="github.png"
        gradientColors={["#1b1f52", "#62275C", "#942550", "#3a234c", "#000e0d"]}
      />
      <LinkToSocial
        title="Email"
        links={["mailto:franco.dominguez343+mylinkdepo@gmail.com"]}
        icon="mail.png"
        gradientColors={["#c71610", "#c71610", "#f2a60c", "#3b60c4", "#08851b"]}
      />

      <LinkToSocial
        title="LinkedIn"
        links={["https://www.linkedin.com/in/franco-dominguez-noriega/"]}
        icon="linkedin.png"
        gradientColors={["#ffffff", "#ffffff", "#0077b5", "#0077b5", "#ffffff"]}
      />

      <div className="flex flex-row justify-center items-center pt-3">
        <BottomLinks
          title="strava"
          icon="strava.png"
          link="https://www.strava.com/athletes/66301940"
        />
        <BottomLinks
          title="snapchat"
          icon="snapchat.png"
          link="https://l.messenger.com/l.php?u=https%3A%2F%2Fsnapchat.com%2Ft%2FQJl21TOi&h=AT3tNbhXZHMBZ4VN-wGewBhgbWRk1iTlGgRYPFpjobLYcDCNGl51TB4CDTQ7InJsDNmaHaQyYMpbtgeaKgtB5Vxy90ivQx2frHDz-8-KvmAP7P2ny2Dd5Icvk42AUpvMC3FUQA"
        />
      </div>
    </>
  );
}

export default App;
