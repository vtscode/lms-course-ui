export default function CourseDetail({ params }: { params: { slug: string } }) {
  return <>Title: {decodeURIComponent(params.slug).replace(/-/g, ' ')}</>
}
