import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // console.log(`Even mounted`);
    return () => {
      console.log(`Even unmounted`);
    };
  }, []);

  return <div>Even</div>;
};

export default Even;
