import { CategoryPage, categoryMetadata } from "@/components/site/CategoryPage";

export const metadata = categoryMetadata("paket-tour-group");

export default function Page() {
  return <CategoryPage slug="paket-tour-group" />;
}
