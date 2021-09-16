const stories = [
  {
    time: '9.02 a.m.',
    icon: (
      <span role="img" aria-label="face" className="m-4 h-8 w-8">
        👩‍💻
      </span>
    ),
    content: (
      <p>
        You fire up a project and are interrupted by an obnoxious{' '}
        <strong>EADDRINUSE</strong> message.
      </p>
    ),
  },
  {
    time: '9.04 a.m.',
    icon: (
      <span role="img" aria-label="cloud" className="m-4 h-8 w-8">
        💭
      </span>
    ),
    content: (
      <>
        <p className="italic">"How do I kill a process on mac?"</p>
        <p className="my-4">
          Frustrated, you do some Googling and find a series of commands on
          StackOverflow.
        </p>
      </>
    ),
  },
  {
    time: '9.06 a.m.',
    icon: (
      <span role="img" aria-label="bang" className="m-4 h-8 w-8">
        💥
      </span>
    ),
    content: (
      <p>
        You fumble around in terminal with some unfamiliar commands until you
        manage to kill the process.
      </p>
    ),
  },
  {
    time: '2 days later...',
    icon: (
      <span role="img" aria-label="sad" className="m-4 h-8 w-8">
        😫
      </span>
    ),
    content: (
      <p>
        You get another <strong>EADDRINUSE</strong> message. You open Google and
        type "How do I kill a process on mac?".
      </p>
    ),
  },
]

export const TimelineSection = () => {
  return (
    <section className="container mx-auto p-8">
      <h3 className="text-primary text-xl text-center leading-6 font-medium pb-8 m-2">
        If you’re a developer, this story will sound familiar.
      </h3>
      <div className="flex flex-col">
        {stories.map((story, index) => (
          <div key={index} className="flex mb-8">
            <div className="w-1/4 flex justify-end items-center">
              <p className="text-xl text-primary font-mono">{story.time}</p>
              <div>{story.icon}</div>
            </div>
            <p className="w-3/4 text-lg text-primary font-normal self-center my-4 whitespace-pre-wrap">
              {story.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
