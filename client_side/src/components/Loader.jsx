import React from "react";
import Loading from "../../public/LoadingSunSet.gif";
import Typewriter from "typewriter-effect";
const Loader = ({ content }) => {
  const [isLoading, setisLoading] = React.useState({
    timer: 0,
    Loading: true,
    reload: false,
  });

  React.useEffect(() => {
    window.onload = setisLoading({ Loading: false, timer: 0, reload: false });
    if (isLoading.Loading) {
      setInterval(() => {
        setisLoading((current) => ({
          ...current,
          timer: (isLoading.timer += 1),
        }));
      }, 1000);
    }
    setisLoading((current) => ({
      ...current,
      reload: isLoading.timer > 8 ? true : false,
    }));
  }, []);

  return (
    <div
      className={`w-full m-auto flex items-center place-self-center self-center justify-center flex-col `}
    >
      <img src={Loading} className={`h-[130px]`} />
      <p className={`font-[openSauce] text-[15px]  `}>
        {`Loading ${content || `content`}`}{" "}
        {isLoading.reload && (
          <Typewriter
            options={{
              strings: [
                `seem like the loading is taking longer than expected `,
              ],
              cursor: "",
            }}
          />
        )}
      </p>
    </div>
  );
};

export default Loader;
