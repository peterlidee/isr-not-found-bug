export async function getStaticPaths() {
  const paths = [{ params: { slug: 'a' } }];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  if (!['a', 'b'].includes(params.slug)) {
    return {
      notFound: true,
    };
  }
  return {
    props: { slug: params.slug },
  };
}

export default function Post2Page({ slug }: { slug: string }) {
  return <div>post slug: {slug}</div>;
}
