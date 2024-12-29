interface JobContactProps {
  contact: {
    address: {
      street: string
      city: string
    }
    contact: {
      email: string
      phone: string
    }
  }
}

export function JobContact({ contact }: JobContactProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 py-8 border-b">
      <div>
        <h2 className="text-sm font-medium text-[#ff5722] mb-2">ADDRESS</h2>
        <p className="text-muted-foreground">
          {contact.address.street}<br />
          {contact.address.city}
        </p>
      </div>
      <div>
        <h2 className="text-sm font-medium text-[#ff5722] mb-2">CONTACT</h2>
        <p className="text-muted-foreground">
          {contact.contact.email}<br />
          {contact.contact.phone}
        </p>
      </div>
    </div>
  )
}

