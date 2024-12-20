import { SiteHeader } from "@/components/site-header"
import { SidebarFilters } from "@/components/search/sidebar-filters"
import { SearchResults } from "@/components/search/search-results"
import { SiteFooter } from "@/components/site-footer"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex gap-8">
            <SidebarFilters />
            <SearchResults initialQuery={searchParams.q} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

