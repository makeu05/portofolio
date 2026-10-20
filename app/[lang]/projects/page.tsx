import { redirect } from "next/navigation";

export default async function ProjectsIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}#projects`);
}
