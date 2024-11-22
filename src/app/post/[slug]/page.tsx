import { notFound } from 'next/navigation';

// default true
export const dynamicParams = true;

// [option 1. use generateStaticParams]
export function generateStaticParams() {
  return [{ slug: 'a' }];
}

// [option 2. use dynamic]
// export const dynamic = 'force-static';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: Props) {
  const slug = (await params).slug;
  const validParams = ['a', 'b'];
  if (!validParams.includes(slug)) {
    notFound();
  }
  return <div>post slug: {slug}</div>;
}
