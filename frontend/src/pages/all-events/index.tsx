import EventsToolbar from './components/events-toolbar'
import EventCard from './components/event-card'
import EventsPagination from './components/events-pagination'

const AllEventsPage = () => {
  return (
    <main className="space-y-8 pt-10">
      {/* Toolbar */}
      <div className="bg-white dark:bg-background-dark/50 rounded-2xl border p-4 md:p-6">
        <EventsToolbar />
      </div>

      {/* Events grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <EventCard key={index} />
        ))}
      </section>

      {/* Pagination */}
      <EventsPagination />
    </main>
  )
}

export default AllEventsPage
