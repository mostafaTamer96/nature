import Link from "next/link";
import { CalendarDays, MapPin, Plus, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = ["All", "Hiking", "Camping", "Cycling", "Climbing"] as const;
type Category = (typeof categories)[number];

const events = [
  { title: "Sunrise Ridge Hike", category: "Hiking", date: "Sat, Nov 14", location: "Cloud Peak Trail", spots: 12, price: 25, tag: "Guided" },
  { title: "Lakeside Weekend Camp", category: "Camping", date: "Fri, Nov 20", location: "Blue Pine Lake", spots: 8, price: 89, tag: "2 nights" },
  { title: "Gravel Valley Ride", category: "Cycling", date: "Sun, Nov 22", location: "Ember Valley", spots: 20, price: 15, tag: "All levels" },
  { title: "Beginner Bouldering Meetup", category: "Climbing", date: "Wed, Nov 25", location: "Stone Gate Crag", spots: 6, price: 30, tag: "Beginners" },
] as const;

function isCategory(value: string | undefined): value is Category {
  return (categories as readonly string[]).includes(value ?? "");
}

export function EventsSection({ category }: { category?: string }) {
  const active: Category = isCategory(category) ? category : "All";
  const visible = active === "All" ? events : events.filter((e) => e.category === active);

  return (
    <section id="events" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Upcoming events</p>
          <h2 className="mt-3 text-4xl font-bold text-primary">Find your next adventure</h2>
        </div>

        <nav aria-label="Filter events by category" className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1 rounded-full bg-muted p-1.5">
          {categories.map((c) => (
            <Link
              key={c}
              href={c === "All" ? "/#events" : `/?category=${c}#events`}
              scroll={false}
              aria-current={active === c ? "true" : undefined}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                active === c ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
              )}
            >
              {c}
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((event) => (
            <Card key={event.title} className="overflow-hidden border-0 shadow-none transition-shadow hover:shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-primary/80 to-primary" role="img" aria-label={`${event.title} photo placeholder`}>
                <Badge variant="secondary" className="absolute left-4 top-4 bg-white text-primary">
                  {event.tag}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-primary">{event.title}</CardTitle>
                <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><CalendarDays className="size-4" />{event.date}</span>
                  <span className="flex items-center gap-2"><MapPin className="size-4" />{event.location}</span>
                  <span className="flex items-center gap-2"><Users className="size-4" />{event.spots} spots left</span>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <p className="text-2xl font-bold text-primary">
                  ${event.price}
                  <span className="text-sm font-normal text-muted-foreground"> / person</span>
                </p>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="link" className="h-auto p-0 text-accent">Details</Button>
                <Button size="icon" className="rounded-full bg-primary" aria-label={`Join ${event.title}`}>
                  <Plus />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-base text-accent">View all events</Button>
        </div>
      </div>
    </section>
  );
}
