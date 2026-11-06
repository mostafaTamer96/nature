import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Flame, Mountain, Search, Tent, Users, Bike } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EventsSection } from "./events-section";

const features = [
  { icon: Compass, title: "Guided Trips", text: "Certified local guides lead every hike, ride and climb so you can focus on the view." },
  { icon: Tent, title: "Weekend Camps", text: "Multi-day camps with gear, meals and campfire nights, all planned for you." },
  { icon: Users, title: "Community Crews", text: "Meet people who share your pace and interests, from first-timers to seasoned hikers." },
];

const testimonials = [
  { quote: "I went from never camping to leading my own weekend crew. The guides made it feel safe and fun.", name: "Maya R.", role: "Weekend camper" },
  { quote: "Every ride is well organized, with clear routes and a friendly group. Great value for the price.", name: "Daniel K.", role: "Gravel cyclist" },
  { quote: "The bouldering meetup was the perfect first climb. I found my regular climbing partners there.", name: "Sofia L.", role: "Climbing beginner" },
];

type SearchParams = Promise<{ category?: string }>;

async function Events({ searchParams }: { searchParams: SearchParams }) {
  const { category } = await searchParams;
  return <EventsSection category={category} />;
}

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1b3a5f] via-[#0d1b39] to-[#0d1b39] opacity-95" />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <Link href="/" className="text-2xl font-bold tracking-tight">Ridgeline</Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#events" className="opacity-80 hover:opacity-100">Events</Link>
            <Link href="#why" className="opacity-80 hover:opacity-100">Why Us</Link>
            <Link href="#stories" className="opacity-80 hover:opacity-100">Stories</Link>
            <Link href="#contact" className="opacity-80 hover:opacity-100">Contact</Link>
          </nav>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Join the community</Button>
        </header>

        <div className="mx-auto max-w-4xl px-6 pb-40 pt-20 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Get outside more,<br />with people who love it  num2
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Discover guided hikes, weekend camps, rides and climbing meetups happening near you, all in one place.
          </p>
          <form className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-white/60 bg-white/15 p-2 pl-5 backdrop-blur-sm">
            <Search className="size-5 shrink-0 text-white/80" />
            <input
              type="text"
              placeholder="Search events or trails"
              aria-label="Search events or trails"
              className="min-w-0 flex-1 bg-transparent text-white placeholder:text-white/70 focus:outline-none"
            />
            <Button type="submit" className="rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Ridgeline</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-primary">Why choosing us</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                <Link href="#events" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                  More info <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[600px] bg-secondary" />}>
        <Events searchParams={searchParams} />
      </Suspense>

      {/* Experience band */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="relative h-[460px] rounded-3xl bg-gradient-to-br from-[#2c4a3e] to-[#0d1b39]" role="img" aria-label="Photo placeholder: group on a mountain trail">
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-2xl bg-accent-soft md:block" />
          <Mountain className="absolute left-8 top-8 size-10 text-white/40" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Experiences</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-primary">Built for every kind of outdoor lover</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you want a calm forest walk or a full-day summit, our events are planned by experienced organizers to keep you safe, comfortable and connected.
          </p>
          <ul className="mt-8 space-y-4">
            {["Vetted local guides and certified instructors", "Gear rentals and transport options", "Clear routes, schedules and safety briefings"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary">
                <Flame className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-10 bg-primary">Explore all events</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Stories</p>
            <h2 className="mt-3 text-4xl font-bold text-primary">What our community says</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-0 shadow-none">
                <CardHeader>
                  <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <CardTitle className="text-base font-normal leading-relaxed text-primary">“{t.quote}”</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full bg-gradient-to-br from-accent to-[#f6973f]" />
                    <div>
                      <p className="font-semibold text-primary">{t.name}</p>
                      <CardDescription>{t.role}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-16 text-center text-white">
          <Bike className="size-10 text-accent" />
          <h2 className="max-w-2xl text-4xl font-bold leading-tight">Ready for your next outdoor adventure?</h2>
          <p className="max-w-xl text-white/80">Create a free account and get early access to new events, group rides and trail meetups.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Create free account</Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-primary">Ridgeline</p>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Ridgeline connects outdoor lovers with guided events, camps and community meetups.
            </p>
          </div>
          <div>
            <p className="font-medium text-accent">Events</p>
            <ul className="mt-4 space-y-3 text-sm text-primary/80">
              <li>Hiking</li><li>Camping</li><li>Cycling</li><li>Climbing</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-accent">Follow us</p>
            <ul className="mt-4 space-y-3 text-sm text-primary/80">
              <li>Instagram</li><li>Facebook</li><li>Strava</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row">
            <p>Copyright © 2026 Ridgeline Outdoors</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary">Terms & Conditions</Link>
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
