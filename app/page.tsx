/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3Nh5JmpC1Xw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <div className="bg-gray-50 py-6 lg:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              James Murphy and the Giant Fishing Expedition{" "}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The story of Atlantic Highlands, NJ -- a small town that faces big
              challenges when a losing mayoral candidate questions his
              constituents right to vote -- leading to a community-wide
              discussion about honesty, respect, and the importance of treating
              neighbors kindly. Join Jimmy as he learns an expensive lesson
              about wasting judicial resources, irrepreably harming his own
              reputation, and why most people in town will forever remember him
              to be a huge dick.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-b divide-y">
        <div className="container grid lg:grid-cols-2 py-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <Image
            alt="Cover"
            className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-contain object-center lg:order-last"
            height="800"
            src="/jimmycover.webp"
            width="600"
          />
          <div className="flex items-center justify-center p-6 lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                James Murphy and the Giant Fishing Expedition
              </h2>
              <p className="text-2xl font-bold tracking-tighter">By ChatGPT</p>
              <p className="text-2xl font-bold tracking-tighter">
                Illustrated by DALL-E
              </p>
              <p className="text-2xl font-bold tracking-tighter">
                Published by Michael Edelman
              </p>
            </div>
          </div>
        </div>
        <div className="container grid lg:grid-cols-2 py-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex items-center justify-center p-6 lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About the Book
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                James Murphy and the Giant Fishing Expedition teaches kids about
                the importance of every vote and respecting differing
                viewpoints. The book is a delightful tale of friendship and
                discovery as citizens face the wrath of a sad, sad man, cleverly
                tackling complex themes like democracy and integrity in a way
                that is accessible to children and man-children alike. Each page
                is filled with wonder and excitement, making it a perfect read
                for young explorers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 lg:p-0">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Coming Soon!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reviews
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what other young readers and their parents are saying about
              the book.
            </p>
          </div>
          <div className="grid max-w-[700px] mx-auto gap-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">
                A Heartwarming Lesson in Democracy
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;This book brilliantly introduces children to the values of
                community and fairness. The characters are relatable, and the
                story is engaging. A must-read for young citizens!&quot; - Jane
                Doe, Educator
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Vivid and Impactful</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;The illustrations are stunning, and the story is both
                educational and entertaining. It teaches kids about the
                importance of every vote and respecting differing
                viewpoints.&quot; - John Smith, Parent Blogger
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">
                Engaging and Thought-Provoking
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;This book cleverly tackles complex themes like democracy
                and integrity in a way that&apos;s accessible to children. A
                great conversation starter for families! &quot; - Emily Johnson,
                Children&apos;s Book Reviewer
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">A Timely Tale of Tolerance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;In an age of division, this book offers a refreshing
                perspective on community and acceptance. It&apos;s a gentle
                reminder of the power of kindness and truth &quot; - David Lee,
                Librarian
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Charming and Enlightening</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &quot;Captures the essence of a small town&apos;s spirit and the
                importance of honest elections. It&apos;s a wonderful tool for
                teaching kids about civic responsibility.&quot; - Sarah Brown,
                Elementary School Teacher
              </p>
            </div>
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
