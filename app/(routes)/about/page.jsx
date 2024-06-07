import Image from "next/image";

function About() {
  return (
    <div className="bg-white py-24 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#18698A] sm:text-4xl">
            Communitask Team
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative mt-8 flex items-start gap-x-4">
              <Image
                src="/dev1.jpg"
                width={100}
                height={100}
                alt="developer"
                className="bg-gray-50 rounded-lg"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    Jie Clark M Terec
                  </a>
                </p>
                <p className="text-[#18698A]">Front-End Developer</p>
                <p className="text-gray-600">BSIT</p>
              </div>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Role: Web Frontend and Mobile Frontend
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative mt-8 flex items-start gap-x-4">
              <Image
                src="/dev2.jpg"
                width={100}
                height={100}
                alt="developer"
                className="bg-gray-50 rounded-lg"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    Neil Coleen J. Acero
                  </a>
                </p>
                <p className="text-[#18698A]">Front-End Developer & Database</p>
                <p className="text-gray-600">BSIT</p>
              </div>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Role: Database and Documentation
              </p>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative mt-8 flex items-start gap-x-4 ">
              <Image
                src="/dev3.jpg"
                width={100}
                height={100}
                alt="developer"
                className="bg-gray-50 rounded-lg"
              />
              <div className="text-sm leading-6 ">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    James Heinrich Rocales
                  </a>
                </p>
                <p className="text-[#18698A]">
                  Back-End Developer & Documentation
                </p>
                <p className="text-gray-600">BSIT</p>
              </div>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Role: Web Backend and Mobile Backend
              </p>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative mt-8 flex items-start gap-x-4">
              <Image
                src="/dev4.jpg"
                width={100}
                height={100}
                alt="developer"
                className="bg-gray-50 rounded-lg"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    Kate Danica Baul
                  </a>
                </p>
                <p className="text-[#18698A]">Documentation</p>
                <p className="text-gray-600">BSIT</p>
              </div>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Role: Document and Diagrams
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
