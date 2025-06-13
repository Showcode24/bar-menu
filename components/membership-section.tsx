import CardBase from "./card-base";
import { memberships } from "../lib/membership-data";

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">Membership Plans</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memberships.map((plan, index) => (
            <CardBase key={plan.id} item={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
