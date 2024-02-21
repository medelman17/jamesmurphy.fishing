import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/content";
import heropic from "@/public/jimmycover.webp";

export interface ReviewItemProps {
  title: string;
  body: string;
  author: string;
}

function ReviewItem({ title, body, author }: ReviewItemProps) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &quot;{body}&quot; - {author}
      </p>
    </div>
  );
}

export interface ReferenceItemProps {
  title: string;
  url: string;
}

function ReferenceItem({ title, url }: ReferenceItemProps) {
  return (
    <li className="py-2">
      <Link
        href={url}
        className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
      >
        ✅ {title}
      </Link>
    </li>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="bg-gray-50 py-6 lg:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="mx-auto max-w-[800px] text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {content.hero.body}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-b divide-y">
        <div className="container grid lg:grid-cols-2 py-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <Image
            alt={content.hero.image.alt}
            className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-contain object-center lg:order-last"
            // height="800"
            src={heropic}
            // width="600"
            loading="eager"
            placeholder="blur"
            priority={true}
          />
          <div className="flex items-center justify-center lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {content.hero.title}
              </h2>
              <p className="text-2xl font-bold tracking-tighter">
                By {content.credits.author}
              </p>
              <p className="text-2xl font-bold tracking-tighter">
                Illustrated by {content.credits.illustrator}
              </p>
              <p className="text-2xl font-bold tracking-tighter">
                Published by {content.credits.publisher}
              </p>
            </div>
          </div>
        </div>
        <div className="container grid lg:grid-cols-2 py-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex items-center justify-center p-6 lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {content.about.title}
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {content.about.body}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Based on a True Story!
              </h2>
              <ul>
                {content.about.references.map((reference, i) => (
                  <ReferenceItem key={i} {...reference} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {content.testimonials.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {content.testimonials.body}
            </p>
          </div>
          <div className="grid max-w-[700px] mx-auto gap-4">
            {content.testimonials.reviews.map((review, i) => (
              <ReviewItem key={i} {...review} />
            ))}
          </div>
        </div>
      </section>
      <div className="py-6 lg:py-12">
        {/* <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact the Author
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question for the author? Want to share your own adventure?
              Fill out the form below to get in touch.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm" htmlFor="first-name">
                  First name
                </Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm" htmlFor="last-name">
                  Last name
                </Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="message">
                Message
              </Label>
              <Textarea
                className="min-h-[150px] resize-y"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
