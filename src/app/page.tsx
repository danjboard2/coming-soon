import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <Image className="max-w-full max-h-full object-contain" src="/media/images/coming-soon.jpg" width={1920} height={1080} title="Coming soon" alt="Coming soon"/>
    </main>
  );
}
