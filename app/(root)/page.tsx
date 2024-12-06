import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>
}) {

  const query = (await searchParams).query
  const posts = [{
    _id:1,
    _createdAt: new Date(),
    views: '55',
    author: { _id: 1, name:"Adithya" },
    description: "This is a description",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRobot&psig=AOvVaw3T8aSullMer4_CShPO6UiI&ust=1733552655895000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi_gITBkooDFQAAAAAdAAAAABAE",
    category: "Robots",
    title: "We robots"
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> Connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on pitches and get noticed in virtual competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
         {
          posts.length > 0 ? (
            posts.map((post,index) => {
              return <StartUpCard key={post?._id} post={post}/>
            })
          ):(
            <p>No posts found!</p>
          )
         }
        </ul>

      </section>
    </>
  );
}
