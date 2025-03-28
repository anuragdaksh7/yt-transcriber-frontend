import Code from "./Code";

export default async function Page({
  params,
}: {
  params: Promise<{ provider: string }>
}) {
  const { provider } = await params
  return <div>My Post: {provider}
  <Code /></div>
}