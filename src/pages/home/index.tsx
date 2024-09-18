import { useRouter } from "next/router";






const HomePage = () => {

  const router = useRouter();

  const jobSelection = (path: string) => {
    router.push(path);
  }


  return (
    <div className="home-page">
      <div className="home-container">
        Industrial engineer
        <button className="button">

        </button>
      </div>
      <div className="home-container">
        Developer
        <button
          className="button"
          onClick={() => jobSelection("/musician")}>
        </button>
      </div>
      <div className="home-container">
        Musician
        <button className="button">

        </button>
      </div>
    </div>
  );
};

export default HomePage;
