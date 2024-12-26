import Image from "next/image"

const branches = [
  {
    city: "Los Angeles, California",
    address: "1702 Olympic Boulevard",
    location: "Santa Monica, CA 90404",
    image: "/placeholder.svg"
  },
  {
    city: "Tokyo, Japan",
    address: "1901 N Hill St, Suite 102",
    location: "Tokyo, YK 223YA, Japan",
    image: "/placeholder.svg"
  },
  {
    city: "Moscow, Russia",
    address: "Arbatskaya 4704, 1213 No",
    location: "Moscow, Russia",
    image: "/placeholder.svg"
  },
  {
    city: "Mumbai, India",
    address: "36 East 20th St, 6th Floor",
    location: "Mumbai, India",
    image: "/placeholder.svg"
  }
]

export function BranchLocations() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {branches.map((branch, index) => (
        <div key={index} className="relative group">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={branch.image}
              alt={branch.city}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
              <h3 className="font-bold mb-1">{branch.city}</h3>
              <p className="text-sm opacity-90">{branch.address}</p>
              <p className="text-sm opacity-90">{branch.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

