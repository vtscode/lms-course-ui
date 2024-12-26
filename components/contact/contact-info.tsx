export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Will you be in Los Angeles or any other branches any time soon? Stop by the office!
        </h2>
        <p className="text-muted-foreground">We&apos;d love to meet.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-orange-600 mb-2">ADDRESS</h3>
          <p className="text-muted-foreground">
            1702 Olympic Boulevard<br />
            Santa Monica, CA 90404
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-orange-600 mb-2">PHONE NUMBER</h3>
          <p className="text-muted-foreground">
            (480) 555-0103<br />
            (219) 555-0114
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-orange-600 mb-2">EMAIL ADDRESS</h3>
          <p className="text-muted-foreground">
            help.eduguard@gmail.com<br />
            career.eduguard@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

