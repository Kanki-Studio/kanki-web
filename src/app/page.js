import { enums_service } from "./enums";

export default function Home() {
  return (
    <main className=" flex flex-col  w-full">
      <section id="jumbotron">
        <div className="overlay"></div>
        <div className="container mx-auto text-white absolute z-50 left-5 w-full grid place-items-center h-screen">
          <div>
            <h3 className="text-white text-center text-6xl font-black z-50 xl:text-8xl">
              Xperience Kanki
            </h3>

            <h6 className="text-black-60 text-center mt-5">
              Where Creativity Meets Infinity
            </h6>
          </div>
        </div>
      </section>

      <section id="services" className="py-44">
        <h2 className="uppercase font-extrabold text-5xl mb-20 text-center">
          Our services
        </h2>

        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 gap-14 xl:grid-cols-3">
            {enums_service.map((data) => (
              <div
                className="bg-white rounded-lg p-10 drop-shadow-lg"
                key={data.title}
              >
                <h4 className="capitalize text-3xl font-bold text-black-100">
                  {data.title}
                </h4>

                <h5 className="mt-5 text-black-80">{data.content}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className=" py-44">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1  gap-20 xl:grid-cols-2">
            <div>
              <h3 className="uppercase font-semibold text-black-100 text-5xl">
                our projects
              </h3>
            </div>

            <div className="bg-black-50 w-full h-72 rounded-bl-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
