const PersonalEvent = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-background-dark/30 rounded-xl p-8 shadow-sm border border-black/5 dark:border-white/10">
        {/* Left content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181111] dark:text-white">
            Create Your Personal Countdown Events
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">
            Never miss a birthday, anniversary, or important appointment again.
            Add your own events and get timely reminders.
          </p>

          <button
            type="button"
            className="mt-6 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90"
          >
            <span className="truncate">Add Personal Event</span>
          </button>
        </div>

        {/* Right image */}
        <div className="shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcf3PPYorfnpcaitX8ghuSdqK5RgmgpuuEDPg2HI-AvNGxDmqUojUnSS4QjaqtACMx9VIR0AEXu0XPJwJrRefkN0CYbF8aBwza93VUECUU8mKfZdQOY39Ab8DUlapU4CS1vBSvKJKXttuBo38BKfk5yDAHHMZt66sdUG8HicIwVzIJkJgZwxkRLo0TE54uJPBtozuRwL_SveUTOy584JSdDzB54C0haS8tk-y2kCMoPk6mC15J-uDsc1lD7PzAeTeOlfIAZ79RrxQ2"
            alt="Calendar with a star icon illustration"
            className="h-40 w-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalEvent;
