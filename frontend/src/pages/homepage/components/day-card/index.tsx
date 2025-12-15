import type { ImportantDay } from "@/types";


interface ImportantDayCardProps {
  item: ImportantDay;
}

const DayCard = ({ item }: ImportantDayCardProps) => {
  return (
    <div className="flex flex-col gap-3 pb-3 bg-surface p-4 rounded-xl shadow-sm border border-border-subtle transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        data-alt={item.imageAlt}
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
      />
      <div>
        <p className="text-base font-bold leading-normal">
          {item.title}
        </p>
        <p className="text-text-sub text-sm font-normal leading-normal">
          {item.date}
        </p>
        <p className="text-primary text-sm font-normal leading-normal">
          {item.remaining}
        </p>
      </div>
    </div>
  );
};

export default DayCard;
