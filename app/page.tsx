import Playground from '@/components/Playground';

export default function Home() {
  return (
    <main>
      <Playground
        code={`

// Available Images:
// - my-code-playground/galaxy
// - my-code-playground/turtle
// - my-code-playground/mario

// Try some transformations:
// https://next.cloudinary.dev/cldimage/examples

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
