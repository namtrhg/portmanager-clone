import Button from 'components/Button'

export const GetProductSection = () => {
  return (
    <section className="container mx-auto pt-16 pb-24">
      <div className="flex flex-col justify-center items-center">
        <a href="/" className="my-4">
          <Button>
            <span className="text-lg font-semibold">
              Get Port Manager for macOS
            </span>
          </Button>
        </a>
        <small className="text-primary">
          Works with macOS Sierra (10.12 ) and above.
        </small>
      </div>
    </section>
  )
}
