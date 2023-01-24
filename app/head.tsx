type Props = { title: string };

export default function Head({ title }: Props) {
  return (
    <>
      <title>{title ? title + " - APIs Flamin Hot" : "APIs Flamin Hot"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="The hottest APIs in the world." />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
