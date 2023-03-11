import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Sarah Ahmed</Text>
        <Text className="text-zinc-600">
          I'm Sarah, a compassion-driven designer, writer, & friend.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Places I've Been, Things I've Done</Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">A Bit About Me</Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Chat with Moonmoon</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
