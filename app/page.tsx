import Playground from '@/components/Playground';

export default function Home() {
  return (
    <main>
      <Playground
        code={`
<CldImage
  width="960"
  height="600"
  src="my-code-playground/galaxy"
  sizes="100vw"
  alt=""
/>
        `}
      />
    </main>
  )
}
