import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  // const events = await getAllEvents({
  //   query: searchText,
  //   category: category,
  //   page: page,
  //   limit: 6
  // });

  // console.log(events)
  return (
    <>
      <section className="bg-slate-50 py-5 md:py-10">
        <div className=" wrapper grid grid-cols-1 gap-2 md:grid-cols-2 2xl:gap-20">
          <Image
            src="/assets/images/hero2.png"
            alt="hero"
            width={450}
            height={450}
            className="rounded-2xl place-self-center object-contain object-center"
          />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Empower, Equip, Evolve: Practical Accessibility, Your Workshop!
            </h1>

            <p className="p-regular-20 md:p-regular-24">
            Embark on an Inclusive Journey with Insights from Experts Worldwide!
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events" className='font-bold'>Explore Workshops</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className='flex'>
      <section
        id="events"
        className="rounded-lg w-full flex flex-col gap-12 md:gap-20 py-20 px-20 bg-slate-50"
      >
        <h2 className="my-20 h2-bold mx-auto w-max">
          Crafting Experiences, Shaping Perspectives
        </h2>
        <div className="flex justify-center space-around w-full flex-col gap-20 md:flex-row">

        
        <div className=' w-1/4 rounded-xl shadow-lg bg-white py-10 px-10'>
        <Image alt='img' width={400} height={400} src='/assets/images/icon1.svg'/>
          <h3 className='text-2xl mb-4'>Enhancing Engagement</h3>
          <ul>
            <li>
              "Discover how UX design captivates users, keeping them immersed
              and invested in your product or service."
            </li>
            <li>
              "From intuitive interfaces to seamless interactions, explore how
              thoughtful design choices enhance user engagement."
            </li>
          </ul>
        </div>
        <div className='w-1/4 rounded-xl shadow-lg bg-white py-10 px-10'>
          <Image alt='img' width={400} height={400} src='/assets/images/icon2.svg'/>
          <h3 className='text-2xl mb-4'>Improving Reach</h3>
          <ul>
            <li>
              "Uncover the power of accessible design in extending your message and services to a broader audience."
            </li>
            <li>
              "Learn how inclusive design practices facilitate reaching users across diverse demographics and devices."
            </li>
          </ul>
        </div>
        <div className='w-1/4 rounded-xl shadow-lg bg-white py-10 px-10'>
        <Image alt='img' width={400} height={400} src='/assets/images/icon3.svg'/>
          <h3 className='text-2xl mb-4'>Boosting Brand Reputation</h3>
          <ul>
            <li>
              "Explore how prioritizing web accessibility reflects positively on your brand's commitment to inclusivity and user-centric values."
            </li>
            <li>
              "Discover the impact of accessibility initiatives on brand loyalty, trust, and perception in the eyes of users and stakeholders."
            </li>
          </ul>
        </div>
        </div>
      </section>
      </div>

      <section className='py-20 bg-primary-500 meet-instructors'>
        <h1 className='h2-bold mx-auto my-auto w-max'>Meet The Instructors</h1>
        {/* <div className='instructors-header h-80 w-screen border my-4'></div> */}
          <div className=''>
        <section
        id="events"
        className="w-full my-8 place-items-center grid grid-cols-4 gap-12 md:gap-12 py-10 px-20"
      >
        <div className="col-span-2 max-w-sm w-4/5 lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-full lg:rounded-t-none lg:rounded-l-3xl text-center overflow-hidden" style={{backgroundImage: "url('/assets/images/emily.jpg')"}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l shadow-lg lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">Emily Chang</div>
      <p className="text-gray-700 text-base">Emily is a seasoned accessibility advocate with over a decade of experience in web development and inclusive design. Her passion for making the digital world accessible to everyone has driven her to become a prominent figure in the accessibility community. She specializes in teaching best practices for creating websites and applications that are usable by people of all abilities.</p>
    </div>
  </div>
</div>
<div className="col-span-2 max-w-sm w-4/5 lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l-3xl text-center overflow-hidden" style={{backgroundImage: "url('/assets/images/marcus.jpg')"}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l shadow-lg lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">Marcus Rodriguez</div>
      <p className="text-gray-700 text-base">Marcus is a dynamic speaker and educator who believes in the power of accessible design to transform digital experiences. With a background in both software engineering and disability advocacy, he brings a unique perspective to his teaching. Marcus is known for his engaging workshops and practical insights into implementing accessibility standards in web development projects.</p>
    </div>
  </div>
</div>
<div className="lg:rounded-l-3xl col-start-2 col-span-2 max-w-sm w-4/5 lg:max-w-full lg:flex">
  <div className="shadow-md h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l-3xl text-center overflow-hidden" style={{backgroundImage: "url('/assets/images/aisha.jpg')"}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l shadow-lg  lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">Aisha Patel</div>
      <p className="text-gray-700 text-base">Aisha is a dedicated accessibility consultant with a talent for simplifying complex concepts. Drawing from her background in user experience research and assistive technology, she provides practical guidance for integrating accessibility principles into every stage of the design process. Aisha's approachable teaching style makes her a favorite among students.</p>
    </div>
  </div>
</div>
      </section>
          </div>
      </section>
    </>
  );
}
