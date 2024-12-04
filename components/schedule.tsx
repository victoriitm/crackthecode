export default function Schedule() {
    return (
      <section id="schedule" className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">Event Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">December 27th: Elimination Round</h3>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="w-20 font-semibold">9:00 AM</span>
                  <span>Registration and Check-in</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">10:00 AM</span>
                  <span>Coding Contest Begins</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">1:00 PM</span>
                  <span>Lunch Break</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">2:00 PM</span>
                  <span>Contest Resumes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">5:00 PM</span>
                  <span>Contest Ends</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">6:00 PM</span>
                  <span>Results Announcement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">December 29th: Hackathon Final</h3>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="w-20 font-semibold">8:00 AM</span>
                  <span>Finalist Check-in</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">9:00 AM</span>
                  <span>Hackathon Kickoff</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">1:00 PM</span>
                  <span>Lunch Break</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">2:00 PM</span>
                  <span>Hackathon Continues</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">6:00 PM</span>
                  <span>Project Submissions</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">7:00 PM</span>
                  <span>Presentations and Judging</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 font-semibold">9:00 PM</span>
                  <span>Awards Ceremony</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  