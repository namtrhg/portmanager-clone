export const TimelineSection = () => {
  return (
    <section className="section p-8 md:max-w-[1064px]">
      <h3 className="text-1.3 text-primary leading-1.4 font-medium text-center my-2 pb-8">
        If you’re a developer, this story will sound familiar.
      </h3>
      <div className="md:relative">
        <div className="flex flex-wrap md:flex-nowrap md:items-center mb-8 text-[18px] last:mb-0">
          <div className="font-mono font-extralight text-primary text-[19.8px] md:w-[180px] text-left md:text-right md:flex-shrink-0 self-center">
            9.02 a.m.
          </div>
          <div className="h-8 w-8 flex m-4 items-center justify-center text-[22.4px] rounded-full bg-white">
            <span className="md:timeline_line" />
            👩‍💻
          </div>
          <dd className="text-18 leading-snug text-primary">
            <p className="my-[18px]">
              You fire up a project and are interrupted by an obnoxious{' '}
              <strong>EADDRINUSE</strong> message.
            </p>
          </dd>
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:items-center mb-8 text-[18px] last:mb-0">
          <div className="font-mono font-extralight text-primary text-[19.8px] md:w-[180px] text-left md:text-right md:flex-shrink-0 self-center">
            9.04 a.m.
          </div>
          <div className="h-8 w-8 flex m-4 items-center justify-center text-[22.4px] rounded-full bg-white">
            💭
          </div>
          <div className="text-18 leading-snug text-primary">
            <p className="my-[18px]">
              <em>"How do I kill a process on mac?"</em>
            </p>
            <p className="my-[18px]">
              Frustrated, you do some Googling and find a series of commands on
              StackOverflow.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:items-center mb-8 text-[18px] last:mb-0">
          <div className="font-mono font-extralight text-primary text-[19.8px] md:w-[180px] text-left md:text-right md:flex-shrink-0 self-center">
            9.06 a.m.
          </div>
          <div className="h-8 w-8 flex m-4 items-center justify-center text-[22.4px] rounded-full bg-white">
            💥
          </div>
          <div className="text-18 leading-snug text-primary">
            <p className="my-[18px]">
              You fumble around in terminal with some unfamiliar commands until
              you manage to kill the process.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap md:items-center mb-8 text-[18px] last:mb-0">
          <div className="font-mono font-extralight text-primary text-[19.8px] md:w-[180px] text-left md:text-right md:flex-shrink-0 self-center">
            2 days later...
          </div>
          <div className="h-8 w-8 flex m-4 items-center justify-center text-[22.4px] rounded-full bg-white">
            😫
          </div>
          <div className="text-18 leading-snug text-primary">
            <p className="my-[18px]">
              You get another <strong>EADDRINUSE</strong> message. You open
              Google and type <em>"How do I kill a process on mac?"</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
