import { importantDays } from "@/data";
import DayCard from "../day-card";



const UpcomingDays = () => {
  return (
    <section>
      <div className="flex items-center justify-between pb-3 pt-5">
        <h2 className="text-text-main text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Upcoming Important Days
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 py-4">
        {importantDays.map((item) => (
          <DayCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingDays;
