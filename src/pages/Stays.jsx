import { useFetch } from "../hooks/useFetch";
import StayCard from "../components/StayCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Stays = () => {
  const { data, loading, error, retry } = useFetch("/data/stays.json");

  if (loading) return <Loader />;

  if (error) {
    return <Error message={error} onRetry={retry} />;
  }

  if (!data.length) {
    return (
      <h2 className="text-center py-10">No stays available at the moment.</h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {data.map((stay) => (
        <StayCard key={stay.id} stay={stay} />
      ))}
    </div>
  );
};

export default Stays;
